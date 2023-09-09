document.addEventListener("DOMContentLoaded", function () {
    const testimonialContainer = document.getElementById("testimonial-container");
    const loadTestimonialsButton = document.getElementById("loadTestimonials");

    // Array of testimonials
    const testimonials = [
        {
            author: "John Doe",
            text: "If you are a business owner, and you don't have industry nights in your toolkit just yet, I highly recommend that you check it out.",
        },
        {
            author: "Jane Smith",
            text: "I have tried a few software of this kind and industry nights is the best by far!",
        },
        {
            author: "David Johnson",
            text: "I love industry nights! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come.",
        },
    ];

    // Function to create HTML for a single testimonial
    function createTestimonialHTML(testimonial) {
        const testimonialDiv = document.createElement("div");
        testimonialDiv.classList.add("testimonial");

        const authorPara = document.createElement("p");
        authorPara.classList.add("author");
        authorPara.textContent = `- ${testimonial.author}`;

        const textPara = document.createElement("p");
        textPara.classList.add("text");
        textPara.textContent = testimonial.text;

        testimonialDiv.appendChild(textPara);
        testimonialDiv.appendChild(authorPara);

        return testimonialDiv;
    }

    // Function to load testimonials on button click
    function loadTestimonials() {
        testimonials.forEach((testimonial) => {
            const testimonialHTML = createTestimonialHTML(testimonial);
            testimonialContainer.appendChild(testimonialHTML);
        });

        // Disable the button after loading testimonials (optional)
        loadTestimonialsButton.disabled = true;
    }

    // Add an event listener to the button
    loadTestimonialsButton.addEventListener("click", loadTestimonials);
});

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
