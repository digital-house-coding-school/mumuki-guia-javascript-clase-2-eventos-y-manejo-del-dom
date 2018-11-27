/*<script.js#*/window.addEventListener("load", function() {
  document.querySelector("button").addEventListener("mouseover", function() {
    document.querySelector("p").style.display ="block"
  })
  
  document.querySelector("button").addEventListener("mouseout", function() {
    document.querySelector("p").style.display ="none"
  })
})/*#script.js>*/
/*<index.html#*/<html>
  <head>
    <script src="script.js"></script>
  </head>
  <body>
    <h1>Bienvenido!</h1>
    <button>¿No entendés el sitio?</button>
    <p style="display:none">
      ¡Acá esta la ayuda!
    </p>
  </body>
</html>/*#index.html>*/