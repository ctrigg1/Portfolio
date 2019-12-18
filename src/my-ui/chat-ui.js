// let chatWindow = document.querySelector('.chat-window');

export class Chatroom{
    constructor(username, room){
        this.username = username;
        this.room = room;
        this.database = db.collection(this.room);
    }

// add Chat
    addChat(message){

    console.log("in addchat");
    const now = new Date();
    
        const newmsg = {
            username: this.username,
            room: this.room,
            message: message,
            created_at: firebase.firestore.Timestamp.fromDate(now),
        }

    this.database.add(newmsg).then(() => console.log(newmsg));
    }

    updateChatWindow(datapoint, chatWindow){

       let html = 
       `<li class="list-group-item">
       <span class="username" style="font-weight: bold">${datapoint.data().username}:</span>
       <span class="message">${datapoint.data().message}</span>
       <div class="time">${datapoint.data().created_at.toDate()}</div>
       </li>`
   
       chatWindow.innerHTML += html; 
        return this;
    }
    clearChatWindow(chatWindow){

    }
}