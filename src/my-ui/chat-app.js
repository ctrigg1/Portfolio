import { Chatroom} from './chat-ui';

const newmsg = document.querySelector(".new-chat");
const showChat = document.querySelector(".show-chat");
const chatroom = new Chatroom('anon','main');
const chatName = document.querySelector(".new-name");
const currentRoom = document.querySelector(".rooms")
const displayUsername = document.querySelector(".currentUsername")
const displayRoom  = document.querySelector(".currentRoom")
const displayLogin = document.querySelector(".loginTime")
const msgsent = document.querySelector(".msgsent");


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

// update name listener
chatName.addEventListener("submit", e => {
    e.preventDefault();
    const newName = chatName.name.value.trim();
    chatroom.username = newName;
    displayUsername.innerHTML = newName;
    console.log(chatroom.username);
    console.log(chatroom);
})

// change room listener
currentRoom.addEventListener("click", e => {
    const newRoom = e.target.name;
    chatroom.room = newRoom;
    displayRoom.innerHTML = newRoom;
    showChat.innerHTML = "";
    chatroom.database = db.collection(newRoom);
    console.log(chatroom.database.get())

// snapshot refresh for room change
    chatroom.database.onSnapshot(snapshot => {
        snapshot.docChanges().sort((a,b) => {
            return a.doc.data().created_at.toDate() - b.doc.data().created_at.toDate();
        }).forEach(snap => {
            if(snap.type === "added"){
                chatroom.updateChatWindow(snap.doc,showChat, displayUsername, displayRoom)
            }
        })
    })
})

// snapshot refresh
chatroom.database.onSnapshot(snapshot => {
    snapshot.docChanges().sort((a,b) => {
        return a.doc.data().created_at.toDate() - b.doc.data().created_at.toDate();
    }).forEach(snap => {
        if(snap.type === "added"){
            chatroom.updateChatWindow(snap.doc,showChat, displayUsername, displayRoom)
        }
    const login = Date();
    displayLogin.innerHTML = login.slice(15, 28);
    })
})
