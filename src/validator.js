// creamos una  función para utilizar dos funciones a la vez y guardar la información ingresada por el usuario para que no se pierda en el imput
let local = "";
function valid (valor){
  console.log("valor funcion valid ", valor);
  local=valor;
  maskify(valor);
}function validarTodo()
 let btntipotarjeta = document.getElementById("numberOfCard");
 let btncodigoVeri = document.getElementById("codigoVeri");
 let btntitular = document.getElementById("titular");
 let btnidentificacion = document.getElementById("identificacion")
 let btndireccion = document.getElementById("direccion");
 let btnciudad = document.getElementById("ciudad");// Creamos una función que nos permite enmascarar el numero de tarjeta, a ecepción de los últimos cuatro digitos 
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
 console.log(str);} // Creamos función para validar
function isValidCard(){
  let cardNumber = document.getElementById("numberOfCard").value;
  console.log(cardNumber);
  let arrayOfNumberOfCard = [];
  if(cardNumber == ""){
    alert("Escribe el numero de tu tarjeta");
  } else {  
    //Hacemos un bucle para extraer los caracteres de los numeros string
    for(i = 0; i < cardNumber.length; i++){      
      let firstNumber = cardNumber.charAt(i);
      console.log(firstNumber)      
      arrayOfNumberOfCard.push(firstNumber);
    }  
  }
  console.log("arrayNumberOfCard es igual a ", arrayOfNumberOfCard)
  //El array invertimos para poder usar el algoritmo Luhn
  let arrayOfNumberOfCardReverse = arrayOfNumberOfCard.reverse();
  console.log("arrayNumberOfCard reverse ", arrayOfNumberOfCardReverse) 
  let multiplied;  //Creamos bucle que nos permite trabajar solo con los numeros de los indices pares  // 12345678
  for(i = 0; i < arrayOfNumberOfCardReverse.length; i+= 2){      
    multiplied = parseInt(arrayOfNumberOfCardReverse[i]) * 2; //Verificamos si es mayor o igual a 10
    if(parseInt(multiplied) >= 10){        
      let multString =multiplied.toString();        
      let sumFigure = parseInt(multString[0]) + parseInt(multString [1]);       
      arrayOfNumberOfCardReverse.splice(i, 1, sumFigure);
    } 
  }   
  console.log(arrayOfNumberOfCardReverse);
  //Esta variable almacenará la suma de los elementos
    let sumaTotal = 0 ;//Este bucle nos permite trabajar con todo los elementos de array
    for(i = 0; i < arrayOfNumberOfCardReverse.length; i++) {
      sumaTotal+= parseInt(arrayOfNumberOfCardReverse[i]);
    }
    console.log(sumaTotal);  //Evaluamos si la suma cumple la condicion
    if (sumaTotal % 10 === 0) {
      //Retornaremos esta alerta si cumple la condicion
      maskify()
      window.location="resultadovalidacion.html";
      return alert("Su tarjeta es valida");    } else {
        //Retornaremos esta alerta si no cumple la condicion
       return alert("Su tarjeta es invalida");
      }}