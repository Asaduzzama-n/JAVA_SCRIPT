/*
1.SELECT DOM
2.SHOW VALUE IN SELECT OPTION
3.TAKE USER INPUT
4.SET ALARM
5.CLEAR ALARM
*/

const currentTime = document.querySelector("#current-time");
const selectMenu = document.querySelectorAll('select');
const alarmButton =  document.querySelector('.btn');



for(let i = 12; i>0; i--){
    i = i < 10 ? `0${i}` : i ;
    let option = `<option value = '${i}'>${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for(let i = 59; i>0; i--){
    i = i < 10 ? `0${i}` : i ;
    let option = `<option value = '${i}'>${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for(let i = 2; i>0; i--){
    let ampm =  i == 1? "AM" : "PM";
    let option = `<option value = '${ampm}'>${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

let alarmTime, isAlarmSet;
let ringTone = new Audio("../Resources/audio/ringtone.mp3");

setInterval (()=>{
    // console.log('hello')
    let date  = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    ampm = "AM";
    if(h>=12){
        h = h-12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;
    console.log(alarmTime);
    if (alarmTime === `${h}:${m} ${ampm}`) {
        ringTone.play();
        ringTone.loop = true;
    }

},1000);


function setAlarm(){

    if (isAlarmSet) {
        alarmTime = "";
        ringTone.pause();
        // content.classList.remove("disable");
        alarmButton.innerText = "Set Alarm";
        return isAlarmSet = false;
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if(time.includes("Hour") || time.includes("Minute")|| time.includes("AM/PM") ){
        alert("PLEASE SELECT PROPER TIME");
    }
    alarmTime = time;
    isAlarmSet = true;
    alarmButton.innerText = "Clear Alarm"
}

alarmButton.addEventListener('click',()=>{
    setAlarm();
})