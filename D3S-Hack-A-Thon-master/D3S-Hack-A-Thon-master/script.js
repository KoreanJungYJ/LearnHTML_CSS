$(function() {

    // $("#side-navigation").hide(); // hide side navigation

    // regist on click event that start button of main page
    $("#start").on("click", function() {
        $('html,body').animate({
            scrollTop: $("#intro-page").offset().top
        }, 1000, function() {
            $("#side-navigation").show();
            console.log("complete");
        });
        return false;
    });

    // check scroll offset and set isShowed value
    // $(window).scroll(function() {
    //         if ((window.pageYOffset || document.documentElement.scrollBottom) < $("#intro-page").offset().top) {
    //             $("#side-navigation").hide();
    //             return ;
    //         }
    //         else if ((window.pageYOffset || document.documentElement.scrollBottom) > $("#intro-page").offset().top) {
    //             $("#side-navigation").show();
    //         }
    // });
});

function scrollPage(element) {
    var elementName = element.children[1].innerHTML;
    elementName = elementName.trim();
    elementName += "-page";

    $('html,body').animate({
        scrollTop: $("#" + elementName).offset().top
    }, 1000);
}
