import { todoTable } from "./taskTable"

function sectionMaker(className, id) {
    let section = document.createElement("div");
    section.className = className;
    section.id = id;
    return section;
}

//Folder Section

let folderSection = sectionMaker("section", "folder-section");

//Tasks Section

let tasksSection = sectionMaker("section", "task-section");
tasksSection.appendChild(todoTable);

export { folderSection, tasksSection };