document.querySelector("#misCookies").style.display = "none";

// Aceptar cookies
document.querySelector("#aceptoCookies").addEventListener("click", function() {
    acceptarCookies();
    comprobarCookies();
});

// Rechazar cookies
document.querySelector("#declinoCookies").addEventListener("click", function() {
    denegarCookies();
    comprobarCookies();
});

// Consultar la decisión
function comprobarCookies() {

    let finestra = document.querySelector("#misCookies");
    let todasCookies = localStorage.getItem('cookiesAcceptades');

    if(todasCookies) {
        let cookie = JSON.parse(todasCookies);
        //De moment no fem servir cookies, però està el control
        //s'hauria de controlar, una per una, cookie.necesaries,....
        let fechaGuardada = new Date(cookie.fecha);
        let fechaActual = new Date();
        if ((fechaActual - fechaGuardada) >= (24 * 60 * 60 * 1000)) {
            finestra.style.display = "block";
        } else {
            finestra.style.display = "none";
            renovarCookies(cookie.necessaries, cookie.analitiques, cookie.publicitat);
        }

    } else {
        //no s'ha preguntat mai o la localStorage no existeix
        finestra.style.display = "block";
    }

}
//Acceptar les cookies
function acceptarCookies() {
    localStorage.setItem('cookiesAcceptades', JSON.stringify({
        necessaries: true,
        analitiques: true,
        publicitat: true,
        fecha: new Date().toISOString()
    }));
}

//Denegar les cookies
function denegarCookies() {
    localStorage.setItem('cookiesAcceptades', JSON.stringify({
        necessaries: false,
        analitiques: false,
        publicitat: false,
        fecha: new Date().toISOString()
    }));
}

//Denegar les cookies
function renovarCookies(n, a, p) {
    localStorage.setItem('cookiesAcceptades', JSON.stringify({
        necessaries: false,
        analitiques: false,
        publicitat: false,
        fecha: new Date().toISOString()
    }));
}

window.addEventListener('load', function() {
    comprobarCookies();
});