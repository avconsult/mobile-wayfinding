
const fit1 = document.getElementById('core-fit1-list');
const fit2 = document.getElementById('core-fit2-list');
const spa = document.getElementById('core-spa-list');
const hotspot = document.getElementById('core-hotspot-list');

const listItems = document.querySelectorAll('.toolbar-item');
for(let i = 0; i < listItems.length; i++){
    listItems[i].addEventListener('click', (event => {
        const activeElt = document.querySelectorAll('.toolbar-item.active')[0];
        activeElt.classList.remove('active');
        event.target.classList.add('active');
        console.log(event.target.id);
        switch (event.target.id){
            case 'show-fit1':
                if(fit1.style.display==='none'){
                    fit1.style.display = 'flex';
                    fit1.classList.add('animate__fadeIn');
                    fit2.style.display = 'none';
                    spa.style.display = 'none';
                    hotspot.style.display = 'none';
                }
                break;
            case 'show-fit2':
                if (fit2.style.display==='none'){
                    fit2.style.display = 'flex';
                    fit2.classList.add('animate__fadeIn');
                    fit1.style.display = 'none';
                    spa.style.display = 'none';
                    hotspot.style.display = 'none';
                }
                break;
            case 'show-spa':
                if (spa.style.display==='none'){
                    spa.style.display = 'flex';
                    spa.classList.add('animate__fadeIn');
                    fit1.style.display = 'none';
                    fit2.style.display = 'none';
                    hotspot.style.display = 'none';
                }
                break;
            case 'show-hotspots':
                if (hotspot.style.display==='none'){
                    hotspot.style.display = 'flex';
                    hotspot.classList.add('animate__fadeIn');
                    fit1.style.display = 'none';
                    fit2.style.display = 'none';
                    spa.style.display = 'none';
                }
        }
    }));
}
