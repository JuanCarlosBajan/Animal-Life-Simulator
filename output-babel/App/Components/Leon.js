"use strict";

var _footer = require("../Shared/footer.js");

var _header = require("../Shared/header.js");

//import "../Styles/General.css" assert { type: "css"}
//import imgCampo from ""
var content = document.getElementById("content"); //const imgCampo =  require("../Media/sabana.png");

const imgCampo = "../Media/sabana.png";
const imgLeon2 = "../Media/leon2.png";
const imgLeones = "../Media/lions.png";
const imgLeon = "../Media/leon.png";
const eggHacthing = "../Media/hatch.png";
const imgPiedra = "../Media/cave.png";
const imgTronco = "../Media/log.png";

var genericHTML = function genericHTML() {
  let firstimg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  let title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "TITLE";
  let text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "error";
  let img1 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  let img1name = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  let img2 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  let img2name = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
  var html = "\n    <div class=\"imgs\">\n        <img class=\"icon\" src=\"".concat(firstimg, "\">\n    </div>\n    <h1>").concat(title, "</h1>\n    <h2>").concat(text, "</h2>\n    ");
  var imgs = "\n        <h1>Selecciona a donde quieres ir</h1>\n        <div class=\"imgs sl\">\n            <img id=\"".concat(img1name, "\" class=\"icon sender\" src=\"").concat(img1, "\">\n            <img id=\"").concat(img2name, "\" class=\"icon sender\" src=\"").concat(img2, "\">\n        </div>\n    ");
  const almost = "\n        <h1>Continuar</h1>\n        <div class=\"imgs sl\">\n            <img id=\"".concat(img1name, "\" class=\"icon sender\" src=\"").concat(img1, "\">\n        </div>\n    ");
  const end = '<h1 class="fin">Fin.</h1>';
  html = html + (img1 != null && img2 != null ? imgs : img1 != null && img2 == null ? almost : end);
  return html;
};

var pagesText = [["La Sabana Africana", "Poco a poco la sab\xE1na africana se ha vuelto m\xE1s caliente y las presas \n    disminuyen a gran velocidad pues la falla de alimento los est\xE1 matanfo \n    a todos. Los pocos restantes est\xE1n desesperados en halla agua y algo de \n    de comer. <br> <br>\n    La manada de le\xF3nes tiene conflictos internos por las raciones que se reparten. <br><br>\n    Naces con un fuerte instinto de caza y, aunque eres peque\xF1o, aprendes de las \n    t\xE9cnicas de las leonas de la manada y te inspiras para salir en busca de alg\xFAn \n    peque\xF1o."], ["Campo", "Entre el pasto seco ves algo que parece un gusano gigante. No sabes \n    que es, pero como tienes mucha hambre y curiosidad, vas detr\xE1s de el. \n    Se aleja r\xE1pidamente mientras caminas. Es algo veloz pero poco a poco \n    puedes ver qu\xE9 tan grande es. Al pasar unos minutos ya estas lejos de \n    la manada pero ellos no se dan cuenta de tu ausencia. De pronto, el gusano \n    entra en unas rocas con muchos huecos e intentas rascar la piedra para que \n    salga."], ["Leones Descansando", "legas junto a todos los dem\xE1s, te acuestas y el sue\xF1o te gana. \n    Mientras duermes, escuchas un chillido extra\xF1o en el campo al \n    lado de donde tu manada descanza. Tu padre se acerca a ver qu\xE9 \n    est\xE1 pasando. Al parecer las hienas atraparon a un monito beb\xE9 \n    y su familia detr\xE1s de ellos pero no pueden hacer nada porque hay\n    muchas hienas."], ["¡AYUDA!", "El le\xF3n padre aparece de pronto y se lanza sobre las hienas rasg\xE1ndolas a todas con sus grandes garras salvando al pobre mono. <br><br>\n    En ese momento llegan todos los monos a toda velocidad asustados por lo que hab\xEDa pasado, agradecidos con el le\xF3n por haber salvado al \n    peque\xF1o mono prometieron apoyar a los leones en todo lo que necesitaran."], ["¿Qué está pasando?", "Una enorme serpiente aparece de entre los huecos y te rodea. Comienza a \n    apretarte tan fuerte que terminas desmayado. Sientes que la serpiente \n    te lleva a alg\xFAn lado pero no sabes donde es. Parece un lugar un poco \n    estrecho y oscuro. No tienes fuerzas para llamar a la manada."], ["Tronco Podrido", "Un mono baja de un \xE1rbol hacia un tronco, ve que se est\xE1 moviendo y le llama la atenci\xF3n a lo lejos se escuchan peque\xF1os chillidos y ve \n    que hay un gran hueco en uno de los costados. Parece que hay un animal dentro que est\xE1 atorado. Con todas las fuerzas se rompe el tronco \n    y se observa que hay un peque\xF1o le\xF3n siendo estrangulado por una serpiente grande y robusta. <br>\n    <br>\n    De emergencia el mono llama al l\xEDder de la manada para que salve al leoncito. El l\xEDder toma a la serpiente y la lanza lejos salvando al \n    peque\xF1o le\xF3n. <br>\n    <br>\n    Llega un grupo de le\xF3nes a toda velocidad y observan que los monos encontraron al leoncito perdido. Agradecidos se lo llevan y prometen \n    protegerlos por siempre."]];

window.onload = function () {
  document.body.insertAdjacentElement("afterbegin", (0, _header.header)("../Styles/Header.css", "../../../../Inicio.html"));
  document.body.insertAdjacentElement("beforeend", (0, _footer.Footer)("../Styles/Footer.css"));
  content.innerHTML = genericHTML(eggHacthing, pagesText[0][0], pagesText[0][1], imgCampo, "Campo", imgLeones, "Leones");
  runpage0();
};

const runpage0 = () => {
  const Campo = document.getElementById("Campo");
  Campo.addEventListener("click", function () {
    content.innerHTML = genericHTML(imgLeon, pagesText[1][0], pagesText[1][1], imgPiedra, "Piedra", imgLeones, "Leones");
    window.scrollTo(0, 0);
    runpage10();
  });
  const Leones = document.getElementById("Leones");
  Leones.addEventListener("click", function () {
    content.innerHTML = genericHTML(imgLeon, pagesText[2][0], pagesText[2][1], imgLeon2, "Leon", imgCampo, "Campo");
    window.scrollTo(0, 0);
    runpage11();
  });
};

const runpage10 = () => {
  const Piedra = document.getElementById("Piedra");
  Piedra.addEventListener("click", function () {
    content.innerHTML = genericHTML(imgLeon, pagesText[4][0], pagesText[4][1], imgTronco, "Log");
    window.scrollTo(0, 0);
    runpage2();
  });
  const Leones = document.getElementById("Leones");
  Leones.addEventListener("click", function () {
    content.innerHTML = genericHTML(imgLeon, pagesText[2][0], pagesText[2][1], imgLeon2, "Leon", imgCampo, "Campo");
    window.scrollTo(0, 0);
    runpage11();
  });
};

const runpage11 = () => {
  const Campo = document.getElementById("Campo");
  Campo.addEventListener("click", function () {
    content.innerHTML = genericHTML(imgLeon, pagesText[1][0], pagesText[1][1], imgPiedra, "Piedra", imgLeones, "Leones");
    window.scrollTo(0, 0);
    runpage10();
  });
  const Leon = document.getElementById("Leon");
  Leon.addEventListener("click", function () {
    content.innerHTML = genericHTML(imgLeon, pagesText[3][0], pagesText[3][1]);
    window.scrollTo(0, 0);
  });
};

const runpage2 = () => {
  const Log = document.getElementById("Log");
  Log.addEventListener("click", function () {
    content.innerHTML = genericHTML(imgLeon, pagesText[5][0], pagesText[5][1]);
    window.scrollTo(0, 0);
  });
};