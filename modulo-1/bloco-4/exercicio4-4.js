let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}
// 1
console.log("Bem-vinda,", info.personagem);
// 2
info.recorrente = "sim"
console.log(info);
// 3
for (let key in info){
    console.log(key);
}
// 4
console.log("quatro");
for (let key in info){
    console.log(info[key]);
}
// 5
console.log("cinco");
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
}
for (let key in info, info2){
    console.log(info[key], info2[key]);
}
