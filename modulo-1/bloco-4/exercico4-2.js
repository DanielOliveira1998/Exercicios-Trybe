let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let plus = 0
let dividendo = 0;
let media = 0
let higherNumber = 0
// 1
// for (iten of numbers) {
//     console.log(iten);
// }
// 2
for (let index = 0; index < numbers.length; index += 1) {
    plus += numbers[index];
}
console.log(plus);
// 3
// para esse a média real é a ultima, pois é resultado da divisão do 278(soma total) por 10 (numero total de itens no array) 
for (let index = 0; index < numbers.length; index += 1) {
    dividendo += numbers[index];
    media = dividendo/numbers.length
}
console.log(dividendo);
console.log(media);
// 4
if (media>20){
    console.log("valor maior que 20.");
}
else{
    console.log("valor menor ou igual a 20.");
}
// 5
for (let cont = 0; cont < numbers.length; cont += 1){
    if ( numbers[cont] > higherNumber){
        higherNumber = numbers[cont];
    }
}
console.log(higherNumber);
// 6
let pairAmount = 0;
for (let cont2 = 0; cont2 < numbers.length; cont2 += 1){
    if (numbers[cont2]%2===0){
        pairAmount += 1;
    }
}
console.log(pairAmount);
// 7
let lowerNumber = numbers[0];
for (let cont3 = 0; cont3 < numbers.length; cont3 += 1){
    if ( numbers[cont3] < lowerNumber){
        lowerNumber = numbers[cont3];
    }
}
// 7
console.log(lowerNumber);
for (let cont4 = 0; cont4 < numbers.length; cont4 += 1){
}
console.log(lowerNumber);
// 8
let newArray = [];
for(let cont5 = 0; cont5 <= 25; cont5 += 1){
    newArray.push(cont5);
}
console.log(newArray);
// 9
for(let cont6 = 0; cont6 < newArray.length; cont6 +=1){
    console.log(newArray[cont6]/2);
}