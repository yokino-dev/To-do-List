const STORAGE_KEY = "localstorage";

const UL_LIST = document.getElementById ("task-list");
const TASK_INPUT = document.getElementById ("tasklist-input");
const SAVE_TASK = document.getElementById ("save-tasklist")

function showTasks(tasks){
    UL_LIST.innerHTML = '';
}

async function fetchtasks_and_showTasks() {
// 1. Faz a requisição e espera a resposta
    const response = await fetch('http://localhost:8000/tasks')
    
// 2. Tratamento de Erro ao Servidor   
    if (!response.ok) {
        throw new Error("Ocorreu um Erro HTTP \n Status do Erro: ${response.status}");
    }
// 3. Extrai os dados Json e espera o processamento
    const task = await response.json()

// 4. Exibe no Site as tarefas
    showTasks(tasks);
}