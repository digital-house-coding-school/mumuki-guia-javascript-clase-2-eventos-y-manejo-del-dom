function sumatoria(array) {
  var resul = 0
  for (var i = 0; i < array.length; i++) {
    resul += array[i]
  }
  
  return resul
}

function productoria(array) {
  var resul = 1
  for (var i = 0; i < array.length; i++) {
    resul *= array[i]
  }
  
  return resul
}