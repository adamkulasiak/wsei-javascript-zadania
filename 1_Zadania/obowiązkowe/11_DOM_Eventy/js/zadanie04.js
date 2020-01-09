document.addEventListener('DOMContentLoaded', function() {

    const btns = document.querySelectorAll('button');
    const counter = document.querySelector('.counter');

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            let old = counter.innerHTML;
            old++;
            counter.innerHTML = old;
        });
    });

});