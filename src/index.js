import "./style.css";

import { update } from "./dom";




document.addEventListener('DOMContentLoaded', () => {
    



document.getElementById("weatherform").addEventListener("submit", function(event) {
    event.preventDefault(); 
    update()
})

});



