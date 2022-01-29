import { newFolderButton , newTaskButton } from "../modules/buttons"

let header = document.createElement("div");
header.className = "header";

let headerTitle = document.createElement("h1");
headerTitle.className = "header-title";
headerTitle.innerHTML = "TODO LIST";
header.appendChild(headerTitle);

let headerBar = document.createElement("div");
headerBar.id = "bar";
header.appendChild(headerBar);

let headerButtons = document.createElement("div");
headerButtons.id = "headerButtons";
headerButtons.appendChild(newFolderButton);
headerButtons.appendChild(newTaskButton);
header.appendChild(headerButtons);

export { header };