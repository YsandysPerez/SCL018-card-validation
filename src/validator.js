const validator = {
  isValid(cardNumber){
    let arrayNum= cardNumber.split(""); //convertir mi string en array
    let reverseNum= arrayNum.reverse(); //poner el número en reversa
//crear variable para suma y booleana.
    let suma= 0;
    //multiplicar las posiciones pares
    for(let i = 0; i<reverseNum.length; i++){
      if(i % 2 === 1){
        let multNum= reverseNum[i]*2;
        if(multNum >= 10){
          multNum= multNum-9;
          suma+= multNum;
        }else{
          suma+= multNum;
        }
        }
      else{
        suma+= parseInt(reverseNum[i]);
        }
      }
    if(suma % 10 === 0){
      return true;
    }
    else{
      return false;
    }
  },
  maskify(cardNumber){

    const invNum= cardNumber.split("").reverse();
    let secretNum= "";
     for(let i = 0; i<invNum.length; i++){
       if(i < 4){
          secretNum+= invNum[i];
       }
       else{
         secretNum+= "#";
       }
      }
    const maskNum= secretNum.split("").reverse().join("");
    return maskNum;
     }

};

export default validator;
