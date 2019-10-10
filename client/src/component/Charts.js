import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


export default class index extends React.Component{
    render() {
        // 图标 DEMO 1
        // const options = {
        //     title: {
        //         text: 'My chart'
        //     },
        //     series: [{
        //         data: [1, 2, 3]
        //     }]
        // }

        // 饼形图 DEMO 2
        // const options = {
        //     title: {
        //         text: 'Pie point CSS'
        //     },
        //     xAxis: {
        //         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        //     },
        //     series: [{
        //         type: 'pie',
        //         allowPointSelect: true,
        //         keys: ['name', 'y', 'selected', 'sliced'],
        //         data: [
        //             ['Apples', 29.9, false],
        //             ['Pears', 71.5, false],
        //             ['Oranges', 106.4, false],
        //             ['Plums', 129.2, false],
        //             ['Bananas', 144.0, false],
        //             ['Peaches', 176.0, false],
        //             ['Prunes', 135.6, true, true],
        //             ['Avocados', 148.5, false]
        //         ],
        //         showInLegend: true
        //     }]
        // }

        // 条形折线图 DEMO 3
        // const options = {
        //     chart: {
        //         renderTo: 'container',
        //         type: 'column'
        //     },
        //     title: {
        //         text: 'Restaurants Complaints'
        //     },
        //     tooltip: {
        //         shared: true
        //     },
        //     xAxis: {
        //         categories: [
        //             'Overpriced',
        //             'Small portions',
        //             'Wait time',
        //             'Food is tasteless',
        //             'No atmosphere',
        //             'Not clean',
        //             'Too noisy',
        //             'Unfriendly staff'
        //         ],
        //         crosshair: true
        //     },
        //     yAxis: [{
        //         title: {
        //             text: ''
        //         }
        //     }, {
        //         title: {
        //             text: ''
        //         },
        //         minPadding: 0,
        //         maxPadding: 0,
        //         max: 100,
        //         min: 0,
        //         opposite: true,
        //         labels: {
        //             format: "{value}%"
        //         }
        //     }],
        //     series: [{
        //         name: 'Complaints',
        //         type: 'column',
        //         zIndex: 2,
        //         data: [755, 222, 151, 86, 72, 51, 36, 10],
        //         tooltip: {
        //             valueSuffix: ' °C'
        //         }
        //     },{
        //         name: 'Temperature',
        //         type: 'spline',
        //         color: '#231212',
        //         data: [122, 233, 322, 512, 231, 211, 52.2, 226.5],
        //         tooltip: {
        //             valueSuffix: ' °C'
        //         }
        //     }]
        // }

        // 饼形图 折线图 条形图 结合 DEMO 4
        const options = {
            title: {
                text: 'Combination chart'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
            },
            labels: {
                items: [{
                    html: 'Total fruit consumption',
                    style: {
                        left: '50px',
                        top: '18px',
                        color: ( // theme
                            Highcharts.defaultOptions.title.style &&
                            Highcharts.defaultOptions.title.style.color
                        ) || 'black'
                    }
                }]
            },
            series: [{
                type: 'column',
                name: 'Jane',
                data: [5, 1, 4, 2, 1]
            }, {
                type: 'column',
                name: 'John',
                data: [2, 3, 5, 7, 6]
            }, {
                type: 'column',
                name: 'Joe',
                data: [4, 3, 3, 9, 0]
            }, {
                type: 'spline',
                name: 'Average',
                data: [3, 2.67, 3, 6.33, 3.33],
                marker: {
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[3],
                    fillColor: 'white'
                }
            }, {
                type: 'pie',
                name: 'Total consumption',
                data: [{
                    name: 'Jane',
                    y: 13,
                    color: Highcharts.getOptions().colors[0] // Jane's color
                }, {
                    name: 'John',
                    y: 23,
                    color: Highcharts.getOptions().colors[1] // John's color
                }, {
                    name: 'Joe',
                    y: 19,
                    color: Highcharts.getOptions().colors[2] // Joe's color
                }],
                center: [100, 80],
                size: 100,
                showInLegend: false,
                dataLabels: {
                    enabled: false
                }
            }]
        }

        // 图标 DEMO 5
        // const options = {
        //     title: {
        //         text: 'My chart'
        //     },
        //     series: [{
        //         data: [1, 2, 3]
        //     }]
        // }


        return (
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        );
    }
}
