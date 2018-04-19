// Write your Javascript code.

/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('header').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('header').addClass("scrolled");
    }else{
        $('header').removeClass("scrolled");
    }
}

if($('header').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}