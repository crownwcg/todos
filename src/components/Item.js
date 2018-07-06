import React, { Component } from 'react'
import '../style/Item.css'

class Item extends Component {

	render() {
		return this.props.item.visible ? (
				<div className="item">
					<span style={{textDecoration: this.props.item.done ? 'line-through' : 'none'}}>
						{this.props.item.value + "   "}
					</span>
					<button onClick={() => this.props.handleClick(this.props.item.id)}>
						{this.props.item.done ? 'Undo' : 'Complished'}
					</button>
				</div>
			) :
			null
	}
}

export default Item