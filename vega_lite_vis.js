var vg_1 = "chart/map.vg.json";
vegaEmbed("#map", vg_1).then(function(result) {
}).catch(console.error);

var vg_2 = "chart/line_chart.vg.json";
vegaEmbed("#line_chart", vg_2).then(function(result) {
}).catch(console.error);

var vg_3 = "chart/lollipop_chart.vg.json";
vegaEmbed("#lollipop_chart", vg_3).then(function(result) {
}).catch(console.error);

var vg_4 = "chart/grouped_bar_chart.vg.json";
vegaEmbed("#grouped_bar_chart", vg_4).then(function(result) {
}).catch(console.error);
