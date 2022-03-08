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

//Default Folder
let defaultFolder = new Folder("Default");
defaultFolder.value = "Default";
folderArray.push(defaultFolder);
visualFolderCreator(folderSection, defaultFolder);