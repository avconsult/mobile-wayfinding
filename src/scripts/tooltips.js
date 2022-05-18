const mapContainer = document.getElementById('map-container');
const gymTip = document.getElementById('gym-tooltip');
const poolTip = document.getElementById('pool-tooltip');
const restoTip = document.getElementById('resto-tooltip');
const xTip = document.getElementById('x-tooltip');
const bootTip = document.getElementById('bootcamp-tooltip');
const spaTip = document.getElementById('spa-tooltip');
const cigarTip = document.getElementById('cigar-tooltip');
const meetingTip = document.getElementById('meeting-tooltip');

let timeOutSet = false;
mapContainer.addEventListener('click', (event) => {
    tapGesture.style.display = 'none';

    switch (event.target.id ){
        case 'touch-here':
            gymTip.style.transform = 'scale(1.3)';
            spaTip.style.transform = 'scale(0)';
            xTip.style.transform = 'scale(0)';
            bootTip.style.transform = 'scale(0)';
            restoTip.style.transform = 'scale(0)';
            poolTip.style.transform = 'scale(0)';
            cigarTip.style.transform = 'scale(0)';
            meetingTip.style.transform = 'scale(0)';
            break;
        case 'core-gym':
            gymTip.style.transform = 'scale(1.3)';
            spaTip.style.transform = 'scale(0)';
            xTip.style.transform = 'scale(0)';
            bootTip.style.transform = 'scale(0)';
            restoTip.style.transform = 'scale(0)';
            poolTip.style.transform = 'scale(0)';
            cigarTip.style.transform = 'scale(0)';
            meetingTip.style.transform = 'scale(0)';
            break;
        case 'core-resto':
            restoTip.style.transform = 'scale(1.05)';
            spaTip.style.transform = 'scale(0)';
            xTip.style.transform = 'scale(0)';
            bootTip.style.transform = 'scale(0)';
            gymTip.style.transform = 'scale(0)';
            poolTip.style.transform = 'scale(0)';
            cigarTip.style.transform = 'scale(0)';
            meetingTip.style.transform = 'scale(0)';
            break;
        case 'pool-tennis':
            poolTip.style.transform = 'scale(1.1)';
            spaTip.style.transform = 'scale(0)';
            xTip.style.transform = 'scale(0)';
            bootTip.style.transform = 'scale(0)';
            restoTip.style.transform = 'scale(0)';
            gymTip.style.transform = 'scale(0)';
            cigarTip.style.transform = 'scale(0)';
            meetingTip.style.transform = 'scale(0)';
            break;
        case 'core-spa':
            spaTip.style.transform = 'scale(1.2)';
            gymTip.style.transform = 'scale(0)';
            xTip.style.transform = 'scale(0)';
            bootTip.style.transform = 'scale(0)';
            restoTip.style.transform = 'scale(0)';
            poolTip.style.transform = 'scale(0)';
            cigarTip.style.transform = 'scale(0)';
            meetingTip.style.transform = 'scale(0)';
            break;
        case 'core-x':
            xTip.style.transform = 'scale(1.2)';
            spaTip.style.transform = 'scale(0)';
            gymTip.style.transform = 'scale(0)';
            bootTip.style.transform = 'scale(0)';
            restoTip.style.transform = 'scale(0)';
            poolTip.style.transform = 'scale(0)';
            cigarTip.style.transform = 'scale(0)';
            meetingTip.style.transform = 'scale(0)';
            break;
        case 'bootcamp':
            bootTip.style.transform = 'scale(1.1)';
            spaTip.style.transform = 'scale(0)';
            xTip.style.transform = 'scale(0)';
            gymTip.style.transform = 'scale(0)';
            restoTip.style.transform = 'scale(0)';
            poolTip.style.transform = 'scale(0)';
            cigarTip.style.transform = 'scale(0)';
            meetingTip.style.transform = 'scale(0)';
            break;
        case 'cigar':
            bootTip.style.transform = 'scale(0)';
            spaTip.style.transform = 'scale(0)';
            xTip.style.transform = 'scale(0)';
            gymTip.style.transform = 'scale(0)';
            restoTip.style.transform = 'scale(0)';
            poolTip.style.transform = 'scale(0)';
            cigarTip.style.transform = 'scale(1.05)';
            meetingTip.style.transform = 'scale(0)';
            break;
        case 'meeting':
            bootTip.style.transform = 'scale(0)';
            spaTip.style.transform = 'scale(0)';
            xTip.style.transform = 'scale(0)';
            gymTip.style.transform = 'scale(0)';
            restoTip.style.transform = 'scale(0)';
            poolTip.style.transform = 'scale(0)';
            cigarTip.style.transform = 'scale(0)';
            meetingTip.style.transform = 'scale(1.05)';
            break;
        default:
            bootTip.style.transform = 'scale(0)';
            spaTip.style.transform = 'scale(0)';
            xTip.style.transform = 'scale(0)';
            gymTip.style.transform = 'scale(0)';
            restoTip.style.transform = 'scale(0)';
            poolTip.style.transform = 'scale(0)';
            cigarTip.style.transform = 'scale(0)';
            meetingTip.style.transform = 'scale(0)';
            break;
    }

    if(!timeOutSet) {
        timeOutSet = true;
        setTimeout(function () {
            tapGesture.style.display = 'block';
            timeOutSet = false;
        }, 60000); // show tap again after one minute
    }
});
