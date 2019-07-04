import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getContacts } from '../../actions/contactActions';

// Components
import Contact from './Contact';

class Contacts extends Component {

    componentDidMount() {
        this.props.getContacts();
    }

    render() {
        const { contacts } = this.props;
        return (
            <React.Fragment>
                <h1 className="display-4 mb-2">
                    <span className="text-danger">Contact List</span>
                </h1>
                {contacts.map(contact => (
                    <Contact {...contact} key={contact.id} />
                ))}
            </React.Fragment>
        );
    }
}

Contacts.protoTypes = {
    contacts: PropTypes.array.isRequired,
    getContacts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    contacts: state.contact.contacts,
});

export default connect(mapStateToProps, { getContacts })(Contacts);
