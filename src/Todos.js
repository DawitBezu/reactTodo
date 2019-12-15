import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
	const todoList = todos.length ? (
		todos.map((todo) => {
			return (
				<div className="card-content" key={todo.id}>
					<button
						className="button is-inverted is-small is-danger"
						onClick={() => {
							deleteTodo(todo.id);
						}}
					>
						<span className="icon is-small">
							<i className="fas fa-times" />
						</span>
					</button>

					{todo.content}
				</div>
			);
		})
	) : (
		<p className="center">You have no todo's left</p>
	);
	return <div className="card">{todoList}</div>;
};

export default Todos;
