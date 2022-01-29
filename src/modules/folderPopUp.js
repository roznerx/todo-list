import { Folder } from "./folderCreator";

//Modal
let folderPopUp = document.createElement("div");
folderPopUp.id = "folder-pop-up";
folderPopUp.className = "modal";

//Form
let folderPopUpForm = document.createElement("form");
folderPopUpForm.className = "modal-content";
folderPopUp.appendChild(folderPopUpForm);

//Form Label
let folderPopUpLabel = document.createElement("h2");
folderPopUpLabel.id = "folder-pop-up-label";
folderPopUpLabel.for = "name";
folderPopUpLabel.innerHTML = "Enter Folder Name";
folderPopUpForm.appendChild(folderPopUpLabel);

//Form Field
let folderPopUpInput = document.createElement("input");
folderPopUpInput.type = "text";
folderPopUpInput.placeholder = "Enter Folder Name";
folderPopUpInput.name = "name"; 
//folderPopUpInput.attr = 'required', true;
folderPopUpForm.appendChild(folderPopUpInput);

//Form Create Button
let folderCreateButton = document.createElement("input");
folderCreateButton.id = "folder-pop-up-create-button";
folderCreateButton.innerHTML = "Create";

folderPopUpForm.append(folderCreateButton);




/*
let folderSelectedName = folderPopUpInput.innerHTML;

let testFolder = new Folder(folderSelectedName);*/


export { folderPopUp , /*folderSelectedName*/ } 