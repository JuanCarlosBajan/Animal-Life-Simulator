"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

const Footer = href => {
  var sheet = document.createElement('link');
  sheet.type = 'text/css';
  sheet.rel = 'stylesheet';
  sheet.href = href;
  document.getElementsByTagName("head")[0].appendChild(sheet);
  const footerContent = document.createElement("footer");
  footerContent.innerHTML = "\n        @Copyright Juan Carlos Baj\xE1n Castro 20109 - All Right Reserved.  \n    ";
  return footerContent;
};

exports.Footer = Footer;