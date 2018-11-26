describe("Ejercicio 5", function() {
  it("La Reina Batata", function() {
    assert(typeof reina !== "undefined", "No esta definida la variable reina")
    
    assert(typeof reina === "object", "La variable reina debe ser un objeto literal")
    
    assert(reina.nombre === "La reina batata", "¿Encontraste a la reina batata o hay otra cosa?")
  })
})