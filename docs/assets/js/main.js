"use strict";const btnReset=document.querySelector(".js-btnReset"),counter=document.querySelector(".js-score"),btnCheck=document.querySelector(".js-check"),inputNumber=document.querySelector(".js-input"),clue=document.querySelector(".clue");function getRandomNumber(e){return Math.ceil(Math.random()*e)}const reloadPage=()=>location.reload(),checkNumber=e=>{e.preventDefault(),increaseAcc();let n=parseInt(inputNumber.value);n===randomNumber?(clue.innerHTML="¡¡FELICIDADES!! Has ganado,campeona",btnReset.classList.remove("hidden"),btnReset.classList.add("show")):clue.innerHTML=n<randomNumber&&n>0?"Demasiado bajo. Prueba una cifra más alta":n>randomNumber&&n<100?"Demasiado alto. Prueba una cifra más baja":n<0?"¡Este número es negativo!":n>100?"¡El juego es hasta 100!":"Introduce un número entero entre 0 y 100"},randomNumber=getRandomNumber(100);console.log(randomNumber);let acc=0;const increaseAcc=()=>{acc++,counter.innerHTML=acc,console.log(acc)};btnCheck.addEventListener("click",checkNumber),btnReset.addEventListener("click",reloadPage);