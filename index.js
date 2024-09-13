function percentagecalc(){

let obtmarks = document.getElementById("ym1").value;
let totalmarks = document.getElementById("tm1").value;

let percentcalc = (obtmarks / totalmarks) *100



document.getElementById("change").innerHTML = (`<h1> your percentage is ${percentcalc}<h1/>`)

if (percentcalc <= 100  && percentcalc >= 80){
     alert("your grade is A") ;
  }else if(percentcalc <= 79  && percentcalc >= 60){
      alert(" your grade is B ");
  }else if(percentcalc <= 59  && percentcalc >= 40){
     alert(" your grade is c ");
  }else{
    alert(" your grade is f ");
  }


  console.log
}