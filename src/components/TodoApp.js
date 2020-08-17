import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoApp extends Component {
	constructor() {
		super();
		this.state = {
			newTodo: '',
			error: false,
			todos: [
				{ title: 'learn react', done: false },
				{ title: 'do laundry', done: false }
			]
		};
	}

	newTodo(e) {
		this.setState({
			newTodo: e.target.value
		});
	}

	addTodo() {
		if (this.state.newTodo.trim() === '') {
			this.setState({ error: true });
		} else {
			const todos = [
				...this.state.todos,
				{ title: this.state.newTodo, done: false }
			];

			this.setState({
				todos,
				newTodo: '',
				error: false
			});
		}
	}

	toggleTodoDone(e, index) {
		console.log(e.target.checked);
		const todos = [...this.state.todos];
		todos[index] = { ...todos[index], done: e.target.checked };
		this.setState({ todos });
	}

	removeTodo(index) {
		const todos = [...this.state.todos];
		todos.splice(index, 1);
		this.setState({ todos });
	}

	render() {
		const { newTodo, error, todos } = this.state;
		return (
			<>
				<TodoForm
					todo={newTodo}
					error={error}
					newTodo={this.newTodo.bind(this)}
					addTodo={this.addTodo.bind(this)}
				/>
				<TodoList
					todos={todos}
					toggleTodoDone={this.toggleTodoDone.bind(this)}
					removeTodo={this.removeTodo.bind(this)}
				/>
			</>
		);
	}
}

export default TodoApp;
