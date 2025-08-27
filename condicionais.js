// Lista de destinos disponíveis.
console.log('trabalhando com condicionais.')
console.log('=============================================================================')
const listaDeDestinos = new Array("São Paulo", "Rio de Janeiro", "Salvador");

// Idade do comprador.

const idadeComprador = 18;

const estaAcompanhada = false;

const temPassagemComprada = true;




// Exibe a lista de destinos.
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

console.log("---------------------------------------");

// Verifica se o comprador é maior de idade.
// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade.");
//     listaDeDestinos.splice(1, 1); // Remove um destino da lista (simulando a compra).
//     console.log("-------------------------------");
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado.");
//     listaDeDestinos.splice(1, 1)
// } else {
//     console.log("Não é maior de idade e não pode comprar.");
//     console.log("---------------------------------");
// }



 if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("boa Viagem");
    listaDeDestinos.splice(2, 1); // Remove um destino da lista (simulando a compra).
    console.log("-------------------------------");
}  else {
    console.log("Não é maior de idade e não posso vender.");
    console.log("---------------------------------");
}

console.log("Embarque: \n \n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem!")
}else {
    console.log("você não pode embarcar!!!!")
}




// Exibe a lista de destinos atualizada.
console.log("Lista de destinos após a verificação:");
console.log(listaDeDestinos);
console.log("--------------------------------");

// console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨")
// console.log(idadeComprador > 18 );
// console.log(idadeComprador < 18 );
// console.log(idadeComprador <= 18 );
// console.log(idadeComprador >= 18 );
// console.log(idadeComprador == 18 );
// console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨")
