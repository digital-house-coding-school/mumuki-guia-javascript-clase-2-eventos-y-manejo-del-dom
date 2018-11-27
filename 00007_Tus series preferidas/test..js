/*<output#*//*#output>*/
/*<tests#*/it("Test series 1", function() {
  _prompt_response_ = "Simpsons,GOT,Westworld"
  
  _dispatch_('load', document);
  
  var hayUltimoPrompt = _last_prompt_message_ !== null
  
  true.should.eql(hayUltimoPrompt, "<b><u>¿Llamaste a la función prompt?</u></b>")
  
  var lis = document.querySelectorAll("ul li")
  
  lis.length.should.eql(3, "No estas generando la cantidad de elementos li correcta")
  
  lis[0].innerHTML.should.eql("Simpsons", "El primer li no tiene el contenido correcto")
  
  lis[1].innerHTML.should.eql("GOT", "El segundo li no tiene el contenido correcto")
  
  lis[2].innerHTML.should.eql("Westworld", "El segundo li no tiene el contenido correcto")
});

it("Test series 2", function() {
  _prompt_response_ = "Friends,HIMYM"
  
  document.querySelector("ul").innerHTML = ""
  
  _dispatch_('load', document);
  
  var hayUltimoPrompt = _last_prompt_message_ !== null
  
  true.should.eql(hayUltimoPrompt, "<b><u>¿Llamaste a la función prompt?</u></b>")
  
  var lis = document.querySelectorAll("ul li")
  
  lis.length.should.eql(2, "No estas generando la cantidad de elementos li correcta")
  
  lis[0].innerHTML.should.eql("Friends", "El primer li no tiene el contenido correcto")
  
  lis[1].innerHTML.should.eql("HIMYM", "El segundo li no tiene el contenido correcto")
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/