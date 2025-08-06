let createBtn = document.querySelector(".create-btn")  
let inputField = document.querySelector(".create-input")  
let noTask = document.querySelector(".no-task")  
let taskContainer = document.querySelector(".tasks")
createBtn.addEventListener("click", (e) => {
e.preventDefault()
if(inputField.value === ""){
alert("enter your task!")
}else{
createTask()
noTask.remove()
}
})
function createTask(){
taskContainer.insertAdjacentHTML("beforeend",
`<div class="task">
<input class="toggle" type="checkbox">

<p>${inputField.value}</p>  
<p class ="delete-task">Delete</p>  
</div>`  
)  
inputField.value = ""  
inputField.focus()  
}  taskContainer.addEventListener("click", (e) =>{
if(e.target.classList.contains("delete-task")){
e.target.closest(".task").remove()
}
if(e.target.classList.contains("toggle")){
e.target.closest(".task").classList.toggle("complete")
}
})
