
var imgs = ["img/sobre-nos-dente-de-leao.png", "img/sobre-nos-flor.png", "img/sobre-nos-planta.png", "img/sobre-nos-lavanda.png"];
var indice = 1;

document.getElementById('sobre__nos_img').src = imgs[0];
setInterval(contagem, 5000);

function contagem() {
    document.getElementById('sobre__nos_img').src = imgs[indice];
    indice++;

    if (indice > 3) {
        indice = 0;
    }
}