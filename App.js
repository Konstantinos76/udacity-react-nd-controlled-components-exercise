import React from 'react'
import logo from './logo.svg'
import './App.css'
import ListItems from './ListItems'
import AddItem from './AddItem'
import DeleteButton from './DeleteButton'

class App extends React.Component {
  state = {
    items: []
  };

handleAddItem = (item) => {
  this.setState((currentState) => ({
    items: currentState.items.concat(item)
  }))
}

  deleteLastItem = event => {
    this.setState(prevState => ({ items: prevState.items.slice(0, -1) }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    	<AddItem onAddItem={this.handleAddItem} />
    	
		<DeleteButton items={this.state.items} onDeleteLastItem={this.deleteLastItem} />
		
		
		<ListItems items={this.state.items} />
		
      </div>
    );
  }
}

export default App;
