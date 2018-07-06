import React, { Component } from 'react'
import Item from './Item'

class List extends Component {

	render() {
		return(
			<div className="list">
				{this.props.items.map((item, i) => {
					return (<Item key={i}
								  item={item}
								  handleClick={this.props.handleClick}/>)
				})}
			</div>
		)
	}
}

export default List