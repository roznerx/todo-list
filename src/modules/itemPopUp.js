import { Folder, folderArray, selectedFolder } from "./folderCreator";
import { Todo, visualItemCreator } from "./itemCreator";
import { todoTable } from "./taskTable";
import { tasksSection } from "./sections";
import { toBlack , toWhite } from "./styleFunctions";

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

//TITLE, DESCRIPTION AND LOCATION
let titleInputField = inputFieldMaker("title-input-field", "Enter Title");
let descriptionInputFiled = inputFieldMaker("description-input-field", "Enter Description");
let deadlineInputField = inputFieldMaker("deadline-input-field", "Enter Deadline");

//PRIORITY -> Maybe I can put all this inside a module...
let priorityInputField = document.createElement("div");
priorityInputField.className = "item-input-field";
priorityInputField.id = "priority-input-field";
itemPopUpInputContainer.appendChild(priorityInputField);

function priorityMaker(id, innerHTML) {
    let priorityType = document.createElement("div");
    priorityType.className = "priority-selection";
    priorityType.id = id;
    priorityType.innerHTML = innerHTML;
    priorityInputField.appendChild(priorityType);
    return priorityType;
};

let lowPriority = priorityMaker("low-priority", "Low Priority");
let midPriority = priorityMaker("mid-priority", "Mid Priority");
let highPriority = priorityMaker("high-priority", "High Priority");

lowPriority.addEventListener("click", () => {
    if (!lowPriority.id.includes("black")) {
        toBlack(lowPriority);
        lowPriority.id = "low-priority-black";
        priorityInputField.value = "Low";
        toWhite(midPriority);
        midPriority.id = "mid-priority";
        toWhite(highPriority);
        highPriority.id = "high-priority";
    }
});

midPriority.addEventListener("click", () => {
    if (!midPriority.id.includes("black")) {
        toBlack(midPriority);
        midPriority.id = "mid-priority-black";
        priorityInputField.value = "Medium";
        toWhite(lowPriority);
        lowPriority.id = "low-priority";
        toWhite(highPriority);
        highPriority.id = "high-priority";
    }
});

highPriority.addEventListener("click", () => {
    if (!highPriority.id.includes("black")) {
        toBlack(highPriority);
        highPriority.id = "high-priority-black";
        priorityInputField.value = "High";
        toWhite(lowPriority);
        lowPriority.id = "low-priority";
        toWhite(midPriority);
        midPriority.id = "mid-priority";
    }
});

//STATUS -> Maybe I can put all this inside a module...

let statusInputField = document.createElement("div");
statusInputField.className = "item-input-field";
statusInputField.id = "status-input-field";
itemPopUpInputContainer.appendChild(statusInputField);

function statusMaker(id, innerHTML) {
    let statusOption = document.createElement("div");
    statusOption.className = "status-selection";
    statusOption.id = id;
    statusOption.innerHTML = innerHTML;
    statusInputField.appendChild(statusOption);
    return statusOption;
};

let statusPending = statusMaker("status-pending", "Pending");
let statusCompleted = statusMaker("status-completed", "Completed");

statusPending.addEventListener("click", () => {
    if (!statusPending.id.includes("black")) {
        toBlack(statusPending);
        statusPending.id = "status-pending-black";
        statusInputField.value = "Pending";
        toWhite(statusCompleted);
        statusCompleted.id = "status-completed";
    }
});

statusCompleted.addEventListener("click", () => {
    if (!statusCompleted.id.includes("black")) {
        toBlack(statusCompleted);
        statusCompleted.id = "status-pending-black";
        statusInputField.value = "Completed";
        toWhite(statusPending);
        statusPending.id = "status-pending";
    }
});

//LOCATION

let locationInputField = inputFieldMaker("location-input-field", "Select An Existing Folder");

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
            
            visualItemCreator(todoTable, todo); //Adding this seems to help rendering when already on folder...
            
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
            //priorityInputField.value = "";
            //statusInputField.value = "";
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