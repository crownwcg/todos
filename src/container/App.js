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
		 setInvisible,
		 changeInput,
		 clearInput } from '../store/actions'

const mapStateToProps = state => ({
	items: state.items,
	input: state.input
})

const mapDispatchToProps = dispatch => ({
	handleChange: e => dispatch(changeInput(e.target.value)),
	handleSubmit: (e, input) => {
		e.preventDefault()
		dispatch(addItem(input))
		dispatch(clearInput())
	},
	handleClick: id => dispatch(setDone(id)),
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
  			input,
  			handleChange,
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
				<form onSubmit={e => handleSubmit(e, input)}>
					<input value={input}
						   onChange={e => handleChange(e)}/>
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
