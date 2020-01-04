import '../my-ui/chat-app.css';
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

auth.onAuthStateChanged(user => {
    if(user) {
        console.log("user is logged in: ", user.displayName);
            // update UI
        chatroom.database.onSnapshot(snapshot => {
            snapshot.docChanges().sort((a,b) => {
                return a.doc.data().created_at.toDate() - b.doc.data().created_at.toDate();
            }).forEach(snap => {
                if(snap.type === "added"){
                    chatroom.updateChatWindow(snap.doc,showChat, 'anon', 'main')
                }
            })
    })
    loginScreen.style.display = 'none';
    } else {
        console.log('user logged out');
        loginScreen.style.display = 'block';
    }
});

// new user
newuser.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target);
    console.log(signUp);
    signupwindow.classList.remove('hide');
})

// login or new user auth
logIn.addEventListener("submit", e => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(logIn.email.value, logIn.password.value).then(cred => console.log(cred.displayName));

    // update UI
    chatroom.database.onSnapshot(snapshot => {
        snapshot.docChanges().sort((a,b) => {
            return a.doc.data().created_at.toDate() - b.doc.data().created_at.toDate();
        }).forEach(snap => {
            if(snap.type === "added"){
                chatroom.updateChatWindow(snap.doc,showChat, 'anon', 'main')
            }
        })
    })
    loginScreen.style.display = 'none';
})

// close sign-up auth
document.querySelector(".closewindow").addEventListener('click', e => {
    console.log(e.target);
    signupwindow.classList.add('hide');   
})

signUp.addEventListener("submit", e => {
    e.preventDefault();
    chatroom.signup(signUp.email.value, signUp.password.value).then(cred => cred.displayName = signUp.username.value);

    // update UI
    chatroom.database.onSnapshot(snapshot => {
        snapshot.docChanges().sort((a,b) => {
            return a.doc.data().created_at.toDate() - b.doc.data().created_at.toDate();
        }).forEach(snap => {
            if(snap.type === "added"){
                chatroom.updateChatWindow(snap.doc,showChat, 'anon', 'main')
            }
        })
    })
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
// currentRoom.addEventListener("click", e => {
//     const newRoom = e.target.name;
//     chatroom.room = newRoom;
//     showChat.innerHTML = "";
//     chatroom.database = db.collection(newRoom);

// // snapshot refresh for room change
//     chatroom.database.onSnapshot(snapshot => {
//         snapshot.docChanges().sort((a,b) => {
//             return a.doc.data().created_at.toDate() - b.doc.data().created_at.toDate();
//         }).forEach(snap => {
//             if(snap.type === "added"){
//                 chatroom.updateChatWindow(snap.doc,showChat, 'anon', 'main')
//             }
//         })
//     })
// })

// logout
logOut.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut();
})


