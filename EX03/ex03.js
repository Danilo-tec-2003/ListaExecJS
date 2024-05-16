let Funcionario = prompt("Digite o nome do Funcionário")
let Salario = parseInt(prompt("Digite seu Sálario: "))
let Data = "15/05/24";

document.write(`O Funcionário ${Funcionario}  Recebe R$${Salario} em ${Data}`);

if(isNaN(Salario)) {
 
    alert("ERRO! Digite um número, por favor.")
}