describe("Ejercicio 2", function() {
  it("Operar Array", function() {
    assert(typeof suma !== "undefined", "Falta la variable suma...")
    
    assert(suma === sumatoria(miArray), "La variable suma no tiene el resultado esperado")
    
    assert(typeof mult !== "undefined", "Falta la variable mult...")
    
    assert(mult === productoria(miArray), "La variable mult no tiene el resultado esperado")
    
    assert(pasePorOperar, "¿Llamaste a la función operarArray?")
  })
})