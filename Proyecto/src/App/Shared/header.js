

export const header = (href,inicio) => {
    var sheet = document.createElement('link');
    sheet.type = 'text/css';
    sheet.rel = 'stylesheet';
    sheet.href = href;
    document.getElementsByTagName("head")[0].appendChild( sheet );
    const headerContent = document.createElement("header");
    
    const lnk = document.createElement("div");
    lnk.id = "lnk";
    lnk.className = "link";
    lnk.innerHTML = "Inicio"

    headerContent.appendChild(lnk);
    
    lnk.addEventListener("click", function(){

        if (window.location.pathname == inicio) {
            window.scrollTo(0,700)
        } else {
            window.location.replace(inicio);
        }
        
    });


    return headerContent;
}
