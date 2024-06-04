var observer = lozad('.lozad', {
    enableAutoReload: true,
    load: function(el) {
        el.src = el.getAttribute("data-src");
    }
});

observer.observe();

var observer2 = lozad('.lozad2', {
    enableAutoReload: true,
    load: function(el) {
        el.style.backgroundImage = `url(${el.dataset.backgroundImage})`;
    }
});

observer2.observe();

