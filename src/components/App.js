import React, { Component } from 'react'
import Header from '../components/Header'
import List from '../components/List'
import Footer from '../components/Footer'
import '../style/App.css'

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
            <button className="All" 
                    onClick={e => all(items)}>
              All
            </button>
            <button className="Active" 
                    onClick={e => active(items)}>
              Active
            </button>
            <button className="Completed" 
                    onClick={e => completed(items)}>
              Completed
            </button>
            <button className="Clear completed" 
                    onClick={e => clear(items)}>
              Clear completed
            </button>
          </span>
          <Footer />
        </div>
      )
    }
}

export default App
