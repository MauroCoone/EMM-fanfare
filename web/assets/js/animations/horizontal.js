gsap.registerPlugin(ScrollTrigger);
const $triggers = document.querySelectorAll("[data-animation='horizontal-scroll']");
const $aside = document.querySelector(".header__aside");

$triggers.forEach(($trig) => {
    const $element = $trig.querySelector(".horizonal__scroll__list");

    gsap.to($element, {
        x: (_, $el) => ($el.scrollWidth - window.innerWidth) - window.innerWidth * 2.6,
        ease: "power2.inOut", 
        scrollTrigger: {
            trigger: $trig,
            start: "top 30%", 
            end: "bottom 30%", 
            scrub: 1, 
            pin: true,
            pinSpacing: true,
            markers: false,
        },
    });
});


