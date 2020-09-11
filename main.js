document.addEventListener('DOMContentLoaded', () => {


    //Funcionalidad del header

    const header = document.querySelector('#header');
    const scrollHeaderChange = 200;

    const portfilio = document.querySelector('.portfolio');
    const rectPortfolio = portfilio.getBoundingClientRect();

    const about = document.querySelector('.about');
    const rectAbout = about.getBoundingClientRect();

    const contact = document.querySelector('.contact');
    const rectContact = contact.getBoundingClientRect();


    console.log(rectPortfolio)
    console.log(rectAbout)
    console.log(rectContact)

    // Scroll

    const botones = document.querySelectorAll('.nav__link');

    botones.forEach(boton => {
        boton.addEventListener('click', e => {
            e.preventDefault();


            //Detecto cuantos pixeles tengo que scrollear
            const headerHeight = header.getBoundingClientRect().height;
            console.log(headerHeight);
            switch (e.target.innerText) {
                case 'PORTFOLIO':
                    window.scrollTo(0, rectPortfolio.top - headerHeight)
                    break;
                case 'ABOUT':
                    window.scrollTo(0, rectAbout.top - headerHeight);
                    break;
                case 'CONTACT':
                    window.scrollTo(0, rectContact.top - headerHeight);
                    break;
                default:
                    break;
            }
        })
    });

    const marcarBoton = (seccion) => {

        botones.forEach(boton => {
            if (boton.innerText === seccion) {
                boton.classList.add('nav__link_selected');
            } else {
                boton.classList.remove('nav__link_selected');
            }
        });

    }

    const detectarSeccion = () => {

        const rectPortInstant = portfilio.getBoundingClientRect();
        const rectAboutInstant = about.getBoundingClientRect();
        const rectContactInstant = contact.getBoundingClientRect();


        //Detecto en que seccion estoy
        if (rectPortInstant.y < 100 && rectPortInstant.y > -300) {
            marcarBoton('PORTFOLIO')
        } else
        if (rectAboutInstant.y < 100 && rectAboutInstant.y > -300) {
            marcarBoton('ABOUT')
        } else
        if (rectContactInstant.y < 100) {
            marcarBoton('CONTACT')
        } else {
            marcarBoton('');
        }

    }

    window.addEventListener('scroll', () => {

        const scrollY = window.pageYOffset

        //Detectar cuando tiene que cambiar de tamaño
        if (scrollY >= scrollHeaderChange) {
            header.classList.add('header_small');
        } else {
            header.classList.remove('header_small')
        }

        //Detectar en que seccion estoy

        detectarSeccion();

    })

    //Funcionalidad de Contact Me

    const form = document.querySelector('.contact__form');

    form.addEventListener('submit', e => {
        e.preventDefault();
    })


});