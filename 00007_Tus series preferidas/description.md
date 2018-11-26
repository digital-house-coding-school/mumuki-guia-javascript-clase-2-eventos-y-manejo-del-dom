Antes de meternos en el ejercicio vamos a aprender la función `split`, nativa de JS.

La función `split` opera sí o sí con un String y lo separa según un delimitador.

Por ejemplo:

``` javascript

var coloresString = "Azul,Rojo,Amarillo"

var coloresArray = coloresString.split(",")

```

Este código dividirá el string en cada aparición de una coma y generará un array con 3 elementos (Azul, Rojo y Amarillo)

¿Porqué te contamos esto? Tu código debería hacer lo siguiente:

> 1. Pedirle al usuario mediante `prompt` que escriba sus series preferidas separadas por comas.

> 2. Mediante la función `split` transformar ese texto en un array de series

> 3. Por cada serie ingresada debes **agregarle** al elemento `<ul>` un nuevo `<li>` con el nombre de la serie. Mucho cuidado que `innerHTML` pisa todo el contenido. Una buena forma de solucionar esto es escribir:

``` javascript
elemento.innerHTML = elemento.innerHTML + nuevoContenido
```

¡Éxitos!



