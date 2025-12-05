const STORAGE_KEY = "localstorage";

const UL_LIST = document.getElementById ("task-list");
const TASK_INPUT = document.getElementById ("tasklist-input");
const SAVE_TASK = document.getElementById ("save-tasklist")


async function fetchtasks() {
// 1. Faz a requisição e espera a resposta
    const response = await fetch('http://localhost:8000/tasks');
// 2. Extrai os dados Json e espera o processamento
    const task = await response.json()

}

await fetch('http://localhost:8000/tasks'), {
    method: 'POST', 
    
}