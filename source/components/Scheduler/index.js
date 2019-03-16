// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';

// Components
import Task from '../Task';
import Checkbox from '../../theme/assets/Checkbox';
import { connect } from 'react-redux';
import Spinner from '../Spinner';

// Actions
import { tasksActions } from '../../bus/tasks/actions';
import { bindActionCreators } from 'redux';
import FlipMove from 'react-flip-move';

// Instruments
import { sortTasksByGroup } from '../../instruments/helpers';

const mapStateToProps = (state) => {
    return {
        tasks: sortTasksByGroup(state.tasks),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(
                {
                    fetchTasksAsync: tasksActions.fetchTasksAsync,
                    createTaskAsync: tasksActions.createTaskAsync,
                    removeTaskAsync: tasksActions.removeTaskAsync,
                    updateTaskAsync: tasksActions.updateTaskAsync,
                },
                dispatch
        )
    }
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Scheduler extends Component {
    componentDidMount() {
        const { actions } = this.props;
        
        actions.fetchTasksAsync()
    }
    
    _createTaskAsync = (event) => {
        event.preventDefault();
        const { actions } = this.props;
        const task = event.target.createTask.value;
        
        actions.createTaskAsync(task)
    };
    
    render () {
        const { tasks, actions } = this.props;
        const todoList = tasks.map((task) => (
            <Task
                completed = { task.get('completed') }
                favorite = { task.get('favorite') }
                id = { task.get('id') }
                key = { task.get('id') }
                message = { task.get('message') }
                removeTask = { actions.removeTaskAsync }
                updateTask = { actions.updateTaskAsync }
                { ...task }
            />
        ));

        return (
            <section className = { Styles.scheduler }>
                <Spinner/>
                <main>
                    <header>
                        <h1>Планировщик задач</h1>
                        <input placeholder = 'Поиск' type = 'search' />
                    </header>
                    <section>
                        <form onSubmit = { this._createTaskAsync }>
                            <input
                                className = { Styles.createTask }
                                maxLength = { 50 }
                                placeholder = 'Описание моей новой задачи'
                                type = 'text'
                                name = 'createTask'
                            />
                            <button>Добавить задачу</button>
                        </form>
                        <div className = { Styles.overlay }>
                            <ul>
                                <FlipMove>{todoList}</FlipMove>
                            </ul>
                        </div>
                    </section>
                    <footer>
                        <Checkbox checked color1 = '#363636' color2 = '#fff' />
                        <span className = { Styles.completeAllTasks }>
                            Все задачи выполнены
                        </span>
                    </footer>
                </main>
            </section>
        );
    }
}
