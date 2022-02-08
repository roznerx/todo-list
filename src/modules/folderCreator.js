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

let folderArray = [];

function visualFolderCreator(x, y) {

    let visualFolder = document.createElement("div");
    visualFolder.className = "visual-folder";

    let visualFolderImg = document.createElement("img");
    visualFolderImg.src = "./img/folder-icon.png";
    visualFolderImg.alt = "folder icon";
    visualFolderImg.id = "visual-folder-img";
    visualFolder.appendChild(visualFolderImg);
    console.log("CHILD APPENDED");

    let visualFolderText = document.createElement("h5");
    visualFolderText.id = "visual-folder-text";
    visualFolderText.innerHTML = y.value;
    
    if (visualFolderText.innerHTML.length >= 16) {
        let croppedValue = visualFolderText.innerHTML.substring(0, 16);
        visualFolderText.innerHTML = croppedValue;
    }

    visualFolder.appendChild(visualFolderText);

    x.appendChild(visualFolder);
};

export { Folder , folderArray , visualFolderCreator };