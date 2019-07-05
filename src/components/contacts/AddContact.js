import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addContact } from '../../actions/contactActions';

import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })
    onSubmit = e => {
        e.preventDefault();

        const { name, email, phone } = this.state;

        if (name === '') {
            this.setState({ errors: { name: 'Name is required' } });
            return;
        }
        if (email === '') {
            this.setState({ errors: { email: 'Email is required' } });
            return;
        }
        if (phone === '') {
            this.setState({ errors: { phone: 'Phone is required' } });
            return;
        }
        const newContact = {
            name,
            email,
            phone,
        }

        this.props.addContact(newContact);

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });
        this.props.history.push('/');
    }

    render() {
        const { name, email, phone, errors } = this.state;

        return (
            <div className="card mb-3">
                <div className="card-header">
                    Add Contact
                            </div>
                <div className="card-body">

                    <form onSubmit={this.onSubmit}>

                        <TextInputGroup
                            label="Name"
                            name="name"
                            value={name}
                            placeholder="Enter Name..."
                            onChange={this.onChange}
                            error={errors.name}
                        />

                        <TextInputGroup
                            label="Email"
                            name="email"
                            value={email}
                            placeholder="Enter Email..."
                            type="email"
                            onChange={this.onChange}
                            error={errors.email}
                        />

                        <TextInputGroup
                            label="Phone"
                            name="phone"
                            value={phone}
                            placeholder="Enter Phone..."
                            onChange={this.onChange}
                            error={errors.phone}
                        />

                        <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
                    </form>

                </div>
            </div>
        )
    }
}

AddContact.prototypes = {
    addContact: PropTypes.func.isRequired
}

export default connect(null, { addContact })(AddContact);