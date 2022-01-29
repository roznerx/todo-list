function sectionMaker(className, id) {
    let section = document.createElement("div");
    section.className = className;
    section.id = id;
    return section;
}

let folderSection = sectionMaker("section", "folder-section");







let tasksSection = sectionMaker("section", "task-section");

export { folderSection, tasksSection };