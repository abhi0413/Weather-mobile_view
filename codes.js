const url='https://api.openweathermap.org/data/2.5/weather?q=';
const url1='&appid=9f23b56e8dcad8299bf4e5a2a3fc932b&units=metric';
const locc = document.querySelector(".okok")


const t=document.querySelector(".inp");
let btn=document.querySelector(".btn");
let deg = document.querySelector(".deg")
let feel = document.querySelector(".feels")
let wind = document.querySelector(".wind")
let ex = document.querySelector(".ex")






deg.style.col
getweather=async (loc)=>{
    let response = await fetch(`${url}${loc}${url1}`);
    let data= await response.json();
    let dataa= data.main.temp;
    // console.log(data.main.feels_like);
    // console.log(data.wind.speed);
    locc.innerText = `In ${loc}`;
    deg.innerHTML=`<i class="fa-solid fa-temperature-three-quarters"></i>Temp is ${dataa} deg c`;
    deg.style.color="red"
    feel.innerText=`feels like ${data.main.feels_like}deg c`;
    feel.style.color="#C84630"
    wind.innerHTML=`<i class="fa-solid fa-wind"></i>Speed of Wind is ${data.wind.speed}Km/h`;
    // console.log(data.main)

    let x= data.main;
    for(let b in x) {
        y=(`${b}: ${x[b]}`);
        ex.innerHTML=y;
        
    };

} 

txt=()=>{
    console.log(t.value);
    var loc= t.value;

    
    
    getweather(loc);
    

    
    
}
// txt();


btn.addEventListener("click",()=>{
    
        // t.preventDefault();
        txt()

    })
