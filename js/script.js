$(document).ready(function() {
    let chooseTour = document.querySelector('.main_btna'),
        getConsult = document.querySelector('.main_btn'),
        toursSchedule = document.querySelector('#toursSchedule'),
        close = document.querySelector('.close');
        
    
    function OverlayIn (btns) {
        $(btns).on('click', function(e) {
            e.preventDefault();
            $('.overlay').fadeIn('slow');
            $('.modal').slideDown('slow');

        });
    }
    new OverlayIn(chooseTour);
    new OverlayIn(getConsult);
    new OverlayIn(toursSchedule);

    function OverlayOut (btn) {
        $(btn).on('click', function(e) {
            e.preventDefault();
            $('.modal').slideUp('slow');
            $('.overlay').fadeOut('slow');
            

        });
    }
    new OverlayOut(close);
    



});