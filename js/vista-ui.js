// Extracted Alpine.js UI logic for the main app and vistaChart component.
(function () {
    function mainApp() {
        return {
            localTime: formatLocalTime(Date.now()),
            eorzeaTime: formatEorzeanTime(Date.now()),
            windowStarts: getWeatherWindowStarts(Date.now() / 1000, 10),

            updateTimes() {
                const now = Date.now() / 1000;
                this.localTime = formatLocalTime(now);
                this.eorzeaTime = formatEorzeanTime(now);
                this.windowStarts = getWeatherWindowStarts(now, 10);
            },

            SECONDS_PER_WEATHER_WINDOW: SECONDS_PER_WEATHER_WINDOW,
            windowShifts: 0,

            shiftWindow(delta) {
                this.windowShifts += delta;
                // Keep chart state in sync directly (avoid CustomEvent).
                window.currentWindowShifts = this.windowShifts;
                window.rebuildChart();
            },

            resetShiftWindow() {
                this.windowShifts = 0;
                window.currentWindowShifts = this.windowShifts;
                window.rebuildChart();
            },

            regions: Object.values(window.Region),
            selectedRegions: [],

            scrollToSlot(vistaIndex, direction) {
                const row = document.querySelector(`#vista-${vistaIndex}`);

                if (!row) return;

                const targetSlot = row.querySelector(`#vista-${vistaIndex}-slot-${direction > 0 ? 5 : 0}`);

                if (targetSlot) {
                    targetSlot.scrollIntoView({ behavior: 'smooth', inline: 'center' });
                }
            },

            isVistaAvailable(vista, slot) {
                return true;
            },

            hideCompletedVistas: false,
            chartTimer: null,

            init() {
                setInterval(() => {
                    this.updateTimes();
                }, 1000);

                this.$nextTick(() => {
                    this.chartTimer = setInterval(() => {
                        const now = Date.now() / 1000;

                        if (window.myChart) {
                            window.myChart.update('none');
                        }
                    }, 1000);
                });
            },

            destroy() {
                if (this.chartTimer) clearInterval(this.chartTimer);
            }
        };
    }

    // Expose factory globally so index.html can reference x-data="mainApp()".
    window.mainApp = mainApp;

    // Register Alpine store and vistaChart component on alpine:init.
    document.addEventListener('alpine:init', () => {
        Alpine.store('chartTooltip', {
            show: false,
            x: 0,
            y: 0,
            data: []
        });

        Alpine.data('vistaChart', () => ({
            hideCompleted: localStorage.getItem('hideCompleted') === 'true',

            init() {
                // Watch hideCompleted toggle.
                this.$watch('hideCompleted', val => {
                    localStorage.setItem('hideCompleted', val);

                    const filtered = val ? Vista.filter(v => !v.completed) : Vista;

                    const vistaData = buildVistaGraphDataForRange(filtered, startUnixSeconds, endUnixSeconds);

                    if (
                        window.myChart &&
                        window.myChart.data &&
                        window.myChart.data.datasets &&
                        window.myChart.data.datasets[0]
                    ) {
                        window.myChart.data.datasets[0].data = vistaData;
                        window.myChart.options.scales.y.max = filtered.length;
                        window.myChart.update();
                    }

                    // Plugin afterLayout will automatically rebuild checkboxes.
                });
            }
        }));
    });
})();

(function () {
    // Chart range calculation helper - base start aligned to weather window.
    function getBaseChartStart() {
        return Math.floor(new Date().getTime() / 1000 / SECONDS_PER_WEATHER_WINDOW) * SECONDS_PER_WEATHER_WINDOW;
    }

    function getChartRange(windowShifts = 0) {
        const start = getBaseChartStart() + windowShifts * SECONDS_PER_WEATHER_WINDOW;
        const end = start + 9 * SECONDS_PER_WEATHER_WINDOW;

        return { start, end };
    }

    // Initial start/end.
    window.currentWindowShifts = window.currentWindowShifts || 0;
    let currentWindowShifts = window.currentWindowShifts;
    let { startUnixSeconds, endUnixSeconds } = (function () {
        const r = getChartRange(currentWindowShifts);

        return { startUnixSeconds: r.start, endUnixSeconds: r.end };
    })();

    // Restore completed statuses for vistas from localStorage.
    (function restoreCompleted() {
        const savedCompleted = localStorage.getItem('vistaCompleted');

        if (savedCompleted) {
            try {
                const completedArray = JSON.parse(savedCompleted);

                completedArray.forEach((status, i) => {
                    if (Vista[i]) {
                        Vista[i].completed = status;
                    }
                });
            } catch (e) {
                // Ignore malformed data.
            }
        }
    })();

    // Initial data set for the chart.
    const initialHideCompleted = localStorage.getItem('hideCompleted') === 'true';
    const vistasForGraph = initialHideCompleted ? Vista.filter(v => !v.completed) : Vista;
    const vistaData = buildVistaGraphDataForRange(vistasForGraph, startUnixSeconds, endUnixSeconds);

    // Data container used by Chart.js.
    const data = {
        labels: vistasForGraph.map(v => `${v.name}: #${v.number}`),
        datasets: [
            {
                label: 'Vistas',
                data: vistaData,
                backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(54, 162, 235, 1)'],
                borderWidth: 1,
                borderSkipped: false,
                borderRadius: 100,
                barPercentage: 0.5,
                categoryPercentage: 0.8
            }
        ]
    };

    // vistaCheckbox plugin.
    const vistaCheckboxPlugin = {
        id: 'vistaCheckboxPlugin',

        beforeDraw(chart) {
            let overlay = document.getElementById('vistaCheckboxesOverlay');

            if (!overlay) {
                overlay = document.createElement('div');
                overlay.id = 'vistaCheckboxesOverlay';
                overlay.style.position = 'absolute';
                overlay.style.pointerEvents = 'none';
                chart.canvas.parentNode.style.position = 'relative';
                chart.canvas.parentNode.appendChild(overlay);
            }

            // Size & position overlay.
            const rect = chart.canvas.getBoundingClientRect();
            overlay.style.width = rect.width + 'px';
            overlay.style.height = rect.height + 'px';
            overlay.style.top = chart.canvas.offsetTop + 'px';
            overlay.style.left = chart.canvas.offsetLeft + 'px';
            overlay.innerHTML = ''; // Clear previous checkboxes.

            const labels = chart.data && chart.data.labels ? chart.data.labels : [];
            const filtered = chart.filteredVistas || Vista;
            const yScale = chart.scales && chart.scales.y;
            const leftPos = yScale && typeof yScale.right === 'number' ? yScale.right - 25 : chart.chartArea.right - 25;

            for (let i = 0; i < labels.length; i++) {
                const labelText = labels[i];
                const originalVista =
                    filtered.find(v => `${v.name}: #${v.number}` === labelText) ||
                    Vista.find(v => `${v.name}: #${v.number}` === labelText) ||
                    null;

                let y;

                try {
                    y = yScale.getPixelForValue(labelText);
                } catch (e) {
                    const tick = yScale.ticks && yScale.ticks[i];
                    y = tick ? yScale.getPixelForTick(i) : (chart.chartArea.top + chart.chartArea.bottom) / 2;
                }

                const wrapper = document.createElement('div');
                wrapper.className = 'form-check';
                wrapper.style.position = 'absolute';
                wrapper.style.pointerEvents = 'auto';
                wrapper.style.left = leftPos + 'px';
                wrapper.style.top = y - 12 + 'px';

                const checkbox = document.createElement('input');
                checkbox.className = 'form-check-input';
                checkbox.type = 'checkbox';
                const vistaNum = originalVista ? originalVista.number : `unknown-${i}`;
                checkbox.id = `vistaCheckbox-${vistaNum}`;
                checkbox.value = vistaNum;
                checkbox.checked = originalVista ? originalVista.completed : false;

                checkbox.addEventListener('change', () => {
                    if (originalVista) originalVista.completed = checkbox.checked;

                    localStorage.setItem('vistaCompleted', JSON.stringify(Vista.map(v => v.completed)));
                    const hideCompleted = document.getElementById('hideCompleted').checked;

                    if (hideCompleted) rebuildChart();
                });

                wrapper.appendChild(checkbox);
                overlay.appendChild(wrapper);
            }
        }
    };

    // current time marker plugin.
    const currentTimeMarker = {
        id: 'currentTimeMarker',
        afterDatasetsDraw(chart, args, options) {
            const {
                ctx,
                data,
                chartArea: { top, bottom, left, right },
                scales: { x, y }
            } = chart;

            const today = new Date();

            if (today < x.min || today > x.max) {
                return;
            }

            const xPos = x.getPixelForValue(today);

            if (xPos < left || xPos > right) {
                return;
            }

            ctx.save();
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'rgba(102, 102, 102, 1)';
            ctx.fillStyle = 'rgba(102, 102, 102, 1)';
            ctx.beginPath();
            ctx.moveTo(xPos, top);
            ctx.lineTo(xPos - 5, top - 8);
            ctx.lineTo(xPos + 5, top - 8);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
            ctx.restore();

            ctx.save();
            ctx.fillStyle = 'rgba(102, 102, 102, 1)';
            ctx.textAlign = 'center';
            ctx.font = '12px sans-serif';
            ctx.fillText('Now', xPos, bottom + 15);
            ctx.restore();

            ctx.save();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'rgba(102, 102, 102, 1)';
            ctx.beginPath();
            ctx.moveTo(xPos, top);
            ctx.lineTo(xPos, bottom);
            ctx.setLineDash([5, 5]);
            ctx.stroke();
            ctx.restore();
        }
    };

    // height adjust plugin (copied).
    const heightAdjustPlugin = {
        id: 'heightAdjustPlugin',
        afterLayout(chart, args, options) {
            if (!chart._needsHeightAdjust || chart._heightAdjusting) return;

            const chartContainer = chart.canvas && chart.canvas.parentNode;

            if (!chartContainer) {
                chart._needsHeightAdjust = false;

                return;
            }

            const labels = chart.data && chart.data.labels ? chart.data.labels : [];
            const count = Math.max(1, labels.length);
            const perVista = options && options.perVista ? options.perVista : 20;
            const minHeight = options && options.minHeight ? options.minHeight : 60;
            const maxHeight = options && options.maxHeight ? options.maxHeight : 1600;

            const areaHeight = chart && chart.chartArea && chart.chartArea.height ? chart.chartArea.height : null;

            if (!areaHeight || isNaN(areaHeight)) return;

            const overhead = Math.max(0, chartContainer.clientHeight - areaHeight);
            const desired = Math.round(perVista * count + overhead);
            const final = Math.max(minHeight, Math.min(maxHeight, desired));

            const current = parseInt((chartContainer.style.height || '').replace('px', '')) || chartContainer.clientHeight;

            if (Math.abs(current - final) > 1) {
                chart._heightAdjusting = true;
                chartContainer.style.height = final + 'px';

                try {
                    chart.resize();
                } catch (e) {
                    // ignore
                }

                chart._heightAdjusting = false;
            }

            chart._needsHeightAdjust = false;
        }
    };

    // Chart config.
    const config = {
        type: 'bar',
        data: data,
        options: {
            maintainAspectRatio: false,
            animation: true,
            layout: { padding: { left: 0, bottom: 20 } },
            indexAxis: 'y',
            scales: {
                x: {
                    type: 'time',
                    position: 'top',
                    min: new Date(startUnixSeconds * 1000),
                    max: new Date(endUnixSeconds * 1000),
                    time: { unit: 'second', tooltipFormat: 'HH:mm:ss' },
                    ticks: {
                        minRotation: 0,
                        maxRotation: 0,
                        callback: function (value) {
                            const seconds = value / 1000;

                            return [formatEorzeanTime(seconds) + ' ET', formatLocalTime(seconds) + ' LT'];
                        }
                    },
                    afterBuildTicks(scale) {
                        const ticks = [];
                        const startSec = Math.floor(scale.min / 1000);
                        const endSec = Math.ceil(scale.max / 1000);
                        const startAligned = Math.floor(startSec / SECONDS_PER_WEATHER_WINDOW) * SECONDS_PER_WEATHER_WINDOW;

                        for (let t = startAligned; t <= endSec; t += SECONDS_PER_WEATHER_WINDOW) {
                            ticks.push({ value: t * 1000, major: true });
                        }

                        scale.ticks = ticks;
                    },
                    grid: { color: 'rgba(200,200,200,1)', lineWidth: function (context) { return context.tick && context.tick.major ? 1.5 : 0.7; } }
                },
                y: { ticks: { padding: 25, autoSkip: false, minRotation: 0, maxRotation: 0 }, min: 0, max: Vista.length }
            },
            plugins: {
                title: { display: false },
                legend: { display: false },
                tooltip: { enabled: false, position: 'nearest', external: externalTooltipHandler },
                heightAdjustPlugin: { perVista: 20, minHeight: 60, maxHeight: 1600 }
            }
        },
        plugins: [currentTimeMarker, vistaCheckboxPlugin, heightAdjustPlugin]
    };

    // Render init block.
    const myChart = new Chart(document.getElementById('myChart'), config);
    window.myChart = myChart;
    myChart._needsHeightAdjust = true;

    // Tooltip helpers and external handler.
    function externalTooltipHandler(context) {
        const { chart, tooltip } = context;
        const tooltipStore = Alpine.store('chartTooltip');
        const tooltipEl = document.querySelector('.chart-tooltip');

        if (!tooltipEl) return;

        if (tooltip.opacity === 0) {
            tooltipStore.show = false;

            return;
        }

        tooltipEl.style.display = 'block';
        tooltipEl.style.left = '-9999px';
        tooltipEl.style.top = '-9999px';
        tooltipEl.style['max-width'] = '300px';
        tooltipEl.style.width = 'max-content';

        const windowRect = { x: window.scrollX, y: window.scrollY, width: window.innerWidth, height: window.innerHeight };
        const canvasRect = chart.canvas.getBoundingClientRect();
        const caretPos = { x: canvasRect.left + tooltip.caretX, y: canvasRect.top + tooltip.caretY };

        const tooltipRect = { x: caretPos.x - tooltipEl.offsetWidth / 2 + windowRect.x, y: caretPos.y + 10 + windowRect.y, width: tooltipEl.scrollWidth, height: tooltipEl.scrollHeight };
        const adjustedInnerRect = keepRectInsideBounds(flipToolTipToTop(caretPos, tooltipRect, windowRect, 15), windowRect, 15);

        tooltipEl.style.left = `${adjustedInnerRect.x}px`;
        tooltipEl.style.top = `${adjustedInnerRect.y}px`;

        tooltipStore.data = tooltip.dataPoints.map(dp => dp.raw);
        tooltipStore.show = true;
    }

    function flipToolTipToTop(caretPos, tooltipRect, bounds, margin) {
        margin = margin || 0;
        const adjustedRect = { x: tooltipRect.x, y: tooltipRect.y, width: tooltipRect.width, height: tooltipRect.height };

        if (adjustedRect.y + adjustedRect.height > bounds.y + bounds.height - margin) {
            adjustedRect.y = caretPos.y - adjustedRect.height - 10 + bounds.y;
        }

        return adjustedRect;
    }

    function keepRectInsideBounds(innerRect, bounds, margin) {
        margin = margin || 0;
        const adjustedRect = {};
        adjustedRect.x = constrain(innerRect.x, bounds.x + margin, bounds.x + bounds.width - innerRect.width - margin);
        adjustedRect.y = constrain(innerRect.y, bounds.y + margin, bounds.y + bounds.height - innerRect.height - margin);
        adjustedRect.width = innerRect.width;
        adjustedRect.height = innerRect.height;

        return adjustedRect;
    }

    function constrain(x, lowBound, highBound) {
        x = Math.max(x, lowBound);
        x = Math.min(x, highBound);

        return x;
    }

    // RebuildChart and DOM wiring.
    document.addEventListener('DOMContentLoaded', () => {
        const hideCompletedCheckbox = document.getElementById('hideCompleted');

        if (!hideCompletedCheckbox) return;

        function rebuildChart() {
            const hideCompleted = document.getElementById('hideCompleted').checked;
            const filtered = hideCompleted ? Vista.filter(v => !v.completed) : Vista;

            myChart.filteredVistas = filtered;
            currentWindowShifts = window.currentWindowShifts || currentWindowShifts;
            const range = getChartRange(currentWindowShifts);

            const vistaData = buildVistaGraphDataForRange(filtered, range.start, range.end);
            myChart.data.datasets[0].data = vistaData;

            myChart.options.scales.y.max = filtered.length;
            myChart.data.labels = filtered.map(v => `${v.name}: #${v.number}`);

            try {
                myChart._needsHeightAdjust = true;
            } catch (e) {
                // ignore
            }

            myChart.options.scales.x.min = new Date(range.start * 1000);
            myChart.options.scales.x.max = new Date(range.end * 1000);
            myChart.update();
        }

        window.rebuildChart = rebuildChart;
        rebuildChart();
        hideCompletedCheckbox.addEventListener('change', rebuildChart);
    });
})();

