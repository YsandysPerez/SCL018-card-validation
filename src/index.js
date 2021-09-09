import validator from './validator.js';
//Tomar datos de la tarjeta escrita en input
document.getElementById("myBut").addEventListener("click", function() {
  let cardNumber= document.getElementById("blankspace").value;
  document.getElementById("firstnumber").innerHTML= validator.maskify(cardNumber);
  //Llamar a las unciones isValid y maskify
  validator.isValid(cardNumber);
  validator.maskify(cardNumber);


  console.log(validator.isValid(cardNumber), validator.maskify(cardNumber));
});
