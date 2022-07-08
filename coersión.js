// Como js permite cambiar lo valores (type) de un valor a otro. tenemos dos tipo de coersion, la implicita (Cuando es el lenguaje que nos 
// - ayuda a cambiar le  valor  ejemplo : de string a numero o de numero a string )
 // Coersion implicita : 
var a = 4 + "7";
typeof a 

// el valor de esta variable seria de tipo string ya que el programa detecta la suma como una concatenacion y convierte el valor numero de 4 a string 
// dando como resultado un "47 " en pantalla

var b = 4 * "7";
typeof b 

// caso contrario en esta variable donde el programa detecta el *  como una multiplicacion y convierte el valor string en un valor numerico.
// dando como resultado a esta variable "28" (numerico)

// Coersion explcita, aqui estariamos "obligando"al programa a cambiar sus valores deacuerdo a nuestras necesidades. 

var c = 20;
var d = c + "" ;
// aqui tendriamos que nuestra variable d esta concatenando nuestra variable c con un string convirtiendolo en automatico en un string.

//para convertir una variable en string sin tener que concatenar usamos la funcion String()
// Y quedaria asi: 
var  e = String(c);
// si mandamos a consola nos daremos cuenta que la varibale e habra transformado en string 
// variable c (que era un numero)

//Caso inverso seria con el método Number()
var f = Number(e)

// aqui la variable string e pasaria a ser un numero de nuevio.


