//atividades de array Proa

//01 - Faça um algoritmo para ler 20 números e armazenar em um array. Após a leitura total dos 20 números, o algoritmo deve escrever esse array.

/*resolução:

var numerofinal = 20; 
var array = [];
var array2 = array.join(' ')
for (let numeros = 0; numeros < numerofinal; numeros++) {
    let numerousuer = parseInt(prompt("insira um numero"))
    array.push(numerousuer + "<br>")
    console.log(numeros);
}
var array2 = array.join(' ')
document.getElementById("conteudo").innerHTML = array2
console.log(array2);*/

//02 - Faça um algoritmo para ler 12 números informados pelo usuário e armazenar em dois arrays: um com os números acima de 50. Outro com números abaixo de 50.

/* resolução:

var maior = [];
var menor = [];
var numerofinal = 12;

for(let i = 0; i < 12; i++){
    let usuario = parseInt(prompt("digite os numeros:"));
    if(usuario < 50){
        menor.push(usuario);
    }
    else{
        maior.push(usuario);
    }
}

document.getElementById("dentro").innerHTML = "A baixo de 50: <br>" + menor;
document.getElementById("fora").innerHTML = "A cima de 50: <br>" + maior;*/


