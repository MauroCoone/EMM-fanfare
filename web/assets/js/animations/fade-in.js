gsap.registerPlugin(ScrollTrigger);
const $trigger = document.querySelectorAll('.fade-up');
gsap.set($trigger, {y: 100, opacity: 0, scale: 1.3});

$trigger.forEach(($element) => {
    gsap.to($element, {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.4,
        duration: 0.7,
        scrollTrigger: {
            trigger: $element,
            start: 'top 90%', // Adjust this value to start the animation earlier
            end: 'bottom bottom',
            toggleActions: 'play none none none' // Adjust this property to reset the animation on leaving the viewport
        }
    });
});
