import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';
import './app.css';

class App extends Component {
	state = {
		todos: [ { id: 1, content: 'buy some bread' }, { id: 2, content: 'play mario kart' } ]
	};
	deleteTodo = (id) => {
		const todos = this.state.todos.filter((todo) => {
			return todo.id !== id;
		});
		this.setState({
			todos
		});
	};
	addTodo = (todo) => {
		todo.id = Math.random();
		let todos = [ ...this.state.todos, todo ];
		this.setState({
			todos: todos
		});
	};
	render() {
		return (
			<div className="container">
				<section className="hero is-primary is-bold">
					<div className="hero-body">
						<div className="container">
							<h1 className="title">Todo's</h1>
						</div>
					</div>
				</section>
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />

				<AddTodo addTodo={this.addTodo} />
			</div>
		);
	}
}

export default App;
