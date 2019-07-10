$(document).ready(function () {
    var height = innerHeight; //pobierz wysokość okna

    var scrollTo; //zdefiniuj zmienną określającą, przy jakim przesunięciu nagłówek ma ciemnieć

    scrollTo = height - 72;


    var headerTop = $('header').offset().top;

    //zainicjuj funkcję wypełniającą nagłówek
    var filling = function () {

        var scrollY = $(window).scrollTop(); //sprawdź o ile przewinięta jest zawartość


        if (scrollY > scrollTo) {
            $('header').addClass('filled');
        } else {
            $('header').removeClass('filled');
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

    setTimeout(function () {
        closeMenu();

    }, 300);

    closeDrawer();
}

const closeDrawer = function(){
    $('.drawer').removeClass('drawerOpen');
    setTimeout(function () { //odczekaj500ms i przywróć miniaturę.
        $('.miniature').removeClass('imageClick');
        $('header').removeClass('filledOnDrawer');
        setTimeout(function () {
            $('#drawer').css('background-image', '');
        }, 200)
    }, 200);
}

//zamknięcie podglądu(global)
$('#close').click(function () {
    closeDrawer();
});
//OBSŁUGA OBRAZKÓW W GALERII--------------------------------------------


//reakcja po najechaniu
$('.miniature').mouseover(function () {
    $(this).addClass('imageHover');
});

//reakcja po zjechaniu
$('.miniature').mouseout(function () {
    $(this).removeClass('imageHover');
});


//funkcja otwierania obrazka
var obrazek;
$('.miniature').click(function () {
    obrazek = $(this).attr('id').replace('m', '');
    $(this).addClass('imageClick'); //odpal odlatywanie miniatury
    $('header').addClass('filledOnDrawer'); //przyciemnij nagłówek
    $('#drawer').css('background-image', 'url("imgs/m' + obrazek + '.jpg")');
    setTimeout(function () { //odczekaj200ms i otwórz szufladę
        $('.drawer').addClass('drawerOpen');
    }, 200);
});

//Następny obrazek
$('#rightArrow').click(function () {
    var numerObrazka = parseInt(obrazek);
    numerObrazka++;
    if (numerObrazka <= 8) {
        $('.shutter').addClass('shutterOpen');
        setTimeout(function () {
            $('#drawer').css('background-image', 'url("imgs/m' + numerObrazka + '.jpg")');
        }, 200);
        setTimeout(function () {
            $('.shutter').removeClass('shutterOpen');
        }, 500);
        obrazek = numerObrazka;
    }
    else{
        alert('To ostatnie zdjęcie!')
    };
});

//poprzedni obrazek
$('#leftArrow').click(function () {
    var numerObrazka = parseInt(obrazek);
    numerObrazka--;
    if (numerObrazka >= 1) {
        $('.shutter').addClass('shutterOpen');
        setTimeout(function () {
            $('#drawer').css('background-image', 'url("imgs/m' + numerObrazka + '.jpg")');
        }, 200);
        setTimeout(function () {
            $('.shutter').removeClass('shutterOpen');
        }, 500);
        obrazek = numerObrazka;
    }
    else{
        alert('To pierwsze zdjęcie!')
    };
});

//KONIEC OBSŁUGI OBRAZKÓW W GALERII___________________________________

//OBSŁUGA PRZYCISKU MENU

//przy wciśnięciu:
$('#menuM').click(function () {
    $('.menu').addClass('menuOpen'); //wyjedź z menu
    $('header').addClass('filledOnDrawer'); //przyciemnij nagłówek
    $('#menuM').removeClass('visible'); //schowaj menu
    $('#closeM').addClass('visible'); //pokaż close
});

//przy zamknięciu(funkcja wywołana też wyżej, przy directScroll)

var closeMenu = function () {
    $('.menu').removeClass('menuOpen');
    $('header').removeClass('filledOnDrawer');
    $('#menuM').addClass('visible');
    $('#closeM').removeClass('visible');
}

$('#closeM').click(function () {
    closeMenu();
});