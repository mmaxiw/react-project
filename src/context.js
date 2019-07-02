import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        default: return state
    }
}

export class Provider extends Component {
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
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
