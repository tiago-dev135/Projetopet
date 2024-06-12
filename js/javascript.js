
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
