!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===o&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".modal{position:absolute;top:22%;left:25%;height:250px;background-color:rgba(240,248,255,.9);border-radius:10px;color:tomato;font-size:20px;font-weight:900;width:50%;display:flex;justify-content:center;align-items:center;flex-direction:column}.modal__button{color:#f0f8ff;background-color:tomato;border:none;border-radius:10px;cursor:pointer}");const e=e=>React.createElement("div",null,e.visible?React.createElement("div",{className:"modal"},React.createElement("p",{className:"modal__text"},e.message),React.createElement("button",{className:"modal__button",onClick:()=>{return t=!0,void e.handleResponse(t);var t}},e.buttonMessage)):"");export{e as Modal};