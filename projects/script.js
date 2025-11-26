


$(document).ready(function () {

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

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Lalan Kumar";
            $("#favicon").attr("href", "../assets/images/eyesopen.png");
        }
        else {
            document.title = "There is more!!";
            $("#favicon").attr("href", "../assets/images/eyesclosed.png");
        }
    });



// fetch projects start
function getProjects() {
    return fetch("projects.json")
        .then(response => response.json())
        .then(data => {
            return data
        });
}

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
function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";
    projects.forEach(project => {
        projectsHTML += `
        <div class="grid-item ${project.category}">
        <div class="box tilt" style="width: 380px; margin: 1rem">
      <img draggable="false" src="${project.image}" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            ${project.links.video ? `<a href="${project.links.video}" class="btn" target="_blank">Video <i class="fas fa-video"></i></a>` : (project.links.code ? `<a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>` : "")}
          </div>
        </div>
      </div>
    </div>
    </div>`
    });
    projectsContainer.innerHTML = projectsHTML;

    // vanilla tilt.js
    // VanillaTilt.init(document.querySelectorAll(".tilt"), {
    //     max: 20,
    // });
    // // vanilla tilt.js  

    // /* ===== SCROLL REVEAL ANIMATION ===== */
    // const srtop = ScrollReveal({
    //     origin: 'bottom',
    //     distance: '80px',
    //     duration: 1000,
    //     reset: true
    // });

    // /* SCROLL PROJECTS */
    // srtop.reveal('.work .box', { interval: 200 });

    // isotope filter products
    var $grid = $('.box-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: 200
        }
    });

    // filter items on button click
    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}

getProjects().then(data => {
    showProjects(data);
})
// fetch projects end



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