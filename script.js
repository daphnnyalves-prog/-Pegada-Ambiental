document
.getElementById("calcular")
.addEventListener("click", calcular);

function calcular(){

let transporte =
Number(document.getElementById("transporte").value);

let energia =
Number(document.getElementById("energia").value);

let reciclagem =
Number(document.getElementById("reciclagem").value);

if(
transporte === 0 ||
energia === 0 ||
reciclagem === 0
){

document.getElementById("resultado")
.innerHTML =
"⚠️ Preencha todos os campos.";

return;

}

let pegada =
transporte +
energia +
reciclagem;

let classificacao = "";
let icone = "";

if(pegada <= 30){

classificacao = "Excelente";
icone = "🌱";

}
else if(pegada <= 60){

classificacao = "Boa";
icone = "♻️";

}
else if(pegada <= 80){

classificacao = "Regular";
icone = "⚠️";

}
else{

classificacao = "Alta";
icone = "🚨";

}

document.getElementById("resultado")
.innerHTML =

`
<h2>${icone} Resultado</h2>

<p>
Sua Pegada Ambiental foi:
<strong>${pegada} pontos</strong>
</p>

<p>
Classificação:
<strong>${classificacao}</strong>
</p>

<p>
Quanto menor a pontuação,
menor o impacto ambiental.
</p>
`;

}