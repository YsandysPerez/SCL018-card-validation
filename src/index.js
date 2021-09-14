import validator from './validator.js';
//Tomar datos de la tarjeta escrita en input
document.getElementById("myBut").addEventListener("click", function() {
  let cardNumber= document.getElementById("blankspace").value;
  document.getElementById("firstnumber").innerHTML= validator.maskify(cardNumber);
  //Crear alertas con resultados de la validación
  if (validator.isValid(cardNumber) === true) {
    alert("Tu tarjeta fue validada con éxito");
  }
  else {
    alert("Por favor ingresa un número válido");
  }

  //console.log(validator.isValid(cardNumber), validator.maskify(cardNumber));
});
