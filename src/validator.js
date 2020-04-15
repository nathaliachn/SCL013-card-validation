// creamos una  función para utilizar dos funciones a la vez y guardar la información ingresada por el usuario para que no se pierda en el imput
let local = "";
function valid (valor){
  console.log("valor funcion valid ", valor);
  local=valor;
  maskify(valor);
}
// Creamos una función que nos permite enmascarar el numero de tarjeta, a ecepción de los últimos cuatro digitos 
function maskify() {
  let cardElement = document.getElementById("numberOfCard");
  console.log(cardElement.value);
  let str = cardElement.value;
  let x = str.length;
  let output = "";
  for(let i = 0; i< x - 4;i++) {
      output += "#";
    }
    cardElement.value = (output + str.substring(x-4,x));   
}  
console.log(maskify("123456789")); // Creamos función para validar
function isValidCard(){
    let value= document.getElementById("numberOfCard").value;
     if(numerodetarjeta == " "){
        alert("Escribe el numero de tu tarjeta");
      }
      else{
       
       
 //Creamos una funcion para verificar la validez de la tarjeta
           function isValidCard(numberOfCard){            //Almacenamos los numeros de la tarjeta en un array vacío
          let arrayOfNumberOfCard = [];                   //Hacemos un bucle para extraer los caracteres de los numeros string
          for(i = 0; i < numberOfCard.length; i++) {      
            let firtsNumber = numberOfCard.charAt(i);      
            arrayOfNumberOfCard.push(firtsNumber);
          }
          //El array invertimos para poder usar el algoritmo Luhn
          let arrayOfNumberOfCardRevers = arrayOfNumberOfCard.reverse(); //Creamos bucle que nos permite trabajar solo con los numeros de los indices pares
          for(i = 1; i < arrayOfNumberOfCardRevers.length; i+= 2){      
            let multiplied = parseInt(arrayOfNumberOfCardRevers[i]) * 2; //Verificamos si es mayor o igual a 10
            if(parseInt(multiplied) >= 10){        
              let multString =multiplied.toString();        
              let sumFigure = parseInt(multString[0]) + parseInt(multString [1]);       
               arrayOfNumberOfCardRevers.splice(i, 1, sumFigure);
             }
           }
           //Esta variable almacenará la suma de los elementos
           let sumaTotal = 0 ;     //Este bucle nos permite trabajar con todo los elementos de array
           for(i = 0; i < arrayOfNumberOfCardRevers.length; i++) {
             //Sumaremos todo los elementos del array
             sumaTotal+= parseInt(arrayOfNumberOfCardRevers[i]);
           }     //Evaluamos si la suma cumple la condicion
           if (sumaTotal % 10 === 0) {
             //Retornaremos esta alerta si cumple la condicion
             return alert("Su tarjeta es valida");
           }
           else{
             //Retornaremos esta alerta si no cumple la condicion
             return alert("Su tarjeta es invalida");
           }
         }
      }
      isValidCard(numberOfCard);}