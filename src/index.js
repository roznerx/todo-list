import { container } from "../src/modules/container.js"
import { header } from "../src/modules/header.js";
import { content } from "../src/modules/content.js"

document.body.appendChild(container);
container.appendChild(header);
container.appendChild(content);



/*let folder = document.createElement("folder");
    folder.className = "folder";
    folder.id = id;
    return folder;*/

/*
let testTodo1 = new Todo("Test1", "Testing", "Right now", "HIGH", "Pending", "Folder1");
testTodo1.changeStatus();
testTodo1.changePriority("MEDIUM");

let testTodo2 = new Todo("Test2", "Testing", "Right now", "HIGH", "Pending", "Folder1");
testTodo2.changeStatus();
testTodo2.changePriority("LOW");

let testFolder = new Folder("Test Folder")
testFolder.addItem(testTodo1);
testFolder.addItem(testTodo2);
testFolder.removeItem(testTodo1);

console.log(testFolder);*/