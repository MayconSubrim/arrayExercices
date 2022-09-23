//atividades de array Proa

//01 - Faça um algoritmo para ler 20 números e armazenar em um array. Após a leitura total dos 20 números, o algoritmo deve escrever esse array.

//resolução:

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
console.log(array2);

//02 - Faça um algoritmo para ler 12 números informados pelo usuário e armazenar em dois arrays: um com os números acima de 50. Outro com números abaixo de 50.

/* //resolução:

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



//atividade - 03

/*  Drofo e Topper estão em uma aventura mágica. Faça um programa que contenha um inventário para cada um dos dois aventureiros - esse inventário será um array.
Drofo terá um anel da invisibilidade, dois pares de botas mágicas, uma poção do sono e duas poções da inocência em seu inventário e nessa ordem. 
Torper terá uma capa da invisibilidade, uma pedra do despertar,  uma varinha das varinhas, uma poção da inocência e duas poções da mentira, poção anti-inteligência e nessa ordem. 

No meio de sua jornada, Torper consumiu uma das poções da mentira, perdeu sua pedra e ganhou um par de botar mágicas do Drofo, achou um escudo mágico e uma espada mágica. 
Descreva cada uma das ações acima. utilizando código (utilize comentários para ficar mais claro). 

No meio da sua jornada, Drofo, ganhou mais uma bota mágica, usou sua poção do sono e consumiu a poção anti-inteligência do Torper, encontrou um ovo de dragão e uma coxinha.
Descreva cada uma das ações acima. utilizando código.

Exiba o resultado final de cada um dos inventários utilizando "document.write".  */


/*var drofo = ["anel da invisibilidade", " par de bota magica", " par de bota magica", " poção do sono", " poções da inocência", " poções da inocência",];
var topper = ["capa da invisibilidade", " pedra do despertar", " varinha das varinhas", " poção da inocencia", " poção da mentira", " poção da mentira", " poção anti-inteligência"];

topper.splice(4,1) //remove uma poção da mentira
topper.splice(1,1, " par de botas magica")//remove a pedra do despertar
drofo.splice(1,1);//remove um par de botas que fopi para o topper
topper.push(" escudo magico", " espada magica");//adiciona oos intem encontrados pelo topper

drofo.push(" bota magica");//acha mais uma bota magica
drofo.splice(2,1);// remove a poão do sono
topper.splice(5,1);// uso da poção anti inteligencia do drofo
drofo.push(" ovo de dragão", " coixinha");// adciona os intens achados pelo drofo



document.getElementById("drofo").innerHTML = "<strong> iventario do drofo: </strong>" + "<br> <br>" + drofo;

document.getElementById("topper").innerHTML = "<strong> inventario do topper: </strong>" + "<br> <br>" + topper;*/


