const burgerMenu = document.querySelector('.burger-menu');
let menuOpen = false;
burgerMenu.addEventListener('click',()=>{
    if(!menuOpen){
        burgerMenu.classList.add('open')
        menuOpen=true
    }else{
        burgerMenu.classList.remove('open')
        menuOpen=false
    }
})