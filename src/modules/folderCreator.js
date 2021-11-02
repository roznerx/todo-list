class Folder {
    constructor(name) {
        this.name = name;
        this.content = [];
    }
    addItem(item) {
        this.content.push(item);
    }
    removeItem(item) {
        for (let i = 0; i < this.content.length; i++) {
            if (this.content[i].name === item.name) {
                let index = this.content.indexOf(this.content[i].name);
                this.content.splice(index, 1);
            }
        }
    }
}

export { Folder };



