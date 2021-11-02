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

export { Todo };
