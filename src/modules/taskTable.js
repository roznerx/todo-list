let todoTable = document.createElement("table");
todoTable.id = "todo-table";

let todoTableRows = document.createElement("tr");
todoTableRows.id = "todo-table-rows";
todoTable.appendChild(todoTableRows);

function tableHeaderMaker(name) {
    let tableHeader = document.createElement("th");
    tableHeader.className = "table-header";
    tableHeader.innerHTML = name;
    todoTableRows.appendChild(tableHeader);
    return tableHeader;
}

tableHeaderMaker("title");
tableHeaderMaker("description");
tableHeaderMaker("deadline");
tableHeaderMaker("priority");
tableHeaderMaker("status");
tableHeaderMaker("location");
tableHeaderMaker("options");

export { todoTable };