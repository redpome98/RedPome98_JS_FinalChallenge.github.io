const Clock=document.querySelector("#time");

function currentTime(){
    const current=new Date();
    const currentYear=current.getFullYear();
    const currentMonth=String(current.getMonth()+1).padStart(2,"0");
    const currentDate=String(current.getDate()).padStart(2,"0");
    const currentHour=String(current.getHours()).padStart(2,"0");
    const currentMin=String(current.getMinutes()).padStart(2,"0");    
    Clock.innerText=`${currentYear}:${currentMonth}:${currentDate}:${currentHour}:${currentMin}`;
}

currentTime();
setInterval(currentTime,1000);