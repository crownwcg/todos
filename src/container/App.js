import App from '../components/App'
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

  handleChange: e => 
    dispatch(changeInput(e.target.value)),

  handleSubmit: (e, input) => {
    e.preventDefault()
    dispatch(addItem(input))
    dispatch(clearInput())},

  handleClick: id => 
    dispatch(setDone(id)),

  clear: items => items.forEach(item => 
    item.done ? 
    dispatch(clearItem(item.id)) : 
    item),

  all: items => items.forEach(item => 
    dispatch(setVisible(item.id))),

  active: items => items.forEach(item => 
    item.done ? 
    dispatch(setInvisible(item.id)) :
    dispatch(setVisible(item.id))), 
      
  completed: items => items.forEach(item => 
    item.done?
    dispatch(setVisible(item.id)):
    dispatch(setInvisible(item.id))),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)