import React, { Component } from 'react'
import Item from './Item'

class List extends Component {

	render() {
		const { items, handleClick } = this.props
		return(
			<div className="list">
				{items.map(item => 
					<Item key={item.id}
						  item={item}
						  handleClick={handleClick}/>)}
			</div>
		)
	}
}

export default List