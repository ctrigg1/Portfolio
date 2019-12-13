// quiz script
let answers = ['C','B','C','C','C','B','C','B','C','B'];
let form = document.querySelector('.myForm');
let submit = document.querySelector('#submit')
let result = document.querySelector('#result')
let resultP = document.querySelector('#result-p')

console.log(form);
console.log(submit);

window.addEventListener('keydown',function(e){
    if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13){
        if(e.target.nodeName=='INPUT'&&e.target.type=='text'){
            e.preventDefault();
            return false;}
        }
    },true);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];
    let score = 0;
    console.log(userAnswers);

    userAnswers.forEach( (answer, index) => {
        if(answer === answers[index]) {
            score += 10;
        }
    })

    let output = 0;
    resultP.classList.remove('d-none');
    scrollTo(0,0);

    const timer = setInterval( () => {
        if(output <= score){
            result.textContent = `${output}%`;
            output++;
        }
        if(output > score){
            clearInterval(timer)
        }
    }, 60)
})

