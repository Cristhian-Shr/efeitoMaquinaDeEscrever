const mensagem = "Escreva aqui o que você quer que o usuário veja";
const velocidade = 50;
let i = 0;

function maquinaEscrever() {
  if (i < mensagem.length) {
    document.getElementById("efeito").innerHTML += mensagem.charAt(i);
    i++;
    setTimeout(maquinaEscrever, velocidade);
  }
}

maquinaEscrever();
