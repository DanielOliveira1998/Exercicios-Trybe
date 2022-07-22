// Variáveis programas 1 a 5
let a = 10;
let b = 2;
let c = 200;
const d = -3;
let ang1 = 10;
let ang2 = 60;
let ang3 = 110;
// 1
console.log("Item 1");
console.log (a+b);
console.log (a-b);
console.log (a*b);
console.log (a/b);
console.log (a%b);
// 2
console.log("Item 2");
if (a>b){
    console.log(a+" é o maior numero");
}
else{
    console.log(b+" é o maior numero");
}
// 3
console.log("Item 3");
if (a>b && a>c){
    console.log(a+" é o maior numero");
}
else if (b>a && b>c){
    console.log(b+" é o maior numero");
}
else {
    console.log(c+" é o maior numero");
}
// 4
console.log("Item 4");
if (d<0){
    console.log("negative");
} 
else{
    console.log("positive");
}
// 5
console.log("Item 5");
if(ang1+ang2+ang3 === 180){
    console.log("true");
}
else if(ang1<0 || ang2<0 || ang3<0){
    console.log("invalid");
}
else{
    console.log("false");
}
// variaveis programas 6
let chess = "PeãO";
let result = chess.toLowerCase();
let percentage = 88;
let num1 = 9;
let num2 = 1;
let num3 = 2;
// 6
console.log("Item 6");
if(result === "peao" || result === "peão"){
    console.log("1 casa par frente, exceto no primeiro movimento, quando pode mover-se duas casas.");
}
else if(result === "cavalo"){
    console.log("Move-se duas casas na horizontal e uma na vertical ou duas casas na vertical e uma na horizontal, formando um L. É a única peça que pode saltar outras peças");
}
else if(result === "bispo"){
    console.log("Move-se na diagonal, quantas casas quiser respeitando a limitação de não ocupar casas já ocupadas por outras peças.");
}
else if(result === "torre"){
    console.log("Move-se na horizontal ou vertical, quantas casas quiser respeitando a limitação de não ocupar casas já ocupadas por outras peças.");
}
else if(result === "dama"){
    console.log("Move-se em qualquer diração, quantas casas quiser respeitando a limitação de não ocupar casas já ocupadas por outras peças.");
}
else if(result === "rei"){
    console.log("Move-se em qualquer direção, uma única casa respeitando a limitação de não ocupar casas já ocupadas por outras peças.");
}
else{
    console.log("Error");
}
// 7
console.log("Item 7");
if(percentage>=90 && percentage<=100){
    console.log("A");
}
else if (percentage>=80 && percentage<90){
    console.log("B");
}
else if(percentage>=70 && percentage<80){
    console.log("C");
}
else if(percentage>=60 && percentage<70){
    console.log("D");
}
else if(percentage>=50 && percentage<60){
    console.log("E");
}
else if(percentage>=0 && percentage<50){
    console.log("F");
}
else{
    console.log("Erro");
}
// 8 e 9
console.log("Item 8 e 9");
if(num1%2===0 || num2%2===0 || num3%2===0){
    console.log("True");
}
else{
    console.log("False");
}
// 10
console.log("Item 10");

