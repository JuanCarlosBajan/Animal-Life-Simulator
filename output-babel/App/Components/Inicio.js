"use strict";

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

var _footer = require("../Shared/footer.js");

var _header = require("../Shared/header.js");

//import "../Styles/Inicio.css" assert { type: "css"}
window.onload = function () {
  document.body.insertAdjacentElement("afterbegin", (0, _header.header)('./src/App/Styles/Header.css', "./Inicio.html"));
  document.body.insertAdjacentElement("afterend", (0, _footer.Footer)('./src/App/Styles/Footer.css'));
  document.getElementById("personajes").innerHTML = "<img id=\"mono\" class=\"sender\" src=\"".concat('./src/App/Media/gorila.png', "\">\n    <img id=\"leon\" class=\"sender\" src=\"", './src/App/Media/leon.png', "\">");
  runpage();
};

const runpage = () => {
  const mono = document.getElementById("mono");
  mono.addEventListener("click", function () {
    //window.location.replace("./src/App/Components/Mono.html");
    window.location.replace("./src/App/Components/Mono.html");
  });
  const leon = document.getElementById("leon");
  leon.addEventListener("click", function () {
    //window.location.replace("./src/App/Components/Leon.html");
    window.location.replace("./src/App/Components/Leon.html");
  });
};