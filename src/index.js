const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const boxArray = [box1, box2, box3, box4, box5];

let index = 0;

const rotation = setInterval(() => {

        console.log(boxArray[index].firstChild)
        if(index === 0){
          boxArray[index].style.backgroundColor = "mediumblue";
          boxArray[index].style.color = "white";
          boxArray[index].firstChild.classList.remove("text-primary");
          boxArray[index].firstChild.style.color = "white";
          boxArray[index + 4].style.backgroundColor = "white";
          boxArray[index + 4].style.color = "gray";
          boxArray[index + 4].firstChild.classList.add("text-primary");
          boxArray[index + 4].firstChild.style.color = "";
        } else {
          boxArray[index].style.backgroundColor = "mediumblue";
          boxArray[index].style.color = "white";
          boxArray[index].firstChild.classList.remove("text-primary");
          boxArray[index].firstChild.style.color = "white";
          boxArray[index - 1].style.backgroundColor = "white"; 
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
