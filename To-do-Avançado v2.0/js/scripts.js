// Seleção de elementos
const newtask = document.getElementById("new-task");
const posttask = document.getElementById("add-task");
const tasklist = document.querySelector(".task-list");
const filtertask = document.getElementById(".")

// *****
// Funções
// *****

// Criando task

// posttask.addEventListener("click", () => {

//     let text = newtask.value.trim();
//     if (text){
//         const divtask = document.createElement("div");
//         divtask.classList.add("task")
//         const titletask = document.createElement("p");
        
//         titletask.classList.add("title-task");
//         titletask.textContent = text;

//         const bconcluded = document.createElement("button");
//         bconcluded.classList.add("concluded");
//         bconcluded.innerHTML = '<i class="fa-solid fa-check"></i>';

//         const bedit = document.createElement("button");
//         bedit.classList.add("edit-btn");
//         bedit.innerHTML = '<i class="fa-solid fa-pen">';

//         const bremove = document.createElement("button");
//         bremove.classList.add("remove-btn")
//         bremove.innerHTML = '<i class="fa-solid fa-trash">'


//         divtask.appendChild(titletask);
//         divtask.appendChild(bconcluded);
//         divtask.appendChild(bedit);
//         divtask.appendChild(bremove);

//         tasklist.insertBefore(divtask, tasklist.firstChild);

//         newtask.value = "";
//     } else {
//         alert("Campo vazio, insira sua tarefa");
//     }

  
// })


posttask.addEventListener("click", () => {
    let taskText = newtask.value.trim();
    if (taskText) {
        const listItem = document.createElement("li"); // Criando item de lista

        listItem.classList.add("task")
        const titletask = document.createElement("p");

        titletask.classList.add("title-task");
        titletask.textContent = taskText;
        
        const bconcluded = document.createElement("button");
        bconcluded.classList.add("concluded");
        bconcluded.innerHTML = '<i class="fa-solid fa-check"></i>';
        
        const bedit = document.createElement("button");
        bedit.classList.add("edit-btn");
        bedit.innerHTML = '<i class="fa-solid fa-pen">';
        
        const bremove = document.createElement("button");
        bremove.classList.add("remove-btn")
        bremove.innerHTML = '<i class="fa-solid fa-trash">'

        listItem.appendChild(titletask);
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



//Identificando botão clicado na lista de task
tasklist.addEventListener("click", (eventBtn) => {
    const task = eventBtn.target.closest(".task");
    if(task){
        if (eventBtn.target && eventBtn.target.classList.contains("remove-btn")){
            task.remove();
        
        }
        if (eventBtn.target && eventBtn.target.classList.contains("edit-btn")){
            const titleTask = document.querySelector(".title-task");

            const titleEdit = document.createElement("p")
            titleEdit.contains = "Editando tarefa..."

            const inputEdit = document.createElement("input");
            inputEdit.type = "text";
            inputEdit.value = titleTask.textContent;

            const btnEdit = document.createElement("button");
            inputEdit.innerHTML = '<i class="fa-solid fa-check"></i>';
            inputEdit.classList.add("confirm-btn")

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

            task.replaceChild(inputEdit, titleTask);
            task.appendChild(inputEdit);
            task.appendChild(btnEdit);

            btnEdit.addEventListener("click", () => {
               const newTitle = inputEdit.value.trim();
               if (newTitle) {
                const titleTask = document.createElement("p");
                titleTask.textContent = newTitle;
                titleTask.classList.add("title-task");

                if  (concluded) {
                    concluded.style.display = "";
                }
                if (edit){
                    edit.style.display = "";
                }
                if (remove) {
                    remove.style.display = "";
                }

                task.replaceChild(titleTask,  inputEdit);
                titleEdit.remove();
                btnEdit.remove();
               } else {
                alert("Insira uma tarefa");
               }
 

            })

        }

    }else {
        alert("Onde ta esse botão? Tarefa não encontrada");
    }
})


//Removendo task
// tasklist.addEventListener("click", (event) => {

//     if(event.target && event.target.classList.contains("remove-btn")){
//         let task = event.target.closest(".task");
//         if (task) {
//             task.remove();
//         } 
//     }


// })

//Editando task
// tasklist.addEventListener("click", (event) => {
//     if(event.target && event.target.classList.contains("edit-btn")){
//         const task = event.target.closest(".task")
//         const titletask = task.querySelector(".title-task")
        

//         const input = document.createElement("input");
//         input.type = "text";
//         input.value = titletask.textContent.trim();

//         const confirm = document.createElement("button");
//         confirm.innerHTML = '<i class="fa-solid fa-check"></i>';
//         confirm.classList.add("confirm-btn");


//         const concluded = task.querySelector(".concluded")
//         const remove = task.querySelector(".remove-btn")
//         const edit = task.querySelector(".edit-btn")

//         if(concluded){
//             concluded.style.display = "none";
//         } 
//         if(remove){
//             remove.style.display = "none";
//         }
//         if(edit){
//             edit.style.display = "none";
//         }
    
//         task.replaceChild(input, titletask);
//         task.appendChild(confirm);

//         confirm.addEventListener("click", () =>{
//             const newTitle = input.value.trim();
//             if (newTitle){
//                 const newTitleE = document.createElement("p");
//                 newTitleE.classList.add("title-task");
//                 newTitleE.textContent = newTitle;
                
//                 if (concluded) {
//                     concluded.style.display = "";
//                 }
//                 if (remove) {
//                     remove.style.display = "";
//                 }
//                 if (edit) {
//                     edit.style.display = "";
//                 }

//                 task.replaceChild(newTitleE, input);
//                 confirm.remove();
                
//             }
//         })
//     }

                

// })

// Concluindo task
// tasklist.addEventListener("click", (event) =>{
//     if (event.target && event.target.classList.contains("concluded")){
//         const task = event.target.closest(".task");
//         const titletask = task.querySelector(".title-task")
//         const btnTask = task.querySelectorAll("button")

//         if (task.classList.contains("completed-task")){
//             task.classList.remove("completed-task")
//             titletask.classList.remove("completed-title")

//             btnTask.forEach(button => {
//                 button.classList.remove("button-completed");
//             });


//         } else {
//             task.classList.add("completed-task");
//             titletask.classList.add("completed-title")

//             btnTask.forEach(button => {
//                 button.classList.add("button-completed");
//             });
            

//             tasklist.appendChild(task);
//         }
//     }

// })