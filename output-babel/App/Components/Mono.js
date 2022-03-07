"use strict";

var _footer = require("../Shared/footer.js");

var _header = require("../Shared/header.js");

//import "../Styles/General.css" assert { type: "css"}
var content = document.getElementById("content");
const imgCopaArbol = "../Media/CopaArbol.png";
const imgBranch = "../Media/branch.png";
const eggHacthing = "../Media/hatch.png";
const gorila = "../Media/gorila.png";
const treeHouse = "../Media/tree-house.png";
const log = "../Media/log.png";
const leon = "../Media/leon2.png";

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

var pagesText = [["Has aparecido, ahora eres un mono", "Poco a poco la sabana africana se ha vuelto m\xE1s caliente y los \xE1rboles luchan por sobrevivir. Tu familia es un grupo de monos n\xF3madas que \n        buscan frutas en los pocos \xE1robles que quedan. Eres un mono muy curioso y, a pesar de ser peque\xF1o, te atrae todo. No has decidido que \xE1rea \n        del \xE1rbol explorar primero."], ["Copa del Árbol", "Observas aves de rapi\xF1a en el cielo, est\xE1n volando sobre los restosviejos de una cebra. A lo lejos hay hienas, ellas no suelen \n        acercarse al \xE1rea donde est\xE1n los monos porque la poblaci\xF3n de machos es alta y, en conjunto, son muy agresivos."], ["Ramas bajas", "Observas un tronco podrido tirado en el suelo. Es normal encontrar insectos ricos para los monos cuando se rompe la corteza. Es un poco \n        grande y tratar de romperlo podr\xEDa ser dif\xEDcil para ti. Tambi\xE9n obervas una l\xEDnea de hormigas dirigi\xE9ndose al interior del \xE1rbol donde los \n        monos se resguardan. Parece que tienen un nido muy grande por dentro."], ["Nido Líder", "Entre todos hablan que las hienas se est\xE1n acercando mucho al \xE1rea donde donde se encuentran y la mitad de los monos machos no han \n        regresado de recolectar ramas para seguir construyendo m\xE1s nidos. De pronto sientes por detr\xE1s que algo te muerde violentamente y te \n        lleva arrastrado a toda velocidad hacia el campo donde no podr\xE1s escapar. Las hienas te atraparon."], ["Tronco Podrido", "El mono baja del \xE1rbol hacia el tronco, ve que se est\xE1 moviendo y te llama la atenci\xF3n a lo lejos se escuchan peque\xF1os chillidos y ve \n        que hay un gran hueco en uno de los costados. Parece que hay un animal dentro que est\xE1 atorado. Con todas las fuerzas se rompe el tronco \n        y se observa que hay un peque\xF1o le\xF3n siendo estrangulado por una serpiente grande y robusta. <br>\n        <br>\n        De emergencia el mono llama al l\xEDder de la manada para que salve al leoncito. El l\xEDder toma a la serpiente y la lanza lejos salvando al \n        peque\xF1o le\xF3n. <br>\n        <br>\n        Llega un grupo de le\xF3nes a toda velocidad y observan que los monos encontraron a el leoncito perdido. Agradecidos se lo llevan y prometen \n        protegerlos por siempre."], ["¡AYUDA!", "El le\xF3n padre aparece de pronto y se lanza sobre las hienas rasg\xE1ndolas a todas con sus grandes garras salvando al pobre mono. <br><br>\n        En ese momento llegan todos los monos a toda velocidad asustados por lo que hab\xEDa pasado, agradecidos con el le\xF3n por haber salvado al \n        peque\xF1o mono prometieron apoyar a los leones en todo lo que necesitaran."]];

window.onload = function () {
  document.body.insertAdjacentElement("afterbegin", (0, _header.header)("../Styles/Header.css", "../../../../Inicio.html"));
  document.body.insertAdjacentElement("beforeend", (0, _footer.Footer)("../Styles/Footer.css"));
  content.innerHTML = genericHTML(eggHacthing, pagesText[0][0], pagesText[0][1], imgCopaArbol, "CopaArbol", imgBranch, "Branch");
  runpage0();
};

const runpage0 = () => {
  const CopaArbol = document.getElementById("CopaArbol");
  CopaArbol.addEventListener("click", function () {
    content.innerHTML = genericHTML(gorila, pagesText[1][0], pagesText[1][1], treeHouse, "treeHouse", imgBranch, "Branch");
    window.scrollTo(0, 0);
    runpage10();
  });
  const Branch = document.getElementById("Branch");
  Branch.addEventListener("click", function () {
    content.innerHTML = genericHTML(gorila, pagesText[2][0], pagesText[2][1], imgCopaArbol, "CopaArbol", log, "Log");
    window.scrollTo(0, 0);
    runpage11();
  });
};

const runpage10 = () => {
  const treeHouse = document.getElementById("treeHouse");
  treeHouse.addEventListener("click", function () {
    content.innerHTML = genericHTML(gorila, pagesText[3][0], pagesText[3][1], leon, "Leon");
    window.scrollTo(0, 0);
    runpage20();
  });
  const Branch = document.getElementById("Branch");
  Branch.addEventListener("click", function () {
    content.innerHTML = genericHTML(gorila, pagesText[2][0], pagesText[2][1], imgCopaArbol, "CopaArbol", log, "Log");
    window.scrollTo(0, 0);
    runpage11();
  });
};

const runpage11 = () => {
  const Log = document.getElementById("Log");
  Log.addEventListener("click", function () {
    content.innerHTML = genericHTML(gorila, pagesText[4][0], pagesText[4][1]);
    window.scrollTo(0, 0);
  });
  const CopaArbol = document.getElementById("CopaArbol");
  CopaArbol.addEventListener("click", function () {
    content.innerHTML = genericHTML(gorila, pagesText[1][0], pagesText[1][1], treeHouse, "treeHouse", imgBranch, "Branch");
    window.scrollTo(0, 0);
    runpage10();
  });
};

const runpage20 = () => {
  const Leon = document.getElementById("Leon");
  Leon.addEventListener("click", function () {
    content.innerHTML = genericHTML(gorila, pagesText[5][0], pagesText[5][1]);
    window.scrollTo(0, 0);
  });
};