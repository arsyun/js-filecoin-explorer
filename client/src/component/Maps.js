import React, { Component } from 'react';
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
//
// am4core.useTheme(am4themes_animated);
//
// class App extends Component {
//     componentDidMount() {
//         let chart = am4core.create("chartdiv", am4charts.XYChart);
//
//         chart.paddingRight = 20;
//
//         let data = [];
//         let visits = 10;
//         for (let i = 1; i < 366; i++) {
//             visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
//             data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
//         }
//
//         chart.data = data;
//
//         let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
//         dateAxis.renderer.grid.template.location = 0;
//
//         let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//         valueAxis.tooltip.disabled = true;
//         valueAxis.renderer.minWidth = 35;
//
//         let series = chart.series.push(new am4charts.LineSeries());
//         series.dataFields.dateX = "date";
//         series.dataFields.valueY = "value";
//
//         series.tooltipText = "{valueY.value}";
//         chart.cursor = new am4charts.XYCursor();
//
//         let scrollbarX = new am4charts.XYChartScrollbar();
//         scrollbarX.series.push(series);
//         chart.scrollbarX = scrollbarX;
//
//         this.chart = chart;
//     }
//
//     componentWillUnmount() {
//         if (this.chart) {
//             this.chart.dispose();
//         }
//     }
//
//     render() {
//         return (
//             <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
//         );
//     }
// }
//
// export default App;


/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";



class App extends Component {
    componentDidMount() {
        // ... chart code goes here ...

        /* Chart code */
    // Themes begin
    // Themes end

        let chart = am4core.create("chartdiv", am4charts.XYChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart.data = [
            {
                country: "USA",
                visits: 23725
            },
            {
                country: "China",
                visits: 1882
            },
            {
                country: "Japan",
                visits: 1809
            },
            {
                country: "Germany",
                visits: 1322
            },
            {
                country: "UK",
                visits: 1122
            },
            {
                country: "France",
                visits: 1114
            },
            {
                country: "India",
                visits: 984
            },
            {
                country: "Spain",
                visits: 711
            },
            {
                country: "Netherlands",
                visits: 665
            },
            {
                country: "Russia",
                visits: 580
            },
            {
                country: "South Korea",
                visits: 443
            },
            {
                country: "Canada",
                visits: 441
            }
        ];

        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.minGridDistance = 40;
        categoryAxis.fontSize = 11;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.max = 24000;
        valueAxis.strictMinMax = true;
        valueAxis.renderer.minGridDistance = 30;
// axis break
        let axisBreak = valueAxis.axisBreaks.create();
        axisBreak.startValue = 2100;
        axisBreak.endValue = 22900;
        axisBreak.breakSize = 0.005;

// make break expand on hover
        let hoverState = axisBreak.states.create("hover");
        hoverState.properties.breakSize = 1;
        hoverState.properties.opacity = 0.1;
        hoverState.transitionDuration = 1500;

        axisBreak.defaultState.transitionDuration = 1000;
        /*
        // this is exactly the same, but with events
        axisBreak.events.on("over", function() {
          axisBreak.animate(
            [{ property: "breakSize", to: 1 }, { property: "opacity", to: 0.1 }],
            1500,
            am4core.ease.sinOut
          );
        });
        axisBreak.events.on("out", function() {
          axisBreak.animate(
            [{ property: "breakSize", to: 0.005 }, { property: "opacity", to: 1 }],
            1000,
            am4core.ease.quadOut
          );
        });*/

        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryX = "country";
        series.dataFields.valueY = "visits";
        series.columns.template.tooltipText = "{valueY.value}";
        series.columns.template.tooltipY = 0;
        series.columns.template.strokeOpacity = 0;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
        series.columns.template.adapter.add("fill", function(fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });

        this.chart = chart;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
        );
    }
}
export default App;




