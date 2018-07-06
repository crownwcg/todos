import React, { Component } from 'react'
import '../style/Item.css'

class Item extends Component {

	render() {
		const { item, handleClick } = this.props
		return item.visible ? (
				<div className="item">
					<span style={{textDecoration: item.done ? 'line-through' : 'none'}}>
						{item.value + "   "}
					</span>
					<button onClick={() => handleClick(item.id)}>
						{item.done ? 'Undo' : 'Complished'}
					</button>
				</div>
			) :
			null
	}
}

export default Item