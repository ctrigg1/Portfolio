import './dropdown.css';

class Dropdown {
    constructor(container){
        this.container = container;
    }
    init(){
        this.container.addEventListener('mouseenter', (e) => {
                e.target.children[0].classList.toggle('active');
            })
        this.container.addEventListener('mouseleave', (e) => {
                e.target.children[0].classList.toggle('active');
            })
    }
}

export {Dropdown as default};
