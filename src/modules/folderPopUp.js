import { Folder, folderArray , visualFolderCreator } from "./folderCreator";
import { folderSection } from "./sections";

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
folderPopUpForm.appendChild(folderPopUpInput);

//Form Create Button
let folderCreateButton = document.createElement("h4");
folderCreateButton.id = "folder-pop-up-create-button";
folderCreateButton.innerHTML = "Create";
function superFolder() {

    let folder = new Folder(folderPopUpInput.value);
    console.log(folder);

    folderArray.push(folder);
    console.log(folderArray);
    console.log(folderArray.length);

    visualFolderCreator(folderSection, folderPopUpInput);

    folderPopUp.style.display = "none";
    folderPopUpInput.value = "";
}

folderCreateButton.onclick = (e) => {
    if (folderPopUpInput.value == "") {
        folderPopUpLabel.innerHTML = "This Field Cannot Be Empty! Please Name Your Folder!";
        folderPopUpLabel.style.fontSize = "20px";
        folderPopUpLabel.style.textAlign = "center";
        folderPopUpLabel.style.marginLeft =  "35px";
    } else {
        superFolder();
        folderPopUpLabel.innerHTML = "Enter Folder Name";
        folderPopUpLabel.style.fontSize = "30px";
        folderPopUpLabel.style.textAlign = "none";
        folderPopUpLabel.style.marginLeft = "45px";
    }
}

folderPopUpForm.append(folderCreateButton);

export { folderPopUp , /*folderSelectedName*/ } 