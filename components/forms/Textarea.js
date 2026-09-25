import m from "mithril"

export class Textarea {
    constructor(vnode) {
        this.id = vnode.id
        this.name = vnode.name
        this.cols = vnode.cols
        this.rows = vnode.rows
        this.value = vnode.value
        this.placeholder = vnode.placeholder;
        this.body = [];
    }
    view(vnode) {
        return m("textarea.form-control", {
            id: this.id,
            name: this.name,
            cols: this.cols,
            rows: this.rows,
            value: this.content,
            placeholder: this.placeholder,
        }, this.body)
    }
}
