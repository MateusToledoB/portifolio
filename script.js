const galleryItems = {
    "assets/dash.png": "Este print mostra a análise do segundo mês de testes do projeto, com uma taxa de conclusão de 76%, levando em conta os documentos que não estavam disponiveis para serem entregues. ",
    "assets/dahs_2.png": "Este print apresenta a análise considerando apenas os documentos realmente disponíveis para download e entrega aos clientes, com uma taxa de conclusão de 98,06%. Ele destaca a alta eficiência do processo, refletindo a precisão e a eficácia da automação ao fornecer os documentos solicitados dentro do prazo.",
    // Adicione mais imagens e seus textos conforme necessário
};

let currentImage = "assets/dash.png"; // A primeira imagem a ser exibida
let currentText = galleryItems[currentImage]; // O texto associado à primeira imagem

function changeImage(direction) {
    // Obtém as chaves (caminhos das imagens) em um array
    const imagePaths = Object.keys(galleryItems);

    // Encontra o índice da imagem atual
    let currentIndex = imagePaths.indexOf(currentImage);

    // Atualiza o índice com base na direção
    currentIndex += direction;

    // Garante que o índice circule entre as imagens
    if (currentIndex < 0) {
        currentIndex = imagePaths.length - 1;
    } else if (currentIndex >= imagePaths.length) {
        currentIndex = 0;
    }

    // Atualiza a imagem e o texto
    currentImage = imagePaths[currentIndex];
    currentText = galleryItems[currentImage];

    // Atualiza a imagem na galeria
    document.getElementById("gallery-image").src = currentImage;
    
    // Atualiza o texto abaixo da imagem
    document.querySelector(".image-text").innerText = currentText;
}
