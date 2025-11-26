$(document).ready(function () {

    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');
    const themeIcon = document.getElementById('theme-icon');
    const themeIconMobile = document.getElementById('theme-icon-mobile');
    const htmlElement = document.documentElement;

    // Check for saved user preference, if any, on load of the website
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        htmlElement.classList.add('dark');
        updateIcons(true);
    } else {
        htmlElement.classList.remove('dark');
        updateIcons(false);
    }

    function updateIcons(isDark) {
        if (isDark) {
            themeIcon.classList.remove('ri-moon-line');
            themeIcon.classList.add('ri-sun-line');
            if (themeIconMobile) {
                themeIconMobile.classList.remove('ri-moon-line');
                themeIconMobile.classList.add('ri-sun-line');
            }
        } else {
            themeIcon.classList.remove('ri-sun-line');
            themeIcon.classList.add('ri-moon-line');
            if (themeIconMobile) {
                themeIconMobile.classList.remove('ri-sun-line');
                themeIconMobile.classList.add('ri-moon-line');
            }
        }
    }

    function toggleTheme() {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            updateIcons(false);
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            updateIcons(true);
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
    if (themeToggleMobileBtn) {
        themeToggleMobileBtn.addEventListener('click', toggleTheme);
    }


    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });




//disable developer mode
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
