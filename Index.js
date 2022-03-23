var w = 2000;
var h = 1000;

var svg = d3.select("svg")
    .attr("width", w)
    .attr("height", h)

var dataset = [];
d3.json("dataset.json").then(function (data) {
    dataset = data;
    drawLine();
});

var lineMaker = d3.line().curve(d3.curveCardinal);

var pathData = lineMaker(coords)

function drawLine() {
    var xScale = d3.scaleLinear().domain([0, dataset.length]).range([0, w]);
var yScale = d3.scaleLinear().domain([0, 100]).range([h, 0]);

lineMaker
    .x(function (d, i) {
        return xScale(i);
    })
    .y(function (d) {
        return yScale(d.altitude);
    });

    var lineData = lineMaker(dataset);

   svg
    .append('path')
   .attr('d', lineData)
       .attr('stroke', 'white')
       .attr('fill', "none")
}