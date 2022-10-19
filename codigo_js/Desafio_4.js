// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const states = [
  {
    estado: 'SP',
    valor: 67836.43
  },
  {
    estado: 'RJ',
    valor: 36678.66
  },
  {
    estado: 'ES',
    valor: 27165.48
  },
  {
    estado: 'Outros',
    valor: 19849.53
  }
]

function percentFaturCalc() {
  let allStatesvalue = 0,
    percentValue = 0,
    msg = ''

  states.map(value => {
    allStatesvalue += value.valor
  })

  msg =
    'O valor total de faturamento dos estados foi de R$ '.concat(
      allStatesvalue
    ) + ' e o percentual de cada estado foi '

  function percentStatesCalc() {
    states.map(value => {
      let currentValue = value.valor * 100

      percentValue = currentValue / allStatesvalue
      msg += value.estado + ' - '.concat(percentValue.toFixed(0)) + ' %. '
    })
    return msg
  }

  percentStatesCalc()

  console.log(msg)
}

percentFaturCalc()
