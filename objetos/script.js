const motorista = {
    idade: 18,
    temCNH: true,
    temCarro: false
}

console.log(motorista)

motorista.idade = motorista.idade += 1;
motorista.temCNH = false;
motorista.temCarro = true;

console.log(motorista)

//atividade

//01 crie um objeto com as propriedades nome, marca, preco e disponivel.
// Exiba separadamente o nome e o preco do produto no console

const propriedades = {
    nome: "avivada",
    marca: "vill",
    preco: 1000,
    disponivel: false
}

console.log(propriedades)
propriedades.nome = propriedades.nome += "avivada"
propriedades.preco = propriedades.preco = 1000
console.log(propriedades.nome)
console.log(propriedades.preco)



//laco de repeticao

for (let contador = 0; contador <= 10; contador++) {
    console.log(contador)
}

//02 receba um numero inteiro em uma variavl e exiba sua tabuada de multiplicacao de 1 a 10
let numero = 5


for (let contador = 1; contador <= 10; contador++) {


    console.log(`${contador} x ${numero} = ${contador * numero}`)

}

//´´ estrutura de decisão

//while= enquanto
let contador = 1;
let numerowhile = 12;
while (contador <= 10) {
    console.log(contador * numerowhile);
    contador++
}


//03- exiba os numeros pares de 20 até 0, em ordem decrescente
let numero1 = 20
while(numero1 > 0){
    console.log ( `while: ${numero1}`)
numero1 -= 1
}

let numero2 = 0
do{
    console.log(`do while: ${numero2}`)
    numero2 -= 1

}while(numero1 > 0); //faça enquanto


//04 -

let numeroInteiro= 10
while(numeroInteiro >=1){
   console.log ( numeroInteiro)
   numeroInteiro -=1 
}
console.log("Fim da contagem")



//listas

const frutas = ["maçã", "banana", "uva", "carambola","laranja"]
console.log(frutas);
// trocar valor
frutas[0] = "pera"
//adiciona o numero    depois coloca o nome que voce quer trocar     


//mostra só as frutas que estão numeradas no console
console.log(frutas [0]);
console.log(frutas [2]);

//quantos tem
console.log(frutas.length);
// adiciona mais um elemento a tabela

frutas.push("morango", "manga");
console.log(frutas);


//tira o ultimo elemento da lista
frutas.pop();
console.log(frutas);


//deixar em ordem alfabetica
frutas.sort
console.log(frutas)




//funções

function somar(number1, number2){
    console.log(`a soma dos numeros é ${number1 + number2}`);

    //para retonar ao valor da soma e é salvo dentro de uma variavel
    return number1 + number2
}
 const soma = somar(1,1);
somar(6,7)

function dividir(number1, number2){

    console.log(` ${number1}/ ${number2} = ${number1 / number2} `);
}





//01 — Adicionando elementos
//Crie uma lista chamada jogos com 3 jogos. Adicione mais 2 jogos ao final da lista e exiba o resultado no console.

const instrumentos = ["sax baritono","sax alto", "flauta"]
console.log( instrumentos);


instrumentos.push("sax soprano","bateria");
console.log(instrumentos);

//02 — Removendo o último item
//Crie uma lista chamada materiais com 5 materiais escolares. Remova o último elemento e exiba a lista atualizada. Em seguida, exiba quantos elementos restaram.
const materiaisEscolares= ["caderno","caneta", "lapis", "lapisera"]
console.log(materiaisEscolares);

materiaisEscolares.pop()
console.log(materiaisEscolares);
console.log(materiaisEscolares.length);


//03 — Saudação personalizada
//Crie uma função chamada saudar que receba o nome de uma pessoa como parâmetro e exiba uma saudação contendo esse nome. Execute a função com dois nomes diferentes.








console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();