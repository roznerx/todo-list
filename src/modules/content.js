import { folderSection, tasksSection } from "./sections.js";
import { newFolderButton , newTaskButton } from "./buttons.js";

let content = document.createElement("div");
content.className = "content";

content.appendChild(folderSection);

let sectionsBar = document.createElement("div");
sectionsBar.id = "sections-bar";
content.appendChild(sectionsBar);

content.appendChild(tasksSection);

export { content };