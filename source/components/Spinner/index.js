// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        isSpinning: state.ui.get('isTasksFetching'),
    };
};

@connect(mapStateToProps)
export default class Spinner extends Component {
    render () {
        const { isSpinning } = this.props;

        return isSpinning ? <div className = { Styles.spinner } /> : null;
    }
}
