const tapGesture = document.getElementById("touch-here");

const poiGrid = document.getElementById("destinations");

// const langList = document.getElementById("language-list");
// const englishDiv = langList.firstElementChild;
// const arabicDiv = langList.childNodes[3];

const searchList = document.getElementById('search-list');
const listContainer = document.getElementById("list-container");

const searchInput = document.getElementById('search-bar');
const poiLists = document.getElementsByClassName('poi-list');

const toolBar = document.getElementById('toolbar');

const upperImg = document.getElementById('upper-img');
const lowerImg = document.getElementById('lower-img');

function toggleFloor(){
    if(upperImg.style.display == 'none'){
        upperImg.style.display = 'block';
        lowerImg.style.display = 'none';
    } else{
        upperImg.style.display ='none';
        lowerImg.style.display = 'block';
    }
}

function showPoiGrid(){
    slide1.classList.remove('animate__slideInLeft');
    slide2.classList.remove('animate__slideInRight');
    poiGrid.style.display = 'grid';
    // langList.style.display = 'none';
    poiGrid.classList.add("animate__fadeInUp");
}

function showLanguages(){
    poiGrid.style.display = 'none';
    langList.style.display = 'flex';
    langList.classList.add("animate__fadeInUp");
}

function changeToArabic(){
    englishDiv.classList.remove('selected');
    englishDiv.getElementsByTagName('span')[0].textContent = '';
    englishDiv.getElementsByTagName('span')[0].classList.remove('check');
    arabicDiv.classList.add('selected');
    arabicDiv.getElementsByTagName('span')[0].textContent = '✔';
    arabicDiv.getElementsByTagName('span')[0].classList.add('check');
    setTimeout(function () {
        window.location.href = "arabindex.html";
    }, 100)
}
function changeToEnglish(){
    arabicDiv.classList.remove('selected');
    arabicDiv.getElementsByTagName('span')[0].textContent = '';
    arabicDiv.getElementsByTagName('span')[0].classList.remove('check');
    englishDiv.classList.add('selected');
    englishDiv.getElementsByTagName('span')[0].textContent = '✔';
    englishDiv.getElementsByTagName('span')[0].classList.add('check');
    setTimeout(function () {
        window.location.href = "index.html";
    }, 100)
}

let pointsOfInterest = [];
for (let i = 0; i < poiLists.length; i++) {
    listContents = poiLists[i].getElementsByTagName('li');
    for (let j = 0; j < listContents.length; j++) {
        pointsOfInterest.push(listContents[j]);
    }
}


