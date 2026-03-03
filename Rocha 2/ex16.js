let lado1 = 6
let lado2 = 3
let lado3 = 5
 if (lado1 === lado2 && lado2 === lado3){
    console.log(`equilatero`)
}else if(lado1 === lado2 || lado2 === lado3|| lado3 === lado1){
    console.log(`isoceles`)
}else if (lado1 === lado2 && lado2 === lado3){
    console.log(`equilatero`)
}else{console.log(`escaleno`)}