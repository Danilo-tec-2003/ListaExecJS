let N1 = parseInt(prompt("Digite um Valor: "))
let N2 = parseInt(prompt("Digite outro Valor: "))

let Soma = (N1 + N2)

if (isNaN(N1,N2)) {
    alert("erro, Insira um número por favor!")
}

alert(`A soma dos Valores inseridos é: ${Soma}`)
