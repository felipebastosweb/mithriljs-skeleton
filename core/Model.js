
export class Model {
    constructor(self) {
        this.id = (self.id != null) ? self.id : null
        this.created_at = (self.created_at != null) ? self.created_at : Date.now()
        this.updated_at = null
    }
}

