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

            rl.question('ingrese un numero, puede ser positivo o negativo:', (number1) => {

                const number =parseInt (number1);
                
                if (number > 0){

                    console.log("--------------------");
                    console.log(`El  numero es positivo`);
                    console.log("--------------------");


                }

                else{
                    console.log("--------------------");
                    console.log("El  numero es negativo");
                    console.log("--------------------");


                }

                mostrarMenu();


            });

            break;

            case 2: 

            rl.question('Digite un numero:',(num1) => {
                rl.question('Digite otro numero:',(num2) => {

                    const number1 = parseInt (num1);
                    const number2 = parseInt (num2);


                    if (number1>number2){

                        console.log("--------------------");
                        console.log(`El numero mayor es:${number1} y el menor es el:${number2}`);
                        console.log("--------------------");


                    }

                    else{
                        console.log("--------------------");
                        console.log(`El numero mayor es:${number2} y el menor es el:${number1}`);
                        console.log("--------------------");


                    }

                    mostrarMenu();


                });


            });

            break;


            case 3:
                rl.question('Digite el primer numero positivo y entero:',(num1)=>{
                    rl.question('Digite el segundo numero positivo y entero:',(num2)=>{
                        rl.question('Ddigite el tercer numero positivo y entero:',(num3)=>{

                            const number1 = parseInt (num1);
                            const number2 = parseInt (num2);
                            const number3 = parseInt (num3);


                            if( number1 < 0 || number2 < 0 || number3 < 0){

                                console.log("--------------------");
                                console.log('Ingrese un numero valido');
                                console.log("--------------------");

                            }

                            else{

                                const menor =Math.min(number1,number2,number3);
                                const mayor =Math.max(number1,number2,number3)
                            }

                        });


                    });


                });


            case 99:
                rl.close();
            break;

                
            


        

        }

    });
}

mostrarMenu(); 