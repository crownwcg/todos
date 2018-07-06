import React, { Component } from 'react'
import Header from '../components/Header'
import List from '../components/List'
import Footer from '../components/Footer'
import '../style/App.css'

import { connect } from 'react-redux'
import { addItem, 
		 clearItem, 
		 setDone,
		 setVisible,
		 setInvisible } from '../store/actions'

let input

const mapStateToProps = state => ({
	items: state.items
})

const mapDispatchToProps = dispatch => ({
	handleSubmit: (e) => {
		e.preventDefault()
		dispatch(addItem(input.value))
		input.value = ''
	},
	handleClick: id => {
		dispatch(setDone(id))
	},
	clear: items => items.forEach(item => item.done ? dispatch(clearItem(item.id)) : item),
	all: items => items.forEach(item => dispatch(setVisible(item.id))),
	active: items => items.forEach(item => 
			item.done ? 
			dispatch(setInvisible(item.id)) :
			dispatch(setVisible(item.id))
		),		
	completed: items => items.forEach(item => 
			item.done?
			dispatch(setVisible(item.id)):
			dispatch(setInvisible(item.id))
		),
})

class App extends Component {

  	render() {

  		const {
  			items,
  			handleSubmit,
  			handleClick,
  			clear,
  			all,
  			active,
  			completed
  		} = this.props
    	return (
      		<div>
		        <Header />
				<form onSubmit={e => handleSubmit(e)}>
					<input ref={text => input = text}/>
				</form>
		        <List items={items}
		        	  handleClick={handleClick}/>
		        <span>
		        	<button className="All" onClick={e => all(items)}>All</button>
		        	<button className="Active" onClick={e => active(items)}>Active</button>
		        	<button className="Completed" onClick={e => completed(items)}>Completed</button>
		       		<button className="Clear completed" onClick={e => clear(items)}>Clear completed</button>
		       	</span>
		        <Footer />
      		</div>
    	)
  	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
