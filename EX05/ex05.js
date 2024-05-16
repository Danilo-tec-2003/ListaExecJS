let Nota1 = parseInt(prompt("Qual foi sua primeira nota? "))
let Nota2 = parseInt(prompt("Qual foi sua Segunda nota? "))
let Media = (Nota1 + Nota2)/2


if(isNaN(Nota1,Nota2)) {
    alert("ERRO, DIGITE UM NÚMERO")
}

document.write(`A média entre ${Nota1} e ${Nota2} é igual a ${Media}`);

