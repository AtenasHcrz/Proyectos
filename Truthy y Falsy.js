// Para revisar si un valor es True or False usariamos la funcion Boolean();

// NEGATIVOS //

Boolean(); // Un espacio vacio nos genera un valor falso
Boolean(0); // Cero genera un valor falso.
Boolean(null); // Nos genera un valor false 
Boolean (Nan); // Nan se puede entender como NON AN NOMBER y nos genera una condicion False 
Boolean(undefined);// Nos genera un valor falso al no poder validar el valor real del numero.
Boolean(false); //  nos dara un valor de false 
Boolean(""); // un string  nos da un valor falso

// POSITIVOS // 
Boolean(1); // Nos genera un valor verdadero (true) (de un 1 en adelante)
Boolean("a"); // Los strings que ocupen un espacio en letra daran verdadero
Boolean([]); // Un array aunque este vacio nos genera un valor de verdadero  
Boolean({}); // Cuando tenemos un objeto aunque este vacio nos dara un valor de Verdadero 
Boolean(function()); // Cualquier funcion es verdadera.
Boolean(true) // Nos dara un valor verdadero 

