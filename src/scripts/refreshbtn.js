const navBar = document.getElementById('navbar');
navBar.addEventListener('dblclick', () => {
    showToast();
    updateLocalVids();
});
let lastClick = 0;
navBar.addEventListener('touchstart', function(e) {
    e.preventDefault(); // to disable browser default zoom on double tap
    let date = new Date();
    let time = date.getTime();
    const time_between_taps = 200; // 200ms
    if (time - lastClick < time_between_taps) {
        showToast();
        updateLocalVids();
    }
    lastClick = time;
})


function showToast() {
    let child = document.getElementById('clonemother');
    let clone = child.cloneNode(true);
    let node = document.getElementById("toasts").appendChild(clone);
    console.log(node.childNodes);
    setTimeout(function() {
        if(node) {
            node.style.animation = "toast .5s ease-out forwards";
            setTimeout(() => {node.remove();} ,500);
        }
    },2000);
}

function deletethis() {
    let e = window.event;
    let grand = e.target.parentNode.parentNode;
    grand.style.animation = "toast .5s ease-out forwards";
    setTimeout(() => {grand.remove();} ,500);
}

