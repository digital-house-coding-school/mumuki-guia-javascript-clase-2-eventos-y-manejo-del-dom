describe("Ejercicio 1", function() {
  it("Operar Array", function() {
    assert(typeof operarArray === "function", "No existe la función operarArray")
    
    assert(operarArray.length === 2, "La función operarArray debería recibir dos argumentos")

  })
})