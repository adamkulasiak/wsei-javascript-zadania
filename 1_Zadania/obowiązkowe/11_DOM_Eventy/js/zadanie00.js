//zad0a

const parents = document.querySelectorAll('.parent');

parents.forEach(el => {
    el.addEventListener('mouseenter', function() {
        this.children[0].style.display = 'block';
    });
});

parents.forEach(el => {
    el.addEventListener('mouseleave', function() {
        (function hideChildrenElement(el) {
            el.children[0].style.display = 'none';
        })(this);
    });
});
