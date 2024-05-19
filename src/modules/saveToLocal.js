const saveToLocal = (e)=>{
     let saveButton = document.querySelector(".modal__saveButton")
    saveButton.addEventListener("click", ()=>{
        let task = document.querySelector(".textInput").value
        let priority = document.querySelector(".priorityInput").value
        let dueDate = document.querySelector(".dueDateInput").value
        let dataArray = JSON.parse(localStorage.getItem("dataArray")) || [];
        let toDoListObject = {
            task: task,
            priority: priority,
            dueDate: dueDate
         };
    
         if(toDoListObject.task !== "" && toDoListObject.priority !== "" && toDoListObject.dueDate !== ""){ //check if input fields are not empty
             dataArray.push(toDoListObject);
             localStorage.setItem("dataArray", JSON.stringify(dataArray))
             window.location.reload()
        } else{
            window.alert("Don't leave any fields empty!")
         }
    
    })
}


export default saveToLocal