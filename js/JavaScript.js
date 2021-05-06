//Ao clicar em alguma âncora, ir "lentamente" até ela
function animeScroll() {
    var disTopoScroll = $(document).scrollTop();
    console.log(disTopoScroll);
    $(".anime_inicial").each(function() {
        if (disTopoScroll > 220) {
            $(this).addClass("anime_final");
        } else {
            $(this).removeClass("anime_final");
        }
    })
};
animeScroll();
$(window).scroll(function() {
    animeScroll()
});