!function(n){var r={};function e(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var i in n)e.d(t,i,function(r){return n[r]}.bind(null,i));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=12)}([function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var i=(a=t,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot).concat(n," */")}));return[e].concat(o).concat([i]).join("\n")}var a,s,l;return[e].join("\n")}(r,n);return r[2]?"@media ".concat(r[2],"{").concat(e,"}"):e})).join("")},r.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(t[o]=!0)}for(var a=0;a<n.length;a++){var s=n[a];null!=s[0]&&t[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="(".concat(s[2],") and (").concat(e,")")),r.push(s))}},r}},function(n,r,e){"use strict";var t,i={},o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}();function s(n,r){for(var e=[],t={},i=0;i<n.length;i++){var o=n[i],a=r.base?o[0]+r.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};t[a]?t[a].parts.push(s):e.push(t[a]={id:a,parts:[s]})}return e}function l(n,r){for(var e=0;e<n.length;e++){var t=n[e],o=i[t.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](t.parts[a]);for(;a<t.parts.length;a++)o.parts.push(f(t.parts[a],r))}else{for(var s=[];a<t.parts.length;a++)s.push(f(t.parts[a],r));i[t.id]={id:t.id,refs:1,parts:s}}}}function d(n){var r=document.createElement("style");if(void 0===n.attributes.nonce){var t=e.nc;t&&(n.attributes.nonce=t)}if(Object.keys(n.attributes).forEach((function(e){r.setAttribute(e,n.attributes[e])})),"function"==typeof n.insert)n.insert(r);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var c,u=(c=[],function(n,r){return c[n]=r,c.filter(Boolean).join("\n")});function p(n,r,e,t){var i=e?"":t.css;if(n.styleSheet)n.styleSheet.cssText=u(r,i);else{var o=document.createTextNode(i),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(o,a[r]):n.appendChild(o)}}function g(n,r,e){var t=e.css,i=e.media,o=e.sourceMap;if(i&&n.setAttribute("media",i),o&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var m=null,h=0;function f(n,r){var e,t,i;if(r.singleton){var o=h++;e=m||(m=d(r)),t=p.bind(null,e,o,!1),i=p.bind(null,e,o,!0)}else e=d(r),t=g.bind(null,e,r),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else i()}}n.exports=function(n,r){(r=r||{}).attributes="object"==typeof r.attributes?r.attributes:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=o());var e=s(n,r);return l(e,r),function(n){for(var t=[],o=0;o<e.length;o++){var a=e[o],d=i[a.id];d&&(d.refs--,t.push(d))}n&&l(s(n,r),r);for(var c=0;c<t.length;c++){var u=t[c];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete i[u.id]}}}}},,,,,,,function(n,r,e){var t=e(9);"string"==typeof t&&(t=[[n.i,t,""]]);var i={insert:"head",singleton:!1};e(1)(t,i);t.locals&&(n.exports=t.locals)},function(n,r,e){(n.exports=e(0)(!1)).push([n.i,"body, html{\r\n    position: relative;\r\n    height: 100%;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n.grid{\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: repeat(12, 1fr);\r\n    grid-template-rows: repeat(6, minmax(100px,auto));\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n.aside{\r\n    grid-column: 1 /  span 3;\r\n    grid-row: 1 / span 6;\r\n    border: solid 1px;\r\n    padding: 0px;\r\n    margin: 0px;\r\n    background-color: rgb(185, 185, 185);\r\n    color: whitesmoke;\r\n}\r\n.return{\r\n    display: block;\r\n    margin: 25px auto;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    color: rgba(63, 63, 63, 0.95);\r\n}\r\n\r\n.signupwindow{\r\n    position: absolute;\r\n    z-index: 3;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    background-color: rgba(2, 2, 2, .95);\r\n    text-align: center;\r\n    vertical-align: top;\r\n}\r\n\r\n.signup{\r\n    position: relative;\r\n    width: 55%;\r\n    display: inline-block;\r\n    margin-top: 25%;  \r\n    background-color: white;\r\n}\r\n\r\n.signup span::after{\r\n    content: 'X';\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 5px;\r\n}\r\n\r\n.signup input{\r\n    display: block;\r\n    width: 90%;\r\n    font-size: 1.5rem;\r\n    margin: 10px auto;\r\n}\r\n\r\n.aside h1{\r\n    width: 50%;\r\n    margin: 50px auto;\r\n    font-size: 1.5rem;\r\n}\r\n.main{\r\n    position: relative;\r\n    grid-column: 4 / span 9;\r\n    grid-row: 1 / span 6;\r\n    justify-items: right;\r\n    align-items: bottom;\r\n    border: solid 1px;\r\n    padding: 10px 0px;\r\n    margin: 0px;\r\n    background-color: rgb(29, 89, 253, 0.1);\r\n}\r\n.chatrooms{\r\n    text-align: center;\r\n    min-height: 50%;\r\n    width: 100%;\r\n    margin: 0px;\r\n    z-index: 0;\r\n}\r\n.new-chat{\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-top:  50px;\r\n    margin-bottom: 25px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: 0px;\r\n}\r\n#message{\r\n    width:100%;\r\n    margin: 0px;\r\n    display: block;\r\n    font-size: .9rem;\r\n}\r\n.new-chat div{\r\n    width: 90%;\r\n    display: inline-block;\r\n}\r\n\r\n.new-chat input{\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.msgsent{\r\n    text-align: center;\r\n    color: rgba(63, 63, 63, 0.95);\r\n}\r\n\r\n.show-chat{\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    list-style: none;\r\n    width: 100%;\r\n    height: 99%;\r\n    vertical-align: bottom;\r\n    padding: 10px 0px;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.show-chat div{\r\n    margin: 1% auto;\r\n}\r\n.loginPage{\r\n    position: absolute;\r\n    z-index: 2;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    width: 100%;\r\n    height: 120%;\r\n    background-color: white;\r\n}\r\n\r\n.loginBox{\r\n    margin: 10% 0px;\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\n.loginBox h1{\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.logIn{\r\n    position: relative;\r\n    width: 40%;\r\n    display: inline-block;\r\n    background-color: white;\r\n}\r\n\r\n.logIn input:not([type=submit]){\r\n    width: 66%;\r\n    font-size: 1.3rem;\r\n    margin: 2% 5%;\r\n    border-radius: 5px;\r\n}\r\n\r\n.logIn input[type=submit]{\r\n    min-width: 33%;\r\n    display: block;\r\n    font-size: larger;\r\n    margin: 10px auto;\r\n    border-radius: 5px;\r\n}\r\n\r\n.logIn a{\r\n    display: inline-block;\r\n    margin: 10px auto;\r\n}\r\n\r\n.logorreturn{\r\n    z-index: 0;\r\n}\r\n.logout{\r\n    display: block;\r\n    max-width: 50%;\r\n    width: 100%;\r\n    min-height: 2em;\r\n    border-radius: 10px;\r\n    font-size: .9rem;\r\n    margin: 0px auto;\r\n}\r\n.show{\r\n    display: block;\r\n}\r\n\r\n.hide{\r\n    display: none;\r\n}\r\n\r\n@media screen and (max-width: 625px) {\r\n    .grid{\r\n        display: grid;\r\n        height: 100%;\r\n        grid-template-columns: repeat(2, 1fr);\r\n        grid-template-rows: 125px 125px 125px 300px;\r\n        padding: 0px;\r\n        margin: 0px;\r\n    }\r\n    .main{\r\n        position: relative;\r\n        grid-column: 1 / span 2;\r\n        grid-row: 1 / span 3;\r\n        justify-items: right;\r\n        align-items: bottom;\r\n        border: solid 1px;\r\n        padding: 0px;\r\n        margin: 0px;\r\n        background-color: rgb(29, 89, 253, 0.1);\r\n    }\r\n    .aside{\r\n        position: relative;\r\n        grid-column: 1 /  span 2;\r\n        grid-row: 4 / span 1;\r\n        border: solid 1px;\r\n        padding: 0px;\r\n        margin: 0px;\r\n        background-color: rgb(185, 185, 185);\r\n        color: whitesmoke;\r\n    }\r\n    .show-chat{\r\n        position: relative;\r\n        padding: 0px;\r\n        margin: 0px;\r\n        list-style: none;\r\n        width: 100%; \r\n        height: 99%;\r\n    }\r\n\r\n    .logorreturn{\r\n        display: block;\r\n        position: relative;\r\n        margin: 0px;\r\n        max-width: 100%;\r\n        background-color: rgb(185, 185, 185);\r\n    }\r\n    .logout{\r\n        display: inline-block;\r\n        width: 100%;\r\n        max-width: 25%;\r\n        margin-right: 48%;\r\n        font-size: .5rem;\r\n    }\r\n    .return{\r\n        display: inline-block;\r\n        width: 100%;\r\n        max-width: 25%;\r\n        margin: 0px;\r\n        text-align: right;\r\n        color: rgb(82, 81, 81);\r\n        font-size: .5rem;\r\n    }\r\n    .new-chat{\r\n        width: 100%;\r\n        text-align: center;\r\n        margin:  25px auto;\r\n        font-size: 0px;\r\n    }\r\n    .logIn{\r\n        position: relative;\r\n        width: 80%;\r\n        display: inline-block;\r\n        background-color: white;\r\n    }\r\n    .chatrooms{\r\n        min-height: auto;\r\n        margin: 0px;\r\n        display: inline-block;\r\n    }\r\n\r\n    #message{\r\n        width: 60%;\r\n        margin: 0px auto; \r\n        display: block;\r\n        font-size: .75rem;\r\n    }\r\n}",""])},,,function(n,r,e){"use strict";e.r(r);e(8);const t=document.querySelector(".new-chat"),i=document.querySelector(".show-chat"),o=document.querySelector(".signup"),a=document.querySelector(".logIn"),s=document.querySelector(".loginPage"),l=new class{constructor(n,r){this.username=n,this.room=r,this.database=db.collection(this.room),this.dbRooms=db.collection("rooms")}signup(n,r,e){auth.createUserWithEmailAndPassword(n,r).then(n=>{console.log(n.user),n.user.updateProfile({displayName:e}).then(()=>console.log(n.user.displayName))})}addChat(n){console.log("in addchat");const r=new Date,e={username:this.username,room:this.room,message:n,created_at:firebase.firestore.Timestamp.fromDate(r)};this.database.add(e).then(()=>console.log(e))}updateChatWindow(n,r,e,t){let i,o,a;this.username===n.data().username?(i="rgb(255, 255, 255)",o="margin-left: 30%;",a="10px 0 0 10px"):(i="rgb(3, 0, 172, 0.2)",o="margin-right: 30%;",a="0px 10px 10px 0px");let s=`<div class="" style="background-color: ${i}; text-align: left; border-radius: ${a}; ${o}; width: 70%; padding: 0px 10px" data-id="${n.id};">\n       <div>\n       <span class="username" style="font-weight: bold; font-size:1.1rem">${n.data().username}:</span>\n       <span class="message" style="font-size:1.1rem">${n.data().message}</span>\n       </div>\n       <span class="time" style="font-size:0.8rem; display:block; text-align:right">${n.data().created_at.toDate().toString().slice(0,24)}</span>\n       <div>`;r.innerHTML+=s}liveupdates(n){this.database.onSnapshot(r=>{console.log(r),r.docChanges().sort((n,r)=>n.doc.data().created_at.toDate()-r.doc.data().created_at.toDate()).forEach(r=>{"added"===r.type&&(this.updateChatWindow(r.doc,n,this.username,this.room),console.log("message added"))})})}}("anon","main"),d=document.querySelector(".rooms"),c=document.querySelector(".msgsent"),u=document.querySelector(".logout"),p=document.querySelector(".new-user"),g=document.querySelector(".signupwindow");auth.onAuthStateChanged(n=>{auth.currentUser.uid&&(console.log("user is logged in: ",auth.currentUser.displayName),l.username=auth.currentUser.displayName,l.liveupdates(i),s.style.display="none")}),p.addEventListener("click",n=>{n.preventDefault(),g.classList.remove("hide")}),a.addEventListener("submit",n=>{n.preventDefault(),auth.signInWithEmailAndPassword(a.email.value,a.password.value).catch(n=>console.log(n)),s.style.display="none",a.reset()}),document.querySelector(".closewindow").addEventListener("click",n=>{g.classList.add("hide")}),o.addEventListener("submit",n=>{n.preventDefault(),l.signup(o.email.value,o.password.value,o.username.value),o.reset(),s.style.display="none",g.classList.add("hide")}),t.addEventListener("submit",n=>{n.preventDefault();const r=t.message.value.trim();l.addChat(r),setTimeout(()=>{c.innerHTML="Message sent"},100),setTimeout(()=>{c.innerHTML=""},2e3),t.reset()}),d.addEventListener("click",n=>{l.room=n.target.value,l.database=db.collection(l.room),i.innerHTML="",l.liveupdates(i)}),u.addEventListener("click",n=>{n.preventDefault(),auth.signOut().then(()=>{l.username="anon",l.room="main",l.liveupdates(i),window.location.reload(!1)})})}]);