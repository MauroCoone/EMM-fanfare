gsap.registerPlugin(ScrollTrigger);
    const $logo = document.querySelector('.loading__screen__logo');
    const $loading = document.querySelector('.loading__screen');
    const timeline = gsap.timeline();
    gsap.set($logo, {y: 0});
    timeline.to($logo, {
        delay: 0.8,
        y: 0,
    })
    .to($logo, {
        y: 0,
        delay: 1,
    })
    .to($loading, {
        left: '100%',
    });
    
