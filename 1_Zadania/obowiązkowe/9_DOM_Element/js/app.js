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
    console.log(homeElement);

    for(let i = 0; i < childElements.length; i++) {
        console.log(childElements[i]);
    }

    console.log(banner);

    for(let i = 0; i < blocks.length; i++) {
        console.log(blocks[i]);
    }

    for(let i = 0; i < links.length; i++) {
        console.log(links[i]);
    }

});
