import {Footer} from "../Shared/footer.js";
import {header} from "../Shared/header.js"
//import "../Styles/Inicio.css" assert { type: "css"}

window.onload = function () {
    document.body.insertAdjacentElement("afterbegin",header('./src/App/Styles/Header.css',"./Inicio.html"));
    document.body.insertAdjacentElement("afterend",Footer('./src/App/Styles/Footer.css'));
    document.getElementById("personajes").innerHTML = 
    `<img id="mono" class="sender" src="${'./src/App/Media/gorila.png'}">
    <img id="leon" class="sender" src="${'./src/App/Media/leon.png'}">`
    runpage();
}

const runpage = () => {
    const mono = document.getElementById("mono")
    mono.addEventListener("click", function() {
        //window.location.replace("./src/App/Components/Mono.html");
        window.location.replace("./src/App/Components/Mono.html");
    });

    const leon = document.getElementById("leon")
    leon.addEventListener("click", function() {
        //window.location.replace("./src/App/Components/Leon.html");
        window.location.replace("./src/App/Components/Leon.html");
    });
}
