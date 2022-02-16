import { selectedFolder } from "./folderCreator"

class Todo {
    constructor(title, description, deadline, priority, status, location) {
        this.title = title;
        this.description = description;
        this.deadline = deadline;
        this.priority = priority;
        this.status = status;
        this.location = location;
    }
    changeStatus(newStatus) {
        this.status = newStatus;
    }
    changePriority(priority) {
        this.priority = priority;
    }
};

function visualItemCreator(x, y) {
    //VisualItem Row
    let visualItemRow = document.createElement("tr");
    visualItemRow.className = "visual-item-row";

    //VisualItem Task Data

    //Title
    let titleTableData = document.createElement("td");
    titleTableData.className = "table-data";
    titleTableData.innerHTML = y.title;
    visualItemRow.appendChild(titleTableData);
    //Description
    let descriptionTableData = document.createElement("td");
    descriptionTableData.className = "table-data";
    descriptionTableData.innerHTML = y.description;
    visualItemRow.appendChild(descriptionTableData);
    //Deadline
    let deadlineTableData = document.createElement("td");
    deadlineTableData.className = "table-data";
    deadlineTableData.innerHTML = y.deadline;
    visualItemRow.appendChild(deadlineTableData);
    //Priority
    let priorityTableData = document.createElement("td");
    priorityTableData.className = "table-data";
    priorityTableData.innerHTML = y.priority;
    visualItemRow.appendChild(priorityTableData);
    //Status
    let statusTableData = document.createElement("td");
    statusTableData.className = "table-data";
    statusTableData.innerHTML = y.status;
    visualItemRow.appendChild(statusTableData);
    statusTableData.addEventListener("click", () => {
        if (statusTableData.innerHTML = "Pending") {
            statusTableData.innerHTML = "Completed";
            y.changeStatus("Completed");
            //SHOULD CHECK OUT WHY I CAN'T CHANGE FROM COMPLETED TO PENDING
        }
    });
    //Location
    let locationTableData = document.createElement("td");
    locationTableData.className = "table-data";
    locationTableData.innerHTML = y.location;
    visualItemRow.appendChild(locationTableData);

    x.appendChild(visualItemRow);
}

export { Todo, visualItemCreator };