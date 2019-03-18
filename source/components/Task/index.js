// Core
import React, { PureComponent } from "react";
import cx from "classnames";

// Instruments
import Styles from "./styles.m.css";

// Components
import Checkbox from "../../theme/assets/Checkbox";
import Remove from "../../theme/assets/Remove";
import Edit from "../../theme/assets/Edit";
import Star from "../../theme/assets/Star";

export default class Task extends PureComponent {
    componentDidUpdate () {
        this.taskInput.current.focus();
    }

    taskInput = React.createRef();

    _getTaskShape = ({
        message = this.props.message,
        id = this.props.id,
        completed = this.props.completed,
        favorite = this.props.favorite,
    }) => ({
        message,
        id,
        completed,
        favorite,
    });

    _changePriority = () => {
        const { favorite, updateTask } = this.props;

        updateTask(this._getTaskShape({ favorite: !favorite }));

    };

    _changeCompleted = () => {
        const { completed, updateTask } = this.props;

        updateTask(this._getTaskShape({ completed: !completed }));
    };

    _removeTask = () => {
        const { id, removeTask } = this.props;

        removeTask(id);
    };

    _toggleEditing = () => {
        const { editingTask, id, editStart, editReset, message } = this.props;

        editingTask.get('id') === id
            ? editReset()
            : editStart(id, message);

    };

    _updateNewTaskMessage = (event) => {
        const { editUpdate } = this.props;
        const newMessage = event.target.value;

        console.log(newMessage);
        if (newMessage.length < 50) {
            editUpdate(newMessage);
        }
    };

    _updateTaskMessageOnKeyDown = (event) => {
        const { updateTask, editingTask, editReset } = this.props;
        const enterKey = event.key === "Enter";
        const escKey = event.key === "Escape";
        const newMessage = editingTask.get('newMessage');

        if (!newMessage.trim()) {
            return null;
        }

        if (enterKey) {
            updateTask(this._getTaskShape({ message: newMessage }));
            editReset();
        }

        if (escKey) {
            editReset();
        }
    };

    render () {
        const { message, completed, favorite, editingTask, id } = this.props;

        const styles = cx(Styles.task, {
            [Styles.completed]: completed,
        });
        const isEditing = editingTask.get('id') === id;
        let currentMessage = message;

        if (isEditing) {
            currentMessage = editingTask.get('newMessage');
        }

        return (
            <li className = { styles }>
                <div className = { Styles.content }>
                    <Checkbox
                        inlineBlock
                        checked = { completed }
                        className = { Styles.toggleTaskCompletedState }
                        color1 = '#3B8EF3'
                        color2 = '#FFF'
                        onClick = { this._changeCompleted }
                    />
                    <input
                        disabled = { !isEditing }
                        ref = { this.taskInput }
                        type = 'text'
                        value = { currentMessage }
                        onChange = { this._updateNewTaskMessage }
                        onKeyDown = { this._updateTaskMessageOnKeyDown }
                    />
                </div>
                <div className = { Styles.actions }>
                    <Star
                        inlineBlock
                        checked = { favorite }
                        className = { Styles.toggleTaskFavoriteState }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this._changePriority }
                    />
                    <Edit
                        inlineBlock
                        checked = { isEditing }
                        className = { Styles.updateTaskMessageOnClick }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this._toggleEditing }
                    />
                    <Remove
                        inlineBlock
                        className = { Styles.removeTask }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this._removeTask }
                    />
                </div>
            </li>
        );
    }
}
