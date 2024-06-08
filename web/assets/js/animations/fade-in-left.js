gsap.registerPlugin(ScrollTrigger);
const $item = document.querySelectorAll('.fade-in-left');
gsap.set($item, {x: -100, opacity: 0});

$item.forEach(($element) => {
    gsap.to($element, {
        x: 0,
        opacity: 1,
        duration: 0.7,
        scrollTrigger: {
            trigger: $element,
            start: 'top 80%', // Adjust this value to start the animation earlier
            end: 'bottom bottom',
            toggleActions: 'play none none none' // Adjust this property to reset the animation on leaving the viewport
        }
    });
});
