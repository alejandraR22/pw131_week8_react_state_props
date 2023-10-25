import React, { Component } from 'react';
import './ToDoApp.css'; 

export default class ToDoApp extends Component {
  constructor() {
    super();
    this.state = {
      items: [], 
      newItem: '', 
    };
  }

  
  handleInputChange = (event) => {
    this.setState({ newItem: event.target.value });
  };

  
  addItem = () => {
    const { newItem, items } = this.state;
    if (newItem.trim() === '') return;  
    this.setState({
      items: [...items, newItem],
      newItem: '',
    });
  };

  
  removeItem = (index) => {
    const { items } = this.state;
    items.splice(index, 1);
    this.setState({ items });
  };

  render() {
    const { items, newItem } = this.state;
    return (
      <div className="todo-app">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Add a new item..."
            value={newItem}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addItem}>Add</button>
        </div>
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => this.removeItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

