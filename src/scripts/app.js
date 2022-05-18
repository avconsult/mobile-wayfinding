const tapGesture = document.getElementById("touch-here");

const poiGrid = document.getElementById("destinations");

// const langList = document.getElementById("language-list");
// const englishDiv = langList.firstElementChild;
// const arabicDiv = langList.childNodes[3];

const searchList = document.getElementById('search-list');
const mediaDiv = document.getElementById("media-div");
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

function showTextList(){
    mediaDiv.style.display = 'none';
    searchList.style.display = 'block';
    searchList.classList.add('animate__slideInRight');

    let listButton = toolBar.getElementsByTagName('button')[2];
    listButton.style.display='none';

    setTimeout( () => {
        searchList.style.display ='none'
        mediaDiv.style.display = 'flex';
        mediaDiv.classList.add('animate__slideInLeft');
        listButton.style.display = 'flex';
        listButton.classList.remove('active');
    }, 120000)
}

let pointsOfInterest = [];
for (let i = 0; i < poiLists.length; i++) {
    listContents = poiLists[i].getElementsByTagName('li');
    for (let j = 0; j < listContents.length; j++) {
        pointsOfInterest.push(listContents[j]);
    }
} // All list item pois retrieved
function searchPois(){
    if(searchInput.value.length > 1) {
        for (let i = 0; i < pointsOfInterest.length; i++) {
            if (pointsOfInterest[i].innerText.toLowerCase().includes(searchInput.value.toLowerCase()))
                pointsOfInterest[i].classList.add('search-result');
            else
                pointsOfInterest[i].classList.remove('search-result');
        }
    } else{
        for (let i = 0; i < pointsOfInterest.length; i++) {
            pointsOfInterest[i].classList.remove('search-result');
        }
    }
}



// Set date
const dateText = document.getElementById('date-text');
let date_ob = new Date();
// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);
// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
// current year
let year = date_ob.getFullYear();
dateText.innerText =   date + "-" + month + "-" + year;
