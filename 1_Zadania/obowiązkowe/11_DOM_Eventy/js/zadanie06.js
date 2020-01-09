document.addEventListener('DOMContentLoaded', function () {

    const box = document.querySelector('#box');
    const globalX = document.querySelector('#globalX');
    const globalY = document.querySelector('#globalY');
    const localX = document.querySelector('#localX');
    const localY = document.querySelector('#localY');

    box.addEventListener('mousemove', function(e) {
        globalX.innerHTML = e.pageX;
        globalY.innerHTML = e.pageY;
        localX.innerHTML = e.pageX - this.offsetLeft;
        localY.innerHTML = e.pageY - this.offsetTop;
    });

});