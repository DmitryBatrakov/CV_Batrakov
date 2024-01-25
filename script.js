

document.addEventListener('DOMContentLoaded', function () {
    const scrollTrigger = document.querySelector('.block');
    const content = document.querySelector('.profession');

    window.addEventListener('scroll', function () {

        if(window.scrollY >= 20) {
            scrollTrigger.classList.add('visible');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollTriggerWrapMiddle = document.querySelector('.wrap');
    const contentAboutme = document.querySelector('.about-me');

    window.addEventListener('scroll', function () {
        if(window.scrollY >= 300) {
            scrollTriggerWrapMiddle.classList.add('visible');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollTriggerWrapBottom = document.querySelector('.wrapper-bottom');
    const content =  document.querySelector('.information');

    window.addEventListener('scroll', function(){
        if(window.scrollY >= 1300) {
            scrollTriggerWrapBottom.classList.add('visible');
        }
    });
});




//---------------progress bar-------------------------------


function updateProgressBar() {
    document.getElementById('barHtml').style.width = '75%';
    document.getElementById('barCss').style.width = '75%';
    document.getElementById('barJs').style.width = '70%';
    document.getElementById('barBt').style.width = '75%';
    document.getElementById('barJquery').style.width = '55%';
    document.getElementById('barReact').style.width = '50%';  
    document.getElementById('barJv').style.width = '50%';
    document.getElementById('barNodejs').style.width = '50%';
    document.getElementById('barC').style.width = '40%';
   
}
function handleScroll() {
    var tableOffset = document.querySelector('table').offsetTop;
    var currentScroll = window.scrollY;
    if (currentScroll >= 700) {
        updateProgressBar();
    }
}
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', function () {
    handleScroll();
});
 
function updateProgressBar2(){
    document.getElementById('barEng').style.width = '55%';
    document.getElementById('barHeb').style.width = '80%';
    document.getElementById('barUkr').style.width = '100%';
    document.getElementById('barRus').style.width = '100%';
}
function handleScroll2() {
    var tableOffset = document.querySelector('table').offsetTop;
    var currentScroll = window.scrollY;
    if (currentScroll >= 1000) {
        updateProgressBar2();
    }
}
window.addEventListener('scroll', handleScroll2);
window.addEventListener('load', function () {
    handleScroll();
});