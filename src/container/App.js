import React, { Component } from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import List from './List'
import Footer from '../components/Footer'
import '../style/App.css'

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			inputValue: '',
			items: [],
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.clear = this.clear.bind(this)
		this.all = this.all.bind(this)
		this.active = this.active.bind(this)
		this.completed = this.completed.bind(this)
	}

	handleChange(e) {
		this.setState({
			inputValue: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault()
		this.setState(prevState => ({
			inputValue: '',
			items: [
				...prevState.items,
				{
					value: prevState.inputValue,
					done: false,
					visible: true
				}
			]
		}))
	}

	handleClick(i) {
		const items = this.state.items
		items[i].done = !items[i].done
		this.setState({items})
	}

	clear() {
		this.setState(prevState => ({
			inputValue: prevState.inputValue,
			items: prevState.items.filter(item => item.done === false)
		}))
	}

	all() {
		this.setState(prevState => ({
			inputValue: prevState.inputValue,
			items: prevState.items.map((item, i) => ({
				value: item.value,
				done: item.done,
				visible: true
			}))
		}))
	}

	active() {
		this.setState(prevState => ({
			inputValue: prevState.inputValue,
			items: prevState.items.map((item, i) => ({
				value: item.value,
				done: item.done,
				visible: item.done ? false : true
			}))
		}))
	}

	completed() {
		this.setState(prevState => ({
			inputValue: prevState.inputValue,
			items: prevState.items.map((item, i) => ({
				value: item.value,
				done: item.done,
				visible: item.done ? true : false
			}))
		}))
	}

  	render() {
    	return (
      		<div>
		        <Header />
		        <Form inputValue={this.state.inputValue} 
		              handleChange={this.handleChange}
		              handleSubmit={this.handleSubmit}/>
		        <List items={this.state.items}
		        	  handleClick={this.handleClick}/>
		        <span>
		        	<button className="All" onClick={this.all}>All</button>
		        	<button className="Active" onClick={this.active}>Active</button>
		        	<button className="Completed" onClick={this.completed}>Completed</button>
		       		<button className="Clear completed" onClick={this.clear}>Clear completed</button>
		       	</span>
		        <Footer />
      		</div>
    	)
  	}
}

export default App
