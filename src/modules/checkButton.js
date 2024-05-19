//use boolean to change beetween images, true == checked, false == unchecked

const checkButton = ()=>{
    
    let tablebody = document.querySelector("tbody")

    tablebody.addEventListener("click", (event)=>{
        let clickedElement = event.target
        
        if (clickedElement.classList.contains("table__button-img")) {
            let checkButton = clickedElement;

            let row = checkButton.closest(".table__row");
            let task = row.querySelector(".table__row-text")
            let status = row.querySelector("#task-status")
            let buttonStatus = row.getAttribute("data-button-status") === "true"  // place it somewhere so that every row gets one of these, code does some wonky shit,
            console.log(checkButton)
            console.log(buttonStatus)

            console.log("click")
            if (!buttonStatus) {
                // If the button is unchecked, change it to checked
                console.log("pirmas if")
                row.setAttribute("data-button-status", "true");
                checkButton.setAttribute("src", "/src/images/checked.png")
                task.style.textDecoration = "line-through"
                status.textContent = "Completed"
            } else {
                // If the button is already checked, change the button to unchecked
                console.log("antras if")
                row.setAttribute("data-button-status", "false");
                checkButton.setAttribute("src", "/src/images/unchecked.png")
                task.style.textDecoration = "none"
                status.textContent = "Not Completed"
            }
        }
    })
}

export default checkButton

