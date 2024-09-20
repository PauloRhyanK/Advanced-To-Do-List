// Seleção de elementos
const newtask = document.getElementById("new-task");
const posttask = document.getElementById("add-task");
const tasklist = document.querySelector(".task-list");
const filtertask = document.getElementById(".")

// *****
// Funções
// *****

// Criando task
posttask.addEventListener("click", () => {
    let taskText = newtask.value.trim();
    if (taskText) {
        const listItem = document.createElement("li"); // Criando item de lista

        // Criando elementos HTML da task
        listItem.classList.add("task")
        const titletask = document.createElement("p");

        const taskContent = document.createElement("div");
        taskContent.classList.add("taskContent")

        titletask.classList.add("title-task");
        titletask.textContent = taskText;

        // Titulo da task colocado em uma div separada, para melhor manipulação na editação
        taskContent.appendChild(titletask);
        

        // Criação dos botões
        const bconcluded = document.createElement("button");
        bconcluded.classList.add("concluded");
        bconcluded.innerHTML = '<i class="fa-solid fa-check concluded"></i>';
        
        const bedit = document.createElement("button");
        bedit.classList.add("edit-btn");
        bedit.innerHTML = '<i class="fa-solid fa-pen edit-btn">';
        
        const bremove = document.createElement("button");
        bremove.classList.add("remove-btn")
        bremove.innerHTML = '<i class="fa-solid fa-trash remove-btn">';


        listItem.appendChild(taskContent);
        listItem.appendChild(bconcluded);
        listItem.appendChild(bedit);
        listItem.appendChild(bremove);

        
        tasklist.appendChild(listItem); // Adicionando a nova tarefa na lista

        // Limpar o campo de input
        newtask.value = "";
    } else {
        alert("Insira uma tarefa!");
    }
});



//Identificando botão clicado na lista de tasks
tasklist.addEventListener("click", (eventBtn) => {

    //  Identificando em qual task o botao foi clicado, e inserindo na variavel task   
    const task = eventBtn.target.closest(".task"); 


    if(task){
        // Remover Task
        if (eventBtn.target && eventBtn.target.classList.contains("remove-btn")){
            task.remove();
        
        }

        // Editando Task
        if (eventBtn.target && (eventBtn.target.classList.contains("edit-btn"))){

            // Criando estrtura de edit dentro do content do titulo
            const titleTask = document.querySelector(".title-task");
            const taskContent = document.querySelector(".taskContent")

            const titleEdit = document.createElement("p")
            titleEdit.classList.add("titleEdit");
            titleEdit.innerHTML = "Editando tarefa..."

            const inputEdit = document.createElement("input");
            inputEdit.type = "text";
            inputEdit.classList.add("inputEdit");
            inputEdit.value = titleTask.textContent.trim();

            const btnEdit = document.createElement("button");
            btnEdit.innerHTML = '<p confirm-btn"> Salvar </p>';
            btnEdit.classList.add("confirm-btn")

            // Sumindo com os outros botões para edição
            const concluded = task.querySelector(".concluded");
            const edit = task.querySelector(".edit-btn");
            const remove = task.querySelector(".remove-btn");

            if  (concluded) {
                concluded.style.display = "none";
            }
            if (edit){
                edit.style.display = "none";
            }
            if (remove) {
                remove.style.display = "none";
            }

            taskContent.appendChild(titleEdit);
            taskContent.replaceChild(inputEdit, titleTask);
            taskContent.appendChild(inputEdit);
            taskContent.appendChild(btnEdit);


            // Salvando novo titulo

            btnEdit.addEventListener("click", () => {
               const newTitle = inputEdit.value.trim();
               if (newTitle) {
                const newTitleTask = document.createElement("p");
                newTitleTask.textContent = newTitle;
                newTitleTask.classList.add("title-task");

                if  (concluded) {
                    concluded.style.display = "";
                }
                if (edit){
                    edit.style.display = "";
                }
                if (remove) {
                    remove.style.display = "";
                }

                taskContent.replaceChild(newTitleTask,  inputEdit);
                titleEdit.remove();
                btnEdit.remove();

                
               } else {
                alert("Insira uma tarefa");
               }
 

            })

        }

        //Concluido tarefa
        if (eventBtn.target && eventBtn.target.classList.contains("concluded")){
            const titleTask = task.querySelector(".title-task")
            const btnConcluded = task.querySelector(".concluded")
            const btnEdit = task.querySelector(".edit-btn");
            const btnRemove = task.querySelector(".remove-btn")

            titleTask.classList.toggle("completed-title");
            task.classList.toggle("completed-task");
            btnConcluded.classList.toggle("btnCompleted");

            btnEdit.classList.toggle("sumir");
            btnRemove.classList.toggle("sumir");

            tasklist.appendChild(task);
        }

    }
})


