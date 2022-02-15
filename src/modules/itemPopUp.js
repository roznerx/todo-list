import { Folder, folderArray, selectedFolder } from "./folderCreator";
import { Todo, visualItemCreator } from "./itemCreator";
import { todoTable } from "./taskTable";
import { tasksSection } from "./sections";

//Modal
let itemPopUp = document.createElement("div");
itemPopUp.id = "item-pop-up";
itemPopUp.className = "modal";

//Form
let itemPopUpForm = document.createElement("form");
//itemPopUpForm.className = "modal-content";
itemPopUpForm.id = "item-pop-up-form";
itemPopUp.appendChild(itemPopUpForm);

//Form Label
let itemPopUpLabel = document.createElement("h2");
itemPopUpLabel.id = "item-pop-up-label";
itemPopUpLabel.for = "name";
itemPopUpLabel.innerHTML = "Create Your New Task";
itemPopUpForm.appendChild(itemPopUpLabel);

//Field Container
let itemPopUpInputContainer = document.createElement("div");
itemPopUpInputContainer.id = "item-pop-up-input-container";
itemPopUpForm.appendChild(itemPopUpInputContainer);

//Form Fields
function inputFieldMaker(id, placeholder) {
    let itemPopUpInput = document.createElement("input");
    itemPopUpInput.className = "item-input-field";
    itemPopUpInput.type = "text";
    itemPopUpInput.placeholder = placeholder;
    itemPopUpInput.id = id;
    itemPopUpInputContainer.appendChild(itemPopUpInput);
    return itemPopUpInput;
}

let titleInputField = inputFieldMaker("title-input-field", "Enter Title");
let descriptionInputFiled = inputFieldMaker("description-input-field", "Enter Description");
let deadlineInputField = inputFieldMaker("deadline-input-field", "Enter Deadline");

//let statusInputField = inputFieldMaker("status-input-field", "Enter Status");
//let locationInputField = inputFieldMaker("location-input-field", "Select Location");

//PRIORITY

let priorityInputField = document.createElement("div");
priorityInputField.className = "item-input-field";
priorityInputField.id = "priority-input-field";
itemPopUpInputContainer.appendChild(priorityInputField);

let selectedPriority = undefined;
let prioritiesArr = [];

function priorityMaker(id, innerHTML) {
    let priorityType = document.createElement("div");
    priorityType.className = "priority-selection";
    priorityType.id = id;
    priorityType.innerHTML = innerHTML;
    priorityInputField.appendChild(priorityType);
    prioritiesArr.push(priorityType);
    /*
    priorityType.onclick = (e) => {
        selectedPriority = priorityType;
        priorityType.style.backgroundColor = "#222323";
        priorityType.style.color = "#f0f6f0";
        priorityType.style.padding = "1%, 0, 2%, 2%";
        for (let i = 0; i <= prioritiesArr.length; i++) {
            if (prioritiesArr[i] != selectedPriority) {
                prioritiesArr[i].style.backgroundColor = "#f0f6f0";
                prioritiesArr[i].style.color = "#222323";
                prioritiesArr[i].style.padding = "0";
            }
        }
    }
    */
};

let lowPriority = priorityMaker("low-priority", "Low Priority");
let midPriority = priorityMaker("mid-priority", "Mid Priority");
let highPriority = priorityMaker("high-priority", "High Priority");

console.log(prioritiesArr[1]);



/*
for (let i = 0; i <= prioritiesArr.length; i++) {
    lowPriority.onclick = () => {
        //selectedPriority = prioritiesArr[i];
        lowPriority.style.backgroundColor = "#222323";
        lowPriority.style.color = "#f0f6f0";
        lowPriority.style.padding = "1%, 0, 2%, 2%";
    }
}*/

/*
priorityType.onclick = (e) => {
    selectedPriority = priorityType;
    priorityType.style.backgroundColor = "#222323";
    priorityType.style.color = "#f0f6f0";
    priorityType.style.padding = "1%, 0, 2%, 2%";
    for (let i = 0; i <= prioritiesArr.length; i++) {
        if (prioritiesArr[i] != selectedPriority) {
            prioritiesArr[i].style.backgroundColor = "#f0f6f0";
            prioritiesArr[i].style.color = "#222323";
            prioritiesArr[i].style.padding = "0";
        }
    }
}
*/


//Task Create Button
let itemCreateButton = document.createElement("h4");
itemCreateButton.id = "item-pop-up-create-button";
itemCreateButton.innerHTML = "Create";
itemPopUpForm.append(itemCreateButton);
itemCreateButton.addEventListener("click", () => {
    let todo = new Todo(titleInputField.value, descriptionInputFiled.value, deadlineInputField.value, 
        priorityInputField.value, statusInputField.value, locationInputField.value);
    for (let i = 0; i < folderArray.length; i++) {
        if (folderArray[i].name.toUpperCase() == todo.location.toUpperCase()) {
            folderArray[i].addItem(todo);

            //visualItemCreator(todoTable, todo);

            itemPopUp.style.display = "none";
            itemPopUpLabel.innerHTML = "Create Your New Task";
            itemPopUpLabel.style.fontSize = "30px";
            itemPopUpLabel.style.alignItems = "center";
            itemPopUpLabel.style.marginLeft =  "135px";
            itemPopUpLabel.style.marginRight =  "45px";
            itemPopUpLabel.style.paddingTop = "none";
            titleInputField.value = "";
            descriptionInputFiled.value = "";
            deadlineInputField.value = "";
            priorityInputField.value = "";
            statusInputField.value = "";
            locationInputField.value = "";
        } else {
            itemPopUpLabel.innerHTML = "Please Select An Existing Folder!";      
            itemPopUpLabel.style.fontSize = "25px";
            itemPopUpLabel.style.marginLeft =  "50px";
            itemPopUpLabel.style.marginTop =  "30px";
        }
    };    
});



export { itemPopUp };