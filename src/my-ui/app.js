import { Workcomp } from './workcomp';
import './app.css';

const workcomp = new Workcomp();
const states = document.querySelector('.states');

// initial build
workcomp.builddb.doc('ZFxpGUOCVSNaK2Wvefzb').get()
    .then(doc => doc.data())
    .then(data => {
        states.innerHTML = `${data.states}`;
    })


const   TTDdiv = document.querySelector('.TTDdiv'),
        TTDul = document.querySelector('.TTDul'),
        TTDform = document.querySelector('.TTDform'),
        Resultsdiv = document.querySelector('.Resultsdiv'),
        selections = document.querySelectorAll('.selection'),
        stateSelections = document.querySelectorAll('.stateSelection'),
        calculatorBuilder = document.querySelectorAll('.calculatorBuilder'),
        CAcalculatorBuilder = document.querySelector('.CAcalculatorBuilder'),
        defaultWeeks = document.querySelectorAll('.defaultWeeks'),
        fileNote = document.querySelector('.file-note'),
        workCompAct = document.querySelectorAll('.workCompAct'),
        wagesNo = document.querySelector('.wagesNo'),
        wagesYes = document.querySelectorAll('.wagesYes'),
        wageIncrease = document.querySelector('.wageIncrease'),
        minmax = document.querySelector('.minmax');
let     currentState,
        payperiod;

// change views
selections.forEach(selection => {
    selection.addEventListener('click', e => {
        e.preventDefault();
        if (states.value !== 'none') {
            var selectionArray = document.querySelectorAll('.selection')
            selectionArray.forEach(sel => {
                if (sel === e.target) {
                    sel.style.backgroundColor = 'rgb(0, 0, 205)';
                } else if (sel !== e.target) {
                    sel.style.backgroundColor = "rgb(0, 0, 205, 0.2)";
                }
            })
            stateSelections.forEach(stateSelection => {
                if (stateSelection.getAttribute('name') === e.target.getAttribute('name')) {
                    stateSelection.classList.remove('inactive');
                } else {
                    stateSelection.classList.add('inactive');
                }
            })
        }
    })
})
// build state view
states.addEventListener('mouseup', e => {
    e.preventDefault();
    if (e.target.value !== 'none' && e.target.value !== currentState) {
        currentState = e.target.value;
        workcomp.clearAll(TTDul, fileNote, calculatorBuilder, CAcalculatorBuilder);

        workcomp.stateBuild(e.target, Resultsdiv, defaultWeeks, TTDdiv);
        stateSelections.forEach(stateSelection => {
            if (stateSelection.getAttribute('name') === 'stateDisplay') {
                stateSelection.classList.remove('inactive')
            } else {
                stateSelection.classList.add('inactive');
            }
        })
        var selectionArray = document.querySelectorAll('.selection')
        selectionArray.forEach(sel => {
            if (sel.getAttribute('name') === 'stateDisplay') {
                sel.style.backgroundColor = 'rgb(0, 0, 205)';
            } else {
                sel.style.backgroundColor = "rgb(0, 0, 205, 0.2)";
            }
        })
        var stateMessages = document.querySelectorAll('.stateMessages');
        stateMessages.forEach(stateMessage => {
            if (stateMessage.getAttribute('name') === e.target.value) {
                stateMessage.classList.remove('inactive');
            } else {
                stateMessage.classList.add('inactive');
            }
        })
        workCompAct.forEach(act => {
            if (act.getAttribute('name') === e.target.value) {
                act.classList.remove('inactive');
            } else {
                act.classList.add('inactive');
            }
        })
        if (e.target.value === 'California') {
            TTDdiv.classList.add('inactive');
            workcomp.clearAll(TTDul, fileNote, calculatorBuilder, CAcalculatorBuilder);
            wagesYes.forEach(wage => {
                wage.classList.add('inactive');
            })
        } else if (e.target.value !== 'California') {
            TTDdiv.classList.remove('inactive');
        }
    } else if (e.target.value === 'none') {
        workcomp.clearAll(TTDul, fileNote, calculatorBuilder, CAcalculatorBuilder);
        stateSelections.forEach(stateSelection => {
            stateSelection.classList.add('inactive');
            currentState = e.target.value;
        })
    }
})

// build generic calculator -- all states except California
calculatorBuilder.forEach(calculator => {
    calculator.addEventListener('submit', e => {
        e.preventDefault();
        if((calculator.payperiod.value !== '1') && ((calculator.numberOfWeeks.value % 2) > 0)){
            throw alert('You must enter an even number for weeks needed');
        } else {
            let Resultsdiv_inputs = document.querySelectorAll('.Resultsdiv input');
            workcomp.buildbenefitcalculator(calculator.numberOfWeeks.value, TTDul, calculator.payperiod.value, fileNote, Resultsdiv_inputs);
            payperiod = calculator.payperiod.value;
        }
    })
})


// CA -- check for wage increase to modify viewable fields
wageIncrease.addEventListener('click', (e) => {
    if (CAcalculatorBuilder.wageIncrease.value === 'Yes'){
        wagesYes.forEach(wage => {
            wage.classList.remove('inactive');
        })
        wagesNo.classList.add('inactive');
    } else if (CAcalculatorBuilder.wageIncrease.value === 'No'){
        wagesYes.forEach(wage => {
            wage.classList.add('inactive');
        })
        wagesNo.classList.remove('inactive');
    }
})

// calculate benefits -- all except California
TTDform.addEventListener('submit', e => {
    e.preventDefault();

    const TTDarray = document.querySelectorAll('.fields'),
        AWWresult = document.querySelector('.AWWresult'),
        TIBresult = document.querySelector('.TIBresult'),
        IIBresult = document.querySelector('.IIBresult'),
        SIBresult = document.querySelector('.SIBresult'),
        Grossresult = document.querySelector('.Grossresult'),
        TTDresult = document.querySelector('.TTDresult'),
        PPDresult = document.querySelector('.PPDresult'),
        TXhourlywage = document.querySelector('.TXhourly'),
        ILdependents = document.querySelector('.ILdependents');

    switch (states.value) {
        case 'Texas':
            workcomp.calculatorTexas(Grossresult, AWWresult, TIBresult, IIBresult, SIBresult, TTDarray, TXhourlywage.hourlywage.value, minmax, fileNote, payperiod);
            break;

        case 'Illinois':
            workcomp.calculatorIllinois(Grossresult, AWWresult, TTDresult, PPDresult, TTDarray, ILdependents.dependents.value, minmax, fileNote, payperiod);
            break;

        case 'Oklahoma':
            workcomp.calculatorOklahoma(Grossresult, AWWresult, TTDresult, PPDresult, TTDarray, minmax, fileNote, payperiod);
            break;

        case 'Virginia':
            workcomp.calculatorVirginia(Grossresult, AWWresult, TTDresult, PPDresult, TTDarray, minmax, fileNote, payperiod);
            break;
        
        case 'Georgia':
            workcomp.calculatorGeorgia(Grossresult, AWWresult, TTDresult, PPDresult, TTDarray, minmax, fileNote, payperiod);
            break;

        case 'Arkansas':
            workcomp.calculatorArkansas(Grossresult, AWWresult, TTDresult, PPDresult, TTDarray, minmax, fileNote, payperiod);
            break;
            
        case 'Michigan':
            workcomp.calculatorMichigan(Grossresult, AWWresult, TTDarray, minmax, fileNote, payperiod);
            break;

        case 'Alabama':
            workcomp.calculatorAlabama(Grossresult, AWWresult, TTDresult, PPDresult, TTDarray, minmax, fileNote, payperiod);
            break;

        case 'Indiana':
            workcomp.calculatorIndiana(Grossresult, AWWresult, TTDresult, TTDarray, minmax, fileNote, payperiod);
            break;

        case 'Tennessee':
          workcomp.calculatorTennessee(Grossresult, AWWresult, TTDresult, PPDresult, TTDarray, minmax, fileNote, payperiod);
          break;

        case 'Pennsylvania':
          workcomp.calculatorPennsylvania(Grossresult, AWWresult, TTDresult, PPDresult, TTDarray, minmax, fileNote, payperiod);
          break;
    }
})

// Calculator for CA benefits
CAcalculatorBuilder.addEventListener('submit', e => {
    e.preventDefault();
    const AWWresult = document.querySelector('.AWWresult'),
          Grossresult = document.querySelector('.Grossresult'),
          TTDresult = document.querySelector('.TTDresult'),
          PPDresult = document.querySelector('.PPDresult'),
          DailyRateresult = document.querySelector('.DailyRateresult');

    workcomp.calculatorCalifornia(CAcalculatorBuilder, Grossresult, DailyRateresult, AWWresult, TTDresult, PPDresult, minmax, fileNote);
})



