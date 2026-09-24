function showmenu() {
    $('nav#nav-esq ul.menu-principal')
        .css('display', 'flex')
        .addClass('animate__animated animate__fadeInRight animate__slow');

    $('nav#nav-esq ul.icone-menu').css('display', 'none');
}

function hidemenu() {
    $('nav#nav-esq ul.menu-principal')
        .css('display', 'none')
        .addClass('animate__animated animate__fadeInRight animate__slow');

    $('nav#nav-esq ul.icone-menu').css('display', 'flex');
}

let controle = true;

$('nav#nav-esq ul.icone-menu').click(function () {

    if (controle === true) {
        showmenu();
        controle = false;
    } else {
        hidemenu();
        controle = true;
    }

});