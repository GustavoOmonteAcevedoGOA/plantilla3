<<<<<<< HEAD
/**/

/*--===========MOSTRAR ICONO PARA SUBIR=============--*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 500) {
        scrollTop.classList.add('show-scroll');
    } else {
        scrollTop.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollTop);

/*--===========MOSTRAR ICONO PARA SUBIR=============--*/

/**/
/*--===========SUBIR AL INICIO CON ANIMACION LENTA=============--*/
function scrollUp() {
    const currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 20));
    }
}

document.getElementById('scroll-top').addEventListener('click', scrollUp);
/*--===========SUBIR AL INICIO CON ANIMACION LENTA=============--*/
/**/

/*--===========PALETA DE COLORES=============--*/
function cambiarEstilos() {
    const cambiarcolor = document.getElementById('cambiarEstilo');
    const colorSitio = document.getElementById('colorSitio');
    cambiarcolor.classList.toggle('btn-clr-clicked');
    colorSitio.classList.toggle('mostrar-lateral');
    colorSitio.classList.toggle('esconder-lateral');
}
document.getElementById('cambiarEstilo').addEventListener('click', cambiarEstilos);

/*--===========PALETA DE COLORES=============--*/
/**/
/*--===========SHOW MENU=============--*/

const showMenu = (toggleId, navId) => {
    /*--===========Obtenemos el id de la hamburguesa y del nav desplegable=============--*/
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    /*--===========validamos si existen las variables=============--*/
    if (toggle && nav) {
        /*--===========añadimos la clase mostrar menu "show-menu" al div que contiene la clase nav-menu =============--*/
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

/*--===========SHOW MENU=============--*/

/*--===========SHOW MENU=============--*/

const showMenu2 = (toggleId, navId) => {
    /*--===========Obtenemos el id de la hamburguesa y del nav desplegable=============--*/
    const toggle2 = document.getElementById(toggleId);
    const nav2 = document.getElementById(navId);

    /*--===========validamos si existen las variables=============--*/
    if (toggle2 && nav2) {
        /*--===========añadimos la clase mostrar menu "show-menu" al div que contiene la clase nav-menu =============--*/
        toggle2.addEventListener('click', () => {
            nav2.classList.toggle('show-menu')
        })
    }
}
showMenu2('nav-toggle', 'nav-menu2');

/*--===========SHOW MENU=============--*/


/**/
/*--===========REMOVEMOS MENU CUANDO ESCOJA OTRA VENTANA=============--*/
/*--===========obtenemos a todos los links=============--*/
const navLink = document.querySelectorAll('.nav-menu-link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    /*--===========cuando le hacemos click en cualquier link removemos la clase show-menu=============--*/
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*--===========REMOVEMOS MENU CUANDO ESCOJA OTRA VENTANA=============--*/

/*--===========SCROLL A LA SECCION QUE QUERIEMOS IR  Y CAMBIAR EL ACTIVE LINK SEGUN DONDE ESTAS=============--*/

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);
/**/
/*--===========AGREGAR SOMBRA AL HEADER CUANDO BAJE=============--*/
function scrollHeader() {
    const nav = document.getElementById('header');
    /*--===========cuando el escroll es mayor que 200 vh le añadimos la clase scroll-header a el header=============--*/
    if (this.scrollY >= 200) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/*--===========AGREGAR SOMBRA AL HEADER CUANDO BAJE=============--*/

/**/

/*--===========SCROLL ANIMACION DE APARICION=============--*/

const animacionAparicion = document.querySelectorAll('.animacion-aparicion');
/*--===========AGREGAMOS ESTA CLASE A TODOS LOS RECURSOS QUE TENDRAN EL EFECTO=============--*/
let subeObaja = 0;
/*--===========USAMOS ESTA VARIABLE PARA DETERMINAR SI SUBE O BAJA=============--*/
function Aparecer() {
    const scrollAparecer = document.documentElement.scrollTop;

    for (var i = 0; i < animacionAparicion.length; i++) {
        let alturaAnimado = animacionAparicion[i].offsetTop;

        if (scrollAparecer < alturaAnimado - 850) {
            animacionAparicion[i].style.opacity = 0;
            animacionAparicion[i].classList.remove('animacion-aparicion-abajo');
            animacionAparicion[i].classList.remove('animacion-aparicion-arriba');

            subeObaja = 1;
        }
        if (alturaAnimado + 100 < scrollAparecer) {
            animacionAparicion[i].style.opacity = 0;
            animacionAparicion[i].classList.remove('animacion-aparicion-arriba');
            animacionAparicion[i].classList.remove('animacion-aparicion-abajo');
            subeObaja = 2;
        }
        if (subeObaja === 1) {
            if (alturaAnimado - 850 < scrollAparecer) {
                animacionAparicion[i].style.opacity = 1;
                animacionAparicion[i].classList.remove('animacion-aparicion-abajo');
                animacionAparicion[i].classList.add('animacion-aparicion-arriba');
            }
        } else {
            if (alturaAnimado + 100 > scrollAparecer) {
                animacionAparicion[i].style.opacity = 1;
                animacionAparicion[i].classList.remove('animacion-aparicion-arriba');
                animacionAparicion[i].classList.add('animacion-aparicion-abajo');
            }

        }
    }
}
window.addEventListener('scroll', Aparecer);

/*--===========SCROLL ANIMACION DE APARICION=============--*/


/*--===========CAMBIAR ESTILOS=============--*/

const btnColores = document.querySelectorAll('.colores.c-s-btns > li');
console.log(btnColores);
for (btnColor of btnColores) {
    btnColor.addEventListener("click", function(evt) {
        const cuadro = evt.target;
        console.log(cuadro);
        const ruta = cuadro.dataset.path;
        console.log(ruta);
        const rutaNueva = `"${ruta}"`;
        const tema = document.querySelector('#ui-theme-color');
        console.log(tema);


        document.getElementById('ui-theme-color').href = ruta;



    })

}


const cuadros = document.querySelectorAll("ul.colores.c-s-btns > li");
for (unCuadro of cuadros) {
    unCuadro.addEventListener("click", function(evt) {
        const cuadro = evt.target;
        const ruta = cuadro.attributes[0].value;
        const ruta1 = '"' + ruta + '"';
        document.getElementById('ui-theme-color').href = ruta
            /*     const rutaCss = document.getElementById('ui-theme-color');
                console.log(rutaCss.attributes[1]);
                rutaCss.setAttributes[1]('href', ruta1); */

        /*    const ruta = cuadro.data('path');
           rutaCss.attr('href', ruta);
           const url = cuadro.data('url'); */

    });
}
=======
/**/

/*--===========MOSTRAR ICONO PARA SUBIR=============--*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 500) {
        scrollTop.classList.add('show-scroll');
    } else {
        scrollTop.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollTop);

/*--===========MOSTRAR ICONO PARA SUBIR=============--*/

/**/
/*--===========SUBIR AL INICIO CON ANIMACION LENTA=============--*/
function scrollUp() {
    const currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 20));
    }
}

document.getElementById('scroll-top').addEventListener('click', scrollUp);
/*--===========SUBIR AL INICIO CON ANIMACION LENTA=============--*/
/**/

/*--===========PALETA DE COLORES=============--*/
function cambiarEstilos() {
    const cambiarcolor = document.getElementById('cambiarEstilo');
    const colorSitio = document.getElementById('colorSitio');
    cambiarcolor.classList.toggle('btn-clr-clicked');
    colorSitio.classList.toggle('mostrar-lateral');
    colorSitio.classList.toggle('esconder-lateral');
}
document.getElementById('cambiarEstilo').addEventListener('click', cambiarEstilos);

/*--===========PALETA DE COLORES=============--*/
/**/
/*--===========SHOW MENU=============--*/

const showMenu = (toggleId, navId) => {
    /*--===========Obtenemos el id de la hamburguesa y del nav desplegable=============--*/
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    /*--===========validamos si existen las variables=============--*/
    if (toggle && nav) {
        /*--===========añadimos la clase mostrar menu "show-menu" al div que contiene la clase nav-menu =============--*/
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

/*--===========SHOW MENU=============--*/

/*--===========SHOW MENU=============--*/

const showMenu2 = (toggleId, navId) => {
    /*--===========Obtenemos el id de la hamburguesa y del nav desplegable=============--*/
    const toggle2 = document.getElementById(toggleId);
    const nav2 = document.getElementById(navId);

    /*--===========validamos si existen las variables=============--*/
    if (toggle2 && nav2) {
        /*--===========añadimos la clase mostrar menu "show-menu" al div que contiene la clase nav-menu =============--*/
        toggle2.addEventListener('click', () => {
            nav2.classList.toggle('show-menu')
        })
    }
}
showMenu2('nav-toggle', 'nav-menu2');

/*--===========SHOW MENU=============--*/


/**/
/*--===========REMOVEMOS MENU CUANDO ESCOJA OTRA VENTANA=============--*/
/*--===========obtenemos a todos los links=============--*/
const navLink = document.querySelectorAll('.nav-menu-link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    /*--===========cuando le hacemos click en cualquier link removemos la clase show-menu=============--*/
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*--===========REMOVEMOS MENU CUANDO ESCOJA OTRA VENTANA=============--*/

/*--===========SCROLL A LA SECCION QUE QUERIEMOS IR  Y CAMBIAR EL ACTIVE LINK SEGUN DONDE ESTAS=============--*/

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);
/**/
/*--===========AGREGAR SOMBRA AL HEADER CUANDO BAJE=============--*/
function scrollHeader() {
    const nav = document.getElementById('header');
    /*--===========cuando el escroll es mayor que 200 vh le añadimos la clase scroll-header a el header=============--*/
    if (this.scrollY >= 200) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/*--===========AGREGAR SOMBRA AL HEADER CUANDO BAJE=============--*/

/**/

/*--===========SCROLL ANIMACION DE APARICION=============--*/

const animacionAparicion = document.querySelectorAll('.animacion-aparicion');
/*--===========AGREGAMOS ESTA CLASE A TODOS LOS RECURSOS QUE TENDRAN EL EFECTO=============--*/
let subeObaja = 0;
/*--===========USAMOS ESTA VARIABLE PARA DETERMINAR SI SUBE O BAJA=============--*/
function Aparecer() {
    const scrollAparecer = document.documentElement.scrollTop;

    for (var i = 0; i < animacionAparicion.length; i++) {
        let alturaAnimado = animacionAparicion[i].offsetTop;

        if (scrollAparecer < alturaAnimado - 850) {
            animacionAparicion[i].style.opacity = 0;
            animacionAparicion[i].classList.remove('animacion-aparicion-abajo');
            animacionAparicion[i].classList.remove('animacion-aparicion-arriba');

            subeObaja = 1;
        }
        if (alturaAnimado + 100 < scrollAparecer) {
            animacionAparicion[i].style.opacity = 0;
            animacionAparicion[i].classList.remove('animacion-aparicion-arriba');
            animacionAparicion[i].classList.remove('animacion-aparicion-abajo');
            subeObaja = 2;
        }
        if (subeObaja === 1) {
            if (alturaAnimado - 850 < scrollAparecer) {
                animacionAparicion[i].style.opacity = 1;
                animacionAparicion[i].classList.remove('animacion-aparicion-abajo');
                animacionAparicion[i].classList.add('animacion-aparicion-arriba');
            }
        } else {
            if (alturaAnimado + 100 > scrollAparecer) {
                animacionAparicion[i].style.opacity = 1;
                animacionAparicion[i].classList.remove('animacion-aparicion-arriba');
                animacionAparicion[i].classList.add('animacion-aparicion-abajo');
            }

        }
    }
}
window.addEventListener('scroll', Aparecer);

/*--===========SCROLL ANIMACION DE APARICION=============--*/


/*--===========CAMBIAR ESTILOS=============--*/

const btnColores = document.querySelectorAll('.colores.c-s-btns > li');
console.log(btnColores);
for (btnColor of btnColores) {
    btnColor.addEventListener("click", function(evt) {
        const cuadro = evt.target;
        console.log(cuadro);
        const ruta = cuadro.dataset.path;
        console.log(ruta);
        const rutaNueva = `"${ruta}"`;
        const tema = document.querySelector('#ui-theme-color');
        console.log(tema);


        document.getElementById('ui-theme-color').href = ruta;



    })

}


const cuadros = document.querySelectorAll("ul.colores.c-s-btns > li");
for (unCuadro of cuadros) {
    unCuadro.addEventListener("click", function(evt) {
        const cuadro = evt.target;
        const ruta = cuadro.attributes[0].value;
        const ruta1 = '"' + ruta + '"';
        document.getElementById('ui-theme-color').href = ruta
            /*     const rutaCss = document.getElementById('ui-theme-color');
                console.log(rutaCss.attributes[1]);
                rutaCss.setAttributes[1]('href', ruta1); */

        /*    const ruta = cuadro.data('path');
           rutaCss.attr('href', ruta);
           const url = cuadro.data('url'); */

    });
}
>>>>>>> c94605b (recuperando github)
/*--===========CAMBIAR ESTILOS=============--*/