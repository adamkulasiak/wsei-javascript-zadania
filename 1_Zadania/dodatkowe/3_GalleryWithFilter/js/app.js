document.addEventListener('DOMContentLoaded', function() {
    console.log('dziala');

    const imgs = document.querySelectorAll('#gallery img');
    const hideBtn = document.querySelector('#hideButton');
    const showBtn = document.querySelector('#showButton');
    const input = document.querySelector('#tagInput');

    console.log(imgs);
    console.log(hideBtn);
    console.log(showBtn);
    console.log(input);

    showBtn.addEventListener('click', function() {
        let txt = input.value;
        input.value = '';
        console.log(txt);

        for (let i = 0; i < imgs.length; i++) {
            if (imgs[i].dataset.tag.indexOf(txt) !== -1) {
                console.log(imgs[i].dataset.tag);
                imgs[i].classList.remove('invisible');
            }else {
                imgs[i].classList.add('invisible');
            }
        }
    });

    hideBtn.addEventListener('click', function() {
        let txt = input.value;
        input.value = '';
        console.log(txt);

        for (let i = 0; i < imgs.length; i++) {
            if (imgs[i].dataset.tag.indexOf(txt) !== -1) {
                console.log(imgs[i].dataset.tag);
                imgs[i].classList.add('invisible');
            } else {
                imgs[i].classList.remove('invisible');
            }
        }
    });
});

//problem jest taki ze domyslnie elementy ktorych nie chcemy nie maja klasy invisible i jak chcemy pokazac elementy o danej klasie to nic sie nie dzieje
