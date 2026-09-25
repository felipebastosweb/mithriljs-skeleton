import m from "mithril"

export class Label {
    constructor(self) {
        this.for = self.for
        this.body = self.body
    }
    view() {
        return m("label.form-label", {
                for: this.for
            },
            this.body
        )
    }
}
