

export const Footer = (href) => {
    var sheet = document.createElement('link');
    sheet.type = 'text/css';
    sheet.rel = 'stylesheet';
    sheet.href = href;
    document.getElementsByTagName("head")[0].appendChild( sheet );
    const footerContent = document.createElement("footer");

    footerContent.innerHTML = `
        @Copyright Juan Carlos Baján Castro 20109 - All Right Reserved.  
    `

    return footerContent;
}


