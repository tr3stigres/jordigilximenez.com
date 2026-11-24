window.addEventListener('load', function() {
    document.querySelector("#modoOscuro").addEventListener("click", function() {
        document.querySelector('body').classList.toggle("bodyModeFosc");
        document.querySelector('nav').classList.toggle("navbar-light");
        document.querySelector('nav').classList.toggle("bg-body-tertiary");
        document.querySelector('nav').classList.toggle("navbar-dark");
        document.querySelector('nav').classList.toggle("bg-black");
        document.querySelector('#socialLinks').classList.toggle("socialLinksModeFosc");
        document.querySelector('#menuInici').classList.toggle("menuIniciModeFosc");
    });
});