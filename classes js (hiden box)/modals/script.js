'use strict';

const display = document.querySelector('.modal');
const open =document.querySelectorAll('.show-modal');
const bg=document.querySelector('.overlay');
const cross=document.querySelector('.close-modal');
for (let i=0;i<open.length;i++)
//modal 1 or 2 or 3 ma click garda kheri hidden box display banayeko 
open[i].addEventListener('click',function(){
    display.classList.remove('hidden')
   bg.classList.remove('hidden');
    })
 // box baira bg ma click garda kattine banayeko
    bg.addEventListener('click',function(){
        display.classList.add('hidden');
        bg.classList.add('hidden');
    
})
// * click garda katine banayeko  hidden box lai 
cross.addEventListener('click',function(){
    display.classList.add('hidden');
    bg.classList.add('hidden');
})
//backspace click garda back hune banayeko
document.addEventListener('keydown',function(e){
   
    if (e.key === 'Backspace' && !display.classList.contains('hidden')){
        display.classList.add('hidden');
        bg.classList.add('hidden');
    }
})