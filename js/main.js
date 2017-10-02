$(document).ready(function () {
    var height = innerHeight;//pobierz wysokość okna
    console.log('aktualna wysokość: ' + height);

    var scrollTo; //zdefiniuj zmienną określającą, przy jakim przesunięciu nagłówek ma ciemnieć
    
    scrollTo = height - 70;
  

    var headerTop = $('.header').offset().top;
    
    //zainicjuj funkcję wypełniającą nagłówek
    var filling = function () { 

    var scrollY = $(window).scrollTop(); //sprawdź o ile przewinięta jest zawartość
        //console.log(scrollY);


        if (scrollY > scrollTo) {
            $('.header').addClass('filled');
        } else {
            $('.header').removeClass('filled');
        };
    }
    
    //wywołaj funkcję wypełniającą nagłowek, kiedy okno jest przesuwane
    filling();
    $(window).scroll(function () {
        filling();
    });
});

//zainicjuj funkcję przewijania do określonego punktu strony
function directScroll(selector) {
    $("html,body").animate({
        scrollTop: $(selector).offset().top - 62
    }, 300);
    
    setTimeout(function(){
    zamknij();
    
    }, 300);
        
}

//zamknięcie podglądu(global)
$('#close').click(function () {
        $('.drawer').removeClass('drawerOpen');
        setTimeout(function () { //odczekaj500ms i przywróć miniaturę.
        $('.miniature').removeClass('imageClick');
        $('.header').removeClass('filledOnDrawer');
    }, 200);
});
//OBSŁUGA OBRAZKÓW W GALERII--------------------------------------------


//reakcja po najechaniu
$('.miniature').mouseover(function() {
    $(this).addClass('imageHover');
});

//reakcja po zjechaniu
$('.miniature').mouseout(function() {
    $(this).removeClass('imageHover');
});


//funkcja otwierania obrazka

$('.miniature').click(function () {
    var obrazek = $(this).attr('id');
    $(this).addClass('imageClick'); //odpal odlatywanie miniatury
    $('.header').addClass('filledOnDrawer'); //przyciemnij nagłówek
    //$('drawer').css({'background-color': 'red'});
    //$('drawer').css('background-image', 'url("imgs/' + obrazek + '.jpg")');
    document.getElementById("fullPhoto").innerHTML = '<img class="imageInDrawer" src="imgs/' + obrazek + '.jpg"></img>'; //załaduj zdjęcie
    setTimeout(function () { //odczekaj200ms i otwórz szufladę
        $('.drawer').addClass('drawerOpen');
    }, 200);
    setTimeout(function () { //odczekaj500ms i przywróć miniaturę.
        $(this).removeClass('imageClick');
    }, 800);
})
    
//KONIEC OBSŁUGI OBRAZKÓW W GALERII___________________________________

//OBSŁUGA PRZYCISKU MENU

//przy wciśnięciu:
$('#menuM').click(function(){
    $('.menu').addClass('menuOpen'); //wyjedź z menu
    $('.header').addClass('filledOnDrawer'); //przyciemnij nagłówek
    $('#menuM').removeClass('visible'); //schowaj menu
    $('#closeM').addClass('visible'); //pokaż close
});

//przy zamknięciu(funkcja wywołana też wyżej, przy directScroll)

var zamknij = function(){
   $('.menu').removeClass('menuOpen');
    $('.header').removeClass('filledOnDrawer');
    $('#menuM').addClass('visible');
    $('#closeM').removeClass('visible'); 
}

$('#closeM').click(function(){
    zamknij();
});
