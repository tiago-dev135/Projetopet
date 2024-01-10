
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



