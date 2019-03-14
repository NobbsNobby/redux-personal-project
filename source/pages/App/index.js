// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Scheduler from '../../components/Scheduler';

// Actions
import { tasksActions } from '../../bus/tasks/actions';
import { connect } from 'react-redux';


const mapDispatchToProps = {
    fetchTasks: tasksActions.fetchTasks
};


@hot(module)
@connect(null, mapDispatchToProps)
export default class App extends Component {
    componentDidMount() {
        const { fetchTasks } = this.props;
        fetchTasks();
    }
    
    
    render () {
        return (
           <Scheduler/>
        );
    }
}
