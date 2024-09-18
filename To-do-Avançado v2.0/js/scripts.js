// Seleção de elementos
const newtask = document.getElementById("new-task");
const posttask = document.getElementById("add-task");
const tasklist = document.querySelector(".task-list");

// *****
// Funções
// *****

// Criando task
posttask.addEventListener("click", () => {

    let text = newtask.value.trim();
    if (text){
        const task = `
                    <div class="task">
                        <p class="title-task">${text}</p><br>
                        <button class="concluded"><i class="fa-solid fa-check"></i></button>
                        <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
                        <button class="remove-btn"><i class="fa-solid fa-trash"></i></button>
                    </div>      
        `;

        tasklist.innerHTML += (task);
        newtask.value = "";
    } else {
        alert("Campo vazio, insira sua tarefa");
    }

  
})


//Removendo task
tasklist.addEventListener("click", (event) => {

    if(event.target && event.target.classList.contains("remove-btn")){
        let task = event.target.closest(".task");
        if (task) {
            task.remove();
        } 
    }


})

//Editando task
tasklist.addEventListener("click", (event) => {
    if(event.target && event.target.classList.contains("edit-btn")){
        const task = event.target.closest(".task")
        const titletask = task.querySelector(".title-task")
        

        const input = document.createElement("input");
        input.type = "text";
        input.value = titletask.textContent.trim();

        const confirm = document.createElement("button");
        confirm.innerHTML = '<i class="fa-solid fa-check"></i>';
        confirm.classList.add("confirm-btn");


        const concluded = task.querySelector(".concluded")
        const remove = task.querySelector(".remove-btn")
        const edit = task.querySelector(".edit-btn")

        if(concluded){
            concluded.style.display = "none";
        } 
        if(remove){
            remove.style.display = "none";
        }
        if(edit){
            edit.style.display = "none";
        }
    
        task.replaceChild(input, titletask);
        task.appendChild(confirm);

        confirm.addEventListener("click", () =>{
            const newTitle = input.value.trim();
            if (newTitle){
                const newTitleE = document.createElement("p");
                newTitleE.classList.add("title-task");
                newTitleE.textContent = newTitle;
                
                if (concluded) {
                    concluded.style.display = "";
                }
                if (remove) {
                    remove.style.display = "";
                }
                if (edit) {
                    edit.style.display = "";
                }

                task.replaceChild(newTitleE, input);
                confirm.remove();
                
            }
        })
    }

                

})

