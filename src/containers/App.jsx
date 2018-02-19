import React, {Component} from 'react';

import InputPreview from './../components/InputPreview';

import {connect} from 'react-redux';

import { setMessage, hitButton } from './../actions/messages';

import {Link} from 'react-router-dom';

import styles from './style.css';

class App extends Component {

    _onChange = (value) => {
        this.props.dispatch(setMessage(value));
    }

    _onButtonClicked = () => {
        this.props.dispatch(hitButton(13));
    }

    render() {
        const { message, buttonHitCount } = this.props.messageReducer;        

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
                <h2>Hit the button</h2> 
                <button onClick={this._onButtonClicked}>Hit me!</button>
                <p>Button {!buttonHitCount ? "never hit" : "hit " + buttonHitCount + "  times" }</p>
            </div>
        );
    }
};

export default connect(state => state)(App);