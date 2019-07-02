import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { Consumer } from '../../context';

class Contact extends Component {

    state = {
        showContactInfo: false
    };

    onDeleteClick = (id, dispatch) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id })
    }

    render() {

        const { id, name, email, phone } = this.props;
        const { showContactInfo } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
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
                                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                                />
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
                }}
            </Consumer>
        )
    }
}

Contact.defaultProps = {
    name: 'Israel Israeli',
    email: 'xxx@xxx.com',
    phone: '000-0000-000',
}

Contact.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
}


export default Contact;