import m from "mithril"


/***
 * https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods
 * **/
const FormMethod = {
    get: "get",
    post: "post",
    put: "put",
    delete: "delete",
    options: "options",
    head: "head",
    path: "path"
}

const FormEnctype = {
    urlencoded: "application/x-www-form-urlencoded",
    multipart: "multipart/form-data",
    plain: "text/plain"
}

export class Form
{
    constructor(vnode)
    {
        this.method = self.method == null ? "get" : self.method
    }

    view(vnode)
    {
        return m("form", {
            action: this.action,
            method: this.method,
            enctype: this.enctype
        },
        this.fields
    )
    }
}