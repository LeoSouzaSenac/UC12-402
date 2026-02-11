// Seleciona o container que envolve todos os cards
// É ele que vai se mover para esquerda/direita
const track = document.getElementById("carouselTrack")

// Seleciona todos os elementos que possuem a classe "card"
// Isso retorna uma lista com os 9 cards
const cards = document.querySelectorAll(".card")

// Define quantos cards devem aparecer por vez na tela
// No caso, 3 por slide
const cardsPerSlide = 3

// Calcula quantos "grupos" de cards existem
// Exemplo: 9 cards / 3 por slide = 3 slides
const totalSlides = cards.length / cardsPerSlide

// Guarda qual slide está sendo exibido atualmente
// Começa do zero (primeiro grupo)
let currentSlide = 0

// Função responsável por mover o carrossel
function moveCarousel() {

    // Avança para o próximo grupo de 3 cards
    currentSlide++

    // Se chegar no último grupo, volta para o início
    // Isso cria o efeito de loop infinito
    if (currentSlide >= totalSlides) {
        currentSlide = 0
    }

    // Pega a largura real de um card na tela
    // offsetWidth inclui padding e border
    const cardWidth = cards[0].offsetWidth

    // Define o valor do espaço entre os cards
    // Esse valor precisa ser igual ao que está no CSS (gap)
    // Quando o carrossel anda, ele precisa saber quanto espaço total ocupa 1 grupo de 3 cards.
    const gap = 20

    // Calcula quanto precisa mover
    // (largura do card + espaço) × quantidade de cards por slide
    // Isso garante que ele avance exatamente 3 cards
    const slideWidth = (cardWidth + gap) * cardsPerSlide

    // Move o container inteiro para a esquerda
    // Usamos translateX negativo para ir para frente
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`
}

// Executa a função automaticamente a cada 3 segundos
// 3000 milissegundos = 3 segundos
setInterval(moveCarousel, 3000)
