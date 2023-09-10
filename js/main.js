document.addEventListener("DOMContentLoaded", function () {
    // Hamburger menu toggle
    let menu = document.querySelector("#hammenu"),
        mobileNav = document.querySelector(".mobile-menu");

    function toggleMenu() {
        mobileNav.classList.toggle("hidden");
    }

    menu.addEventListener("click", toggleMenu);

    // Accordion
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

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Testimonials
    const testimonials = [
        { name: "Ryan Rillete", quote: "I have been using Zima for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great." },
        { name: "Steven Spielberg", quote: "Dinosaurs has made a huge difference just like this project!" },
        { name: "Sam Frank", quote: "Roze has helped my team and I stay on the same page. Previously, we were all over the board. Using Roze has definitely saved us time and money." },
        { name: "James Cameron", quote: "Avatar the way of fire is coming up in 2026 which will be under the knights supervision!" }
    ];

    const testimonialContainer = document.querySelector("#testimonials");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    testimonials.forEach(function (testimonial) {
        const testimonialDiv = document.createElement("div");
        testimonialDiv.classList.add("test_text", "col-span-4", "m-col-span-3", "l-col-span-3", "xl-col-span-3", "box");
        testimonialDiv.innerHTML = `<h3>${testimonial.name}</h3> <p>"${testimonial.quote}"</p>`;

        testimonialContainer.appendChild(testimonialDiv);
        observer.observe(testimonialDiv);
    });

    // Portfolios
    const portfolios = [
        { name: "Theresa Curtis", portfolioLink: "http://t.curtis.com" },
        { name: "Vinny Reeves", portfolioLink: "http://v.reeves.com" },
        { name: "Suzanne Mccall", portfolioLink: "http://s.mccall.com" },
        { name: "Johnny Wise", portfolioLink: "http://j.wise.com" },
        { name: "Lucinda Cotton", portfolioLink: "http://l.cotton.com" },
        { name: "Anoushka Pearson", portfolioLink: "http://a.pearson.com" },
        { name: "Ariana Erickson", portfolioLink: "http://a.erickson.com" },
        { name: "Danielle Wang", portfolioLink: "http://d.wang.com" },
        { name: "Esha Barnes", portfolioLink: "http://e.barnes.com" },
        { name: "Gracie Guerrero", portfolioLink: "http://g.guerrero.com" },
        { name: "John Doe", portfolioLink: "http://j.doe.com" },
        { name: "Jane Smith", portfolioLink: "http://j.smith.com" },
        { name: "Michael Johnson", portfolioLink: "http://m.johnson.com" },
        { name: "Sarah Davis", portfolioLink: "http://s.davis.com" },
        { name: "Kevin Brown", portfolioLink: "http://k.brown.com" },
        { name: "Emma Taylor", portfolioLink: "http://e.taylor.com" },
        { name: "Robert Wilson", portfolioLink: "http://r.wilson.com" },
        { name: "Olivia Martin", portfolioLink: "http://o.martin.com" },
        { name: "James Wilson", portfolioLink: "http://j.wilson.com" },
        { name: "Sophia Johnson", portfolioLink: "http://s.johnson.com" }
    ];

    const portfolioContainer = document.querySelector("#portfolio-container");

    portfolios.forEach(function (portfolio) {
        const portfolioDiv = document.createElement("div");
        portfolioDiv.classList.add("portfolio-item", "col-span-2", "m-col-span-3", "l-col-span-3", "xl-col-span-3", "box");
        portfolioDiv.innerHTML = `<h3>${portfolio.name}</h3> <a href="${portfolio.portfolioLink}" target="_blank">${portfolio.name.split(' ')[0][0].toLowerCase()}.${portfolio.name.split(' ')[1].toLowerCase()}.com</a>`;

        portfolioContainer.appendChild(portfolioDiv);
        observer.observe(portfolioDiv);
    });

});
