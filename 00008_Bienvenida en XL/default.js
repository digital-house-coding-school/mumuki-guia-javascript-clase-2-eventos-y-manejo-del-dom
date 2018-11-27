/*<script.js#*/window.addEventListener("load", function() {
  
  // Tu código va acá!
  var nombre = prompt("¿Cuál es tu nombre?")
  
  document.querySelector("h1").innerHTML = "Bienvenido " + nombre
})/*#script.js>*/
/*<index.html#*/<html>
  <head>
    <script src="script.js"></script>
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <body>
    <h1></h1>
  </body>
</html>/*#index.html>*/
/*<styles.css#*/.xl {
  font-size: 32px;
}/*#styles.css>*/