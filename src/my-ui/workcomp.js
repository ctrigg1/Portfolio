export class Workcomp{
    constructor(){
    // this.usersdb = db.collection(this.user);
    this.builddb = db.collection('build');
    this.statedb = db.collection('states');

    // AL rates as of 
    this.AlabamaCOA = '7.1.19'
    this.AlabamaMax = 892
    this.AlabamaMin = 245

    // AR rates as of 1.1.20
    this.ArkansasCOA = '1.1.20';
    this.ArkansasTTDmin = 20;
    this.ArkansasTTDmax = 711;
    this.ArkansasPPDmin = 20;
    this.ArkansasPPDgreatmax = 533;
    this.ArkansasPPDlessmax = 154;

    // CA rates as of 1.1.20
    this.CaliforniaCOA = '1.1.2020';
    this.CaliforniaTTDmin = 194.91;
    this.CaliforniaTTDmax = 1299.43;
    this.CaliforniaPPDmin = 160;
    this.CaliforniaPPDmax = 290;
    
    // GA rates as of 7.1.19
    this.GeorgiaCOA = '7.1.19';
    this.GeorgiaTTDmin = 50;
    this.GeorgiaTTDmax = 675;
    this.GeorgiaPPDmax = 675;

    // IL rates as of 1.15.20 -- six month updates
    this.IllinoisCOA = '1.15.20';
    this.Illinoismin = [246.67, 283.67, 320.67, 357.67, 370];
    this.IllinoisTTDmax = 1549.07;
    this.IllinoisPPDmax = 836.69;

    // IN rates as of 7.1.19
    this.IndianaMax = 780;
    this.IndianaMin = 75;
    this.IndianaCOA = '7.1.19';
    // this.Indiana0to10 = 1750
    // this.Indiana11to35 = 1952
    // this.Indiana36to50 = 3186
    // this.Indiana51to100 = 4060
    // this.IndianaBodyPart = {
    //     Thumb: 12,
    //     IndexFinger: 8,
    //     SecondFinger: 7,
    //     ThirdFinger: 6,
    //     FourthFinger: 4,
    //     HandBelowElbow: 40,
    //     ArmAboveElbow: 50,
    //     GreatToe: 12,
    //     SecondToe: 6,
    //     ThirdToe: 4,
    //     FourthToe: 3,
    //     FifthToe: 2,
    //     FootBelowKnee: 35,
    //     LegAboveKnee: 45,
    //     WholeBody: 100,
    // }

    // MI rates as of 1.1.20
    this.MichiganCOA = '';
    this.MichiganTTDmin = 0;
    this.MichiganTTDmax = 934.00;
    this.MichiganPPDmin = 0;
    this.MichiganPPDmax = 0;
    
    // OK rates as of 1.1.20
    this.OklahomaCOA = '1.1.20';
    this.OklahomaTTDmax = 898.63;
    this.OklahomaPPDmax = 350;

    // PA rates as of 1.1.20
    this.PennsylvaniaCOA = '1.1.20';
    this.PennsylvaniaMax = 1081;
    this.PennsylvaniaHigh = [1621.50, 810.76];
    this.PennsylvaniaMid = [810.75, 600.56];
    this.PennsylvaniaLow = 600.55;

    // TX rates as of 10.1.19
    this.TexasCOA = '10.1.19';
    this.TexasTIBmin = 146;
    this.TexasTIBmax = 971;
    this.TexasIIBmin = 146;
    this.TexasIIBmax = 679;
    this.TexasSIBmax = 679;

    // TN rates as of 7.1.19
    this.TennesseeCOA = '7.1.19'
    this.TennesseeTTDmax = 1056
    this.TennesseeMin = 144.00
    this.TennesseePPDmax = 960
    
    // VA rates as of 7.1.19
    this.VirginiaCOA = '7.1.19'
    this.Virginiamin = 275.50;
    this.Virginiamax = 1102;
    }

    signUp(){

    }

    logIn(){

    }

    logOut(){

    }

    stateBuild(state, Resultsdiv, defaultWeeks, TTDdiv){
        if(state.value !== 'none'){
            if(state.value === 'California'){
                TTDdiv.classList.add('inactive');
            } else {
                TTDdiv.classList.remove('inactive');
            }  
            const stateString = state.value;
            this.statedb.doc(stateString).get().then(docs => {
                Resultsdiv.innerHTML = "";
                Resultsdiv.innerHTML = docs.data().Resultsdiv;
                defaultWeeks.forEach(defaultweek => {
                    defaultweek.innerHTML = docs.data().defaultWeeks;
                })
            })
        }
    }

    buildbenefitcalculator(weeks, TTDwindow, payperiod, fileNote, Resultsdiv){
        let b = weeks;
        TTDwindow.innerHTML = "";
        fileNote.innerHTML = "";

        if(Resultsdiv !== []){
            Resultsdiv.forEach(result => {
                result.value = "";
                result.style.backgroundColor = "";
            })
        }
        if(payperiod === '1'){
            for(let i = 1; i <= b; i++){
                TTDwindow.innerHTML += `<input class="fields" name="field${i}" placeholder="week ${i}" type="text" required>`;
            }
        } else {
            for(let i = 1; i <= b; i = i + 2){
                TTDwindow.innerHTML += `<input class="fields" name="field${i}&${i + 1}" placeholder="Week ${i} & ${i + 1}" type="text" required>`;
            }
        }  
    }

    clearAll(TTDul, fileNote, calculatorBuilder, CAcalculatorBuilder){
        TTDul.innerHTML = "";
        fileNote.innerHTML = "";
        calculatorBuilder.forEach(calculator => {
            calculator.reset();
        });
        CAcalculatorBuilder.reset();
    }

    calculatorAlabama(Gross, AWW, TTD, PPD, TTDarray, minmax, fileNote, payperiod){
        let sum = 0;
        let length = payperiod === '1' ? TTDarray.length : (TTDarray.length * 2);
        let AlabamaMax = this.AlabamaMax;
        let AlabamaMin = this.AlabamaMin;
        let AlabamaCOA = this.AlabamaCOA;
        let x = 0; 

        TTDarray.forEach(field => {
            sum += parseFloat(field.value);
        })

        let AL_Gross = sum;
        let AL_AWW = sum / length;
        let AL_TTD = function(){
            if(((AL_AWW * 2) / 3).toFixed(2) > AlabamaMax){
                x = 1;
                TTD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                PPD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return AlabamaMax.toFixed(2);
            } else if (((AL_AWW * 2) / 3).toFixed(2) < AlabamaMin){
                x = 1;
                TTD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                PPD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return AlabamaMin.toFixed(2);
            } else {
                x = 0;
                TTD.style.backgroundColor = "";
                PPD.style.backgroundColor = "";
                return ((AL_AWW * 2) / 3).toFixed(2);
            }
        }();

        minmax.innerHTML = x === 1 ? '*Rates in blue have exceeded the maximum or minimum rates as of ' + AlabamaCOA : '';

        Gross.value = '$' + AL_Gross.toFixed(2);
        AWW.value = '$' + AL_AWW.toFixed(2);
        TTD.value = '$' + AL_TTD;
        PPD.value = '$' + AL_TTD;
        fileNote.innerHTML = `Wages span ${TTDarray.length} week(s). Gross Total = ${Gross.value}; AWW = ${AWW.value}; TTD rate = ${TTD.value}; PPD rate = ${PPD.value}`;
    }

    calculatorArkansas(Gross, AWW, TTD, PPD, TTDarray, minmax, fileNote, payperiod){
        let sum = 0;
        let length = payperiod === '1' ? TTDarray.length : (TTDarray.length * 2);
        let ArkansasTTDmin = this.ArkansasTTDmin;
        let ArkansasTTDmax = this.ArkansasTTDmax;
        let ArkansasPPDmin = this.ArkansasPPDmin;
        let ArkansasPPDgreatmax = this.ArkansasPPDgreatmax;
        let ArkansasPPDlessmax = this.ArkansasPPDlessmax;
        let ArkansasCOA = this.ArkansasCOA;
        let x = 0; 
        let y = 0;

        TTDarray.forEach(field => {
            sum += parseFloat(field.value);
        })

        let AR_Gross = sum;
        let AR_AWW = sum / length;
        let AR_TTD = function(){
            if(((AR_AWW * 2) / 3).toFixed(2) > ArkansasTTDmax){
                x = 1;
                TTD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return ArkansasTTDmax.toFixed(2);
            } else if (((AR_AWW * 2) / 3).toFixed(2) < ArkansasTTDmin){
                x = 1;
                TTD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return ArkansasTTDmin.toFixed(2);
            } else {
                x = 0;
                TTD.style.backgroundColor = "";
                return ((AR_AWW * 2) / 3).toFixed(2);
            }
        }();

        let AR_PPD = function(){
            if(AR_TTD >= 205.35){
                if((AR_TTD * .75).toFixed(2) > ArkansasPPDgreatmax){
                    y = 1;
                    PPD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                    return ArkansasPPDgreatmax.toFixed(2);
                } else if((AR_TTD * .75).toFixed(2) < ArkansasPPDmin){
                    y = 1;
                    PPD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                    return ArkansasPPDmin.toFixed(2);
                } else {
                    y = 0;
                    PPD.style.backgroundColor = "";
                    return (AR_TTD * .75).toFixed(2);
                }
            } else {
                if(((AR_AWW * 2) / 3).toFixed(2) > ArkansasPPDlessmax){
                    y = 1;
                    PPD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                    return ArkansasPPDlessmax.toFixed(2);
                } else if(((AR_AWW * 2) / 3).toFixed(2) < ArkansasPPDmin){
                    y = 1;
                    PPD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                    return ArkansasPPDmin.toFixed(2);
                } else {
                    y = 0;
                    PPD.style.backgroundColor = "";
                    return ((AR_AWW * 2) / 3).toFixed(2);
                }  
            }
        }();

        minmax.innerHTML = (x === 1) || (y === 1) ? '*Rates in blue have exceeded the maximum or minimum rates as of ' + ArkansasCOA : '';


        Gross.value = '$' + AR_Gross.toFixed(2);
        AWW.value = '$' + AR_AWW.toFixed(2);
        TTD.value = '$' + AR_TTD;
        PPD.value = '$' + AR_PPD;
        fileNote.innerHTML = `Wages span ${TTDarray.length} week(s). Gross Total = ${Gross.value}; AWW = ${AWW.value}; TTD rate = ${TTD.value}; PPD rate = ${PPD.value}`;
    }

    calculatorCalifornia(CAcalculatorBuilder, Gross, DailyRate, AWW, TTD, PPD, minmax, fileNote){

        let start = new Date(CAcalculatorBuilder.wageStart.value);
        let end = new Date(CAcalculatorBuilder.wageEnd.value);
        let daysDelta = end - start;
        let daysActual = (daysDelta / 86400000).toFixed(0);
        let TTD_criteria = 292.36;
        let newWageTotal = ((CAcalculatorBuilder.newHourlyRate.value * CAcalculatorBuilder.nonOT.value) + (1.5 * CAcalculatorBuilder.newHourlyRate.value * CAcalculatorBuilder.overtimeTotal.value) + (2 * CAcalculatorBuilder.newHourlyRate.value * CAcalculatorBuilder.doubleovertimeTotal.value) + (1 * CAcalculatorBuilder.tips.value) + (1 * CAcalculatorBuilder.bonuses.value));
        let CA_DailyRate = CAcalculatorBuilder.wageIncrease.value === 'No' ? CAcalculatorBuilder.grossTotal.value / daysActual : newWageTotal / daysActual;
        let CA_AWW = CA_DailyRate * 7;
        let CaliforniaPPDmax = this.CaliforniaPPDmax;
        let CaliforniaPPDmin = this.CaliforniaPPDmin;
        let CaliforniaTTDmax = this.CaliforniaTTDmax;
        let CaliforniaTTDmin = this.CaliforniaTTDmin;
        let CaliforniaCOA = this.CaliforniaCOA;
        let x = 0; 
        let y = 0;

        let CA_TTD = function(){
            if(CA_AWW.toFixed(2) > 1949.15){
                x = 1;
                TTD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return CaliforniaTTDmax;
            } else if(CA_AWW.toFixed(2) >= TTD_criteria && CA_AWW.toFixed(2) <= 1949.15){
                x = 0;
                TTD.style.backgroundColor = "";
                return (CA_AWW * 2) / 3;
            } else {
                x = 1;
                TTD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return CaliforniaTTDmin;
            }
        }();
        let CA_PPD = function(){
            if(CA_TTD.toFixed(2) >= CaliforniaPPDmax){
                y = 1;
                PPD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return CaliforniaPPDmax;
            } else if ((CA_AWW * 2) / 3 <= CaliforniaPPDmin){
                y = 1;
                PPD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return CaliforniaPPDmin;
            } else {
                y = 0; 
                PPD.style.backgroundColor = "";
                return ((CA_AWW * 2) / 3).toFixed(2);
            }
        }();

        minmax.innerHTML = (x === 1) || (y === 1) ? '*Rates in blue have exceeded the maximum or minimum rates as of ' + CaliforniaCOA : '';

        Gross.value = CAcalculatorBuilder.wageIncrease.value === 'No' ? '$' + CAcalculatorBuilder.grossTotal.value : '$' + newWageTotal;
        DailyRate.value = '$' + CA_DailyRate.toFixed(2);
        AWW.value = '$' + CA_AWW.toFixed(2);
        TTD.value = '$' + CA_TTD.toFixed(2);
        PPD.value = '$' + CA_PPD;
        fileNote.innerHTML = `Wages span ${daysActual} day(s). Gross Total = ${Gross.value}; Daily Rate = ${DailyRate.value}; AWW = ${AWW.value}; TTD rate = ${TTD.value}; PPD rate = ${PPD.value}`;
    }

    calculatorGeorgia(Gross, AWW, TTD, PPD, TTDarray, minmax, fileNote, payperiod){
        let sum = 0;
        let length = payperiod === '1' ? TTDarray.length : (TTDarray.length * 2);
        let GeorgiaTTDmin = this.GeorgiaTTDmin;
        let GeorgiaTTDmax = this.GeorgiaTTDmax;
        let GeorgiaPPDmax = this.GeorgiaPPDmax;
        let GeorgiaCOA = this.GeorgiaCOA;
        let x = 0; 
        let y = 0;


        TTDarray.forEach(field => {
            sum += parseFloat(field.value);
        })

        let GA_Gross = sum;
        let GA_AWW = sum / length;
        let GA_TTD = function(){
            if(((GA_AWW * 2) / 3).toFixed(2) > GeorgiaTTDmax){
                x = 1;
                TTD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return GeorgiaTTDmax.toFixed(2);
            } else if (((GA_AWW * 2) / 3).toFixed(2) < GeorgiaTTDmin){
                x = 1;
                TTD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return GeorgiaTTDmin.toFixed(2);
            } else {
                x = 0;
                TTD.style.backgroundColor = "";
                return ((GA_AWW * 2) / 3).toFixed(2);
            }
        }();

        let GA_PPD = function(){
            if(((GA_AWW * 2) / 3).toFixed(2) > GeorgiaPPDmax){
                y = 1;
                PPD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return GeorgiaTTDmax.toFixed(2);
            } else {
                y = 0;
                PPD.style.backgroundColor = "";
                return ((GA_AWW * 2) / 3).toFixed(2);
            }
        }();

        minmax.innerHTML = (x === 1) || (y === 1) ? '*Rates in blue have exceeded the maximum or minimum rates as of ' + GeorgiaCOA : '';

        Gross.value = '$' + GA_Gross.toFixed(2);
        AWW.value = '$' + GA_AWW.toFixed(2);
        TTD.value = '$' + GA_TTD;
        PPD.value = '$' + GA_PPD;
        fileNote.innerHTML = `Wages span ${TTDarray.length} week(s). Gross Total = ${Gross.value}; AWW = ${AWW.value}; TTD rate = ${TTD.value}; PPD rate = ${PPD.value}`;
    }

    calculatorIllinois(Gross, AWW, TTD, PPD, TTDarray, dependents, minmax, fileNote, payperiod){
        let sum = 0;
        let length = payperiod === '1' ? TTDarray.length : (TTDarray.length * 2);
        let dependents_value = this.Illinoismin[dependents];
        let IllinoisTTDmax = this.IllinoisTTDmax;
        let IllinoisPPDmax = this.IllinoisPPDmax;
        let IllinoisCOA = this.IllinoisCOA;
        let x = 0; 
        let y = 0;

        TTDarray.forEach(field => {
            sum += parseFloat(field.value);
        })

        let IL_Gross = sum;
        let IL_AWW = sum / length;
        let IL_TTD = function(){
            if(((IL_AWW * 2) / 3).toFixed(2) > IllinoisTTDmax){
                x = 1;
                TTD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return IllinoisTTDmax;
            } else if (((IL_AWW * 2) / 3).toFixed(2) < dependents_value){
                x = 1;
                TTD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return dependents_value;
            } else {
                x = 0;
                TTD.style.backgroundColor = "";
                return ((IL_AWW * 2) / 3).toFixed(2);
            }
        }();
        let IL_PPD = function(){
            if(((IL_AWW * 2) / 3).toFixed(2) > IllinoisPPDmax){
                y = 1;
                PPD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return IllinoisPPDmax;
            } else if (((IL_AWW * 2) / 3).toFixed(2) < dependents_value){
                y = 1;
                PPD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return dependents_value;
            } else {
                y = 0;
                PPD.style.backgroundColor = "";
                return ((IL_AWW * 2) / 3).toFixed(2);
            }
        }();

        minmax.innerHTML = (x === 1) || (y === 1) ? '*Rates in blue have exceeded the maximum or minimum rates as of ' + IllinoisCOA : '';

        Gross.value = '$' + IL_Gross.toFixed(2);
        AWW.value = '$' + IL_AWW.toFixed(2);
        TTD.value = '$' + IL_TTD;
        PPD.value = '$' + IL_PPD;
        fileNote.innerHTML = `Wages span ${TTDarray.length} week(s). Gross Total = ${Gross.value}; AWW = ${AWW.value}; TTD rate = ${TTD.value}; PPD rate = ${PPD.value}`;
    }

    calculatorIndiana(Gross, AWW, TTD, TTDarray, minmax, fileNote, payperiod){
        let sum = 0;
        let length = payperiod === '1' ? TTDarray.length : (TTDarray.length * 2);
        let IndianaMax = this.IndianaMax;
        let IndianaMin = this.IndianaMin;
        // let Indiana0to10 = this.Indiana0to10;
        // let Indiana11to35 = this.Indiana11to35;
        // let Indiana36to50 = this.Indiana36to50;
        // let Indiana51to100 = this.Indiana51to100;
        let IndianaCOA = this.IndianaCOA;
        let x = 0; 

        TTDarray.forEach(field => {
            sum += parseFloat(field.value);
        })

        let IN_Gross = sum;
        let IN_AWW = sum / length;
        let IN_TTD = function(){
            if(((IN_AWW * 2) / 3).toFixed(2) > IndianaMax){
                x = 1;
                TTD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return IndianaMax.toFixed(2);
            } else if (((IN_AWW * 2) / 3).toFixed(2) < IndianaMin){
                x = 1;
                TTD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return IndianaMin.toFixed(2);
            } else {
                x = 0;
                TTD.style.backgroundColor = "";
                return ((IN_AWW * 2) / 3).toFixed(2);
            }
        }();

        minmax.innerHTML = (x === 1) ? '*Rates in blue have exceeded the maximum or minimum rates as of ' + IndianaCOA : '';

        Gross.value = '$' + IN_Gross.toFixed(2);
        AWW.value = '$' + IN_AWW.toFixed(2);
        TTD.value = '$' + IN_TTD;
        fileNote.innerHTML = `Wages span ${TTDarray.length} week(s). Gross Total = ${Gross.value}; AWW = ${AWW.value}; TTD rate = ${TTD.value}`;
    }

    calculatorMichigan(Gross, AWW, TTDarray, minmax, fileNote, payperiod){
        let sum = 0;
        let length = payperiod === '1' ? TTDarray.length : (TTDarray.length * 2);
        let MichiganTTDmax = this.MichiganTTDmax;
        let MichiganPPDmax = this.MichiganPPDmax;
        let MichiganCOA = this.MichiganCOA;
        let _39weeks = [];
        let x = 0; 
        let y = 0;
        let index = 0;

        TTDarray.forEach(field => {
            _39weeks.push(field.value)
        })

        _39weeks.sort((a,b) => {
            return b - a;
        })

        if(length > 38){
            for ( ; index < 39; index++) {
                sum += parseInt(_39weeks[index]);
            }
        } else {
            throw alert('Calculator requires at least 39 weeks');
        }

        let MI_Gross = sum;
        let MI_AWW = sum / index;
        Gross.value = '$' + MI_Gross.toFixed(2);
        AWW.value = '$' + MI_AWW.toFixed(2);
        fileNote.innerHTML = `Wages span ${index} week(s). Gross Total = ${Gross.value}; AWW = ${AWW.value}`;
    }

    calculatorOklahoma(Gross, AWW, TTD, PPD, TTDarray, minmax, fileNote, payperiod){
        let sum = 0;
        let length = payperiod === '1' ? TTDarray.length : (TTDarray.length * 2);
        let OklahomaTTDmax = this.OklahomaTTDmax;
        let OklahomaPPDmax = this.OklahomaPPDmax;
        let OklahomaCOA = this.OklahomaCOA;
        let x = 0; 
        let y = 0;

        TTDarray.forEach(field => {
            sum += parseFloat(field.value);
        })

        let OK_Gross = sum;
        let OK_AWW = sum / length;
        let OK_TTD = function(){
            if((OK_AWW * .70).toFixed(2) > OklahomaTTDmax){
                x = 1;
                TTD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return OklahomaTTDmax;
            } else {
                x = 0;
                TTD.style.backgroundColor = "";
                return (OK_AWW * .70).toFixed(2);
            }
        }();
        let OK_PPD = function(){
            if((OK_AWW * .70).toFixed(2) > OklahomaPPDmax){
                y = 1;
                PPD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return OklahomaPPDmax;
            } else {
                y = 0;
                PPD.style.backgroundColor = "";
                return (OK_AWW * .70).toFixed(2);
            }
        }();

        minmax.innerHTML = (x === 1) || (y === 1) ? '*Rates in blue have exceeded the maximum or minimum rates as of ' + OklahomaCOA : '';

        Gross.value = '$' + OK_Gross.toFixed(2);
        AWW.value = '$' + OK_AWW.toFixed(2);
        TTD.value = '$' + OK_TTD;
        PPD.value = '$' + OK_PPD;
        fileNote.innerHTML = `Wages span ${TTDarray.length} week(s). Gross Total = ${Gross.value}; AWW = ${AWW.value}; TTD rate = ${TTD.value}; PPD rate = ${PPD.value}`;
    }

    calculatorPennsylvania(Gross, AWW, TTD, PPD, TTDarray, minmax, fileNote, payperiod){

      if(TTDarray.length < 39){
        throw alert('Calculator requires at least 39 weeks')      
      } else {

        let quarters = [0 , 0, 0, 0];
        let quarters_AWW;

        const length = payperiod === '1' ? TTDarray.length : (TTDarray.length * 2);
        const PennsylvaniaMax = this.PennsylvaniaMax;
        const PennsylvaniaHigh = this.PennsylvaniaHigh;
        const PennsylvaniaMid = this.PennsylvaniaMid;
        const PennsylvaniaLow = this.PennsylvaniaLow;
        const PennsylvaniaCOA = this.PennsylvaniaCOA;
        let x = 0; 
        let y = 0;

        TTDarray.forEach((field, index) => {
            if ( index >= 0 && index < 13){
              quarters[0] += parseFloat(field.value);
            } else if ( index >= 13 && index < 26){
              quarters[1] += parseFloat(field.value);
            } else if( index >= 26 && index < 39){
              quarters[2] += parseFloat(field.value);
            } else if ( index >= 39 <= 52 ){
              quarters[3] += parseFloat(field.value);
            }
        })

        quarters.sort( (a,b) => {return (b-a) });

        quarters_AWW = ((quarters[0] / 13) + (quarters[1] / 13) + (quarters[2] / 13)) / 3;

        let PA_Gross = quarters.slice(0,3).reduce( (a,b) => {return a + b}, 0);

        let PA_AWW = quarters_AWW;
        let PA_TTD = function(){
            if((PA_AWW).toFixed(2) > 1621.51){
                x = 1;
                TTD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return PennsylvaniaMax;
            } else if ((PA_AWW).toFixed(2) <= PennsylvaniaHigh[0] && (PA_AWW).toFixed(2) >= PennsylvaniaHigh[1]){
                x = 0;
                TTD.style.backgroundColor = "";
                return (PA_AWW * 2 / 3 ).toFixed(2);
            } else if ((PA_AWW).toFixed(2) <= PennsylvaniaMid[0] && (PA_AWW).toFixed(2) >= PennsylvaniaMid[1]){
                x = 0;
                TTD.style.backgroundColor = "";
                return (540.50).toFixed(2);
            } else {
                x = 0;
                TTD.style.backgroundColor = "";
                return (PA_AWW * .90 ).toFixed(2);
            }
        }();

        minmax.innerHTML = (x === 1) || (y === 1) ? '*Rates in blue have exceeded the maximum or minimum rates as of ' + PennsylvaniaCOA : '';

        Gross.value = '$' + PA_Gross.toFixed(2);
        AWW.value = '$' + PA_AWW.toFixed(2);
        TTD.value = '$' + PA_TTD;
        PPD.value = '$' + PA_TTD;
        fileNote.innerHTML = `The average weekly wage for the three highest quarters -- ${(quarters[0] / 13).toFixed(2)}, ${(quarters[1] / 13).toFixed(2)}, ${(quarters[2] / 13).toFixed(2)}. Gross Total = ${Gross.value}; AWW = ${AWW.value}; TTD rate = ${TTD.value}; PPD rate = ${PPD.value}`;
  
      }
    }  

    calculatorTexas(Gross, AWW, TIB, IIB, SIB, TTDarray, TXhourlywage, minmax, fileNote, payperiod){
        let sum = 0;
        let length = payperiod === '1' ? TTDarray.length : (TTDarray.length * 2);
        let TexasTIBmin = this.TexasTIBmin;
        let TexasTIBmax = this.TexasTIBmax;
        let TexasIIBmin = this.TexasIIBmin;
        let TexasIIBmax = this.TexasIIBmax;
        let TexasSIBmax = this.TexasSIBmax;
        let TexasCOA = this.TexasCOA;
        let x = 0; 
        let y = 0;

        TTDarray.forEach(field => {
            sum += parseFloat(field.value);
        })

        let TX_Gross = sum;
        let TX_AWW = sum / length;
        let TIB_percent = TXhourlywage === 'No' ? .70 : .75;
        let TX_TIB = function(){
            if((TX_AWW * TIB_percent).toFixed(2) > TexasTIBmax){
                x = 1;
                TIB.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return TexasTIBmax;
            } else if ((TX_AWW * TIB_percent).toFixed(2) < TexasTIBmin){
                x = 1;
                TIB.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return TexasTIBmin;
            } else {
                x = 0;
                TIB.style.backgroundColor = "";
                return (TX_AWW * TIB_percent).toFixed(2);
            }
        }();
        let TX_IIB = function(){
            if((TX_AWW * .70).toFixed(2) > TexasIIBmax){
                y = 1;
                IIB.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return TexasIIBmax;
            } else if ((TX_AWW * .70).toFixed(2) < TexasIIBmin){
                y = 1;
                IIB.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return TexasIIBmin;
            } else {
                y = 0;
                IIB.style.backgroundColor = "";
                return (TX_AWW * .70).toFixed(2);
            }
        }();
        let TX_SIB = (TX_AWW * .80).toFixed(2) > TexasSIBmax ? TexasSIBmax : (TX_AWW * .80).toFixed(2);

        minmax.innerHTML = (x === 1) || (y === 1) || (TX_SIB >= TexasSIBmax) ? '*Rates in blue have exceeded the maximum or minimum rates as of ' + TexasCOA : '';


        Gross.value = '$' + TX_Gross.toFixed(2);
        AWW.value = '$' + TX_AWW.toFixed(2);
        TIB.value = '$' + TX_TIB;
        IIB.value = '$' + TX_IIB;
        SIB.value = '$' + TX_SIB;

        fileNote.innerHTML = `Wages span ${TTDarray.length} week(s). Gross Total = ${Gross.value}; AWW = ${AWW.value}; TIB rate = ${TIB.value}; IIB rate = ${IIB.value}; SIB rate = ${SIB.value}`;
    }

    calculatorTennessee(Gross, AWW, TTD, PPD, TTDarray, minmax, fileNote, payperiod){
      let sum = 0;
      let length = payperiod === '1' ? TTDarray.length : (TTDarray.length * 2);
      let TennesseeTTDmax = this.TennesseeTTDmax;
      let TennesseePPDmax = this.TennesseePPDmax;
      let TennesseeMin = this.TennesseeMin;
      let TennesseeCOA = this.TennesseeCOA;
      let x = 0; 
      let y = 0;

      TTDarray.forEach(field => {
          sum += parseFloat(field.value);
      })

      let TN_Gross = sum;
      let TN_AWW = sum / length;
      let TN_TTD = function(){
          if((TN_AWW * .6667).toFixed(2) > TennesseeTTDmax){
              x = 1;
              TTD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
              return TennesseeTTDmax;
          } else if ((TN_AWW * .6667).toFixed(2) < TennesseeMin){
              x = 1;
              TTD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
              return TennesseeMin;
          } else {
              x = 0;
              TTD.style.backgroundColor = "";
              return (TN_AWW * .70).toFixed(2);
          }
      }();
      let TN_PPD = function(){
          if((TN_AWW * .6667).toFixed(2) > TennesseePPDmax){
              y = 1;
              PPD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
              return TennesseePPDmax;
          } else if ((TN_AWW * .6667).toFixed(2) < TennesseeMin){
            x = 1;
            TTD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
            return TennesseeMin;
          } else {
              y = 0;
              PPD.style.backgroundColor = "";
              return (TN_AWW * .70).toFixed(2);
          }
      }();

      minmax.innerHTML = (x === 1) || (y === 1) ? '*Rates in blue have exceeded the maximum or minimum rates as of ' + TennesseeCOA : '';

      Gross.value = '$' + TN_Gross.toFixed(2);
      AWW.value = '$' + TN_AWW.toFixed(2);
      TTD.value = '$' + TN_TTD;
      PPD.value = '$' + TN_PPD;
      fileNote.innerHTML = `Wages span ${TTDarray.length} week(s). Gross Total = ${Gross.value}; AWW = ${AWW.value}; TTD rate = ${TTD.value}; PPD rate = ${PPD.value}`;
  }

    calculatorVirginia(Gross, AWW, TTD, PPD, TTDarray, minmax, fileNote, payperiod){
        let sum = 0;
        let length = payperiod === '1' ? TTDarray.length : (TTDarray.length * 2);
        let Virginiamin = this.Virginiamin;
        let Virginiamax = this.Virginiamax;
        let VirginiaCOA = this.VirginiaCOA;
        let x = 0; 

        TTDarray.forEach(field => {
            sum += parseFloat(field.value);
        })

        let VA_Gross = sum;
        let VA_AWW = sum / length;
        let VA_TTD = function(){
            if(((VA_AWW * 2) / 3).toFixed(2) > Virginiamax){
                x = 1;
                TTD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                PPD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return Virginiamax.toFixed(2);
            } else if (((VA_AWW * 2) / 3).toFixed(2) < Virginiamin){
                x = 1;
                TTD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                PPD.style.backgroundColor = "rgb(176, 196, 222, 0.7)";
                return Virginiamin.toFixed(2);
            } else {
                x = 0;
                TTD.style.backgroundColor = "";
                PPD.style.backgroundColor = "";
                return ((VA_AWW * 2) / 3).toFixed(2);
            }
        }();

        minmax.innerHTML = (x === 1) ? '*Rates in blue have exceeded the maximum or minimum rates as of ' + VirginiaCOA : '';

        Gross.value = '$' + VA_Gross.toFixed(2);
        AWW.value = '$' + VA_AWW.toFixed(2);
        TTD.value = '$' + VA_TTD;
        PPD.value = '$' + VA_TTD;
        fileNote.innerHTML = `Wages span ${TTDarray.length} week(s). Gross Total = ${Gross.value}; AWW = ${AWW.value}; TTD rate = ${TTD.value}; PPD rate = ${PPD.value}`;
    }
}

