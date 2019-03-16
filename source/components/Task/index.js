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
        const { editingTask, id, editStart, editReset } = this.props;

        editingTask.get('id') === id
            ? editReset()
            : editStart(id);
    };

    // _updateNewTaskMessage = (event) => {
    //     this.setState({ newMessage: event.target.value });
    // };
    //
    // _updateTaskMessageOnKeyDown = (event) => {
    //     const { message, updateTask } = this.state;
    //     const enterKey = event.key === "Enter";
    //     const escKey = event.key === "Escape";
    //
    //     if (!newMessage.trim()) {
    //         return null;
    //     }
    //
    //     if (enterKey) {
    //         updateTask(this._getTaskShape({ message: newMessage }));
    //     }
    //
    //     if (escKey) {
    //         this._cancelUpdatingTaskMessage();
    //     }
    // };

    render () {
        const { message, completed, favorite, editingTask, id } = this.props;

        const isEditing = editingTask.get('id') === id;

        const styles = cx(Styles.task, {
            [Styles.completed]: completed,
        });

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
                        value = { message }
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
