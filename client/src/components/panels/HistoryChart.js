import Chart from 'react-apexcharts';

import { lineChartOptions } from './lineChartOptions';


var sampleData = [[1611205200000,141.4],[1611291600000,140.42],[1611550800000,142.3],[1611637200000,141.13],[1611723600000,141.2],[1611810000000,139.03],[1611896400000,135.27],[1612155600000,138.61],[1612242000000,142.61],[1612328400000,142.16],[1612414800000,143.57],[1612501200000,142.59],[1612760400000,142.45],[1612846800000,143.13],[1612933200000,142.47],[1613019600000,142.37],[1613106000000,141.99],[1613451600000,143.99],[1613538000000,144.69],[1613624400000,144.88],[1613710800000,144.43]]

export default function HistoryChart({dataSeries}) {
    return(
        <>
            <Chart
                options={ lineChartOptions }
                series={[{
                    name: 'Closing Price',
                    data: dataSeries
                }]}
                type="area"
                height={400}
            />
        </>
    )
}