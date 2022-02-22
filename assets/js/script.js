let valorNum = 0;

//#1Crear una función para solicitar el número y validar antes de mostrar el resultado que el número ingresado se encuentre entre 1 y 20
//#2Utilizar las características propias de ES6 como let y arrow function para desarrollar el ejercicio.
// Función ES6 
let solicitarNumero = () => {
    valorNum = parseInt(prompt('Ingrese un valor numerico entre 1 y 20.'));
    // verifica que el valor numérico indicado cumpla la condición (estar entre 1 y 20)
    if( valorNum > 0 && valorNum <= 20){
        return true;
    }else{
        return false;
    }
}

//#4 Aplicar un ciclo for anidado para obtener el factorial del número ingresado.
// Multiplicación (tabla)
if(solicitarNumero()){
    
    for (let i = 1; i <= valorNum; i++) {
        let resultado = i * valorNum;
        console.log(`${i} x ${valorNum} = ${resultado}`);
    }

    // para Factorial con ciclo for anidado
    for (let i = 1; i <= valorNum; i++) {
        let res = 1;
        for (let j = 1; j<= i; j++){

            res = res * j
        }
        //#3 Generar y mostrar por consola el resultado de las operaciones.
        console.log(`El factorial de ${i} es: ${res} `);
    }

    
//#1 Aplicar un ciclo for anidado para obtener el factorial del número ingresado
}else{
    alert("Número fuera del rango");
}