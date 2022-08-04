let main= document.getElementById('main');
console.log(main);
let nav = document.getElementById('nav');
console.log(nav);
nav.innerHTML= "<li>Dynamic Element</li>"

let container = document.getElementsByClassName('container');
console.log(container);

let sel = document.querySelector('.container');
console.log("seclector return", sel);
let sel1 = document.querySelector('#nav');
console.log("seclector return", sel1);

let sel2 = document.querySelectorAll('#nav');
console.log("seclector return", sel2);
sel2[2].innerHTML="Blogs"