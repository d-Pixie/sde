var diagram = SVG('drawing').viewbox(0, 0, 100, 100);

function draw(AST){
  // initialize SVG.js
  var columns = AST.actors.length;
  var column_margin_width = (100/columns)*0.1;
  var column_width = (100-((columns-1)*column_margin_width))/columns;
  var total_column_width = column_width + column_margin_width;

  AST.actors.forEach(function(actor, index){
    diagram.rect(column_width, 30).move(total_column_width*index, 0).fill('#f06');
  });
}

var ast = {
  title: 'Test SVG',
  actors: [{name:'lb', label:'LB'},{name:'proxy', label:'Proxy'},{name:'test', label:'Test'}],
  lb: {},
  proxy: {},
  test: {},
}

draw( ast );

function download(){
  var svgData = diagram.svg();
  var svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
  var svgUrl = URL.createObjectURL(svgBlob);
  var downloadLink = document.getElementById("download");
  downloadLink.href = svgUrl;
  downloadLink.download = ast.title+".svg";
}
