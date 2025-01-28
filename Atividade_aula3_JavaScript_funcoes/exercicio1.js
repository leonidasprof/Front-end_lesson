// Atividade1
function nomeCompleto(nome, sobrenome) {
    return nome + " " + sobrenome;
}

// Saída
console.log(nomeCompleto("João", "Silva")); // Saída: João Silva

let visualizacoes = 0;


// Atividade2
function incrementarVisualizacoes() {
    visualizacoes++
}

// Exemplo de uso
incrementarVisualizacoes();
console.log(visualizacoes); 

// Atividade3

const multiplicar = (a, b) => a * b;

// Exemplo de uso
console.log(multiplicar(5, 3)); // Saída: 15


// Atividade4

function ola(nome, callback) {
    callback(nome);
}

function mostrarSaudacao(nome) {
    console.log("Olá, " + nome + "! Seja bem-vindo!");
}

// saida
ola("Lucas", mostrarSaudacao); // Saída: Olá, João! Seja bem-vindo!


// Atividade5

function transformarFrase(frase, callback) {
    return callback(frase);
}

function converterMaiusculas(frase) {
    return frase.toUpperCase();
}

function inverterPalavras(frase) {
    return frase.split(" ").reverse().join(" ");
}

// Umbora vê se tá certo
const fraseOriginal = "Doideira da gota";

const fraseMaiuscula = transformarFrase(fraseOriginal, converterMaiusculas);
console.log(fraseMaiuscula); 

const fraseInvertida = transformarFrase(fraseOriginal, inverterPalavras);
console.log(fraseInvertida); 

// atividade 6

const listaNumeros = [1, 2, 3, 4, 5];

const numMult = listaNumeros.map(num => num * num);

console.log(numMult); // Saída: [1, 4, 9, 16, 25]


// atividade 7

function filtrarPares(numeros) {
    return numeros.filter(num => num % 2 === 0);
}

// Exemplo 

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Pares = filtrarPares(lista);

console.log(Pares); // Saída: 


// atividade 8

function calcularSoma(numeros) {
    return numeros.reduce((soma, num) => soma + num, 0);
}

const listaExemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const somaTotal = calcularSoma(listaExemplo);

console.log(somaTotal);

// atividade 9

function soma(a, b) {
    return a / b;
}

console.log(soma(10, 2)); 
console.log(soma(9, 3));  

// atividade 10
function ehPalindromo(numero) {
    // Modifica
    const str = numero.toString();
    
    // string está ao contratrio
    const strReversa = str.split('').reverse().join('');
    
    if (str === strReversa) {
        return "é verdadeiro";
    } else {
        return "é falso";
    }
}

// resultados
console.log(ehPalindromo(232));  
console.log(ehPalindromo(789));  
console.log(ehPalindromo(1221)); 

// atividade 10

// troca para minusculo
const imprimirNomesMinusculos = (nomes) => {
    nomes.forEach(nome => console.log(nome.toLowerCase()));
}

// Bora vê se funciona
const nomesAlunos = ["CRISTINA", "LEÔNIDAS", "ARTHUR", "RAPHAEL"];
imprimirNomesMinusculos(nomesAlunos);


// atividade 11

function filtrarImparesPositivos(numeros) {
    return numeros.filter(num => num > 0 && num % 2 !== 0);
}

// Danousse
const listagem = [-5, -3, -1, 0, 1, 2, 3, 4, 5];
const imparPosi = filtrarImparesPositivos(listagem);

console.log(imparPosi); 

// atividade 12

function contarPalavrasLongas(palavras) {
    return palavras.filter(palavra => palavra.length > 5).length;
}

// Exemplo de uso
const listaPalavras = ["elefante", "cachorro", "gato", "passarinho", "leão"];
const quantidadePalavrasLongas = contarPalavrasLongas(listaPalavras);

console.log(quantidadePalavrasLongas); // Saída: 3



