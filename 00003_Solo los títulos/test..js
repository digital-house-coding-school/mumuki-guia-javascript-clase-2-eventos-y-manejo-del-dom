describe("Ejercicio 3", function() {
  it("Titulos", function() {
    assert(typeof titulos !== "undefined", "No esta definida la variable titulos")
    
    assert(Array.isArray(titulos), "La variable titulos debe ser un array")
    
    assert(titulos.length, "La variable titulos no tiene la cantidad correcta de elementos")
    
    assert(titulos.shift() === "Manuelita" && titulos.shift() === "El reino del revés" && titulos.shift() == "La reina batata", "La variable titulos no tiene los valores correctos")
  })
})