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
            response.user.updateProfile({
                displayName: username
            }).then(() => console.log(response.user.displayName));
        })
    }

// add Chat
    addChat(message){

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

        let color, margin, br; 
        let align = 'left';

        if(this.username === datapoint.data().username){
            color = 'rgb(255, 255, 255)';
            margin = 'margin-left: 29%;';
            br = '10px 0 0 10px';
        } else {
            color = 'rgb(3, 0, 172, 0.2)';
            margin = 'margin-right: 29%;';
            br = '0px 10px 10px 0px';
        }
        let html = 
       `<div class="" style="background-color: ${color}; text-align: ${align}; border-radius: ${br}; ${margin}; width: 70%; padding: 0px 10px" data-id="${datapoint.id};">
       <div>
       <span class="username" style="font-weight: bold; font-size:1.1rem">${datapoint.data().username}:</span>
       <span class="message" style="font-size:1.1rem">${datapoint.data().message}</span>
       </div>
       <span class="time" style="font-size:0.8rem; display:block; text-align:right; padding-right: 2%">${datapoint.data().created_at.toDate().toString().slice(0, 24)}</span>
       <div>`
       chatWindow.innerHTML += html; 
    }

    liveupdates(showchat){
        this.database.onSnapshot(snapshot => {
            snapshot.docChanges().sort((a,b) => {
                return a.doc.data().created_at.toDate() - b.doc.data().created_at.toDate();
            }).forEach(snap => {
                if(snap.type === "added"){
                    this.updateChatWindow(snap.doc, showchat, this.username, this.room)
                }
            })
        })
    }
}