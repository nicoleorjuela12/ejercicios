const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    rl.question(`-------------------------------------------
INGRESE EL NUMERO DE LA OPCION QUE DESEA REALIZAR
-------------------------------------------
1. Calcular el área de un triángulo
2. Ingresar dos números por teclado y sumarlos
3. Ingresar un número y visualizar el número elevado al cuadrado
4. Escribir un algoritmo que convierta de euros a dólares
5. Escribir un algoritmo que pida el lado de un cuadrado y muestre el valor del área y del perímetro
6. Escribir un algoritmo que determine el área y el volumen de un cilindro
7. Realizar un algoritmo que lea el radio de una circunferencia y escriba la longitud de la misma y el área (pi*r)^2 del círculo inscrito
8. Calcular el promedio de tres (3) números ingresados por teclado
-------------------------------------------
99.SI DESEA SALIR DEL PROCESO:`, (respuesta) => {
        const option = parseInt(respuesta);
        switch (option) {
            case 1:
                rl.question('Ingrese la base:', (base) => {
                    rl.question('Ingrese la altura:', (height) => {
                        let result = parseInt(base) * parseInt(height) / 2;
                        console.log("--------------------");
                        console.log(`El área es: ${result}`);
                        console.log("--------------------");
                        mostrarMenu(); // Mostrar el menú nuevamente
                    });
                });
            break;

            case 2:
                rl.question('Ingrese un número:', (number) => {
                    rl.question('Ingrese un número:', (number2) => {
                        let result = parseInt(number) + parseInt(number2);
                        console.log("--------------------");
                        console.log(`El resultado de esta suma es: ${result}`);
                        console.log("--------------------");
                        mostrarMenu(); // Mostrar el menú nuevamente
                    });
                });
            break;

            case 3:
                rl.question('Ingrese un número:', (number) => {
    
                    let result =(parseInt(number)) ** 2 ;
                    console.log("--------------------");
                    console.log(`El cuadrado de este número es: ${result}`);
                    console.log("--------------------");
                    mostrarMenu(); // Mostrar el menú nuevamente
                 });
            break;

            case 4:
                rl.question('Ingrese la cantidad de dolares:', (dollars) => {
    
                    let result = parseInt(dollars) * 1.09;
                    console.log("--------------------");
                    console.log(`El resultado de esta conversión es: ${result}`);
                    console.log("--------------------");
                    mostrarMenu();
                });
            break;

            case 5:
                rl.question('Ingrese el valor de un lado del cuadrado:', (number) => {

                    let result = parseInt(number) * (number);
                    let result2 = parseInt(number) * 4;
                    console.log("--------------------");
                    console.log(`El área del cuadrado es: ${result} El perímetro del cuadrado es: ${result2}`);
                    console.log("--------------------");
                    mostrarMenu(); // Mostrar el menú nuevamente
                });
            break;

            case 6:
                rl.question('ingrese el radio del cilindro:', (ratio) =>{
                    rl.question('ingrese la altura del cilindro:', (height) =>{

                        let area = 2*(3.1416)*parseInt(ratio)**2  + 2*(3.1416)*parseInt(ratio)*parseInt(height);
                        let volume = (3.1416)*parseInt(ratio)**2*parseInt(height);


                        console.log("--------------------");
                        console.log(`El área del cilindro es: ${area} El volumen del cilindro es: ${volume}`);
                        console.log("--------------------");
                        mostrarMenu(); 

                    });

                });

            break;

            case 7:


            case 8: 

                rl.question('Ingrese un numero:', (number1)=>{
                    rl.question('Ingrese su segundo numero:', (number2)=>{
                        rl.question('Ingrese su tercer numero:',(number3)=>{

                            const num1 = parseInt(number1);
                            const num2 = parseInt(number2);
                            const num3 = parseInt(number3);

                                
                            const average = (num1 + num2 + num3) / 3;
                            console.log("--------------------");
                            console.log(`El promedio de los tres numeros es: ${average}`);
                            console.log("--------------------");
                            mostrarMenu(); 

                        });

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
