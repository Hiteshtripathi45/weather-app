// Prevent form from refreshing the page
import { info } from "./fetch";
    // Get the input value
let llocation = document.getElementById('location');
let temprature = document.getElementById('temprature');
let description = document.getElementById('description');
let weatherinfo = document.getElementById('weatherInfo')
export function update(){
    const location1 = document.getElementById("locationinput")
    const location = location1.value.trim();

    if (location) { 
       // Ensure input is not empty
        info(location)
        .then(function(response){
            llocation.textContent=response.resolvedAddress
            temprature.textContent=`${response.currentConditions.temp} ferranite`
            description.textContent=response.description
        })
        .catch(error => {
            // Display an error message when location is invalid
            llocation.textContent = "Please enter a valid location";
            temprature.textContent = "";
            description.textContent = "";
        });
    } else {
        llocation.textContent = "Please enter a location";
    }
      location1.value=""
}


