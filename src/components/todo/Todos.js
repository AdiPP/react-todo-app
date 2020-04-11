import React from 'react';
import Todoitem from './TodoItem';
import PropTypes from 'prop-types';
// import { render } from '@testing-library/react';

class Todos extends React.Component {

    render() {
        return this.props.todos.map((todo) => ( <
            Todoitem key = {
                todo.id
            }
            todo = {
                todo
            }
            markComplete = {
                this.props.markComplete
            }
            delTodo = {
                this.props.delTodo
            }
            />
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default Todos;