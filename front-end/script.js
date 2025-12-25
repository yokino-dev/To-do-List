function savetask()
{
    let task = document.getElementById('tasklist-input').value
    localStorage.setItem('usertask', task);
    showtask("Tarefa salva com sucesso")
}

function newpage()
{
    window.open("https://github.com/yokino-dev", '_blank');
}

function showtask(show_task)
{
    let showtask = document.getElementById("showtask")
    showtask.textContent = show_task
}
window.onload = function() {
    let storage_task = localStorage.getItem("usertask");
    if (storage_task) {
        showtask(`${storage_task} foi salvo`);
    } else {
        showtask("Digite uma tarefa e aperte o botão.")
    }
}

function taskmessage(message) 
{
    const taskmessage = document.getElementById("addtask");
    taskmessage.textContent = message;
}
