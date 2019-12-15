import React, { Component } from 'react';

class AddTodo extends Component {
	state = {
		content: ''
	};
	handleChange = (e) => {
		this.setState({
			content: e.target.value
		});
	};
	handlesubmit = (e) => {
		if (this.state.content !== '') {
			const { addTodo } = this.props;
			e.preventDefault();
			addTodo(this.state);
			this.setState({
				content: ''
			});
		}
	};
	render() {
		return (
			<div className="box">
				<form onSubmit={this.handlesubmit}>
					<label className="label">Add new todo: </label>
					<div className="control">
						<input
							className="input is-success is-rounded"
							type="text"
							placeholder="Tasks..."
							onChange={this.handleChange}
							value={this.state.content}
						/>
					</div>
					<br />
					<button className="button is-outlined">Add Tasks</button>
				</form>
			</div>
		);
	}
}

export default AddTodo;
