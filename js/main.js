
// This section allows the hamburger menu to be toggleable

let menu = document.querySelector("#hammenu"),
    listItem = document.querySelectorAll(".mobile-menu li"),
    media = window.matchMedia("(min-width: 730px)");
    mobileNav = document.querySelector(".mobile-menu"); 


function toggleMenu() {
    if (mobileNav.classList.contains("hidden")) {
        mobileNav.classList.remove("hidden");
    } else {
        mobileNav.classList.add("hidden");
    }
}

menu.addEventListener("click", toggleMenu);

// This section ensures that the hamburger menu closes itself when you click a list item to scroll down the page

function toggleItem() {
    if (mobileNav.classList.contains("hidden")) {
        mobileNav.classList.remove("hidden");
    } else {
        mobileNav.classList.add("hidden");
    }
}

listItem.forEach(item => item.addEventListener("click", toggleItem));

//accordian
document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(function (accordion) {
        const toggleBtn = accordion.querySelector(".toggle-description");
        const description = accordion.querySelector(".description");

        toggleBtn.addEventListener("click", function (e) {
            e.preventDefault();
            description.classList.toggle("show");

            if (description.classList.contains("show")) {
                toggleBtn.textContent = "Read Less";
            } else {
                toggleBtn.textContent = "Read More";
            }
        });
    });
});



//smooth tranistion


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

