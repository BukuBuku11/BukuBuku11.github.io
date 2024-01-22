// ----- Change Theme ------- //

const themeBtn = document.querySelector('#theme-icon');
themeBtn.addEventListener('click', changeTheme);

function changeTheme(e){
    themeBtn.innerHTML = '';

    const icon = document.createElement('span');

    if(document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        icon.className = 'fa-solid fa-moon';
    } 
    else{
        document.body.classList.add('dark-theme');
        icon.className = 'fa-solid fa-sun';
    }

    themeBtn.appendChild(icon);

    setTimeout (function(e){
        alert('Theme changed successfully!');
    }, 10);
    
}

// ----- Digital Clock ----- //

let hoursHTML = document.querySelector('.hrs');
let minutesHTML = document.querySelector('.mins');
let secondsHTML = document.querySelector('.secs');

setInterval(function(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if(hours < 10 ){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    
    hoursHTML.innerHTML = hours;
    minutesHTML.innerHTML = minutes;
    secondsHTML.innerHTML = seconds;

}, 1000);



































// const pokemonList = [
//     {
//         name: 'Charizard',
//         element: 'fire'
//     },

//     {
//         name: 'Staraptor',
//         element: 'flying'
//     },

//     {
//         name: 'Rayquaza',
//         element: 'dragon'
//     }
// ]

// console.table(pokemonList);

