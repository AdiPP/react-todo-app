import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
        }
    }

    // old way
    // getComplete = () => {
    //     if (this.props.todo.completed) {
    //         return {
    //             textDecoration: 'line-through'
    //         }       
    //     } else {
    //         return {
    //             textDecoration: 'none'
    //         }
    //     }
    // }

    // more efective way
    getComplete = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    }

    render() {
        const { id, title } = this.props.todo; // re-structuring
        return (
            <div style = {this.getStyle()}>
                <p>
                    <input type="checkbox" onChange = {this.props.markComplete.bind(this, id)} /> {' '}
                    <span style = {this.getComplete()}>{title}</span>
                    <button onClick = {this.props.delTodo.bind(this, id)} style = {btnStyle} >x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,   
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
