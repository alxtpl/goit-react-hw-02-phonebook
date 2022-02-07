import { Component } from "react";

class ContactList extends Component {
    state = {
        name: "",
        number: "",
    };
    render() {
        return (
            <>
                <h2>Contacts</h2>
                <input type="text" name="filter" value="" onChange="" />
                <ul>
                    <li>
                        <span>name&number</span>
                        <button type='button' onClick="">Delete</button>
                    </li>
                </ul>
            </>
        )
    }
}

export default ContactList