const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const boxArray = [box1, box2, box3, box4, box5];
const form_contactUs = document.querySelector('.form-contactUs');
const contactEmail = functions.httpsCallable('contactEmail');
const messageStatus = document.querySelector('.messageStatus');

let messagefromclient = {};
let index = 0;

const rotation = setInterval(() => {

        if(index === 0){
          boxArray[index].classList.add('bg-primary');
          boxArray[index].style.color = "white";
          boxArray[index].firstChild.classList.remove("text-primary");
          boxArray[index].firstChild.style.color = "white";
          boxArray[index + 4].classList.remove('bg-primary');
          boxArray[index + 4].style.color = "gray";
          boxArray[index + 4].firstChild.classList.add("text-primary");
          boxArray[index + 4].firstChild.style.color = "";
        } else {
          boxArray[index].classList.add('bg-primary');
          boxArray[index].style.color = "white";
          boxArray[index].firstChild.classList.remove("text-primary");
          boxArray[index].firstChild.style.color = "white";
          boxArray[index - 1].classList.remove('bg-primary');
          boxArray[index - 1].style.color = "gray";
          boxArray[index - 1].firstChild.classList.add("text-primary"); 
          boxArray[index - 1].firstChild.style.color = "";         
        }
        if(index >= 4){
            index = 0;
        } else {
        index++;
        }
}, 3000);

form_contactUs.addEventListener('submit', e => {
  e.preventDefault();
  messagefromclient = {
    firstName: e.target.firstName.value,
    lastName: e.target.lastName.value,
    email: e.target.emailAddress.value,
    body: e.target.body.value,
  }

  contactEmail(messagefromclient).then(data => {
    console.log(data.data.message);
    messageStatus.style.display = 'block' 
    messageStatus.innerHTML = `${data.data.message}`;
    setTimeout(() => {
      messageStatus.style.display = 'none';
      document.querySelector('.close').click();
    },2000);
  })
})


