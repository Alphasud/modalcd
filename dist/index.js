"use strict";Object.defineProperty(exports,"__esModule",{value:!0});!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===o&&a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(".modal{position:absolute;top:22%;left:25%;height:250px;background-color:rgba(240,248,255,.9);border-radius:10px;color:tomato;font-size:20px;font-weight:900;width:50%;display:flex;justify-content:center;align-items:center;flex-direction:column}.modal__button{color:#f0f8ff;background-color:tomato;border:none;border-radius:10px;cursor:pointer}");exports.Modal=e=>React.createElement("div",null,e.visible?React.createElement("div",{className:"modal"},React.createElement("p",{className:"modal__text"},e.message),React.createElement("button",{className:"modal__button",onClick:()=>{return t=!0,void e.handleResponse(t);var t}},e.buttonMessage)):"");
