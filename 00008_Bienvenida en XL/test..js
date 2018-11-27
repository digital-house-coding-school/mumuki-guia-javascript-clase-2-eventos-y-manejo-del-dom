/*<output#*//*#output>*/
/*<tests#*/it("Saludar Dario", function() {
  _prompt_response_ = "Dario"
  _confirm_response_ = true
  
  _dispatch_('load', document);
  
  var hayUltimoPrompt = _last_prompt_message_ !== null
  
  true.should.eql(hayUltimoPrompt, "<b><u>¿Llamaste a la función prompt?</u></b>")
  
  document.querySelector("h1").innerHTML.should.be.eql('Bienvenido ' + _prompt_response_); 
  
  var hayUltimoConfirm = _last_confirm_message_ !== null
  
  true.should.eql(hayUltimoConfirm, "<b><u>¿Llamaste a la función confirm?</u></b>")
  
  document.querySelector("h1").classList.contains("xl").should.be.eql(true, "Si el confirm da false, no debería estar la clase xl")
});

it("Saludar Ale", function() {
  _prompt_response_ = "Ale"
  _confirm_response_ = false
  
  _dispatch_('load', document);
  
  var hayUltimoPrompt = _last_prompt_message_ !== null
  
  true.should.eql(hayUltimoPrompt, "<b><u>¿Llamaste a la función prompt?</u></b>")
  
  document.querySelector("h1").innerHTML.should.be.eql('Bienvenido ' + _prompt_response_);  
  
  var hayUltimoConfirm = _last_confirm_message_ !== null
  
  true.should.eql(hayUltimoConfirm, "<b><u>¿Llamaste a la función confirm?</u></b>")
  
  
  document.querySelector("h1").classList.contains("xl").should.be.eql(false, "Si el confirm da false, no debería estar la clase xl")
});
/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/