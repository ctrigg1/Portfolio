import './dropdown.css';

class Dropdown {
    constructor(container){
        this.container = container;
    }
    init(){
        this.container.addEventListener('mouseenter', (e) => {
                console.log(e);
                console.log(e.target.children[0]);
                e.target.children[0].classList.toggle('active');
            })
        this.container.addEventListener('mouseleave', (e) => {
                console.log(e);
                e.target.children[0].classList.toggle('active');
            })
    }
}

export {Dropdown as default};
