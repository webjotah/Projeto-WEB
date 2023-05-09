const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

function change(){
    if(menuOpen == false){
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
}
