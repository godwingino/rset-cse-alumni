// Navbar JavaScript
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
}


// Scroll Animation
const sr = ScrollReveal({
    origin: 'top',
    distance:'85px',
    duration:2000,
    reset: true
})

const sr1 = ScrollReveal({
    origin: 'left',
    distance: '85px',
    duration:2000,
    reset: true
})
                
sr1.reveal ('.home-text',{delay : 300)}
sr1.reveal ('.btndiv',{delay:400})
sr.reveal ('.home',{delay:300})

sr.reveal ('.whowe',{})
sr.reveal ('.heading',{})
sr.reveal ('.about-text',{delay:200})

sr.reveal ('.services-content',{})

sr.reveal ('.work-text',{})
sr.reveal ('.work-img',{delay:200})

sr.reveal ('form input',{})
sr.reveal ('form textarea',{})