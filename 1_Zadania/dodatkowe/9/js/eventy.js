const links = document.querySelectorAll('a');
console.log(links);

links[0].addEventListener('click', function() {
    const content = this.parentNode.querySelector('.content');
    content.classList.remove('content');
});

links[1].addEventListener('mouseover', function() {
    const content = this.parentNode.querySelector('.content');
    content.classList.remove('content');
});

//w poleceniu nie bylo nic o mouseout dlatego nie robie chociaz przydalo by sie :)