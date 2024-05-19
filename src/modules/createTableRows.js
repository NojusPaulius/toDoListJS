const createTableRow = () =>{

    let dataArray = JSON.parse(localStorage.getItem("dataArray"))
    let tableBody = document.querySelector("tbody")
    console.log("olwiawegawegae")

    for(let data of dataArray){
        let row = document.createElement("tr")
        row.classList.add("table__row")

        let firstCell = document.createElement("td")
        firstCell.classList.add("table__cell")
        let checkButton = document.createElement("button")
        checkButton.classList.add("table__check-button")
        let checkButtonImage = document.createElement("img")
        checkButtonImage.classList.add("table__button-img")
        checkButtonImage.src = "/src/images/unchecked.png"
        let firstCellText = document.createElement("span")
        firstCellText.textContent = data.task
        firstCellText.classList.add("table__row-text")
        checkButton.appendChild(checkButtonImage)
        firstCell.appendChild(checkButton)
        firstCell.appendChild(firstCellText)
        row.appendChild(firstCell)

        let secondCell = document.createElement("td")
        secondCell.classList.add("table__cell")
        secondCell.textContent = data.priority
        row.appendChild(secondCell)


        let thirdCell = document.createElement("td")
        thirdCell.textContent = data.dueDate       
        thirdCell.classList.add("table__cell")
        row.appendChild(thirdCell)


        let fourthCell = document.createElement("td")
        fourthCell.textContent = "Not completed"
        fourthCell.classList.add("table__cell")
        fourthCell.id = "task-status"
        row.appendChild(fourthCell)

        // let fifthCell = document.createElement("td")
        // fifthCell.classList.add("table__cell")
        // let deleteButton = document.createElement("button")
        // let deleteButtonImage = document.createElement("img")
        // deleteButtonImage.src = "images/images.png"
        // deleteButton.appendChild(deleteButtonImage)
        // fifthCell.appendChild(deleteButton)
        // row.appendChild(fifthCell)

        tableBody.appendChild(row)
    }
}

export default createTableRow