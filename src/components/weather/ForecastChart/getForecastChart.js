import Chart from 'chart.js';
import moment from 'moment';

export const getForecastChart = (forecast) => {
    const canvasEl = document.getElementById('canvas');
    const ctx = canvasEl.getContext('2d');

    const getLabels = () => {
        return forecast.map((item) => {
            return moment(item.dt_txt).format('HH');
        });
    };

    const getData = () => {
        return forecast.map((item) => {
            return Math.round(item.main.temp);
        });
    };

    const getTooltipTitle = (tooltipModel) => {
        return '<div class="forecast-tooltip__title">' + tooltipModel.dataPoints[0].label + ':00' + '</div>';
    };

    const getTooltipBody = (tooltipModel) => {
        return '<div class="forecast-tooltip__body">' + tooltipModel.dataPoints[0].value + '</div>';
    };

    const getTooltip = (tooltipModel) => {
        let tooltipEl = document.getElementById('tooltip');
        if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.innerHTML = '<div></div>';
            document.body.appendChild(tooltipEl);
        }

        if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
        }

        tooltipEl.classList.remove('above', 'below', 'no-transform');
        tooltipEl.classList.add('forecast-tooltip');

        if (tooltipModel.yAlign) {
            tooltipEl.classList.add(tooltipModel.yAlign);
        } else {
            tooltipEl.classList.add('no-transform');
        }

        let innerHtml;

        if (tooltipModel) {
            innerHtml = getTooltipTitle(tooltipModel);
            innerHtml += getTooltipBody(tooltipModel);
        }

        tooltipEl.innerHTML = innerHtml;
        let tooltipXOffset = -60;
        let tooltipYOffset = -82;
        tooltipEl.style.opacity = 1;
        tooltipEl.style.left = tooltipModel.caretX + tooltipXOffset + 'px';
        tooltipEl.style.top = tooltipModel.caretY + tooltipYOffset + 'px';
        tooltipEl.style.padding = 10 + 'px';
        tooltipEl.style.pointerEvents = 'none';
    };

    const legendOptions = {
        display: false,
    };

    const tooltipOptions = {
        enabled: false,
        custom: (tooltipModel) => getTooltip(tooltipModel),
    };

    const scalesOptions = {
        xAxes: [{
            display: false,
            gridLines: {
                lineWidth: 0,
                display: false,
            }
        }],
        yAxes: [{
            display: false,
            gridLines: {
                lineWidth: 0,
                display: false,
            }
        }]
    };

    const layoutOptions = {
        padding: {
            left: 50,
            right: 50,
            top: 50,
            bottom: 50
        }
    };

    const options = {
        legend: legendOptions,
        tooltips: tooltipOptions,
        scales: scalesOptions,
        layout: layoutOptions,
    };

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: getLabels(),
            datasets: [{
                data: getData(),
                backgroundColor: 'rgba(0, 0, 0, 0)',
                pointBackgroundColor: '#f5f5f5',
                pointHoverBackgroundColor: '#8129d3',
                borderColor: '#f5f5f5',
                borderWidth: 4,
                lineTension: 0.3,
            }],
        },
        options: options,
    });
};
