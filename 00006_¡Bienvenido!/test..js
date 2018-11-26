/*<output#*//*#output>*/
/*<tests#*/it("Saludar Dario", function() {
  _prompt_response_ = "Dario"
  
  _dispatch_('load', document);
  
  var hayUltimoPrompt = _last_prompt_message_ !== null
  
  true.should.eql(hayUltimoPrompt, "<b><u>¿Llamaste a la función prompt?</u></b>")
  
  document.querySelector("h1").innerText.should.be.eql('Bienvenido ' + _prompt_response_);  
});

it("Saludar Ale", function() {
  _prompt_response_ = "Ale"
  
  _dispatch_('load', document);
  
  var hayUltimoPrompt = _last_prompt_message_ !== null
  
  true.should.eql(hayUltimoPrompt, "<b><u>¿Llamaste a la función prompt?</u></b>")
  
  document.querySelector("h1").innerHTML.should.be.eql('Bienvenido ' + _prompt_response_);  
});
/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/