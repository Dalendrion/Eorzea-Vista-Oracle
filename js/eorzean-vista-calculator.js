/**
 * Returns an array of weather window start times (in unix seconds).
 * @param {number} unixSeconds - The current time in unix seconds.
 * @param {number} numberOfWindows - The number of weather windows to return.
 * @returns {number[]} Array of window start times.
 */
function getWeatherWindowStarts(unixSeconds, numberOfWindows) {
    let starts = [];
    let start = getWeatherWindowStart(unixSeconds);
    for (let i = 0; i < numberOfWindows; i++) {
        starts.push(start);
        start = getNextWeatherWindowStart(start);
    }
    return starts;
}

const SECONDS_PER_EORZEAN_HOUR = 175; // 175 real-world seconds = 1 Eorzean hour
const EORZEAN_HOURS_PER_WEATHER_WINDOW = 8; // Weather changes every 8 Eorzean hours
const SECONDS_PER_WEATHER_WINDOW = SECONDS_PER_EORZEAN_HOUR * EORZEAN_HOURS_PER_WEATHER_WINDOW; // 8 Eorzean hours = 1 weather window
const SECONDS_PER_EORZEAN_DAY = SECONDS_PER_EORZEAN_HOUR * 24; // 24 Eorzean hours = 1 Eorzean day

function padZero(num) {
    return (num < 10 ? "0" : "") + num;
}

function formatDate(unixSeconds, pattern) {
    var d = new Date(unixSeconds * 1000);
    
    var monthNames = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    var monthShortNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"
    ];
    var monthName = monthNames[d.getMonth()];
    var monthShortName = monthShortNames[d.getMonth()];
    var month = d.getMonth() + 1;
    
    var replacements = {
        YYYY: d.getFullYear(),
        MM: padZero(month),
        MMM: monthShortName,
        MMMM: monthName,
        DD: padZero(d.getDate()),
        HH: padZero(d.getHours()),
        mm: padZero(d.getMinutes()),
        ss: padZero(d.getSeconds())
    };

    for (var key in replacements) {
        pattern = pattern.replace(key, replacements[key]);
    }

    return pattern;
}

function formatLocalTime(unixSeconds) {
    return formatDate(unixSeconds, "HH:mm");
}

function formatEorzeanTime(unixSeconds) {
    // Seconds into the current Eorzean day
    var secondsInEorzeanDay = unixSeconds % SECONDS_PER_EORZEAN_DAY;

    // Compute Eorzean hour and minute
    var eorzeanHours = Math.floor(secondsInEorzeanDay / SECONDS_PER_EORZEAN_HOUR);
    var eorzeanMinutes = Math.floor(((secondsInEorzeanDay % SECONDS_PER_EORZEAN_HOUR) / SECONDS_PER_EORZEAN_HOUR) * 60);

    return padZero(eorzeanHours) + ":" + padZero(eorzeanMinutes);
}

function forecastTarget(table, unixSeconds) {
    // Canonical FFXIV weather calculation algorithm (matches C# logic)
    var chanceSum = 0;
    for (var i = 0; i < table.length; i++) {
        chanceSum += table[i].chance;
    }
    var windowStart = getWeatherWindowStart(unixSeconds);
    var bell = Math.floor(windowStart / SECONDS_PER_EORZEAN_HOUR);
    var increment = (bell + 8 - (bell % 8)) % 24;
    var totalDays = Math.floor(windowStart / SECONDS_PER_EORZEAN_DAY);
    var calcBase = (totalDays * 100) + increment;
    var step1 = ((calcBase << 11) ^ calcBase) >>> 0;
    var step2 = ((step1 >>> 8) ^ step1) >>> 0;
    return step2 % chanceSum;
}

function getWeather(areaName, unixSeconds) {
    var table = weatherTables[areaName];
    var forecast = forecastTarget(table, unixSeconds);
    if (!table) {
        return "Unknown zone";
    }
    for (var i = 0; i < table.length; i++) {
        if (forecast < table[i].threshold) {
            return table[i].name;
        }
    }
    return "???";
}

function getWeatherWindowStart(unixSeconds) {
    return unixSeconds - (unixSeconds % SECONDS_PER_WEATHER_WINDOW);
}

function getNextWeatherWindowStart(unixSeconds) {
    return getWeatherWindowStart(unixSeconds) + SECONDS_PER_WEATHER_WINDOW;
}

/**
 * Calculates the weather forecast for an areas at a given time.
 * 
 * The result looks like this:
 * ```
 * forecast: {
 *     weather: "Clear Skies",
 *     image: "img/weather/Clear_Skies_icon.png",
 * }
 * ```
 * @param areaName Area name, e.g. "Limsa Lominsa" or "Gridania"
 * @param unixSeconds Time in unix seconds
 * @returns the weather forecast for the specified area and time
 */
function getWeatherForecast(areaName, unixSeconds) {
    var windowStart = getWeatherWindowStart(unixSeconds);
    var weather = getWeather(areaName, windowStart);
    // Remove HTML entities (like &shy;) for image path
    var weatherForImage = weather.replace(/&[^;]+;/g, "");
    return {
        weather: weather,
        image: "img/weather/" + weatherForImage.replace(/ /g, "_") + "_icon.png"
    };
}

/**
 * Get all zones in the given regions.
 * @param {string} region - The name of a region (e.g., Region.COERTHAS or Region.DRAVANIA).
 * @returns {object[]} List of matching Zone objects.
 */
function getZonesByRegion(region) {
    return Object.values(Zone).filter(zone => region === zone.region);
}

/**
 * Get all zones introduced in the given expansions.
 * @param {string[]} expansions - List of expansion constants (e.g., [Expansion.HEAVENSWARD, Expansion.STORMBLOOD]).
 * @returns {object[]} List of matching Zone objects.
 */
function getZonesByExpansions(expansions) {
    return Object.values(Zone).filter(zone => expansions.includes(zone.expansion));
}

window.getWeatherForecast = getWeatherForecast
window.getZonesByRegion = getZonesByRegion