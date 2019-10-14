import React, { Component } from 'react';

// 折线时间图demo begin
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


/* 条形图 demo2 */
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
//
// class App extends Component {
//     componentDidMount() {
//         // ... chart code goes here ...
//
//         /* Chart code */
//         // Themes begin
//         // Themes end
//
//         let chart = am4core.create("chartdiv", am4charts.XYChart);
//         chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
//
//         chart.data = [
//             {
//                 country: "USA",
//                 visits: 23725
//             },
//             {
//                 country: "China",
//                 visits: 1882
//             },
//             {
//                 country: "Japan",
//                 visits: 1809
//             },
//             {
//                 country: "Germany",
//                 visits: 1322
//             },
//             {
//                 country: "UK",
//                 visits: 1122
//             },
//             {
//                 country: "France",
//                 visits: 1114
//             },
//             {
//                 country: "India",
//                 visits: 984
//             },
//             {
//                 country: "Spain",
//                 visits: 711
//             },
//             {
//                 country: "Netherlands",
//                 visits: 665
//             },
//             {
//                 country: "Russia",
//                 visits: 580
//             },
//             {
//                 country: "South Korea",
//                 visits: 443
//             },
//             {
//                 country: "Canada",
//                 visits: 441
//             }
//         ];
//
//         let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
//         categoryAxis.renderer.grid.template.location = 0;
//         categoryAxis.dataFields.category = "country";
//         categoryAxis.renderer.minGridDistance = 40;
//         categoryAxis.fontSize = 11;
//
//         let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//         valueAxis.min = 0;
//         valueAxis.max = 24000;
//         valueAxis.strictMinMax = true;
//         valueAxis.renderer.minGridDistance = 30;
//         // axis break
//         let axisBreak = valueAxis.axisBreaks.create();
//         axisBreak.startValue = 2100;
//         axisBreak.endValue = 22900;
//         axisBreak.breakSize = 0.005;
//
//         // make break expand on hover
//         let hoverState = axisBreak.states.create("hover");
//         hoverState.properties.breakSize = 1;
//         hoverState.properties.opacity = 0.1;
//         hoverState.transitionDuration = 1500;
//
//         axisBreak.defaultState.transitionDuration = 1000;
//         /*
//         // this is exactly the same, but with events
//         axisBreak.events.on("over", function() {
//           axisBreak.animate(
//             [{ property: "breakSize", to: 1 }, { property: "opacity", to: 0.1 }],
//             1500,
//             am4core.ease.sinOut
//           );
//         });
//         axisBreak.events.on("out", function() {
//           axisBreak.animate(
//             [{ property: "breakSize", to: 0.005 }, { property: "opacity", to: 1 }],
//             1000,
//             am4core.ease.quadOut
//           );
//         });*/
//
//         let series = chart.series.push(new am4charts.ColumnSeries());
//         series.dataFields.categoryX = "country";
//         series.dataFields.valueY = "visits";
//         series.columns.template.tooltipText = "{valueY.value}";
//         series.columns.template.tooltipY = 0;
//         series.columns.template.strokeOpacity = 0;
//
//         // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
//         series.columns.template.adapter.add("fill", function(fill, target) {
//             return chart.colors.getIndex(target.dataItem.index);
//         });
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
// export default App;




/* 地图 demo3 */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

class App extends Component {
    componentDidMount() {
        /* Chart code */
        // Create map instance
        let chart = am4core.create("chartdiv", am4maps.MapChart);

        // Set map definition
        chart.geodata = am4geodata_worldLow;

        // Set projection
        chart.projection = new am4maps.projections.Miller();
        chart.panBehavior = "rotateLongLat";

        let grid = chart.series.push(new am4maps.GraticuleSeries());
        grid.toBack();

        // Create map polygon series
        let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;
        polygonSeries.mapPolygons.template.nonScalingStroke = true;
        polygonSeries.mapPolygons.template.strokeOpacity = 0.5;

        // Configure series
        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = chart.colors.getIndex(0);

        // Create hover state and set alternative fill color
        let hs = polygonTemplate.states.create("hover");
        hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);

        let linkContainer = chart.createChild(am4core.Container);
        linkContainer.isMeasured = false;
        linkContainer.layout = "horizontal";
        linkContainer.x = am4core.percent(50);
        linkContainer.y = am4core.percent(90);
        linkContainer.horizontalCenter = "middle";

        let equirectangular= linkContainer.createChild(am4core.TextLink);
        equirectangular.margin(10,10,10,10);
        equirectangular.text = "Equirectangular";
        equirectangular.events.on("hit", function(){
            chart.projection = new am4maps.projections.Projection();
        })

        let mercator = linkContainer.createChild(am4core.TextLink);
        mercator.text = "Mercator";
        mercator.margin(10,10,10,10);
        mercator.events.on("hit", function(){
            chart.projection = new am4maps.projections.Mercator();
        })

        let miller = linkContainer.createChild(am4core.TextLink);
        miller.margin(10,10,10,10);
        miller.text = "Miller";
        miller.events.on("hit", function(){
            chart.projection = new am4maps.projections.Miller();
        })

        let eckert = linkContainer.createChild(am4core.TextLink);
        eckert.margin(10,10,10,10);
        eckert.text = "Eckert 6";
        eckert.events.on("hit", function(){
            chart.projection = new am4maps.projections.Eckert6();
        })

        let orthographic = linkContainer.createChild(am4core.TextLink);
        orthographic.margin(10,10,10,10);
        orthographic.text = "Orthographic";
        orthographic.events.on("hit", function(){
            chart.projection = new am4maps.projections.Orthographic();
        })
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



// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4maps from "@amcharts/amcharts4/maps";
// import am4geodata_continentsLow from "@amcharts/amcharts4-geodata/continentsLow";
// import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
//
// class App extends Component {
//     componentDidMount() {
//         /* Chart code */
//         /* Chart code */
//
//         // Create map instance
//         let chart = am4core.create("chartdiv", am4maps.MapChart);
//         let interfaceColors = new am4core.InterfaceColorSet();
//
//         try {
//             chart.geodata = am4geodata_worldLow;
//         }
//         catch (e) {
//             chart.raiseCriticalError(new Error("Map geodata could not be loaded. Please download the latest <a href=\"https://www.amcharts.com/download/download-v4/\">amcharts geodata</a> and extract its contents into the same directory as your amCharts files."));
//         }
//
//
//         let label = chart.createChild(am4core.Label)
//         label.text = "12 months (3/7/2019 data) rolling measles\nincidence per 1'000'000 total population. \n Bullet size uses logarithmic scale.";
//         label.fontSize = 12;
//         label.align = "left";
//         label.valign = "bottom"
//         label.fill = am4core.color("#927459");
//         label.background = new am4core.RoundedRectangle()
//         label.background.cornerRadius(10,10,10,10);
//         label.padding(10,10,10,10);
//         label.marginLeft = 30;
//         label.marginBottom = 30;
//         label.background.strokeOpacity = 0.3;
//         label.background.stroke =am4core.color("#927459");
//         label.background.fill = am4core.color("#f9e3ce");
//         label.background.fillOpacity = 0.6;
//
//         let dataSource = chart.createChild(am4core.TextLink)
//         dataSource.text = "Data source: WHO";
//         dataSource.fontSize = 12;
//         dataSource.align = "left";
//         dataSource.valign = "top"
//         dataSource.url = "https://www.who.int/immunization/monitoring_surveillance/burden/vpd/surveillance_type/active/measles_monthlydata/en/"
//         dataSource.urlTarget = "_blank";
//         dataSource.fill = am4core.color("#927459");
//         dataSource.padding(10,10,10,10);
//         dataSource.marginLeft = 30;
//         dataSource.marginTop = 30;
//
// // Set projection
//         chart.projection = new am4maps.projections.Orthographic();
//         chart.panBehavior = "rotateLongLat";
//         chart.padding(20,20,20,20);
//
// // Add zoom control
//         chart.zoomControl = new am4maps.ZoomControl();
//
//         let homeButton = new am4core.Button();
//         homeButton.events.on("hit", function(){
//             chart.goHome();
//         });
//
//         homeButton.icon = new am4core.Sprite();
//         homeButton.padding(7, 5, 7, 5);
//         homeButton.width = 30;
//         homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
//         homeButton.marginBottom = 10;
//         homeButton.parent = chart.zoomControl;
//         homeButton.insertBefore(chart.zoomControl.plusButton);
//
//         chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#bfa58d");
//         chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1;
//         chart.deltaLongitude = 20;
//         chart.deltaLatitude = -20;
//
//
// // Create map polygon series
//
//         let shadowPolygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
//         shadowPolygonSeries.geodata = am4geodata_continentsLow;
//
//         try {
//             shadowPolygonSeries.geodata = am4geodata_continentsLow;
//         }
//         catch (e) {
//             shadowPolygonSeries.raiseCriticalError(new Error("Map geodata could not be loaded. Please download the latest <a href=\"https://www.amcharts.com/download/download-v4/\">amcharts geodata</a> and extract its contents into the same directory as your amCharts files."));
//         }
//
//         shadowPolygonSeries.useGeodata = true;
//         shadowPolygonSeries.dx = 2;
//         shadowPolygonSeries.dy = 2;
//         shadowPolygonSeries.mapPolygons.template.fill = am4core.color("#000");
//         shadowPolygonSeries.mapPolygons.template.fillOpacity = 0.2;
//         shadowPolygonSeries.mapPolygons.template.strokeOpacity = 0;
//         shadowPolygonSeries.fillOpacity = 0.1;
//         shadowPolygonSeries.fill = am4core.color("#000");
//
//
// // Create map polygon series
//         let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
//         polygonSeries.useGeodata = true;
//
//         polygonSeries.calculateVisualCenter = true;
//         polygonSeries.tooltip.background.fillOpacity = 0.2;
//         polygonSeries.tooltip.background.cornerRadius = 20;
//
//         let template = polygonSeries.mapPolygons.template;
//         template.nonScalingStroke = true;
//         template.fill = am4core.color("#f9e3ce");
//         template.stroke = am4core.color("#e2c9b0");
//
//         polygonSeries.calculateVisualCenter = true;
//         template.propertyFields.id = "id";
//         template.tooltipPosition = "fixed";
//         template.fillOpacity = 1;
//
//         template.events.on("over", function (event) {
//             if (event.target.dummyData) {
//                 event.target.dummyData.isHover = true;
//             }
//         })
//         template.events.on("out", function (event) {
//             if (event.target.dummyData) {
//                 event.target.dummyData.isHover = false;
//             }
//         })
//
//         let hs = polygonSeries.mapPolygons.template.states.create("hover");
//         hs.properties.fillOpacity = 1;
//         hs.properties.fill = am4core.color("#deb7ad");
//
//
//         let graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
//         graticuleSeries.mapLines.template.stroke = am4core.color("#fff");
//         graticuleSeries.fitExtent = false;
//         graticuleSeries.mapLines.template.strokeOpacity = 0.2;
//         graticuleSeries.mapLines.template.stroke = am4core.color("#fff");
//
//
//         let measelsSeries = chart.series.push(new am4maps.MapPolygonSeries())
//         measelsSeries.tooltip.background.fillOpacity = 0;
//         measelsSeries.tooltip.background.cornerRadius = 20;
//         measelsSeries.tooltip.autoTextColor = false;
//         measelsSeries.tooltip.label.fill = am4core.color("#000");
//         measelsSeries.tooltip.dy = -5;
//
//         let measelTemplate = measelsSeries.mapPolygons.template;
//         measelTemplate.fill = am4core.color("#bf7569");
//         measelTemplate.strokeOpacity = 0;
//         measelTemplate.fillOpacity = 0.75;
//         measelTemplate.tooltipPosition = "fixed";
//
//
//
//         let hs2 = measelsSeries.mapPolygons.template.states.create("hover");
//         hs2.properties.fillOpacity = 1;
//         hs2.properties.fill = am4core.color("#86240c");
//
//         polygonSeries.events.on("inited", function () {
//             polygonSeries.mapPolygons.each(function (mapPolygon) {
//                 let count = data[mapPolygon.id];
//
//                 if (count > 0) {
//                     let polygon = measelsSeries.mapPolygons.create();
//                     polygon.multiPolygon = am4maps.getCircle(mapPolygon.visualLongitude, mapPolygon.visualLatitude, Math.max(0.2, Math.log(count) * Math.LN10 / 10));
//                     polygon.tooltipText = mapPolygon.dataItem.dataContext.name + ": " + count;
//                     mapPolygon.dummyData = polygon;
//                     polygon.events.on("over", function () {
//                         mapPolygon.isHover = true;
//                     })
//                     polygon.events.on("out", function () {
//                         mapPolygon.isHover = false;
//                     })
//                 }
//                 else {
//                     mapPolygon.tooltipText = mapPolygon.dataItem.dataContext.name + ": no data";
//                     mapPolygon.fillOpacity = 0.9;
//                 }
//
//             })
//         })
//
//
//         let data = {
//             "AL": 504.38,
//             "AM": 6.5,
//             "AO": 2.98,
//             "AR": 0.32,
//             "AT": 10.9,
//             "AU": 5.02,
//             "AZ": 17.38,
//             "BA": 24.45,
//             "BD": 13.4,
//             "BE": 12.06,
//             "BF": 93.37,
//             "BG": 1.68,
//             "BI": 0.95,
//             "BJ": 93.36,
//             "BR": 49.42,
//             "BT": 10.03,
//             "BY": 26.16,
//             "CA": 0.96,
//             "CD": 69.71,
//             "CF": 4.57,
//             "CG": 19.7,
//             "CH": 6.19,
//             "CI": 14.1,
//             "CL": 1.4,
//             "CM": 41.26,
//             "CN": 2.6,
//             "CO": 4.48,
//             "CY": 7.69,
//             "CZ": 23.09,
//             "DK": 1.58,
//             "EE": 9.91,
//             "EG": 0.63,
//             "ES": 4.96,
//             "FI": 3.27,
//             "FR": 43.26,
//             "GA": 3.03,
//             "GB": 14.3,
//             "GE": 809.09,
//             "GH": 39.78,
//             "GM": 2.45,
//             "GN": 45.98,
//             "GQ": 23.74,
//             "GR": 154.42,
//             "HR": 5.46,
//             "HU": 1.44,
//             "ID": 16.87,
//             "IE": 17.56,
//             "IL": 412.24,
//             "IN": 47.85,
//             "IQ": 12.96,
//             "IR": 1.13,
//             "IT": 44.29,
//             "JP": 3.27,
//             "KE": 16.8,
//             "KG": 253.37,
//             "KH": 0.44,
//             "KM": 1.26,
//             "KZ": 116.3,
//             "LA": 1.33,
//             "LK": 0.53,
//             "LR": 692.27,
//             "LS": 5.9,
//             "LT": 14.44,
//             "LU": 6.95,
//             "LV": 6.09,
//             "MA": 0.2,
//             "MD": 83.75,
//             "ME": 319.75,
//             "MG": 2386.35,
//             "MK": 28.83,
//             "ML": 48.68,
//             "MM": 40.31,
//             "MN": 0.66,
//             "MR": 14.65,
//             "MT": 11.65,
//             "MV": 9.35,
//             "MX": 0.04,
//             "MY": 86.41,
//             "MZ": 13.49,
//             "NA": 12.9,
//             "NE": 80.88,
//             "NG": 31.44,
//             "NL": 1.47,
//             "NO": 2.47,
//             "NP": 10.8,
//             "NZ": 9.23,
//             "PE": 1.29,
//             "PK": 159.14,
//             "PL": 8.24,
//             "PT": 16.68,
//             "RO": 63.05,
//             "RS": 473.46,
//             "RU": 14.24,
//             "RW": 5.45,
//             "SE": 2.64,
//             "SG": 8.18,
//             "SI": 3.37,
//             "SK": 112.78,
//             "SN": 3.37,
//             "SO": 8.03,
//             "SS": 19.3,
//             "TD": 75.63,
//             "TG": 34.84,
//             "TH": 81.02,
//             "TL": 9.46,
//             "TN": 7.8,
//             "TR": 7.08,
//             "UA": 1439.02,
//             "UG": 62.55,
//             "US": 1.32,
//             "UZ": 0.99,
//             "VE": 179.55,
//             "ZA": 3.09,
//             "ZM": 9.82,
//             "ZW": 0.06
//         }
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
// export default App;

