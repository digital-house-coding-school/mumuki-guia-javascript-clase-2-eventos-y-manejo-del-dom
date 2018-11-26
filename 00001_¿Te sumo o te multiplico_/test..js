describe("Ejercicio 1", function() {
  it("Operar Array", function() {
    assert(typeof operarArray === "function", "No existe la función operarArray")
    
    assert(operarArray.length === 2, "La función operarArray debería recibir dos argumentos")


    var resul = operarArray([10, 20, 30], sumatoria)
    
    assert(typeof resul === "number", "La función operarArray no esta retornando el tipo de dato apropiado. ¿Estas usando return? ¿Estas usando la operacion dada?")
    
    assert(resul === 60, "La función operarArray no esta retornando lo esperado. ¿Estas usando la operacion dada?")
    
    resul = operarArray([5,5,6], productoria)
    
    assert(resul === 150, "La función operarArray no esta retornando lo esperado. ¿Estas usando la operacion dada?")
  })
})