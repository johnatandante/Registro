import React, {Component} from 'react';

import InputPreview from './../components/InputPreview';

import {connect} from 'react-redux';

import {setMessage} from './../actions/messages';

export default class App extends Component {

    _onChange = (value) => {
        this.props.dispatch(setMessage(value))
    }

    render() {
        const {message} = this.props.messageReducer;

        return (
            <div>
                <h1>Here is my react App</h1>
                <InputPreview 
                    value={message} 
                    onChange={this._onChange}/>
            </div>
        );
    }
};