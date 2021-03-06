import { todoTable } from "./taskTable"
import { Todo, visualItemCreator, visualItemRow } from "./itemCreator";

let folderArray = [];
let selectedFolder = undefined;
class Folder {
    constructor(name) {
        this.name = name;
        this.content = [];
    }
    addItem(item) {
        this.content.push(item);
    }
    removeItem(item) {
        for (let i = 0; i < this.content.length; i++) {
            if (this.content[i].name === item.name) {
                let index = this.content.indexOf(this.content[i].name);
                this.content.splice(index, 1);
            }
        }
    }
};

function visualFolderCreator(x, y) {

    //VisualFolder Container
    let visualFolder = document.createElement("div");
    visualFolder.className = "visual-folder";

    //VisualFolder Image
    let visualFolderImg = document.createElement("img");
    visualFolderImg.src = "./img/folder-icon.png";
    visualFolderImg.alt = "folder icon";
    visualFolderImg.className = "visual-folder-img";
    visualFolder.appendChild(visualFolderImg);

    //VisualFolder Text
    let visualFolderText = document.createElement("h5");
    visualFolderText.className = "visual-folder-text";
    visualFolderText.innerHTML = y.value;
    
    if (visualFolderText.innerHTML.length >= 16) {
        let croppedValue = visualFolderText.innerHTML.substring(0, 16);
        visualFolderText.innerHTML = croppedValue;
    }
    visualFolder.appendChild(visualFolderText);

    x.appendChild(visualFolder);

    visualFolder.onclick = (e) => {
        for (let i = 0; i < folderArray.length; i++) {
            if (folderArray[i].name.toUpperCase() == visualFolderText.innerHTML.toUpperCase()) {
                selectedFolder = folderArray[i];               
                document.querySelectorAll(".visual-item-row").forEach(element => element.remove()); //REMOVES EXISTING ELEMENTS
                selectedFolder.content.forEach(t => {
                    visualItemCreator(todoTable, t); //ADDS FOLDER ELEMENTS
                });
            }   
        }
    }
};

export { Folder , folderArray , selectedFolder , visualFolderCreator };