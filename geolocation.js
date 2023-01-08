const Weather=document.querySelector("#weather");
const Coordinate=document.querySelector("#coordinate");
const GeoInfo=document.querySelector(".GeolocationInfo");

function GeoSuccess(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const apiKey="ee3a80c22900f5a43e517ffa956e525f";
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    console.log(url);
    fetch(url).then((response)=>response.json()).then((data)=>{
        Coordinate.innerText=data.name;
        Weather.innerText=`${data.weather[0].main}/${data.main.temp}`;
    });
}

function GeoFail(){
    alert("Nothing amazing ever happens here");
}
navigator.geolocation.getCurrentPosition(GeoSuccess,GeoFail);