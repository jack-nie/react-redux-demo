import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick}) => (
    <ul>
      {todos.map((todo, index) => (
        <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
      ))}
    </ul>
)

TodoList.prototype = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        compeleted: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList