/*<output#*//*#output>*/
/*<tests#*/it("Over", function() {
  _dispatch_('load', document);
  
  _dispatch_("mouseover", document.querySelector("button"))
  
  document.querySelector("p").style.display.should.eql("block", "El parrafo debería verse al pasar el mouse por arriba")
});

it("Out", function() {
  _dispatch_("mouseout", document.querySelector("button"))
  
  document.querySelector("p").style.display.should.eql("none", "El parrafo debería ocultarse al pasar el mouse por arriba")
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/