import './index.css';

const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const posit = ['box1-p','box2-p','box3-p','box4-p','box5-p'];

let index = 0;
let newArrIndex = 0;

console.log(index);

const rotation = setInterval(() => {
    let newArr = posit.slice(index+1).concat(posit.slice(0, index+1));

        box1.classList = 'rotating-container box1';
        box1.classList.add(newArr[newArrIndex]);

        box2.classList = 'rotating-container box2';
        box2.classList.add(newArr[newArrIndex+1]);

        box3.classList = 'rotating-container box3';
        box3.classList.add(newArr[newArrIndex+2]);;

        box4.classList = 'rotating-container box4';
        box4.classList.add(newArr[newArrIndex+3]);

        box5.classList = 'rotating-container box5';
        box5.classList.add(newArr[newArrIndex+4]);

        if(index >= 4){
            index = 0;
        } else {
        index++;
        }
}, 4000);
