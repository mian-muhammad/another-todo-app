import React from 'react';

const TodoForm = ({ todo, error, newTodo, addTodo }) => {
	return (
		<div className="todoForm">
			<h1>Another TodoApp</h1>
			<input
				type="text"
				onChange={(e) => newTodo(e)}
				placeholder="Write a Todo"
				value={todo}
				required
			/>
			<button type="submit" onClick={() => addTodo()}>
				Add Todo
			</button>
			{error ? <span>Todo cannot be empty</span> : <span></span>}
		</div>
	);
};

export default TodoForm;
