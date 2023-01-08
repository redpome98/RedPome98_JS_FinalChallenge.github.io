const Year=document.querySelector("#year");
const Month=document.querySelector("#month");
const Day=document.querySelector("#date");
const Hour=document.querySelector("#hour");
const Minute=document.querySelector("#minute");

function currentTime(){
    const current=new Date();
    const currentYear=current.getFullYear();
    const currentMonth=String(current.getMonth()+1).padStart(2,"0");
    const currentDate=String(current.getDate()).padStart(2,"0");
    const currentHour=String(current.getHours()).padStart(2,"0");
    const currentMin=String(current.getMinutes()).padStart(2,"0");    
    Year.innerText=`${currentYear}`;
    Month.innerText=`${currentMonth}`;
    Day.innerText=`${currentDate}`;
    Hour.innerText=`${currentHour}h:${currentMin}m`;

}

currentTime();
setInterval(currentTime,1000);