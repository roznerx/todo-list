import { Folder, folderArray } from "./folderCreator";
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
let priorityInputField = inputFieldMaker("priority-input-field", "Enter Priority");
let statusInputField = inputFieldMaker("status-input-field", "Enter Status");
let locationInputField = inputFieldMaker("location-input-field", "Select Location");

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
            visualItemCreator(todoTable, todo);
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