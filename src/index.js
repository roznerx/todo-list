import { container } from "../src/modules/container.js"
import { header } from "../src/modules/header.js"
import { content } from "../src/modules/content.js"
import { Folder , folderArray, selectedFolder , visualFolderCreator } from "./modules/folderCreator.js";
import { folderSection } from "../src/modules/sections.js"
import { todoTable } from "../src/modules/taskTable.js";
import { Todo , visualItemCreator } from "./modules/itemCreator.js";

document.body.appendChild(container);
container.appendChild(header);
container.appendChild(content);

todoTable.style.display = "none"

//Default Folder w/ Default ToDo
let defaultFolder = new Folder("Default");
defaultFolder.value = "Default";
folderArray.push(defaultFolder);
visualFolderCreator(folderSection, defaultFolder);

let defaultTodo = new Todo("The Odin Project", "Completing the curriculum and getting my first job as a dev", 
    "06-30-22", "High", "Pending", "Default");
visualItemCreator(todoTable, defaultTodo);


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