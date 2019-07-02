import React, { Component } from 'react'

// Components
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            {contacts.map(contact => (
                                <Contact {...contact} key={contact.id} />
                            ))}
                        </React.Fragment>
                    );
                }}
            </Consumer>
        )
    }
}

export default Contacts;
