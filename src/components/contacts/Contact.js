import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { deleteContact } from '../../actions/contactActions';

import { Link } from 'react-router-dom';

class Contact extends Component {

    state = {
        showContactInfo: false
    };

    onDeleteClick = id => {
        this.props.deleteContact(id)
    }

    render() {
        const { id, name, email, phone } = this.props;
        const { showContactInfo } = this.state;
        return (
            <div className="card card-body mb-3">
                <h4>
                    {name}{' '}
                    <i className="fas fa-sort-down"
                        onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })}
                        style={{ cursor: 'pointer' }}
                    />
                    <i className='fas fa-times'
                        style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                        onClick={this.onDeleteClick.bind(this, id)}
                    />
                    <Link to={`contact/edit/${id}`}>
                        <i className="fas fa-pencil-alt" style={{ cursor: 'pointer', float: 'right', color: 'black', marginRight: '1rem' }} />
                    </Link>
                </h4>
                {
                    (showContactInfo) ? (
                        <ul className="list-group">
                            <li className="list-group-item">Email: {email}</li>
                            <li className="list-group-item">Phone: {phone}</li>
                        </ul>
                    )
                        : null
                }
            </div>
        );
    }
}

Contact.defaultProps = {
    contact: {
        name: 'Israel Israeli',
        email: 'xxx@xxx.com',
        phone: '000-0000-000'
    }
}

Contact.propTypes = {
    contact: PropTypes.object,
    deleteContact: PropTypes.func.isRequired
}

export default connect(null, { deleteContact })(Contact);