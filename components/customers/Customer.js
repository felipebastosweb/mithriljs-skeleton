import { Model } from "../core/Model"
import { Model } from "../components/forms/Form.js"

class Customer extends Model {
    constructor(self) {
        super(self)
        this.name = self.name
        this.birth_date = self.birth_date
        this.genre = self.genre
        this.contacts = self.contacts
    }
}

export CustomerCreateForm extends Form
{
    constructor(vnode)
    {
        
    }

    view(vnode)
    {
        return super.view();
    }

}

export CustomerUpdateForm extends Form
{
    constructor(vnode)
    {
        
    }

    view(vnode)
    {
        return super.view();
    }

}

