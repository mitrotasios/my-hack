export const lineChartOptions = {
    colors : ['#3b82f6'], // tailwind blue
    chart: {
        id: 'linechart',
        toolbar: {
        show: false,
        },
        selection: {
        enabled: false,
        },
        fontFamily: {
        fontFamily: 'Inter; Helvetica' // provide second font
        },
        zoom: {
        enabled: false, // zoom in within x-axis
        },
    },
    fill: {
        type: "gradient",
        gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.3,
                opacityTo: 0.8,
                stops: [0, 120] // do further modifications here
            }
    },
    markers: {
        size: 5,
    },
    stroke: {
        curve: 'smooth', // 'smooth' for dribbble-like design curves
        width: 3
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        type: 'datetime',
        labels: {
            show: true,
        }
    },
    yaxis: {
        labels: {
            formatter: function (val) { // some formatter function
                return (val).toFixed(2);
            },
            show: true,
        },
    },
    grid: {
        strokeDashArray: 4, // dashed horizontal grid lines
        yaxis: {
            lines: {
                show: true // enable horizontal grid lines
            }
        },
        padding: {
            left: 20,
            right: 10,
            bottom: 0,
        },  
    },
}
