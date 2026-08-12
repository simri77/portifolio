/* =========================================================
   SIMRET MESFIN PORTFOLIO
   Main JavaScript
   ========================================================= */


/* =========================================================
   SIDEBAR
   ========================================================= */

const navMenu = document.getElementById('sidebar');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


/* Show sidebar */

if (navToggle && navMenu) {

    navToggle.addEventListener('click', () => {

        navMenu.classList.add('show-sidebar');

    });

}


/* Hide sidebar */

if (navClose && navMenu) {

    navClose.addEventListener('click', () => {

        navMenu.classList.remove('show-sidebar');

    });

}


/* Hide sidebar when navigation link is clicked */

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {

    link.addEventListener('click', () => {

        if (navMenu) {

            navMenu.classList.remove('show-sidebar');

        }

    });

});


/* =========================================================
   ACTIVE NAVIGATION LINK
   ========================================================= */

const sections = document.querySelectorAll('section[id]');


function updateActiveNavigation() {

    const scrollPosition = window.scrollY + 200;


    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        const sectionId = section.getAttribute('id');

        const matchingLink = document.querySelector(
            `.nav-link[href="#${sectionId}"]`
        );


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach((link) => {

                link.classList.remove('active-link');

            });


            if (matchingLink) {

                matchingLink.classList.add('active-link');

            }

        }

    });

}


window.addEventListener('scroll', updateActiveNavigation);


/* =========================================================
   PORTFOLIO POPUP
   ========================================================= */

const portfolioPopup =
    document.querySelector('.portfolio-popup');

const portfolioPopupClose =
    document.querySelector('.portfolio-popup-close');

const portfolioPopupImage =
    document.querySelector('.portfolio-popup-img');

const portfolioPopupTitle =
    document.querySelector('.portfolio-popup-subtitle span');

const portfolioPopupBody =
    document.querySelector('.portfolio-popup-body');


/* Open popup */

function openPortfolioPopup(card) {

    if (!portfolioPopup || !card) {
        return;
    }


    const image =
        card.querySelector('.work-img');

    const title =
        card.querySelector('.work-title');

    const details =
        card.querySelector('.portfolio-item-details');


    if (portfolioPopupImage && image) {

        portfolioPopupImage.src = image.src;

        portfolioPopupImage.alt =
            image.alt || 'Project preview';

    }


    if (portfolioPopupTitle && title) {

        portfolioPopupTitle.textContent =
            title.textContent;

    }


    if (portfolioPopupBody && details) {

        portfolioPopupBody.innerHTML =
            details.innerHTML;

    }


    portfolioPopup.classList.add('open');

    document.body.style.overflow = 'hidden';

}


/* Close popup */

function closePortfolioPopup() {

    if (!portfolioPopup) {
        return;
    }


    portfolioPopup.classList.remove('open');

    document.body.style.overflow = '';

}


/* Project buttons */

const projectButtons =
    document.querySelectorAll('.work-card .work-button');


projectButtons.forEach((button) => {

    button.addEventListener('click', (event) => {

        const card =
            event.currentTarget.closest('.work-card');


        /*
            Only cards with hidden portfolio-item-details
            use the popup.

            Secondary projects with direct GitHub links
            do not have a popup.
        */

        const details =
            card?.querySelector('.portfolio-item-details');


        if (details) {

            event.preventDefault();

            openPortfolioPopup(card);

        }

    });

});


/* Close button */

if (portfolioPopupClose) {

    portfolioPopupClose.addEventListener(
        'click',
        closePortfolioPopup
    );

}


/* Close popup by clicking outside */

if (portfolioPopup) {

    portfolioPopup.addEventListener('click', (event) => {

        if (event.target === portfolioPopup) {

            closePortfolioPopup();

        }

    });

}


/* Close popup with Escape */

document.addEventListener('keydown', (event) => {

    if (event.key === 'Escape') {

        closePortfolioPopup();

    }

});


/* =========================================================
   CONTACT INPUT ANIMATION
   ========================================================= */

const inputs =
    document.querySelectorAll('.input');


inputs.forEach((input) => {

    function updateInputState() {

        const parent =
            input.parentElement;


        if (
            input.value.trim() !== '' ||
            document.activeElement === input
        ) {

            parent.classList.add('focus');

        } else {

            parent.classList.remove('focus');

        }

    }


    input.addEventListener(
        'focus',
        updateInputState
    );


    input.addEventListener(
        'blur',
        updateInputState
    );


    input.addEventListener(
        'input',
        updateInputState
    );

});


/* =========================================================
   FOOTER YEAR
   ========================================================= */

const yearElement =
    document.getElementById('current-year');


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}
/*=============== CLEAN URL PARAMETERS ===============*/
if (window.location.search) {
    window.history.replaceState(
        {},
        document.title,
        window.location.pathname + window.location.hash
    );
}


/* =========================================================
   CLOSE SIDEBAR WITH ESCAPE
   ========================================================= */

document.addEventListener('keydown', (event) => {

    if (
        event.key === 'Escape' &&
        navMenu
    ) {

        navMenu.classList.remove(
            'show-sidebar'
        );

    }

});
