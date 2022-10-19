// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

const string = prompt('Insira uma palavra, por favor: ')
let newString = ''

for (let i = string.length - 1; i > -1; i--) {
  newString += string[i]
}

console.log(
  'Assim fica a palavra que você digitou ao contrário - ' +
    newString.toUpperCase()
)
