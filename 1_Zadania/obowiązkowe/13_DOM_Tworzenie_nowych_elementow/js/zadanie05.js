document.addEventListener('DOMContentLoaded', function() {
    
    const list1btns = document.querySelectorAll('#list1 li .moveBtn');
    const list1 = document.querySelector('#list1');
    const list2btns = document.querySelectorAll('#list2 li .moveBtn');
    const list2 = document.querySelector('#list2');

    console.log(list1);

    list1btns.forEach(btn => {
        btn.addEventListener('click', function() {
            let li = this.parentNode;
            li.parentNode.removeChild(li);
            list2.appendChild(li);
        });
    });

    list2btns.forEach(btn => {
        btn.addEventListener('click', function() {
            let li = this.parentNode;
            li.parentNode.removeChild(li);
            list1.appendChild(li);
        });
    });

});