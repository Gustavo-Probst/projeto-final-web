const grid = document.querySelector(".grid");

const conteudos = ["img1", "img2", "img3"];

const criarElemento = (tag, classe) => {
  const elemento = document.createElement(tag);
  elemento.className = classe;
  return elemento;
};

let primeiraCarta = "";
let segundaCarta = "";

const checarVencedor = () => {
    const cartasDesabilitadas = document.querySelectorAll(".desativar-carta");
    if (cartasDesabilitadas.length === conteudos.length * 2) {
        alert("Parabéns! Você venceu!");
    }
}

const verificaCartas = () => {
  const primeiroConteudo = primeiraCarta.getAttribute("dado-conteudo");
  const segundoConteudo = segundaCarta.getAttribute("dado-conteudo");

  if (primeiroConteudo === segundoConteudo) {
    primeiraCarta.firstChild.classList.add("desativar-carta");
    segundaCarta.firstChild.classList.add("desativar-carta");
    primeiraCarta = "";
    segundaCarta = "";
    checarVencedor();
  } else {
    setTimeout(() => {
      primeiraCarta.classList.remove("revela-carta");
      segundaCarta.classList.remove("revela-carta");
      primeiraCarta = "";
      segundaCarta = "";
    }, 1000);
  }
};

const revelaCarta = ({ target }) => {
  if (target.parentNode.classList.contains("revela-carta")) {
    return;
  }

  if (primeiraCarta === "") {
    target.parentNode.classList.add("revela-carta");
    primeiraCarta = target.parentNode;
  } else if (segundaCarta === "") {
    target.parentNode.classList.add("revela-carta");
    segundaCarta = target.parentNode;
    verificaCartas();
  }
};

const criarCard = (conteudo) => {
  const card = criarElemento("div", "card");
  const frente = criarElemento("div", "face frente");
  const verso = criarElemento("div", "face verso");

  frente.style.backgroundImage = `url(../images/${conteudo}.png)`;

  card.appendChild(frente);
  card.appendChild(verso);

  card.addEventListener("click", revelaCarta);
  card.setAttribute("dado-conteudo", conteudo);

  return card;
};

const adicionarConteudosAoGrid = () => {
  const duplicarConteudos = [...conteudos, ...conteudos];

  const embaralharConteudos = duplicarConteudos.sort(() => Math.random() - 0.5);

  embaralharConteudos.forEach((conteudo) => {
    const card = criarCard(conteudo);
    grid.appendChild(card);
  });
};

adicionarConteudosAoGrid();
