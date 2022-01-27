
function calculate(){
  var age=document.getElementById("age").value;
  var water=document.getElementById("L/day");
  if(age<=.5){
  water.textContent="0.7L/day (From human milk)";
}
else if(age>=.6 && age<=1){
  water.textContent="0.8L/day (Human milk and complimentary food and beverages)";
}
else if(age>=2 && age<=3){
  water.textContent="1.3L/day";
}
else if(age>=4 && age<=8){
  water.textContent="1.7L/day";
}
else if(age>=9 && age<=13){
  water.textContent="2.4L/day";
}
else if(age>=14 && age<=18){
  water.textContent="3.3L/day";
}
else if(age>=19 && age<=150){
  water.textContent="3.7L/day";
}
}
function cal(){
 var age=document.getElementById("age2").value;
  var water=document.getElementById("L/day2");
  if(age<=.5){
  water.textContent="0.7L/day (From human milk)";
}
else if(age>=.6 && age<=1){
  water.textContent="0.8L/day (Human milk and complimentary food and beverages)";
}
else if(age>=2 && age<=3){
  water.textContent="1.3L/day";
}
else if(age>=4 && age<=8){
  water.textContent="1.7L/day";
} 
else if(age>=9 && age<=13){
  water.textContent="2.1L/day";
}
else if(age>=14 && age<=18){
  water.textContent="2.3L/day";
}
else if(age>=19 && age<=150){
  water.textContent="2.7L/day";
}

}


