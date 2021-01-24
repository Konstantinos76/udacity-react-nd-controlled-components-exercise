import React, { Component } from 'react'
import AddButton from './AddButton';
import PropTypes from 'prop-types'

class AddItem extends Component {
  
  static propTypes = {
    onAddItem: PropTypes.func.isRequired
    }
  
  state = {
    value: ''
  }
  
  handleChange = (str) => {
    this.setState({value: str})
  }

  addItem = (event) => {
  event.preventDefault()
  this.props.onAddItem(this.state.value)
  }

  render() {
    return(
    <div>
    	<h2>Shopping List</h2>
    	<form onSubmit={this.addItem}>
    		<input 
    		 type='text'
    		 placeholder='Enter New Item'
      		 value={this.state.value}
  			 onChange={(event) => this.handleChange(event.target.value)}
    		/>
		<AddButton inputFieldIsEmpty={this.state.value} />
    	</form>
    </div>
   )
  }
}

export default AddItem