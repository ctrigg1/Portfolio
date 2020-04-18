!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=346)}({337:function(e,t,n){},346:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}n.r(t);var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.username=t,this.room=n,this.database=db.collection(this.room),this.dbRooms=db.collection("rooms")}var t,n,o;return t=e,(n=[{key:"signup",value:function(e,t,n){auth.createUserWithEmailAndPassword(e,t).then((function(e){e.user.updateProfile({displayName:n}).then((function(){return console.log(e.user.displayName)}))}))}},{key:"addChat",value:function(e){var t=new Date,n={username:this.username,room:this.room,message:e,created_at:firebase.firestore.Timestamp.fromDate(t)};this.database.add(n).then((function(){return console.log(n)}))}},{key:"updateChatWindow",value:function(e,t,n,a){var o,r,i;this.username===e.data().username?(o="rgb(255, 255, 255)",r="margin-left: 29%;",i="10px 0 0 10px"):(o="rgb(3, 0, 172, 0.2)",r="margin-right: 29%;",i="0px 10px 10px 0px");var s='<div class="" style="background-color: '.concat(o,"; text-align: ").concat("left","; border-radius: ").concat(i,"; ").concat(r,'; width: 70%; padding: 0px 10px" data-id="').concat(e.id,';">\n       <div>\n       <span class="username" style="font-weight: bold; font-size:1.1rem">').concat(e.data().username,':</span>\n       <span class="message" style="font-size:1.1rem">').concat(e.data().message,'</span>\n       </div>\n       <span class="time" style="font-size:0.8rem; display:block; text-align:right; padding-right: 2%">').concat(e.data().created_at.toDate().toString().slice(0,24),"</span>\n       <div>");t.innerHTML+=s}},{key:"liveupdates",value:function(e){var t=this;this.database.onSnapshot((function(n){n.docChanges().sort((function(e,t){return e.doc.data().created_at.toDate()-t.doc.data().created_at.toDate()})).forEach((function(n){"added"===n.type&&t.updateChatWindow(n.doc,e,t.username,t.room)}))}))}}])&&a(t.prototype,n),o&&a(t,o),e}(),r=(n(337),document.querySelector(".new-chat")),i=document.querySelector(".show-chat"),s=document.querySelector(".signup"),u=document.querySelector(".logIn"),c=document.querySelector(".loginPage"),l=new o("anon","main"),d=document.querySelector(".rooms"),m=document.querySelector(".msgsent"),f=document.querySelector(".logout"),p=document.querySelector(".new-user"),v=document.querySelector(".signupwindow"),y=document.querySelector(".form-admin"),g=functions.httpsCallable("addAdmin"),h=document.querySelector(".admin"),b=document.querySelector(".closeadmin");auth.onAuthStateChanged((function(e){e&&(e.getIdTokenResult().then((function(e){e.claims.admin?h.style.display="block":console.log("user is not an administrator")})),console.log("user is logged in: ",e.displayName),l.username=e.displayName,l.liveupdates(i),c.style.display="none")})),p.addEventListener("click",(function(e){e.preventDefault(),v.classList.remove("hide")})),y.addEventListener("submit",(function(e){e.preventDefault(),g({email:e.target.adminEmail.value}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))})),h.addEventListener("click",(function(e){e.preventDefault(),y.style.display="block"})),b.addEventListener("click",(function(e){e.preventDefault(),y.style.display="none"})),u.addEventListener("submit",(function(e){e.preventDefault(),auth.signInWithEmailAndPassword(u.email.value,u.password.value).catch((function(e){return console.log(e)})),c.style.display="none",u.reset()})),document.querySelector(".closewindow").addEventListener("click",(function(e){v.classList.add("hide")})),s.addEventListener("submit",(function(e){e.preventDefault(),l.signup(s.email.value,s.password.value,s.username.value),s.reset(),c.style.display="none",v.classList.add("hide")})),r.addEventListener("submit",(function(e){e.preventDefault();var t=r.message.value.trim();l.addChat(t),setTimeout((function(){m.innerHTML="Message sent"}),100),setTimeout((function(){m.innerHTML=""}),2e3),r.reset()})),d.addEventListener("click",(function(e){l.room=e.target.value,l.database=db.collection(l.room),i.innerHTML="",l.liveupdates(i)})),f.addEventListener("click",(function(e){e.preventDefault(),auth.signOut().then((function(){l.username="anon",l.room="main",l.liveupdates(i),window.location.reload(!1)}))}))}});