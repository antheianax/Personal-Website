const scroll = document.getElementById('scroll');

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        scroll.style.display = 'block';
    } else {
        scroll.style.display = 'none';
    }
});

scroll.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
