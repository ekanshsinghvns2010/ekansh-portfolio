// =========================
// Mobile Menu
// =========================

function toggleMenu() {

    const menu =
        document.querySelector(".nav-links");

    menu.classList.toggle("show");

}


// =========================
// Close Mobile Menu
// When a link is clicked
// =========================

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                document
                    .querySelector(".nav-links")
                    .classList
                    .remove("show");

            }
        );

    });


// =========================
// Scroll Reveal Animation
// =========================

const revealElements =
    document.querySelectorAll(
        ".section-title, .about-card, .skill-card, .project-card, .contact-card"
    );


revealElements.forEach(
    element => {

        element.classList.add("reveal");

    }
);


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(
    element => {

        observer.observe(
            element
        );

    }
);