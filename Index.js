var w = 1000;
var h = 1000;

var svg = d3.select("svg")
	.attr("width", w)
	.attr("height", h)

//Creating Path

var lineMaker = d3.line()
    .curve(d3.curveCardinal);

 function drawLine(){
  var xScale = d3.scaleLinear().domain([0, skyData.length]).range([0, w]);
  var yScale = d3.scaleLinear().domain([0, 100]).range([h-50, 50]);

  lineMaker
    .x(function(d, i) {
     return xScale(i);
    })
    .y(function(d) {
      return yScale(d.sky);
    });


  var lineData = lineMaker(skyData);

   svg
     .append('path')
    .attr('d', lineData)
    .attr('stroke','white')
}

myPath = svg
    .append('path')
    .attr('transform', 'translate(' + w / 2 + ',' + h / 2 + ')')
    .attr('d', lineData)
    .attr('stroke', 'white')
