const readline = require ('readline');

const rl =readline.createInterface({

    input: process.stdin,
    output: process.stdout


});



function mostrarMenu(){

    rl.question(`-------------------------------------------
    INGRESE EL NUMERO DE LA OPCION QUE DESEA REALIZAR
    -------------------------------------------
    1. Imprimir todos los múltiplos de 3 que hay entre 1 y 100.
    2. Imprimir los números impares entre 0 y 100.
    3. Imprimir los números pares del 1 al 100.
    4. Escribir un programa que imprima por pantalla los cuadrados de los números del 1 al 30.
    5. Escribir un programa que sume los cuadrados de los cien primeros números naturales,
    mostrando el resultado en pantalla.
    6. Dados dos números naturales, el primero menor que el segundo, generar y mostrar todos los
    números comprendidos entre ellos en secuencia ascendente.
    7. Sumar todos los números que se digitan por teclado mientras no sea cero.
    -------------------------------------------
    99.SI DESEA SALIR DEL PROCESO:`,(respuesta)=>{

        const option=parseInt(respuesta);

        switch(option){

            case 1:

            for(let i=3 ; i<=100; i+=3){
                console.log("--------------------");
                console.log(i);
            }

            mostrarMenu();

            break;

            case 2:

            for(let i=1; i<=100; i+=2){

                console.log("--------------------");
                console.log(i);

            }
            mostrarMenu();

            break;

            case 3:

            for(i=0; i<=100; i+=2){
                
                console.log("--------------------");
                console.log(i);
            }

            mostrarMenu();
            break;

            case 4:

            for (i=1; i<=30; i+=1){

                let result= i**2;
                console.log("--------------------");
                console.log(`${result}`);



            }

            mostrarMenu();

            break;

            case 5: {
                let sumtotal = 0; 
            
                for (let i = 1; i <= 100; i += 1) {
                    let result = i ** 2;
                    sumtotal += result; 
                    console.log("--------------------");
                    console.log(`${result}`);
                }
            
                console.log("La suma total es:", sumtotal); // Imprime el valor total después del bucle
                
                mostrarMenu();

            }

            break;

            case 6:
                rl.question('Ingrese un número:', (numero1) => {
                    rl.question('Ingrese otro número:', (numero2) => {
            
                        const number1 = parseInt(numero1);
                        const number2 = parseInt(numero2);
            
                        if (number1 >= number2) {
                            console.log("El primer número debe ser menor que el segundo.");
                            
                            
                        } else {
                            console.log(`Números comprendidos entre ${number1} y ${number2} en secuencia ascendente:`);
                            let result = number1;
                            while (result <= number2) {
                                console.log(result);
                                result++;
                            }
                            
                        }

                        mostrarMenu();
                    });
                });
            break;
            
            case 99:
                rl.close(); 
            break;

            default:
                console.log('Opción no válida. Por favor, seleccione una opción válida.');
                mostrarMenu(); 
            break;


        }







    });

}

mostrarMenu();