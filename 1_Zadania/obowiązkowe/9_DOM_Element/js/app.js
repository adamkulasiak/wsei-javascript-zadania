document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */


    // zad00
    function getDatasInfo(elements) {
        let newArr = [];
        for(let i = 0; i < elements.length; i++) {
            newArr.push(elements[i].dataset);
        }

        return newArr;
    }

    // console.log(getDatasInfo(links));


    //zad 01

    // console.log(homeElement);

    for(let i = 0; i < childElements.length; i++) {
        // console.log(childElements[i]);
    }

    //console.log(banner);

    for(let i = 0; i < blocks.length; i++) {
        // console.log(blocks[i].innerHTML);
    }

    for(let i = 0; i < links.length; i++) {
        // console.log(links[i]);
    }


    //zad02

    for(let i = 0; i < blocks.length; i++) {
        // console.log(`${i} blocks innerHTML: ${blocks[i].innerHTML}`);
        // console.log(`${i} blocks outerHTML: ${blocks[i].outerHTML}`);
    }

    for(let i = 0; i < blocks.length; i++) {
        // blocks[i].innerHTML = 'Nowa wartość diva o klasie blocks';
    }

    for(let i = 0; i < blocks.length; i++) {
        // console.log(`${i} blocks innerHTML: ${blocks[i].innerHTML}`);
    }

    // innerHTML wyswietla strukture dom wewnatrz elementu a outerHTML wyswietla wraz z elementem
    


    //zad03

    const mainFooter = document.querySelector('#mainFooter');
    console.log(mainFooter);

    function getId(element) {
        const id = element.getAttribute('id');
        console.log(id);
        return id;
    }

    getId(mainFooter);

});
