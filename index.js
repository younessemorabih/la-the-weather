// const containre =document.querySelector('.container');
// const search  =document.querySelector('.search-box button'); 
// const  weatherbox=document.querySelector('.weather-box');
// const  weatherdetails=document.querySelector('.weather-details');
// const  error404=document.querySelector('.not-found');

// search.addEventListener('click',() => {

//  console.log("Valide you Click");

//     const APIKEY ='e04e5132d90755ac0a97c920999c3287';
//     const city =document.querySelector('.search-box input').value; 
//     if(city==='')
//         return;
    
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`).then(response => response.json()).then
//     (json =>{
//         if(json.cod === '404'){
//             container.style.height='400px';
//             weatherbox.style.display='none';
//             weatherdetails.style.desplay='none';
//             error404.style.display='block';
//             error404.classList.add('fadeIn');
//             return;
//         }
//         error404.style.display='none';
//         error404.classList.remove('fadeIn');

//         const imge =document.querySelector('.weather-box img');
//         const temperature=document.querySelector('.weather-box .temperature');
//         const description =document.querySelector('.weather-box .description');
//         const humidity =document.querySelector('.weather-box .humidity span');
//         const wind =document.querySelector('.weather-box .wind span');
//         switch (json.weather[0].main){
//             case 'clear':
//                 imge.src='clear.jpg';
//                 break;

//             case 'Rain':
//                 imge.src='Rain.jpg';
//                 break;
                    
                    
//             case 'snow':
//                 imge.src='snow.jpg';
//                 break;


//             case 'snow':
//                 imge.src='snow.jpg';
//                 break;
            

//             case 'clouds':
//                 imge.src='clouds.jpg';
//                 break;
            
                
//             case 'haze':
//                 imge.src='haze.jpg';
//                 break;   
                
//             default:
//                 img.src="";

//         }

//         temperature.innerHTML=`${parseInt(json.main.temp)}<span>°C</span>`;
//         description.innerHTML=`${json.weather[0].description}`;
//         humidity.innerHTML=`${json.main.humidity}%`;
//         wind.innerHTML=`${parseInt(json.wind.speed)}Km/h`;
//         weatherbox.style.display='';
//         weatherdetails.style.display='';
//         weatherbox.classList.add('fade-in');
//         weatherdetails.classList.add('fade-in');
//         containre.style.height='590px';
//     });
// });

//method1
/* fetch("https://nourhomsi.net/wp-json")
 .then(function(response){
     return response.json();
     console.log(response);

 })
 .then(function(data){
     console.log(data);

 })
*/
//method 2
//  async  function get(){
//     const APIKEY ='6102a635e0ee6e6c66ac0f77411501ce';
//     const respons=await fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}/1");
//     const data =  await respons.json();
//     console.log(data);
// }
// get();

//aip key:=> e04e5132d90755ac0a97c920999c3287



//api keys 863242cfb2b1d357e6093d9a4df19a4b
const apk ="fd05f9343d1342ce9956aab5441d8075";
//const apiUrl= "https://api.openweathermap.org/data/2.5/weather?q=city&appid=fd05f9343d1342ce9956aab5441d8075&units=metric";

const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 const searchBox=document.querySelector(".search-box input");
 const serchbtn=document.querySelector(".search-box button");
 const imgclouds=document.querySelector(".weather-icon");


async  function checkWesther(city){
    const response= await fetch(apiUrl+city+`&appid=${apk}`);
    var date =await  response.json();
    console.log(date);
     document.querySelector(".city").innerHTML=date.name;
     document.querySelector(".temp").innerHTML=Math.round(date.main.temp);
     document.querySelector(".humidity1").innerHTML=date.main.humidity;
     document.querySelector(".wind1").innerHTML=date.wind.speed;
     if(date.weather[0].main == "Clouds"){
        imgclouds.src="clouds.png"; 
    }else if(date.weather[0].main == "Drizzle"){

        imgclouds.src="Drizzle.png";

     }else if(date.weather[0].main == "Rain"){
        imgclouds.src="Rain.png"; 
     }else if(date.weather[0].main == "Clear"){
        imgclouds.src="Clear.png"; 
     }else if(date.weather[0].main=="Mist"){
        imgclouds.src="mist.png"; 
     } else if(date.weather[0].main=="Mist"){
        imgclouds.src="mist.png"; 
     } 

   

    
}


serchbtn.addEventListener("click",()=>{
    checkWesther(searchBox.value);
    if(searchBox.value=="text"){
      searchBox.value=="";

    }
   
});



