compras = [
    {
        nome: 'breno',
        idade: 20
    },
    {
        nome: 'joao',
        idade: 40
    },
    {
        nome: 'maria',
        idade: 32
    },
    {
        nome: 'carlinhos maia',
        idade: 98
    },
    {
        nome: 'yudi',
        idade: 55
    }

]

const valor = compras.reduce( (valor, sub) => valor + sub.length, 0 )

let passando = parseInt(valor)

console.log(valor)