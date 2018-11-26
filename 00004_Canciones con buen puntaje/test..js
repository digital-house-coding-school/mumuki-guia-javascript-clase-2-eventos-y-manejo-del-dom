describe("Ejercicio 4", function() {
  it("Las Mejores", function() {
    assert(typeof lasMejores !== "undefined", "No esta definida la variable lasMejores")
    
    assert(Array.isArray(lasMejores), "La variable lasMejores debe ser un array")
    
    assert(lasMejores.length, "La variable lasMejores no tiene la cantidad correcta de elementos")
    
    assert(titulos.shift() === "Manuelita" && titulos.shift() === "El reino del revés" && titulos.shift() == "La reina batata", "La variable titulos no tiene los valores correctos")
  })
})