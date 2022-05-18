const slide1 = document.getElementById('grid1');
const slide2 = document.getElementById('grid2');

const infoParent = document.getElementById('info-parent');
const infoText = document.getElementById('info-text');
const infoParent2 = document.getElementById('info-parent2');
const infoText2 = document.getElementById('info-text2');

function slideNext(){
    slide1.style.display = 'none';
    slide2.style.display = 'flex';
    slide2.classList.add('animate__slideInRight');
}

function slidePrev(){
    slide2.style.display = 'none';
    slide1.style.display = 'flex';
    slide1.classList.add('animate__slideInLeft');
}
