import { Folder } from "../modules/folderCreator"
import { Todo } from "../modules/itemCreator"
import { folderPopUp , /*folderSelectedName*/ } from "../modules/folderPopUp"
import { itemPopUp } from "../modules/itemPopUp"

function buttonMaker(id) {
    let button = document.createElement("button");
    button.className = "headerButton";
    button.id = id;
    return button;
}

//New Folder Button
let newFolderButton = buttonMaker("new-folder-button");
newFolderButton.innerHTML = "New Folder";
newFolderButton.addEventListener("click", () => {
    document.body.appendChild(folderPopUp);
    folderPopUp.style.display = "block";
});

//New Task Button
let newTaskButton = buttonMaker("new-task-button");
newTaskButton.innerHTML = "New Task";
newTaskButton.addEventListener("click", () => {
    document.body.appendChild(itemPopUp);
    itemPopUp.style.display = "block";
});

export { newFolderButton , newTaskButton };