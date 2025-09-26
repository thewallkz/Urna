class Candidato { // CANDIDATOS SAO CADASTRADOS POR MEIO DE OBJETOS
    constructor(nome, partido, numero) {
        this.nome = nome;
        this.partido = partido;
        this.numero = numero;
    }
}
var candidato1 = new Candidato('Lula', 'PT', '13');
var candidato2 = new Candidato('Bolsonaro', 'PL', '13');

var Number, cargo = 1; //CONTADOR PARA ALTERNAR NO TITULO DO CARGO, SENDO NUMEROS IMPARES = 'VEREADOR' 
var Number, carac = 0; //CONTADOR DE CARACTERES DIGITADOS

const input1 = document.getElementById('num1'); // INPUT1
const input2 = document.getElementById('num2'); // INPUT2

function limpaInput() { // LIMPA A BOX DO INPUT
    input1.value = '';
    input2.value = '';
}

function mudarCargo() {
    console.log('mudar cargo');
    var titulo = document.getElementById('titulo');
    if (cargo % 2 == 0) {
        titulo.innerHTML = 'VEREADOR'
    } else {
        titulo.innerHTML = 'PREFEITO'
    }
    cargo++;
}
function confirmar() {
    console.log('confirmar');
    carac = 0; // RESETA CONTADOR DE CARACTERES
}

function imprimir() { // RESPONSAVEL PELA IMPRESSAO DOS DADOS DO CANDIDATO
    console.log('imprimir');
    const nomee = document.getElementById('nomeCandidato');
    const partidoo = document.getElementById('partidoCandidato');
    nomee.innerHTML = candidato1.nome;
    partidoo.innerHTML = candidato1.partido;
}

function um() {
    if (carac == 0) {
        input1.innerHTML = 1;
    } else {
        input2.innerHTML = '1';
    }
    //carac++; // +1 NO CONTADOR DE CARACTERES
}

function finalizarVoto() {
    let botao = document.getElementById('finalizar');
    botao.innerHTML = 'FINALIZAR'
}
function proximoVoto() {
    let botao = document.getElementById('proximo');
    botao.innerHTML = 'PROXIMO'

}
function finalizacao() {
    finalizarVoto();
    proximoVoto();
}