import React, {Component} from 'react';

import InputPreview from './../components/InputPreview';

import {connect} from 'react-redux';

import {setMessage} from './../actions/messages';

import {Link} from 'react-router-dom';

import styles from './style.css';

class App extends Component {

    _onChange = (value) => {
        this.props.dispatch(setMessage(value))
    }

    render() {
        const { message } = this.props.messageReducer;
        console.log(styles);
        return (
            <div>
                <div className={"header"}>
                    <Link to="/">
                            <button>Home</button>
                    </Link>
                    <Link to="/about">
                        <button>About</button>
                    </Link>
                </div>
                <h1>Here is my react App</h1>
                <InputPreview 
                    value={message} 
                    onChange={this._onChange}/>
                <h2>Message</h2>
                <p>{message}</p>
            </div>
        );
    }
};

export default connect(state => state)(App);