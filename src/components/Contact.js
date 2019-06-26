import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Contact extends Component {
    render() {

        const { name, email, phone } = this.props;

        return (
            <div>
                <h4>{name}</h4>
                <ul>
                    <li>Email: {email}</li>
                    <li>Phone: {phone}</li>
                </ul>
            </div>
        )
    }
}

Contact.defaultProps = {
    name: 'Israel Israeli',
    email: 'xxx@xxx.com',
    phone: '000-0000-000'
}

Contact.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
}


export default Contact;