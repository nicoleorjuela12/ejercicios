const readline = require('readline');

const rl =readline.createInterface({

    input: process.stdin,
    output: process.stdout

});


function mostrarMenu(){

    rl.question(`-------------------------------------------
    INGRESE EL NUMERO DE LA OPCION QUE DESEA REALIZAR
    -------------------------------------------
    1. Escribir un algoritmo para saber si el número ingresado por teclado es positivo o negativo.
    2. Escribir un algoritmo que reciba dos números por teclado y diga cuál es el mayor y cuál el
    menor.
    3. Escriba un programa que lea tres números enteros positivos y que calcule e imprima en
    pantalla el menor y el mayor de ellos.
    4. Dados dos números A y B, sumarlos si A es menor que B o sino restarlos.
    5. Dados dos números A y B encontrar el cociente entre A y B. Recordar que la división por cero
    no está definida, en ese caso debe aparecer una leyenda anunciando que la división no es
    posible.
    6. Dados dos números A y B, sumarlos si al menos uno de ellos es negativo, en caso contrario
    multiplicarlos.
    7. Escribir un algoritmo que determine si un año es bisiesto o no.
    -------------------------------------------
    99.SI DESEA SALIR DEL PROCESO:`,(respuesta)=>{


    
        const option=parseInt(respuesta);

        switch(option){

            case 1:

            rl.question('ingrese un numero, puede ser positivo o negativo:', (number) => {
                
                if (parseInt(number)> 0){

                    console.log("--------------------");
                    console.log(`El  numero es positivo`);

                }

                else{
                    console.log("--------------------");
                    console.log("El  numero es negativo");

                }


            });

            break;

            case 2: 

            rl.question('Digite un numero:',(number1) => {
                rl.question('Digite otro numero:',(number2) => {

                    if (parseInt(number1)>parseInt(number2)){

                        console.log("--------------------");
                        console.log(`El numero mayor es:${number1} y el menor es el:${number2}`);

                    }

                    else{
                        console.log("--------------------");
                        console.log(`El numero mayor es:${number2} y el menor es el:${number1}`);

                    }

                });



            });

            break;


                
            


        

        }

    });
}