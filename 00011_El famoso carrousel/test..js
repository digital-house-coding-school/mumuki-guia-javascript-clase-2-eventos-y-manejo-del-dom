/*<output#*//*#output>*/
/*<tests#*/it("Carrousel", function() {
  _dispatch_('load', document);
  
  _dispatch_("click", document.querySelector("button#siguiente"))
  
  document.querySelector("img").getAttribute("src").should.eql("http://lifeisbetterrescue.org/images/large/kittens.jpg", "Al clickear en siguiente debería cargarse la imagen número 2")
  
  _dispatch_("click", document.querySelector("button#siguiente"))
  
  document.querySelector("img").getAttribute("src").should.eql("https://vmdtoday.s3.amazonaws.com/_media/_image/Kitten-USDA-Investigation_Thumb.jpg", "Al clickear en siguiente parados en la imágen 2 debería cargarse la imagen número 3")
  
  _dispatch_("click", document.querySelector("button#anterior"))
  
  document.querySelector("img").getAttribute("src").should.eql("http://lifeisbetterrescue.org/images/large/kittens.jpg", "Al clickear en anterior parados en la imágen número 2 debería cargarse la imagen número 3")
  
  _dispatch_("click", document.querySelector("button#siguiente"))
  
  document.querySelector("img").getAttribute("src").should.eql("https://vmdtoday.s3.amazonaws.com/_media/_image/Kitten-USDA-Investigation_Thumb.jpg", "Al clickear en siguiente parados en la imágen 2 debería cargarse la imagen número 3")
  
  _dispatch_("click", document.querySelector("button#siguiente"))
  
  document.querySelector("img").getAttribute("src").should.eql("https://pet-uploads.adoptapet.com/f/9/9/243980831.jpg", "Al clickear en siguiente parados en la imágen 3 debería cargarse la imagen número 4")
  
  _dispatch_("click", document.querySelector("button#siguiente"))
  
  document.querySelector("img").getAttribute("src").should.eql("https://images.agoramedia.com/everydayhealth/cms/looking-at-cute-pics-helps-you-work-article.jpg", "Al clickear en siguiente parados en la imágen 4 debería cargarse la imagen número 1 de nuevo")
  
  _dispatch_("click", document.querySelector("button#anterior"))
  
  document.querySelector("img").getAttribute("src").should.eql("https://pet-uploads.adoptapet.com/f/9/9/243980831.jpg", "Al clickear en anterior parados en la imágen 1 debería cargarse la imagen número 4")
 
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/