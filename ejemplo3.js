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
                rl.question('Ingrese la base:', (base1) => {
                    rl.question('Ingrese la altura:', (altura) => {
                        const base = parseInt(base1);
                        const height = parseInt(altura);
                        let result = base * height / 2;
                        console.log("--------------------");
                        console.log(`El área es: ${result}`);
                        console.log("--------------------");
                        mostrarMenu(); // Mostrar el menú nuevamente
                    });
                });
            break;

            case 2:
                rl.question('Ingrese un número:', (number) => {
                    rl.question('Ingrese un número:', (numberr) => {
                        const number = parseInt(number);
                        const number2 = parseInt(numberr);
                        let result = number + number2;
                        console.log("--------------------");
                        console.log(`El resultado de esta suma es: ${result}`);
                        console.log("--------------------");
                        mostrarMenu(); 
                    });
                });
            break;

            case 3:
                rl.question('Ingrese un número:', (number1) => {
    
                    const number = parseInt(number1);
                    let result = number ** 2 ;
                    console.log("--------------------");
                    console.log(`El cuadrado de este número es: ${result}`);
                    console.log("--------------------");
                    mostrarMenu(); 
                 });
            break;

            case 4:
                rl.question('Ingrese la cantidad de dolares:', (dollarss) => {
    
                    const dollars = parseInt(dollarss);
                    let result = dollars * 1.09;
                    console.log("--------------------");
                    console.log(`El resultado de esta conversión es: ${result}`);
                    console.log("--------------------");
                    mostrarMenu();
                });
            break;

            case 5:
                rl.question('Ingrese el valor de un lado del cuadrado:', (number1) => {

                    const number = parseInt(number1);
                    let result = number * number;
                    let result2 = number * 4;
                    console.log("--------------------");
                    console.log(`El área del cuadrado es: ${result} El perímetro del cuadrado es: ${result2}`);
                    console.log("--------------------");
                    mostrarMenu();
                });
            break;

            case 6:
                rl.question('ingrese el radio del cilindro:', (radio) =>{
                    rl.question('ingrese la altura del cilindro:', (altura) =>{

                        const ratio = parseInt(radio);
                        const height = parseInt(altura);
                        let area = 2 * (3.1416) * ratio ** 2 + 2 * (3.1416) * ratio * height;
                        let volume = (3.1416) * ratio ** 2 * height;

                        console.log("--------------------");
                        console.log(`El área del cilindro es: ${area} El volumen del cilindro es: ${volume}`);
                        console.log("--------------------");
                        mostrarMenu(); 

                    });

                });

            break;

            case 7:

                rl.question('Ingrese el valor del radio de la circunferencia:',(ratio1)=>{

                    const ratio = parseInt(ratio1);

                    let length = 2*(3.1416)*(ratio);
                    let area = (3.1416)*(ratio)**2;

                    console.log("--------------------");
                    console.log(`La longuitud de la circunferencia es : ${length} El area del circulo inscrito: ${area}`);
                    console.log("--------------------");

                    mostrarMenu(); 


                });

            break;


            case 8: 

                rl.question('Ingrese un numero:', (num1)=>{
                    rl.question('Ingrese su segundo numero:', (num2)=>{
                        rl.question('Ingrese su tercer numero:',(num3)=>{

                            const number1 = parseInt(num1);
                            const number2 = parseInt(num2);
                            const number3 = parseInt(num3);

                            let average = (number1 + number2 + number3) / 3;
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
