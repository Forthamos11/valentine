const yesButton = document.querySelector('.yes');
const noButton = document.querySelector('.no');
const gif = document.querySelector('.gif');
const text = document.querySelector('.text');

const happy = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWc4c2dhc2ZobzdqMmMwYTU1NGYwd3h2bDVsdTlwMGMxdWx2b2oxNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif";
const sad = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzJ3MjN5eGQ3ejh4bXVuMWQ2dWRvbDF2czV5cG53OW96MjdrNmxxNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OPU6wzx8JrHna/giphy.gif";
const question = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXFoNjJvZmU1ZXE0eDJyeHdtOXBocXB4Zm82ZHVpeHBhM3g2eGtnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0xeuOy2Fcl9vDGiA/giphy.gif";

gif.src=question;


yesButton.addEventListener('click', () => {
    gif.src = happy;
    text.innerHTML = "Yay! You're my valentine! Love you <3"; 
    noButton.style.display = "none";
    yesButton.style.display = "none";
});

noButton.addEventListener('click', () => {
    gif.src = sad;
    text.innerHTML = "Noooooo! You're not my valentine! I hate you!!!!!"; 
    noButton.style.display = "none";
    yesButton.innerHTML = "Im sorry Pookie! I changed my mind!";
});