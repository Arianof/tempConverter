let hElem = document.querySelector('h1');
let inpElem = document.querySelector('input');
let resetElem = document.getElementById('res');
let changeElem = document.getElementById('chg');
let convertElem = document.getElementById('conv');
let h2Elem = document.querySelector('h2');
let Alert = document.getElementById('alert');
Alert.style.display = 'none';
const regEx = /^[0-9]+$/;
let flag = 1;
changeElem.addEventListener("click" , function(){
 if(flag === 0){
 document.title = 'Convert °C to °F';
 hElem.innerHTML = 'Convert °C to °F';
 inpElem.placeholder = '°C';
 flag++;
 }
 else if(flag === 1){
 document.title = 'Convert °F to °C';
 hElem.innerHTML = 'Convert °F to °C';
  inpElem.placeholder = '°F';
 flag--;
 }
})
convertElem.addEventListener('click' , function(){
 if(flag === 1){
  if(regEx.test(inpElem.value)){
  let res = inpElem.value * 1.8 + 32;
  h2Elem.innerHTML = inpElem.value + "°C to "+ res + "°F"; 
 }else{
  Alert.style.display ='block'
    setTimeout(function(){
     Alert.style.display = 'none';
    } , 2000) }
}
 if(flag === 0){
    if(regEx.test(inpElem.value)){
  let res = (inpElem.value - 32) / 1.8;
  h2Elem.innerHTML = inpElem.value + "°F to "+ res.toPrecision(2) + "°C";
 }
 else{
    Alert.style.display ='block'
    setTimeout(function(){
     Alert.style.display = 'none';
    } , 2000)
 }
}
})
resetElem.addEventListener('click' , function(){
 h2Elem.innerHTML = "";
 inpElem.value = "";
})


