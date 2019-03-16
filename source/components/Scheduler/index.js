// Core
import React, { Component } from 'react';
import { Control, Form } from 'react-redux-form';

// Instruments
import Styles from './styles.m.css';
import { sortTasksByGroup } from '../../instruments/helpers';

// Components
import Task from '../Task';
import Checkbox from '../../theme/assets/Checkbox';
import { connect } from 'react-redux';
import Spinner from '../Spinner';

// Actions
import { tasksActions } from '../../bus/tasks/actions';
import { bindActionCreators } from 'redux';
import FlipMove from 'react-flip-move';


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
    
    _createTaskAsync = ({createTaskText}) => {
         const { actions } = this.props;
         
         actions.createTaskAsync(createTaskText)
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
                        <Form
                                model = 'forms.scheduler'
                                onSubmit = { this._createTaskAsync }
                        >
                            <Control.text
                                className = { Styles.createTask }
                                maxLength = { 50 }
                                model = '.createTaskText'
                                placeholder = 'Описание моей новой задачи'
                                name = 'createTask'
                                validators = {{ required: (val) => val.trim().length }}
                            />
                            <button>Добавить задачу</button>
                        </Form>
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
