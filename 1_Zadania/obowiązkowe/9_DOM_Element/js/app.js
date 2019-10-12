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

    console.log(getDatasInfo(links));

});
