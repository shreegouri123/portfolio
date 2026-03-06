/* ================= TYPING ANIMATION ================= */

const roles = [
"Python Developer",
"Machine Learning Enthusiast",
"MCA Student",
"Full Stack Learner"
];

let index = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing-text");

function typeEffect(){

if(charIndex < roles[index].length){

typingElement.textContent += roles[index].charAt(charIndex);
charIndex++;

setTimeout(typeEffect,100);

}
else{

setTimeout(eraseEffect,1500);

}

}

function eraseEffect(){

if(charIndex > 0){

typingElement.textContent =
roles[index].substring(0,charIndex-1);

charIndex--;

setTimeout(eraseEffect,50);

}
else{

index++;

if(index >= roles.length){
index = 0;
}

setTimeout(typeEffect,200);

}

}

document.addEventListener("DOMContentLoaded", typeEffect);



/* ================= SCROLL REVEAL ANIMATION ================= */

function revealSections(){

const reveals = document.querySelectorAll(".reveal");

for(let i = 0; i < reveals.length; i++){

let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;
let elementVisible = 100;

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll", revealSections);



/* ================= MOBILE HAMBURGER MENU ================= */

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {

navLinks.classList.toggle("active");

});