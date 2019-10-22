const WeatherForm =document.querySelector('form');
const locationInput = document.querySelector('#locationInput')
const button=document.querySelector('#submitButton')
let outputOne=document.querySelector('#location-result')
let outputTwo=document.querySelector('#weather-result')


outputTwo.innerHTML=''

button.addEventListener('click',(e)=>{
    e.preventDefault()
    outputOne.innerHTML='Loading...'
    let location=locationInput.value;
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
       if(data.error){
           outputOne.innerHTML=data.error
       }
       else{
           outputOne.innerHTML=data.location
           outputTwo.innerHTML=data.forecast
           
       }
    })
})
    
})
