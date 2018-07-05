import React, { Component } from 'react'
import '../style/Form.css'

class Form extends Component {
	render() {
		return(
			<div className="form">
				<form onSubmit={e => this.props.handleSubmit(e)}>
					<input value={this.props.inputValue}
						   onChange={this.props.handleChange}/>
				</form>
			</div>
		)
	}
}

export default Form