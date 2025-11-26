$(document).ready(function () {

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';

    // Apply saved theme
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
        themeToggle.title = 'Toggle Light Mode';
    }

    // Theme toggle click handler
    themeToggle.addEventListener('click', function () {
        const currentTheme = body.getAttribute('data-theme');

        if (currentTheme === 'dark') {
            body.removeAttribute('data-theme');
            themeToggle.classList.remove('fa-sun');
            themeToggle.classList.add('fa-moon');
            themeToggle.title = 'Toggle Dark Mode';
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            themeToggle.classList.remove('fa-moon');
            themeToggle.classList.add('fa-sun');
            themeToggle.title = 'Toggle Light Mode';
            localStorage.setItem('theme', 'dark');
        }
    });

    // Mobile menu toggle with jQuery
    $('#menu').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');

        // Prevent body scroll when menu is open
        if ($('.navbar').hasClass('nav-toggle')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'auto');
        }
    });

    // Vanilla JavaScript fallback for mobile menu
    const menuBtn = document.getElementById('menu');
    const navbar = document.querySelector('.navbar');

    if (menuBtn && navbar) {
        menuBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Toggle menu icon
            this.classList.toggle('fa-times');

            // Toggle navigation
            navbar.classList.toggle('nav-toggle');

            // Prevent body scroll when menu is open
            if (navbar.classList.contains('nav-toggle')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Close mobile menu when clicking on nav links
    $('.navbar ul li a').click(function () {
        if ($(window).width() <= 768) {
            $('#menu').removeClass('fa-times');
            $('.navbar').removeClass('nav-toggle');
            $('body').css('overflow', 'auto');
        }
    });

    $(window).on('scroll load', function () {
        // Close mobile menu on scroll
        if ($(window).width() <= 768) {
            $('#menu').removeClass('fa-times');
            $('.navbar').removeClass('nav-toggle');
            $('body').css('overflow', 'auto');
        }

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });



});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Lalan Kumar";
            $("#favicon").attr("href", "assets/images/eyesopen.png");
        }
        else {
            document.title = "There is more!!";
            $("#favicon").attr("href", "assets/images/eyesclosed.png");
        }
    });

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Web Development", "UI UX Developement", "Software Engineering", "Mobile Application Development"],
    loop: true,
    typeSpeed: 120,
    backSpeed: 50,
    backDelay: 1000,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    if (type === "skills") {
        response = await fetch("skills.json")
        const data = await response.json();
        return data;
    }
    // Projects functionality removed as projects.json doesn't exist
    return [];
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

fetchData().then(data => {
    showSkills(data);
});

// Projects are now hardcoded in HTML, so removing the dynamic fetch

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: false
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .instagram', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 0 });
srtop.reveal('.about .content .tag', { delay: 20 });
srtop.reveal('.about .content p', { delay: 300 });
srtop.reveal('.about .content .box-container', { delay: 500 });
srtop.reveal('.about .content .resumebtn', { delay: 800 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 0 });
srtop.reveal('.skills .container .bar', { delay: 50 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 50 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 20 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 0 });
srtop.reveal('.experience .timeline .container', { interval: 40 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 0 });
srtop.reveal('.contact .container .form-group', { delay: 20 });

// Fallback function for deployment environments
(function () {
    'use strict';

    // Wait for DOM to be ready
    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    ready(function () {
        // Check if jQuery loaded, if not use vanilla JS
        if (typeof $ === 'undefined' || typeof jQuery === 'undefined') {
            console.warn('jQuery not loaded, using vanilla JavaScript fallback');
            initVanillaMobileMenu();
        }

        // Additional mobile menu initialization
        setTimeout(function () {
            initVanillaMobileMenu();
        }, 100);
    });

    function initVanillaMobileMenu() {
        const menuBtn = document.getElementById('menu');
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelectorAll('.navbar ul li a');

        if (!menuBtn || !navbar) return;

        // Mobile menu toggle
        menuBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            this.classList.toggle('fa-times');
            navbar.classList.toggle('nav-toggle');

            if (navbar.classList.contains('nav-toggle')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu when clicking nav links
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                if (window.innerWidth <= 768) {
                    menuBtn.classList.remove('fa-times');
                    navbar.classList.remove('nav-toggle');
                    document.body.style.overflow = 'auto';
                }
            });
        });

        // Close menu on window resize
        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                menuBtn.classList.remove('fa-times');
                navbar.classList.remove('nav-toggle');
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (window.innerWidth <= 768 &&
                navbar.classList.contains('nav-toggle') &&
                !navbar.contains(e.target) &&
                !menuBtn.contains(e.target)) {
                menuBtn.classList.remove('fa-times');
                navbar.classList.remove('nav-toggle');
                document.body.style.overflow = 'auto';
            }
        });
    }
})();
