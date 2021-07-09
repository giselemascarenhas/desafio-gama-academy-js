const livros = require('./database')

// pegar o input

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N')

// Se for sim, mostrar as categorias disponíveis e pergunta qual categoria será escolhida

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveos')
    console.log("Biografia", "/ Tecnologia", "/ Guia para Entrevistas", "/ Autoajuda", "/ Romance")

    const entradaCategoria = readline.question("Qual categoria você escolhe: ")

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
}

// Se não, mostra todos os livros em ordem crescente pela quantidade de páginas

else {
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log("Esses são todos os livros disponíveis: ")
    console.table(livrosOrdenados)
}