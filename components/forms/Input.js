import m from "mithril"

export class Input {
    constructor(vnode) {
        this.id = vnode.id
        this.name = vnode.name
        this.type = vnode.type
        this.placeholder = vnode.placeholder
        this.required = vnode.required
        this.readonly = vnode.readonly
        this.value = vnode.value
        this.min = vnode.min
    }
    view () {
        return m("input.form-control", {
            id: this.id,
            name: this.name,
            type: this.type,
            placeholder: this.placeholder,
            required: this.required,
            readonly: this.readonly,
            value: this.value,
            min: this.min
        })
    }
}