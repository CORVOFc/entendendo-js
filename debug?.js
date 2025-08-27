// Lista de destinos disponíveis.
console.log('trabalhando com condicionais.')
console.log('=============================================================================')
const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");

// Idade do comprador.

const idadeComprador = 18;

const estaAcompanhada = false;

let temPassagemComprada = false;

const destino = "São Paulo";


// Exibe a lista de destinos.
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

console.log("---------------------------------------");

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false; 
while(contador<3){
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe");
        destinoExiste = true;
        break;

    } 
    contador += 1; 
    
}

console.log("Destino existe: ", destinoExiste);
