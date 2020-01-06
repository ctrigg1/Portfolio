export class Chatroom{
    constructor(username, room){
        this.username = username;
        this.room = room;
        this.database = db.collection(this.room);
        this.dbRooms = db.collection('rooms');
    }
// signup
    signup(email, password, username){
        auth.createUserWithEmailAndPassword(email,password).then(response => {
            console.log(response.user);
            response.user.updateProfile({
                displayName: username
            }).then(() => console.log(response.user.displayName));
        })
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

        let color, margin, br, align;

        if(this.username === datapoint.data().username){
            color = 'rgb(255, 255, 255)';
            margin = 'margin-left: 30%;';
            br = '15px 0 0 15px';
            align = 'left';
        } else {
            color = 'rgb(3, 0, 172, 0.2)';
            margin = 'margin-right: 30%;';
            br = '0px 15px 15px 0px';
            align = 'left';
        }
        let html = 
       `<div class="" style="background-color: ${color}; text-align: ${align}; border-radius: ${br}; ${margin};" data-id="${datapoint.id}">
       <div>
       <span class="username" style="font-weight: bold">${datapoint.data().username}:</span>
       <span class="message">${datapoint.data().message}</span>
       </div>
       <span class="time" style="font-size:0.8rem display=block">${datapoint.data().created_at.toDate().toString().slice(0, 24)}</span>
       <div>`
       chatWindow.innerHTML += html; 
    }

    liveupdates(showchat){
        this.database.onSnapshot(snapshot => {
            console.log(snapshot);
            snapshot.docChanges().sort((a,b) => {
                return a.doc.data().created_at.toDate() - b.doc.data().created_at.toDate();
            }).forEach(snap => {
                if(snap.type === "added"){
                    this.updateChatWindow(snap.doc, showchat, this.username, this.room)
                    console.log('message added');
                }
            })
        })
    }
}