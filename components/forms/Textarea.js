import m from "mithril"

export class Textarea {
    constructor(self) {
        this.id = self.id
        this.name = self.name
        this.cols = self.cols
        this.rows = self.rows
        this.value = self.value
        this.placeholder = self.placeholder
    }
    view() {
        return m("textarea.form-control", {
            id: this.id,
            name: this.name,
            cols: this.cols,
            rows: this.rows,
            value: this.content,
            placeholder: this.placeholder,
        })
    }
}
