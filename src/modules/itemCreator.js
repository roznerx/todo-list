import { selectedFolder } from "./folderCreator"
import { edit } from "./itemPopUp"
class Todo {
    constructor(title, description, deadline, priority, status, location) {
        this.title = title;
        this.description = description;
        this.deadline = deadline;
        this.priority = priority;
        this.status = status;
        this.location = location;
    }
    changeStatus(status) {
        this.status = status;
    }
    changePriority(priority) {
        this.priority = priority;
    }
};

function visualItemCreator(x, y) {
    //VisualItem Row
    let visualItemRow = document.createElement("tr");
    visualItemRow.className = "visual-item-row";
    visualItemRow.id = y.title;
    //VisualItem - Title
    let titleTableData = document.createElement("td");
    titleTableData.className = "table-data";
    titleTableData.innerHTML = y.title;
    visualItemRow.appendChild(titleTableData);
    //VisualItem - Description
    let descriptionTableData = document.createElement("td");
    descriptionTableData.className = "table-data";
    descriptionTableData.innerHTML = y.description;
    visualItemRow.appendChild(descriptionTableData);
    //VisualItem - Deadline
    let deadlineTableData = document.createElement("td");
    deadlineTableData.className = "table-data";
    deadlineTableData.innerHTML = y.deadline;
    visualItemRow.appendChild(deadlineTableData);
    //VisualItem - Priority
    let priorityTableData = document.createElement("td");
    priorityTableData.className = "table-data";
    priorityTableData.innerHTML = y.priority;
    visualItemRow.appendChild(priorityTableData);
    //VisualItem - Status
    let statusTableData = document.createElement("td");
    statusTableData.className = "table-data";
    statusTableData.innerHTML = y.status;
    visualItemRow.appendChild(statusTableData);
    //VisualItem - Location
    let locationTableData = document.createElement("td");
    locationTableData.className = "table-data";
    locationTableData.innerHTML = y.location;
    visualItemRow.appendChild(locationTableData);
    //VisualItem - Edit
    let editTableData = document.createElement("td");
    editTableData.className = "table-data";
    editTableData.id = "edit-button";
    editTableData.innerHTML = "Edit";
    editTableData.addEventListener("click", () => {
        edit(visualItemRow.id);
    })


    visualItemRow.appendChild(editTableData);
    
    x.appendChild(visualItemRow);
}

export { Todo, visualItemCreator };