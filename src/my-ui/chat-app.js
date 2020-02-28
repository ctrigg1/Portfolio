import {Chatroom} from './chat-ui';

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

// window.addEventListener('load', auth.signOut());

auth.onAuthStateChanged(response => {
    if(auth.currentUser.uid) {
        console.log("user is logged in: ", auth.currentUser.displayName);
            // update UI
        chatroom.username = auth.currentUser.displayName;
        chatroom.liveupdates(showChat);
        loginScreen.style.display = 'none';
    } 
})

// new user
newuser.addEventListener('click', e => {
    e.preventDefault();
    signupwindow.classList.remove('hide');
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


