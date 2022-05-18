const slide1 = document.getElementById('grid1');
const slide2 = document.getElementById('grid2');

const infoIcon = document.getElementById('info-icon');
const infoParent = document.getElementById('info-parent');
const infoText = document.getElementById('info-text');

const infoIcon2 = document.getElementById('info-icon2');
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

infoIcon.addEventListener('click', ()=>{
    infoIcon.style.display = 'none';
    infoParent.style.borderRadius = '0';
    infoParent.style.height = '100%';
    infoParent.style.width = '100%';
    infoParent.style.padding = '3px';
    infoParent.style.backgroundColor = 'transparent';
    infoText.style.display= 'flex';
    setTimeout( () => {
        infoParent.style.height = '5vw';
        infoParent.style.width = '5vw';
        infoParent.style.padding = '0';
        infoParent.style.borderRadius = '50%';
        infoParent.style.backgroundColor = '#31CDDD';
        infoText.style.display = 'none';
        infoIcon.style.display = 'block';
    }, 10000);
});

infoIcon2.addEventListener('click', ()=>{
    infoIcon2.style.display = 'none';
    infoParent2.style.borderRadius = '0';
    infoParent2.style.height = '100%';
    infoParent2.style.width = '100%';
    infoParent2.style.padding = '3px';
    infoParent2.style.backgroundColor = 'transparent';
    infoText2.style.display= 'flex';
    setTimeout( () => {
        infoParent2.style.height = '5vw';
        infoParent2.style.width = '5vw';
        infoParent2.style.padding = '0';
        infoParent2.style.borderRadius = '50%';
        infoParent2.style.backgroundColor = '#31CDDD';
        infoText2.style.display = 'none';
        infoIcon2.style.display = 'block';
    }, 10000)
});
