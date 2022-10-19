// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function verifyFibonacci() {
  let values = [0, 1],
    countain = false,
    valuesReceived = prompt(
      'Digite um valor de 1 a 35 e verifique se pertence a sequência de Fibonacci:'
    )

  function fibonacciSeq() {
    let fibonacci = values[values.length - 1] + values[values.length - 2]
    values.push(fibonacci)
  }

  if (valuesReceived > 35 || valuesReceived < 0)
    console.log('O número informado não é válido.')
  else {
    for (let i = 0; i < 35; i++) {
      fibonacciSeq()
    }

    values.forEach(item => {
      if (item == valuesReceived) {
        countain = true
      }
    })

    if (countain)
      console.log('O número informado pertence a sequência de Fibonacci.')
    else
      console.log('O número informado não pertence a sequência de Fibonacci.')
  }
}

verifyFibonacci()
