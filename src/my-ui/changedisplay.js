import './changedisplay.css'

class ChangeDisplay{
    constructor(container){
        this.container = container;
        this.target = container.querySelectorAll('.target button');
        this.content = container.querySelectorAll('p')
    }
    // init elements
    init(){
        this.container.addEventListener('click', (e) => {
            const buttons = e.target;
            buttons.classList.toggle('active');
            this.changeDisplay(buttons);
            this.changeButtons(buttons);
        })
    }

    // change display with selection
    changeDisplay(option){
        if(option.classList.contains('btn')) {
            this.content.forEach( display => {
                if(display.id === option.value){
                    display.classList.add('active');
                    display.classList.remove('off');
                } else {
                    display.classList.remove('active');
                    display.classList.add('off');
                }
            })
        }
    }
    changeButtons(option){
        this.target.forEach( obj => {
            if(obj.value === option.value){
                obj.classList.add('active');
            }  else {
                obj.classList.remove('active');
            }
        })
    }
}

export {ChangeDisplay as default}

