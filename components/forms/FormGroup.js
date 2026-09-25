import m from "mithril"

export class FormGroup
{
    constructor(vnode)
    {

    }

    view(vnode)
    {
        return m("div.mb-3", {class: vnode.attrs.class}, [vnode.children])
    }
}
