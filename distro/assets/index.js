!function(e){var t={};function r(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(o,l,function(t){return e[t]}.bind(null,l));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}({3:function(e,t){var r=[document.querySelector(".box1"),document.querySelector(".box2"),document.querySelector(".box3"),document.querySelector(".box4"),document.querySelector(".box5")],o=0;setInterval((function(){0===o?(r[o].style.backgroundColor="mediumblue",r[o].style.color="white",r[o].firstChild.classList.remove("text-primary"),r[o].firstChild.style.color="white",r[o+4].style.backgroundColor="white",r[o+4].style.color="gray",r[o+4].firstChild.classList.add("text-primary"),r[o+4].firstChild.style.color=""):(r[o].style.backgroundColor="mediumblue",r[o].style.color="white",r[o].firstChild.classList.remove("text-primary"),r[o].firstChild.style.color="white",r[o-1].style.backgroundColor="white",r[o-1].style.color="gray",r[o-1].firstChild.classList.add("text-primary"),r[o-1].firstChild.style.color=""),o>=4?o=0:o++}),3e3)}});