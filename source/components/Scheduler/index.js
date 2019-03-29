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
import { taskUpdateActions } from '../../bus/editingTask/actions';
import { filterActions } from '../../bus/filter/actions';
import { bindActionCreators } from 'redux';
import FlipMove from 'react-flip-move';


const mapStateToProps = ({tasks, editingTask, filter}) => {
    return {
        tasks: sortTasksByGroup(tasks),
        editingTask: editingTask,
        tasksFilter: filter.get('tasksFilter')
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
                    completeAllTasks: tasksActions.completeAllTasksAsync,
                    editStart: taskUpdateActions.editStart,
                    editUpdate: taskUpdateActions.editUpdate,
                    editReset: taskUpdateActions.editReset,
                    updateFilter: filterActions.updateFilter
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
    
    _taskArrayFilter = (el) => {
        const { tasksFilter } = this.props;
        return el.get('message').toLocaleLowerCase().includes(tasksFilter);
    };
    
    _updateTasksFilter = (event) => {
        const { actions } = this.props;
        actions.updateFilter(event.target.value.toLowerCase())
    };
    
    _createTaskAsync = ({createTaskText}) => {
         const { actions } = this.props;
         actions.createTaskAsync(createTaskText)
    };
    
    render () {
        const { tasks, actions, editingTask} = this.props;
        
        const allTasksDone = tasks.every((task) => task.get('completed') === true);
        
        const todoList = tasks.filter(this._taskArrayFilter).map((task) => (
            <Task
                completed = { task.get('completed') }
                favorite = { task.get('favorite') }
                id = { task.get('id') }
                key = { task.get('id') }
                message = { task.get('message') }
                removeTask = { actions.removeTaskAsync }
                updateTask = { actions.updateTaskAsync }
                editStart = { actions.editStart }
                editUpdate = { actions.editUpdate }
                editReset = { actions.editReset }
                editingTask = { editingTask }
            />
        ));

        return (
            <section className = { Styles.scheduler }>
                <Spinner/>
                <main>
                    <header>
                        <h1>Планировщик задач</h1>
                        <input
                                placeholder = 'Поиск'
                                type = 'search'
                                onChange = { this._updateTasksFilter }
                        />
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
                        <Checkbox
                                checked = { allTasksDone }
                                color1 = '#363636'
                                color2 = '#fff'
                                onClick = { !allTasksDone && actions.completeAllTasks }
                        />
                        <span className = { Styles.completeAllTasks }>
                            Все задачи выполнены
                        </span>
                    </footer>
                </main>
            </section>
        );
    }
}
