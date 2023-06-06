const menuBtn = document.querySelector('.menu-btn');
const menuResponsive = document.querySelector('.menu-responsive');
let menuOpen = false;

function change(){
    if(menuOpen == false){
        menuBtn.classList.add('open');
        menuOpen = true;
        menuResponsive.classList.add('menu-toggle');
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        menuResponsive.classList.remove('menu-toggle');
    }
}
