
// seleciona o primeiro input
var currentSlide = 1;
document.getElementById('imagem' + currentSlide).checked = true;

// muda de slide a cada 3 segundos
setInterval(function() {
  // aumenta o contador de slide
  currentSlide++;

  // se chegou ao último slide, volta para o primeiro
  if (currentSlide > 5) {
    currentSlide = 1;
  }

  // seleciona o input correspondente ao slide atual
  document.getElementById('imagem' + currentSlide).checked = true;
}, 5000);

//Lógica do Dropdown

function activeDropDown(){
  let ativarClasse = document.getElementById("listDropdown")
  if (ativarClasse.classList.contains("activeDropdown")) {
    ativarClasse.classList.remove("activeDropdown")
    ativarClasse.classList.add("noneDropdown")
  }
  else{
    ativarClasse.classList.remove("noneDropdown")
    ativarClasse.classList.add("activeDropdown")
  }
}

function validateForm() {
 

  // Obtém os valores dos campos do formulário
  const nome = document.querySelector('[name="nome"]').value;
  const contato = document.querySelector('[name="contato"]').value;
  const email = document.querySelector('[name="Email"]').value;
  const senha = document.querySelector('[name="senha"]').value;

  // Verifica se todos os campos foram preenchidos
  if (nome && contato && email && senha) {
    // Exibe um alerta de sucesso usando SweetAlert
    swal("Conta criada com sucesso!", `Bem-vindo, ${nome}!`, "success");
  } else {
    // Exibe um alerta de erro caso algum campo não esteja preenchido
    swal("Erro", "Por favor, preencha todos os campos.", "error");
  }
}

let categoriasVantagens = document.getElementsByClassName("vantagens");
let imgDescricao = document.querySelector(".descricao img");
let textoDescricao = document.querySelector(".descricao span");

let dados = [
  {
    texto: "Primeira descrição sobre a vantagem 1.",
    imagem: "https://th.bing.com/th/id/R.9d467dfc221b6ab5d434c054ac5c8c42?rik=gGrec1MNsSY16A&pid=ImgRaw&r=0"
  },
  {
    texto: "Segunda descrição sobre a vantagem 2.",
    imagem: "https://img.freepik.com/vetores-premium/empresario-sobe-a-escada-para-o-sucesso-escada-do-sucesso-escada-para-ter-sucesso-e-alcancar_105700-320.jpg?w=2000"
  },
  {
    texto: "Terceira descrição sobre a vantagem 3.",
    imagem: "https://th.bing.com/th/id/R.3a1b0535f29e40315704ece7a34171ac?rik=8RrQNHqb9rUnzg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-l4G9nRQmjH8%2fXb3dhJOUqEI%2fAAAAAAABgJY%2fB5typB9wDuEsrAZZ09UZte8PEjFa1CDWACK4BGAYYCw%2fs1600%2f6f8d7f72-88d6-4ed7-bb88-52d9059ab0fe.jpg&ehk=nn5AEJnMlV8QkSu%2bmxTMnKFigeHfyrYcoXEdOUgNdYk%3d&risl=&pid=ImgRaw&r=0"
  }
];

let i = 0;
let intervalo;

// Função para atualizar a exibição
function atualizarVantagem(index) {
  // Remove ativo de todos
  for (let j = 0; j < categoriasVantagens.length; j++) {
    categoriasVantagens[j].classList.remove("ativo");
  }

  // Adiciona ativo ao selecionado
  categoriasVantagens[index].classList.add("ativo");

  // Atualiza imagem e texto
  imgDescricao.src = dados[index].imagem;
  textoDescricao.textContent = dados[index].texto;

  // Atualiza índice atual
  i = index;
}

// Auto-play
function iniciarLoop() {
  intervalo = setInterval(() => {
    let proximo = (i + 1) % categoriasVantagens.length;
    atualizarVantagem(proximo);
  }, 5000);
}

// Eventos de clique
for (let j = 0; j < categoriasVantagens.length; j++) {
  categoriasVantagens[j].addEventListener("click", () => {
    clearInterval(intervalo); // para autoplay
    atualizarVantagem(j);
    setTimeout(iniciarLoop, 5000); // volta a rodar depois de 5s
  });
}

// Inicializa
atualizarVantagem(0);
iniciarLoop();


//Inicio Carrinho compra
const carrinho = document.getElementById('carrinho');

    function abrirCarrinho() {
      carrinho.classList.add('ativo');
    }

    function fecharCarrinho() {
      carrinho.classList.remove('ativo');
    }

    function atualizarTotal() {
      let produtos = document.querySelectorAll('.produto');
      let total = 0;
      produtos.forEach(prod => {
        let precoUnit = parseFloat(prod.getAttribute('data-preco'));
        let qtd = parseInt(prod.querySelector('.quantidade span').innerText);
        total += precoUnit * qtd;
        prod.querySelector('.preco').innerText = "R$ " + (precoUnit * qtd).toFixed(2);
      });
      document.getElementById('total').innerText = "R$ " + total.toFixed(2);
    }

    function alterarQtd(btn, valor) {
      let span = btn.parentElement.querySelector('span');
      let qtd = parseInt(span.innerText) + valor;
      if (qtd < 1) qtd = 1;
      span.innerText = qtd;
      atualizarTotal();
    }

    function removerProduto(btn) {
      btn.closest('.produto').remove();
      atualizarTotal();
    }

    atualizarTotal();
