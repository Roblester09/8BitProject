
// JavaScript
window.sr = ScrollReveal(); 

// sr.reveal('h1', {
//     delay: 0,
//     duration: 200,
//     origin: 'bottom',
//     distance: '100px' 
// });

$(document).ready(function () {

    // hamburger menu toggle
    $('.nav-toggle').click(function () {
        $('.main-nav').toggleClass('is-open');
        $('.hamburger').toggleClass('is-open');
    })

})
