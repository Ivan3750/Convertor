const UAH = {'EUR': 0.025, 'USD': 0.027, 'DKK': 0.18};
const EUR = {'UAH': 39.15, 'USD': 1.09, 'DKK': 7.45};
const USD = {'UAH': 35.79, 'EUR': 0.91, 'DKK': 6.81};
const DKK = {'UAH': 5.25, 'EUR': 0.13, 'USD': 0.14};



const convert = document.getElementById("convert");
convert.addEventListener("submit", function (event) {
    event.preventDefault();
    
    let FromValuta = document.getElementById("from_valuta").value;
    let ToValuta = document.getElementById("to_valuta").value;
    let FromNum = document.getElementById("FromNum").value;
    let ToNum = document.querySelector(".ToNum");
    
    if (FromNum > 0){
        let Result = 0;
        switch (FromValuta) {
            case 'UAH':
                Result = UAH[ToValuta]*FromNum;
                break;
            case 'EUR':
                Result = EUR[ToValuta]*FromNum;
                break;
            case 'USD':
                Result = USD[ToValuta]*FromNum;
                break;
            case 'DKK':
                Result = DKK[ToValuta]*FromNum;
                break;
            default:
                    console.error("Error");
                    return;
            }
            Result = Math.round(Result*100)/100
                console.log(Result)
                ToNum.innerHTML = Result;
                
    }else if (FromValuta === ToValuta) { 
        alert("Ви не можете виконати операцію так як у вас стоять дві однакові валюти ");
    }
    else{
        alert("Ведіть вірне число ");
    }
});