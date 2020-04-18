import { Chatroom } from './chat-ui';
import './chat.css';

const newmsg = document.querySelector(".new-chat");
const showChat = document.querySelector(".show-chat");
const signUp = document.querySelector(".signup");
const logIn = document.querySelector(".logIn")
const loginScreen = document.querySelector(".loginPage");
const chatroom = new Chatroom('anon','main');
const currentRoom = document.querySelector(".rooms")
const msgsent = document.querySelector(".msgsent");
const logOut = document.querySelector(".logout");
const newuser = document.querySelector(".new-user");
const signupwindow = document.querySelector(".signupwindow");
const formAdmin = document.querySelector(".form-admin");
const addAdmin = functions.httpsCallable("addAdmin");
const adminView = document.querySelector(".admin");
const closeadmin = document.querySelector(".closeadmin");

auth.onAuthStateChanged(response => {
    if(response) {
        // test of admin custom claim token
        response.getIdTokenResult().then(TokenResult => {
          TokenResult.claims.admin ? adminView.style.display = 'block' : 
          console.log('user is not an administrator');
        })
        console.log("user is logged in: ", response.displayName);
            // update UI
        chatroom.username = response.displayName;
        chatroom.liveupdates(showChat);
        loginScreen.style.display = 'none';
    } 
})

// new user
newuser.addEventListener('click', e => {
    e.preventDefault();
    signupwindow.classList.remove('hide');
})

// add admin custom claim
formAdmin.addEventListener('submit', e => {
  e.preventDefault();
  addAdmin({email: e.target.adminEmail.value})
  .then(result => console.log(result))
  .catch(err => console.log(err));
})

adminView.addEventListener('click', e => {
  e.preventDefault();
  formAdmin.style.display = 'block';
})

closeadmin.addEventListener('click', e => {
  e.preventDefault();
  formAdmin.style.display = 'none';
})

// login or new user auth
logIn.addEventListener("submit", e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(logIn.email.value, logIn.password.value).catch(err => console.log(err));
    loginScreen.style.display = 'none';
    logIn.reset();
})

// close sign-up auth
document.querySelector(".closewindow").addEventListener('click', e => {
    signupwindow.classList.add('hide');   
})

// new user
signUp.addEventListener("submit", e => {
    e.preventDefault();
    chatroom.signup(signUp.email.value, signUp.password.value, signUp.username.value);
    // update UI
    signUp.reset();
    loginScreen.style.display = 'none';
    signupwindow.classList.add('hide');  
})

// send message to display
newmsg.addEventListener("submit", e => {
    e.preventDefault();
    const sendmsg = newmsg.message.value.trim();
    chatroom.addChat(sendmsg);
    setTimeout(() => {
        msgsent.innerHTML = "Message sent";
    } , 100);
    setTimeout(() => {
        msgsent.innerHTML = "";
    } , 2000);
    newmsg.reset();
})

// change room listener
currentRoom.addEventListener("click", e => {
        
    chatroom.room = e.target.value;
    chatroom.database = db.collection(chatroom.room);
    showChat.innerHTML = "";
    chatroom.liveupdates(showChat);
})

// logout
logOut.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(() => {
        chatroom.username = "anon";
        chatroom.room = 'main';
        chatroom.liveupdates(showChat);
        window.location.reload(false);
    });
})



