var costPrice = document.querySelector("#cost-price");
var quantity = document.querySelector("#stock-quantity");
var currPrice = document.querySelector("#current-price");
var calculateBtn = document.querySelector("#calculate-btn");

function clickHandler(){
    if(costPrice.value === "" || quantity.value === "" || currPrice.value === ""){
        document.getElementById("result-div").innerText = "Fields cannot be empty. please enter values" ;
    }
    else if(costPrice.value < 0 || quantity.value < 0 || currPrice.value < 0){
        document.getElementById("result-div").innerText =  "Please enter correct values. Input cannot be negative" ;    
    }
    else {
    var growth = currPrice.value - costPrice.value;
    var growthPercentage = Math.abs(100*(growth/costPrice.value)) ;
    growthPercentage = growthPercentage.toFixed(2);
    var growthAmount = growth*quantity.value;
    if(growth === 0){
        document.getElementById("result-div").innerText =  `Your Growth is 0. NO PROFIT or LOSS` ;
        }
    else if(growth < 0){
        document.getElementById("result-div").innerText =  `Hey,the loss is ` +Math.abs(growthAmount)  + " and the percent is "+ Math.abs(growthPercentage)+"%";
        console.log(growthPercentage);
        if(growthPercentage > 50){
        }
    }
    else{
        document.getElementById("result-div").innerText =  `Hey, the profit is ` + Math.abs(growthAmount)+ " and the percent is "+ Math.abs(growthPercentage) +"%";    
    }
    }
}

calculateBtn.addEventListener("click",clickHandler);