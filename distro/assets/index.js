!function(n){var r={};function t(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var i in n)t.d(e,i,function(r){return n[r]}.bind(null,i));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=10)}([function(n,r,t){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t=function(n,r){var t=n[1]||"",e=n[3];if(!e)return t;if(r&&"function"==typeof btoa){var i=(a=e,p=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(p),"/*# ".concat(s," */")),o=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot).concat(n," */")}));return[t].concat(o).concat([i]).join("\n")}var a,p,s;return[t].join("\n")}(r,n);return r[2]?"@media ".concat(r[2],"{").concat(t,"}"):t})).join("")},r.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var e={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(e[o]=!0)}for(var a=0;a<n.length;a++){var p=n[a];null!=p[0]&&e[p[0]]||(t&&!p[2]?p[2]=t:t&&(p[2]="(".concat(p[2],") and (").concat(t,")")),r.push(p))}},r}},function(n,r,t){"use strict";var e,i={},o=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},a=function(){var n={};return function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[r]=t}return n[r]}}();function p(n,r){for(var t=[],e={},i=0;i<n.length;i++){var o=n[i],a=r.base?o[0]+r.base:o[0],p={css:o[1],media:o[2],sourceMap:o[3]};e[a]?e[a].parts.push(p):t.push(e[a]={id:a,parts:[p]})}return t}function s(n,r){for(var t=0;t<n.length;t++){var e=n[t],o=i[e.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](e.parts[a]);for(;a<e.parts.length;a++)o.parts.push(x(e.parts[a],r))}else{for(var p=[];a<e.parts.length;a++)p.push(x(e.parts[a],r));i[e.id]={id:e.id,refs:1,parts:p}}}}function d(n){var r=document.createElement("style");if(void 0===n.attributes.nonce){var e=t.nc;e&&(n.attributes.nonce=e)}if(Object.keys(n.attributes).forEach((function(t){r.setAttribute(t,n.attributes[t])})),"function"==typeof n.insert)n.insert(r);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var l,c=(l=[],function(n,r){return l[n]=r,l.filter(Boolean).join("\n")});function u(n,r,t,e){var i=t?"":e.css;if(n.styleSheet)n.styleSheet.cssText=c(r,i);else{var o=document.createTextNode(i),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(o,a[r]):n.appendChild(o)}}function f(n,r,t){var e=t.css,i=t.media,o=t.sourceMap;if(i&&n.setAttribute("media",i),o&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var g=null,m=0;function x(n,r){var t,e,i;if(r.singleton){var o=m++;t=g||(g=d(r)),e=u.bind(null,t,o,!1),i=u.bind(null,t,o,!0)}else t=d(r),e=f.bind(null,t,r),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else i()}}n.exports=function(n,r){(r=r||{}).attributes="object"==typeof r.attributes?r.attributes:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=o());var t=p(n,r);return s(t,r),function(n){for(var e=[],o=0;o<t.length;o++){var a=t[o],d=i[a.id];d&&(d.refs--,e.push(d))}n&&s(p(n,r),r);for(var l=0;l<e.length;l++){var c=e[l];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}}},function(n,r,t){var e=t(3);"string"==typeof e&&(e=[[n.i,e,""]]);var i={insert:"head",singleton:!1};t(1)(e,i);e.locals&&(n.exports=e.locals)},function(n,r,t){(n.exports=t(0)(!1)).push([n.i,":root{\r\n    --theme-color: rgb(167, 167, 132);\r\n    --text-color:  rgb(70, 70, 133);\r\n}\r\n\r\nhtml{\r\n    width: auto;\r\n    height: auto;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    border: none;\r\n}\r\nbody{\r\n    position: static;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    width: auto;\r\n    height: auto;\r\n    background-color: whitesmoke;\r\n    text-align: center;\r\n    border: none;\r\n}\r\n\r\n.construction{\r\n    position: absolute;\r\n    display: none;\r\n    opacity: 0.6;\r\n    width: 90%;\r\n    height: 90%;\r\n    top: 2%;\r\n    margin: 2% 2%;\r\n}\r\n\r\ndiv.header {\r\n    position: relative;\r\n    width: 80%;\r\n    height: 100px;\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\ndiv.header h1 {\r\n    position: absolute;\r\n    color:  rgb(167, 167, 132);\r\n    padding: 5px;\r\n    top: 50%;\r\n    left: 50%; \r\n    transform: translate(-50%, -50%);\r\n    max-width: 100%;\r\n    margin: 0px auto;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    background-color: white;\r\n    border-radius: 15px;\r\n    display: inline-block;\r\n}\r\n\r\n.emblem {\r\n    position: absolute;\r\n    background-color: whitesmoke;\r\n    display: inline-block;\r\n    border-radius: 5px 5px 0px 0px;;\r\n    top: 5px;\r\n    left: 5px;\r\n    padding: 10px 10px 0px 10px;\r\n}\r\n\r\n.emblem a{\r\n    width: 75%;\r\n    height: 75%;\r\n}\r\n\r\n.emblem img{\r\n    height: 22px;\r\n}\r\n\r\n.navbar{\r\n    background: rgb(2,0,36);\r\n    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(11,3,77,1) 79%);\r\n    width: 100%;\r\n    height: 40px;\r\n    position: relative;\r\n    top: 0px;\r\n    z-index: 2;\r\n}\r\n\r\n.navitems{\r\n    width: auto;\r\n    padding: 5px;\r\n    display: inline-block;\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\n.navitems:hover {\r\n    background-color: rgb(26, 10, 177)\r\n}\r\n\r\nmain{\r\n    height: auto;\r\n    position: relative;\r\n    min-width: 100%;\r\n    margin-top: 25px;\r\n}\r\n\r\nmain h2{\r\n    color: black;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    margin: 30px auto;\r\n}\r\n\r\nmain p{\r\n    font-size: 20px;\r\n    color: white;\r\n    text-align: left;\r\n}\r\n\r\n#welcome {\r\n    color:  lightskyblue;\r\n    font-size: 1.5em;\r\n}\r\n\r\n#domain {\r\n    color: white;\r\n    font-size: 1.5em;\r\n}\r\n\r\nfooter{\r\n    position: static;\r\n    bottom: 0;\r\n    left: 0px;\r\n    height:auto;\r\n    width: 100%;\r\n    margin-top: 300px;\r\n    padding: 10px 0px;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    background-color: rgb(59, 59, 59);\r\n    display: inline-block;\r\n}\r\n\r\nfooter p{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    display: inline-block;\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\nfooter ul{\r\n    padding: 0px;\r\n    margin: 0px;\r\n    display: inline-block;\r\n}\r\nfooter ul li{\r\n    display: inline-block;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.follow{\r\n    margin-left: 0px;\r\n}\r\n\r\n.navyblue{\r\n    display: block;\r\n    position: relative;\r\n    background-color: rgba(11,3,77,1);\r\n    height: auto;\r\n    width: 33%;\r\n    margin: 0px auto;\r\n    top: 50px;\r\n    padding: 10px;\r\n    border-radius: 20px;\r\n    box-shadow: 10px 5px 5px gray;\r\n    z-index: -1;\r\n}\r\n\r\n.gray{\r\n    display: block;\r\n    position: relative;\r\n    padding: 50px 0px ;\r\n    width: 100%;\r\n    height: 50%;\r\n    background-color: lightslategrey;\r\n    z-index: -2;\r\n    box-shadow: 10px 5px 5px gray;\r\n    border-radius: 20px;\r\n}\r\n\r\n.page-description{\r\n    width: 50%;\r\n    margin: 50px auto;\r\n    padding: 30px;\r\n    background-color: rgb(245, 255, 250, 0.2);\r\n    border: ridge;\r\n}\r\n\r\n@media screen and (max-width: 1375px) {\r\n    h2 {\r\n      font-size: 18px;\r\n    }\r\n    main p{\r\n        font-size: 16px;\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 900px) {\r\n    h2 {\r\n      font-size: 16px;\r\n    }\r\n    main p{\r\n        font-size: 12px;\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 800px) {\r\n    div.emblem{\r\n        display: none;\r\n    }\r\n    .navitems{\r\n        display: block;\r\n    }\r\n    .navbar{\r\n        text-align: center;\r\n        background-color:  #0b034d;\r\n        width: 100%;\r\n        height: 75px;\r\n        position: fixed;\r\n        top: 0px;\r\n    }\r\n    .navyblue{\r\n        margin-top: 20%;\r\n    }\r\n  }\r\n\r\n\r\n  @media screen and (max-width: 700px) {\r\n    h2 {\r\n      font-size: 16px;\r\n      margin: 10px auto;\r\n    }\r\n    main p{\r\n        font-size: 12px;\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 615px) {\r\n    main{\r\n        width: 40%;\r\n    }\r\n    h2 {\r\n      font-size: 16px;\r\n      margin: 10px auto;\r\n    }\r\n    main p{\r\n        font-size: 12px;\r\n    }\r\n    div.emblem{\r\n        display: none;\r\n    }\r\n}\r\n      @media screen and (max-width: 525px) {  \r\n    h2 {\r\n      font-size: 16px;\r\n      margin: 10px auto;\r\n    }\r\n    main{\r\n        width: 100%;\r\n        margin-left: 0%;\r\n    }\r\n    main p{\r\n        font-size: 12px;\r\n    }\r\n    .navyblue{\r\n        width: 90%;\r\n        text-align: center;\r\n        padding: 10px;\r\n        margin: 150px auto 0 auto;\r\n    }\r\n}\r\n@media screen and (max-width: 375px) {  \r\n    h2 {\r\n      font-size: 16px;\r\n      margin: 5px auto;\r\n    }\r\n    main{\r\n        margin-top: 150px;\r\n        margin-left: 0%;\r\n        width: 100%;\r\n    }\r\n    main p{\r\n        font-size: 12px;\r\n    }\r\n}\r\n@media screen and (max-height: 600px) {  \r\n    h2 {\r\n        font-size: 12px;\r\n        margin: 5px auto;\r\n        top: 50px;\r\n    }\r\n    main{\r\n        margin-top: 100px;\r\n        width: 80%;\r\n    }\r\n    main p{\r\n        font-size: 10px;\r\n        color: white;\r\n    }\r\n    .navyblue{\r\n        height: auto;\r\n    }\r\n}",""])},function(n,r,t){var e=t(5);"string"==typeof e&&(e=[[n.i,e,""]]);var i={insert:"head",singleton:!1};t(1)(e,i);e.locals&&(n.exports=e.locals)},function(n,r,t){(n.exports=t(0)(!1)).push([n.i,".dropdown{\r\n    width: 33%;\r\n    position: relative;\r\n    display: inline-block;\r\n    text-align: left;\r\n}\r\n\r\n.dropdown .trigger{\r\n    position: relative;\r\n    font-size: 20px;\r\n    top: 50%;\r\n    color: white;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    width: 35%;\r\n    padding: 5px;\r\n}\r\n\r\n.dropdown .trigger:hover {\r\n    background-color: rgb(26, 10, 177)\r\n}\r\n\r\n.dropdown .trigger::after{\r\n    content: '>';   \r\n    transform: rotate(90deg);\r\n    margin-left: 2px;\r\n    margin-top: 1px;\r\n    display: inline-block;\r\n}\r\n\r\n.dropdown .content li{\r\n    margin: 0px 20px;\r\n    padding: 0px 20px;\r\n    background-color: #1e1097;\r\n    padding: 5px;\r\n}\r\n\r\n.dropdown .content a{\r\n    text-decoration: none;\r\n    color:white;\r\n    padding: 3px;\r\n}\r\n\r\n.dropdown .content{\r\n    display: none;\r\n    position: absolute;\r\n    top: 22px;\r\n    left: 50%;\r\n    width: 100%;\r\n    transform: translateX(-50%);\r\n    font-size: 15px;\r\n    list-style: none;\r\n}\r\n\r\n.dropdown .active{\r\n    display: block;\r\n    margin-top: 12px;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    .dropdown{\r\n        width: 100%;\r\n        margin: 0px 0px;\r\n        position: static;\r\n        display: inline-block;\r\n        text-align: center;\r\n    }\r\n    .dropdown .trigger{\r\n        min-width: 25%;\r\n        width: auto;\r\n        margin: 0%;\r\n        display: inline-block;\r\n        font-family: 'Times New Roman', Times, serif;\r\n    }\r\n    .dropdown .active{\r\n        display: block;\r\n        margin-top: 12px;\r\n        z-index: 1;\r\n    }\r\n    .dropdown .content{\r\n        position: absolute;\r\n        top: 10px;\r\n        left: 50%;\r\n    }\r\n  }",""])},,,,,function(n,r,t){"use strict";t.r(r);t(2),t(4);new class{constructor(n){this.container=n}init(){this.container.addEventListener("mouseenter",n=>{console.log(n),console.log(n.target.children[0]),n.target.children[0].classList.toggle("active")}),this.container.addEventListener("mouseleave",n=>{console.log(n),n.target.children[0].classList.toggle("active")})}}(document.querySelector(".trigger")).init()}]);