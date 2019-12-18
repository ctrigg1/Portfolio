import { Chatroom} from './chat-ui';

const newmsg = document.querySelector(".new-chat");
const showChat = document.querySelector(".show-chat");
const chatroom = new Chatroom('anon','main');
const chatName = document.querySelector(".new-name");
const currentRoom = document.querySelector(".rooms");

// send message to display
newmsg.addEventListener("submit", e => {
    e.preventDefault();
    const sendmsg = newmsg.message.value.trim();
    console.log(sendmsg);
    chatroom.addChat(sendmsg);
})

// update name listener
chatName.addEventListener("submit", e => {
    e.preventDefault();
    const newName = chatName.name.value.trim();
    chatroom.username = newName;
    console.log(chatroom.username);
    console.log(chatroom);
})

// change room listener
currentRoom.addEventListener("click", e => {
    const newRoom = e.target.name;
    chatroom.room = newRoom;
    showChat.innerHTML = "";
    chatroom.database = db.collection(newRoom);
    console.log(chatroom.database.get())
    chatroom.database.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(snap => {
            if(snap.type === "added"){
                chatroom.updateChatWindow(snap.doc,showChat)
            }
        })
    })
})

// initialize chat Window
chatroom.database.onSnapshot(snapshot => {
    snapshot.docChanges().forEach(snap => {
        if(snap.type === "added"){
            chatroom.updateChatWindow(snap.doc,showChat)
        }
    })
})