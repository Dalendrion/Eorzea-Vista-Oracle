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
const HOURS_PER_DAY = 24;
const SECONDS_PER_EORZEAN_DAY = SECONDS_PER_EORZEAN_HOUR * HOURS_PER_DAY; // 24 Eorzean hours = 1 Eorzean day

function padZero(num) {
    return (num < 10 ? "0" : "") + num;
}

function formatDate(unixSeconds, pattern) {
    const d = new Date(unixSeconds * 1000);
    
    const monthNames = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    const monthShortNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"
    ];
    const monthName = monthNames[d.getMonth()];
    const monthShortName = monthShortNames[d.getMonth()];
    const month = d.getMonth() + 1;
    
    const replacements = {
        YYYY: d.getFullYear(),
        MM: padZero(month),
        MMM: monthShortName,
        MMMM: monthName,
        dd: padZero(d.getDate()),
        HH: padZero(d.getHours()),
        mm: padZero(d.getMinutes()),
        ss: padZero(d.getSeconds())
    };

    for (let key in replacements) {
        pattern = pattern.replace(key, replacements[key]);
    }

    return pattern;
}

function formatLocalTime(unixSeconds) {
    return formatDate(unixSeconds, "HH:mm");
}

function formatEorzeanTime(unixSeconds) {
    // Seconds into the current Eorzean day
    const secondsInEorzeanDay = unixSeconds % SECONDS_PER_EORZEAN_DAY;

    // Compute Eorzean hour and minute
    const eorzeanHours = Math.floor(secondsInEorzeanDay / SECONDS_PER_EORZEAN_HOUR);
    const eorzeanMinutes = Math.floor(((secondsInEorzeanDay % SECONDS_PER_EORZEAN_HOUR) / SECONDS_PER_EORZEAN_HOUR) * 60);

    return padZero(eorzeanHours) + ":" + padZero(eorzeanMinutes);
}

function forecastTarget(table, unixSeconds) {
    // Canonical FFXIV weather calculation algorithm (matches C# logic)
    let chanceSum = 0;
    for (let i = 0; i < table.length; i++) {
        chanceSum += table[i].chance;
    }
    const windowStart = getWeatherWindowStart(unixSeconds);
    const bell = Math.floor(windowStart / SECONDS_PER_EORZEAN_HOUR);
    const increment = (bell + 8 - (bell % 8)) % HOURS_PER_DAY;
    const totalDays = Math.floor(windowStart / SECONDS_PER_EORZEAN_DAY);
    const calcBase = (totalDays * 100) + increment;
    const step1 = ((calcBase << 11) ^ calcBase) >>> 0;
    const step2 = ((step1 >>> 8) ^ step1) >>> 0;
    return step2 % chanceSum;
}

function getWeather(areaName, unixSeconds) {
    const table = weatherTables[areaName];
    const forecast = forecastTarget(table, unixSeconds);
    if (!table) {
        return "Unknown zone";
    }
    for (let i = 0; i < table.length; i++) {
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

function getEorzeanHourStart(unixSeconds) {
    return unixSeconds - (unixSeconds % SECONDS_PER_EORZEAN_HOUR);
}

function getNextEorzeanHourStart(unixSeconds) {
    return getEorzeanHourStart(unixSeconds) + SECONDS_PER_EORZEAN_HOUR;
}

function getWeatherObject(weather) {
    // Remove HTML entities (like &shy;) for image path
    const weatherForImage = weather.replace(/&[^;]+;/g, "");
    return {
        name: weather,
        icon: `img/weather/${weatherForImage.replace(/ /g, "_")}_icon.png`
    };
}

/**
 * Calculates the weather forecast for an areas at a given time.
 * 
 * The result looks like this:
 * ```
 * forecast: {
 *     weather: "Clear Skies",
 *     icon: "img/weather/Clear_Skies_icon.png",
 * }
 * ```
 * @param areaName Area name, e.g. "Limsa Lominsa" or "Gridania"
 * @param unixSeconds Time in unix seconds
 * @returns the weather forecast for the specified area and time
 */
function getWeatherForecast(areaName, unixSeconds) {
    const windowStart = getWeatherWindowStart(unixSeconds);
    const weather = getWeather(areaName, windowStart);
    return getWeatherObject(weather);
}

function getEmoteObject(emoteName) {
    return {
        name: emoteName,
        icon: `img/emotes/${emoteName}.png`
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

function getEorzeanHour(unixSeconds) {
    return Math.floor((unixSeconds % SECONDS_PER_EORZEAN_DAY) / SECONDS_PER_EORZEAN_HOUR);
}

function isVistaTimeConditionMet(unixSeconds, vista) {
    let eorzeanHour = getEorzeanHour(unixSeconds);
    let start = vista.time.from;
    let end = vista.time.until;
    
    if (end < start) {
        end += HOURS_PER_DAY;
    }
    if (eorzeanHour < start) {
        eorzeanHour += HOURS_PER_DAY;
    }

    return eorzeanHour >= start && eorzeanHour < end;
}

function isVistaWeatherConditionMet(unixSeconds, vista) {
    const forecast = getWeatherForecast(vista.zone.name, unixSeconds);
    return vista.weather.includes(forecast.name);
}

/**
 * Builds chart-ready data from Vista definitions and weather tables for a given time range.
 * Adjacent windows are merged.
 * 
 * @param {object[]} vistas - Array of Vista objects.
 * @param {number} startUnixSeconds - Start of the time range to calculate data for.
 * @param {number} endUnixSeconds - End of the time range to calculate data for.
 * @returns {VistaGraphData[]} Chart.js compatible datasets object.
 */
function buildVistaGraphDataForRange(vistas, startUnixSeconds, endUnixSeconds) {
    // If start/end are not provided, default to a sensible current range
    if (startUnixSeconds === undefined || endUnixSeconds === undefined) {
        const baseStart = Math.floor(Date.now() / 1000 / SECONDS_PER_WEATHER_WINDOW) * SECONDS_PER_WEATHER_WINDOW;
        startUnixSeconds = baseStart;
        endUnixSeconds = baseStart + 9 * SECONDS_PER_WEATHER_WINDOW;
    }

    const data = [];

    vistas.forEach(vista => {
        const mergedWindows = [];

        let windowStart = getEorzeanHourStart(startUnixSeconds);
        while (windowStart < endUnixSeconds) {
            const windowEnd = getNextEorzeanHourStart(windowStart);
            const windowStartDate = new Date(windowStart * 1000);
            const windowEndDate = new Date(windowEnd * 1000);

            if (isVistaTimeConditionMet(windowStart, vista) && isVistaWeatherConditionMet(windowStart, vista)) {
                // Create a timeslot for this Vista
                const lastMerged = mergedWindows[mergedWindows.length - 1];
                if (lastMerged && lastMerged.x[1].getTime() === windowStartDate.getTime()) {
                    // Merge with previous block if consecutive
                    lastMerged.x[1] = windowEndDate;
                } else {
                    // New timeslot
                    mergedWindows.push(new VistaGraphData(vista, windowStartDate, windowEndDate));
                }
            }

            windowStart = windowEnd;
        }

        data.push(...mergedWindows);
    });

    return data;
}

/**
 * Convenience wrapper that builds graph data for the default/current chart range.
 * Keeps callers simple: buildVistaGraphData(Vista) will use a 10-window default range.
 */
function buildVistaGraphData(vistas) {
    const baseStart = Math.floor(Date.now() / 1000 / SECONDS_PER_WEATHER_WINDOW) * SECONDS_PER_WEATHER_WINDOW;
    return buildVistaGraphDataForRange(vistas, baseStart, baseStart + 9 * SECONDS_PER_WEATHER_WINDOW);
}

/**
 * Chart.js compatible dataset
 */
class VistaGraphData {
    constructor(vista, localTimeStart, localTimeEnd) {
        this.number = vista.number;
        this.eorzeaTime = [
            padZero(vista.time.from) + ":00",
            padZero(vista.time.until) + ":00"
        ];
        this.x = [localTimeStart, localTimeEnd ];
        this.y = `${vista.name}: #${vista.number}`;
        this.weather = vista.weather.map(w => getWeatherObject(w))
        this.emote = getEmoteObject(vista.emote),
        this.zone = vista.zone,
        this.location = vista.coordinates
    }
}

window.getWeatherForecast = getWeatherForecast
window.getZonesByRegion = getZonesByRegion
window.buildVistaGraphDataForRange = buildVistaGraphDataForRange
window.buildVistaGraphData = buildVistaGraphData