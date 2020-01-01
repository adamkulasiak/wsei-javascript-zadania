document.addEventListener('DOMContentLoaded', function() {
    
    const sendButton = document.querySelector('#addTaskButton');
    const taskList = document.querySelector('#taskList');
    console.log(sendButton);

    const delBtns = [];
    const completeBtns = [];
    sendButton.addEventListener('click', function(e) {
        let task = document.querySelector('#taskInput').value;
        if (task.length > 5 && task.length < 100) {
            const li = document.createElement('li');
            const h1 = document.createElement('h1');
            h1.innerText = task;
            const completeBtn = document.createElement('button');
            completeBtn.classList.add('btn');
            completeBtn.classList.add('btn-success');
            completeBtn.classList.add('mr-2');
            completeBtn.innerText = 'Complete';
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('btn');
            deleteBtn.classList.add('btn-warning');
            deleteBtn.innerText = 'Delete';
            li.appendChild(h1);
            li.appendChild(completeBtn);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            document.querySelector('#taskInput').value = '';

            //delete
            delBtns.push(deleteBtn);
            completeBtns.push(completeBtn);
            delBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    console.log(this.parentNode);
                    this.parentNode.parentNode.removeChild(this.parentNode);
                });
            });
            
            //complete
            completeBtns.push(completeBtn);
            completeBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    this.parentNode.classList.add('done');
                });
            });
        } else {
            alert('Zadanie musi miec od 6 do 99 znakow');
        }
    });

    const removeFinishedBtn = document.querySelector('#removeFinishedTasksButton');
    removeFinishedBtn.addEventListener('click', function() {
        console.log(completeBtns);
    });

});