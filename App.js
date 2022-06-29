import React, { Component } from 'react';
import TodoItems from './components/TodoItems/TodoItems'
import AddItems from './components/AddItem/AddItems'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends Component { 

  state = {
    items: [
      { name: 'maher', age: 26, id: 1 },
      { name: 'Yunus', age: 20, id: 2 },
      { name: 'Youssef', age: 18, id: 3 }
    ]
  }

  deleteItem = (id) => {
    let items = this.state.items;
    // let items = this.state.items.filter(item => {return(item.id !== id)})  
    let i = items.findIndex(item => item.id === id);
    items.splice(i, 1);
    this.setState({ items: items })
  }

  AddItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
    console.log(items);
  }


  render() {
      return (
        <div>
          <TodoItems items={this.state.items} deleteItem={this.deleteItem}  />
          <AddItems AddItem={this.AddItem} />
        </div>
      )
  }
}  





export default App;
