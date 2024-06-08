gsap.registerPlugin(ScrollTrigger);
const $el = document.querySelectorAll('.fade-in-right');
gsap.set($el, {x: 100, opacity: 0});

$el.forEach(($element) => {
    gsap.to($element, {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.7,
        scrollTrigger: {
            trigger: $element,
            start: 'top 80%', // Adjust this value to start the animation earlier
            end: 'bottom bottom',
            toggleActions: 'play none none none' // Adjust this property to reset the animation on leaving the viewport
        }
    });
});
