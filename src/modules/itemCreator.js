import { Folder } from "./folderCreator"
class Todo {
    constructor(title, description, deadline, priority, status, location) {
        this.title = title;
        this.description = description;
        this.deadline = deadline;
        this.priority = priority;
        this.status = status;
        this.location = location;
    }
    changeStatus() {
        this.status = "Complete";
    }
    changePriority(priority) {
        this.priority = priority;
    }
};

function visualItemCreator(x, y) {

    //VisualItem Row
    let visualItem = document.createElement("tr");
    visualItem.className = "visual-item-row";

    //VisualItem Task Data

    function dataMaker(y) {
        let tableData = document.createElement("td");
        tableData.className = "table-data";
        tableData.innerHTML = y.value;
        visualItem.appendChild(tableData);
        return tableData;
    }

    //¿QUÉ SERÁ Y? PENSALO -> ¿El nombre de la carpeta que creaste o del valor que le pasás al input field?

    x.appendChild(visualItem);
}


export { Todo, visualItemCreator };