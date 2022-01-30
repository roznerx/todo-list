import { Folder } from "../modules/folderCreator"
import { Todo } from "../modules/itemCreator"
import { folderPopUp , /*folderSelectedName*/ } from "../modules/folderPopUp"

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
    console.log("FOLDER TEST OK");
    document.body.appendChild(folderPopUp);
    folderPopUp.style.display = "block";
});


//New Task Button

let newTaskButton = buttonMaker("new-task-button");
newTaskButton.innerHTML = "New Task";

newTaskButton.addEventListener("click", () => {
    console.log("TASK TEST OK");
    console.log(folderContainer);
});

export { newFolderButton , newTaskButton };