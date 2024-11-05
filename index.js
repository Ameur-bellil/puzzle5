//prevent right click
document.oncontextmenu =() => {
    alert("Don't try right click")
    return false;
}

/* still anyone can inspect elements by f12 key; view page source by ctrl + u key .copy by ctrl+ c. paste
by ctrl +v key Let's prevent these
 */
document.onkeydown = e  =>{

    //prevent key f12
    if(e.key === "F12"){
        alert("Don't try to inspect element")
        return false;
    }
    //Prevent showing page source by ctrl +u
    if (e.ctrlKey && e.key==="u"){
        alert("Don't try to view page sources ");
        return false;
    }

    //prevent copying anything from the page
    if (e.ctrlKey && e.key ==="c"){
        alert("Don't try to copy page element");
        return false;
    }

    //prevent paste anything from other sources
    if (e.ctrlKey && e.key ==="v"){
        alert("Don't try to paste anything to page");
        return false;
    }

}

const thmasButton = document.querySelector('#thmas-button');
const thmasInputText = document.querySelector('#thmas-input-text');

thmasButton.addEventListener('click', clickButton);

// Check if elements are found
if (!thmasButton || !thmasInputText) {
    console.error('Elements not found!');
}

function  clickButton() {
    var correctinput = parseInt(thmasInputText.value);  // Get the trimmed input value
    var URL = "https://ameur-bellil.github.io/congrats/";

    if (correctInput === 4) {
        var win = window.open(URL, "_blank");
    } else {
        window.alert("Try again");
    }
};
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))







const result_box = document.querySelector(".result_box");
const continue_btn = document.querySelector(".buttons .start");
continue_btn.onclick = ()=>{
    
    result_box.classList.add("opacity"); 
   
}
