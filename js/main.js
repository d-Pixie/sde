function draw(AST){
  // initialize SVG.js
  var diagram = SVG('drawing').viewbox(0, 0, 100, 100);
  var columns = AST.actors.length;
  var column_margin_width = (100/columns)*0.1;
  var column_width = (100-((columns-1)*column_margin_width))/columns;
  var total_column_width = column_width + column_margin_width;

  AST.actors.forEach(function(actor, index){
    diagram.rect(column_width, 30).move(total_column_width*index, 0).fill('#f06');
  });
}

var ast = {
  actors: [{name:'lb', label:'LB'},{name:'proxy', label:'Proxy'},{name:'test', label:'Test'}],
  lb: {},
  proxy: {},
  test: {},
}

draw( ast );
