// let chatWindow = document.querySelector('.chat-window');

export class Chatroom{
    constructor(username, room){
        this.username = username;
        this.room = room;
        this.database = db.collection(this.room);
        this.color = ""
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

    updateChatWindow(datapoint, chatWindow, dispUser, dispRoom){

        if(this.color === 'rgb(0, 255, 255)'){
            this.color = 'rgb(255, 255, 255)'
        } else if(this.color !== 'rgb(0, 255, 255)'){
            this.color = 'rgb(0, 255, 255)';
        }
        let html = 
       `<li class="list-group-item" style="background-color: ${this.color}" data-id="${datapoint.id}">
       <span class="username" style="font-weight: bold">${datapoint.data().username}:</span>
       <span class="message">${datapoint.data().message}</span>
       <div class="time">${datapoint.data().created_at.toDate().toString().slice(0, 28)}</div>
       </li>`
        dispUser.innerHTML = this.username;
        dispRoom.innerHTML = this.room;
       chatWindow.innerHTML += html; 
       console.log(this.color);
    }
    clearChatWindow(chatWindow){
    }
}