// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Scheduler from '../../components/Scheduler';

// Actions

@hot(module)
export default class App extends Component {
    render () {
        return (
           <Scheduler/>
        );
    }
}
