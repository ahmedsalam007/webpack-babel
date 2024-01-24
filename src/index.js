import './public.css';
import  add   from './math.js';
import nodes from './advanced.js';

function addElementGreeting(){
    const paragraph = document.createElement('p');

    paragraph.textContent = "Welcome to webpack";
    //paragraph.style.color = "blue";
    //paragraph.style.fontSize = "16px";
    paragraph.classList.add('para');
    console.log('ssss');

    document.body.appendChild(paragraph);
   
 

    setTimeout(() => paragraph.style.color = "blue" , 5000);
}

addElementGreeting();
console.log(add(3,4,5));
document.body.appendChild(nodes);