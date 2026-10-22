//console.log() Mostra uma informação no console!
console.log("olá, mundo!")
console.log( "Bom dia com Jesus");
console.log( 5+ "7");
console.log( typeof"olá mundo");
console.log( typeof 17);//number
console.log( typeof 10.5);//number
console.log( typeof true);//boolean
console.log( typeof false);//boolean

//VÁRIAVEL
//const não pode ser seu valor alterado durnte o programa
nome =" Nick ";
console.log(nome);

//let pode ter seu valor alterado durante o programa
let idade = 17;
console.log(idade);
console.log("olá" + nome + ", que tem " + idade + " anos. ");




idade = 18;
console.log(idade);
console.log(`olá ${nome}, que tem ${idade}anos.`);




nome2 = " Daiane "
let peso =  45 ;
console.log ("olá" + nome + ",você está pesando " +  peso + " kg.");

peso = 90;
console.log(`olá ${nome2},você está pesando ${peso} kg. `);



///metodos de string
const texto ="javaScript"

//conta quantos caracteres a string tem
console.log(texto.length)

//altera todas as letras para maiusculo
console.log(texto.toLocaleUpperCase())

//altera todas as letras para minúsculo
console.log(texto.toLocaleUpperCase())

const nome_completo = "Nicolly Soares de Jesus" 

console.log(nome_completo.includes("Jesus") )






console.log(10>5)//true
console.log(10<5)//false
console.log(10<= 5)//false
console.log("10" == 10)//true
console.log("10" === 10)//false
console.log(10 !== 5)//true


const idadepessoa =17

console.log(idade >= 18)//false
console.log(idade >= 16)//true

const nome_completo3 = "amanda azevedo"

console.log(nome_completo3=="amanda azevedo")



//coletamos a idade da pessoa
let pessoaIdade = 15;

                                                     //tudo que está no ( ) é uma condição o porque e com que idade pode abrir um site
//verificar se a idade é maior ou igual a 18
if(pessoaIdade >=18){
//se maior ou igual a 18 então é ela maior de idade
console.log("já pode ser preso HAHAHAHA")
}else{
   
 //senão, então ela é menor de idade
 
 console.log("não vá para a balada!")
    

    

}

//coletamos a idade da pessoa 
let idadeVotacao =12
//verificar se a pessoa é maior de 70
if(idadeVotacao >70){
    console.log("você não é obrigada a votar")
}else if(idadeVotacao >= 18){

    //se a idade da pessoa for maior ou igual a 18
    
    console.log("você tem que votar obrigatoriamente")
}else if(idadeVotacao >=16){
    //se a idade da pessoa for maior ou igual a 16
    console.log("você não é obrigado, mas caso queira pode!")
}else{
    //se não for nenhuma das duas alternativas anteriores
    console.log("Você não pode votar")

}


///////------////////
let idadedirigir = 19
let temCNH = true
let temcarro = false

if(idadedirigir>=18 && temCNH == true && temcarro == true){
    console.log("Você pode Dirigir")
}else{
    console.log( "você não pode Dirigir!")
}

let ehprofessor = false
let ehAluno =false

if (ehprofessor == true || ehAluno ==true){
    console.log("Você tem direito a meia entrada")
}else{
    console.log("Você não tem direito a meia-entrada")
}

//&& =e
// || = ou




nome = "Aprovacao ou desaprovacao escolar"
console.log("Aprovacao ou desaprovacao escolar")

let aprovaçãoEscola = 7


if (aprovaçãoEscola >= 6) {
    console.log("Você foi aprovado")
} else {
    console.log("Você foi reprovado")
}

nome2 = "comparacao de dois numeros"
console.log("comparacao de dois numeros")

let numero1 = 1
let numero2 = 4
if (numero2 > numero1) {
    console.log("você perdeu!")
} else if (numero2 > numero1) {
    console.log("numero2 maior")
} else {
    console.log("embate")
}











nome3 = "Verificacao de senha"
console.log("Verificacao de senha")

const senha_senai = "senai123"
if (senha_senai == "senai123") {
    console.log("Acesso autorizado")
} else {
    console.log("senha Incorreta")
}








let graus = 18

if (graus < 16) {
    console.log("Frio");
} else if (graus >= 16 && graus <= 25) {
    console.log("Moderado");
} else {
    console.log("Quente");
}





let nota = 10
if (nota >= 9) {
    console.log("excelente")
} else if (nota >= 7) {
    console.log("bom")
} else if (nota >= 5) {
    console.log("regular")

} else {
    console.log("Insuficiente")
}






const data = 6

if (data == 1) {
    console.log("segunda")

} else if (data == 2) {
    console.log("terça")
} else if (data == 3) {
    console.log("quarta")
} else if (data == 4) {
    console.log("quinta")
} else if (data == 5) {
    console.log("sexta")
} else if (data == 6) {
    console.log("sábado")
} else if (data == 7) {
    console.log("domingo")
}


//1

let numero01 = 67


if (numero01 > 10 && numero01 < 50) {
    console.log("Seu numero está entre o intervalo");
} else {
    console.log("seu numero está fora do intrvalo");
}


//2 — Elegibilidade para estágio
//Uma oportunidade de estágio é destinada a candidatos com idade entre 16 e 24 anos, inclusive. Receba a idade e informe se o candidato atende ao requisito.

let candidato = 23

if (candidato > 16 && candidato < 24) {
    console.log("você atende ao requisito")
} else {
    console.log("Você não atende ao requisito")
}


//03 — Frete grátis
//Uma loja oferece frete grátis para clientes que realizam compras de R$ 200 ou mais ou que são assinantes. e Receba o valor da compra e uma variável booleana indicando se o cliente é assinante. Informe se ele tem direito ao frete grátis.


let clientes = 152
let assinante = true
if (clientes >= 200 || assinante) {
    console.log("você é assinante e tem direito ao frete gratis")
} else {
    console.log("você não tem direito ao frete gratis")
}





//04 — Dia de descanso
//Receba o nome de um dia da semana. Se for sábado ou domingo, exiba "Fim de semana". Caso contrário, exiba "Dia útil".



let diadasemana = "Domingo"

if (diadasemana == "Sabado" || diadasemana == "Domingo") {
    console.log("Fim de semana")
} else {
    console.log("Dia útil")
}


//05 — Promoção especial
//Uma loja aplica 15% de desconto se o cliente:
//Realizar uma compra de R$ 150 ou mais e for assinante;
//  ou
//Possuir um cupom promocional válido, independentemente de ser assinante.
//Receba o valor da compra e duas variáveis booleanas (assinante e cupom válido). Informe se o desconto será aplicado e apresente o total final.

let valorGasto = 300
let cupom = true
let assinantes = false
if (assinantes == true && valorGasto >=150 || cupom ==true ) {
    console.log(`você têm direito`)
    console.log(`Total final: ${valorGasto * 0.85}`)
} else {
    console.log("desconto não aplicado")
    console.log(`Total final: ${valorGasto}`)

}



