import React from 'react'
import PropTypes from 'prop-types'

const AddButton = (props) => {
  return(
      <button 
    	disabled={props.inputFieldIsEmpty === ''}>
		Add
	  </button>
    )
}

AddButton.propTypes = {
  items: PropTypes.string.isRequired
}

export default AddButton
