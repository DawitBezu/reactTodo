import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';
import './app.css';
import Navbar from './components/Navbar';
import {Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';

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
				<Navbar />
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
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
