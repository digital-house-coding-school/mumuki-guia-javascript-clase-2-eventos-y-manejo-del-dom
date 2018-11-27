Y ya que estamos, vamos a armar un carrousel de fotos... ¿Qué les parece?

Como pueden ver, nuestro código HTML tiene una etiqueta `<img>` que muestra imágenes y dos etiquetas `<button>` para pasar las imágenes. Cada uno de estos botones tiene un respectivo **id** para ser identificados fácilmente.

No solo eso, sino que en el código JS hay un array con 4 URLs con fotos y una variable `indice` que indica que actualmente se esta mostrando la foto en la posición 0.

Tu trabajo es completar los eventos que deberían suceder al clickear en siguiente y en anterior. Te dejamos una guía de como armar el botón de "siguiente" y queda de tu lado imaginarte como será el otro.

El botón de "siguiente" debería:

> 1. Incrementar el índice de la foto mostrada en 1

> 2. Si el ínidice nuevo es mayor que la cantidad de fotos que se tienen, volver el índice a 0

> 3. Tomar del array de fotos la foto correspondiente según el indice actual

> 4. Modificar el atributo `src` de la etiqueta `img` para que muestre la imagen correcta

¡Éxitos!