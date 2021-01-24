import React from 'react'
import PropTypes from 'prop-types'

const DeleteButton = (props) => {
  return(
      <button 
      	 disabled={props.items.length === 0} 
  		 onClick={() => props.onDeleteLastItem()}>
         Delete Last Item
	  </button>
    )
}

DeleteButton.propTypes = {
  items: PropTypes.array.isRequired,
  onDeleteLastItem: PropTypes.func.isRequired
}

export default DeleteButton