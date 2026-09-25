import m from "mithril"

export class Select
{
    constructor(vnode)
    {
        this.id = vnode.id;
        this.name = vnode.name;
        this.is_multiple = vnode.is_multiple ? true : false;
    }

    render(vnode)
    {
        return m("select", {}, []);
    }
}

export class SelectOption {
    constructor(self) {}
    view(vnode) {
        return m("select.form-control", {
                name: this.name,
                type: this.type
            },
            [
                this.options.forEach(element => {
                  m(
                    "option",
                    {
                        value: element.value,
                    }),
                    element.body
                })
            ]
        )
    }
}