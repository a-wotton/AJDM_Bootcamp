
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
