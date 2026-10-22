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
let numero2 =20
for(let contador = 0; numero2 >=20; contador ++ ){

    console.log(`${contador} - ${numero2} = ${contador - numero2}`)
}