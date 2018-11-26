describe("Ejercicio 4", function() {
  it("Las Mejores", function() {
    assert(typeof lasMejores !== "undefined", "No esta definida la variable lasMejores")
    
    assert(Array.isArray(lasMejores), "La variable lasMejores debe ser un array")
    
    assert(lasMejores.length === 2, "La variable lasMejores no tiene la cantidad correcta de elementos")
    
    console.log(lasMejores)
    
    assert(lasMejores.shift().nombre === "Manuelita" && lasMejores.shift().titulo === "El reino del revés", "La variable lasMejores no tiene los valores correctos")
  })
})