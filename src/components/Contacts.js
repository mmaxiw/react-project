import React, { Component } from 'react'

// Components
import Contact from './Contact';

class Contacts extends Component {

    state = {
        contacts: [
            {
                id: 1,
                name: 'name 1',
                email: 'email 1',
                phone: '111-1111-111'
            },
            {
                id: 2,
                name: 'name 2',
                email: 'email 2',
                phone: '222-2222-222'
            }
        ]
    }

    deleteContact = (id) => {
        const { contacts } = this.state;
        const newContacts = contacts.filter(contact => contact.id !== id);
        this.setState({ contacts: newContacts });
    }

    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {
                    contacts.map(contact => (
                        <Contact {...contact} key={contact.id}
                            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                        />
                    )
                    )
                }
            </React.Fragment>
        )
    }
}

export default Contacts;
