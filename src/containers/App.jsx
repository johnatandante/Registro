import React, {Component} from 'react';

import InputPreview from './../components/InputPreview';

import {connect} from 'react-redux';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Here is my react App</h1>
                <InputPreview />
            </div>
        );
    }
};