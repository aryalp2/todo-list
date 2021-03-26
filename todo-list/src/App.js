import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state={
      userName: 'Prashant',
      todoItems: [
        {action: "Buy Milk", done: false},
        {action: "Dentist at 5 pm", done: false},
        {action: "Go to gym", done: false},
      ],
      response: ''
    };
  }

  todoRows = () => 
    this.state.todoItems.map((item) => (
      <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => this.toggleDone(item)}
          />
        </td>
      </tr>
    ));

  toggleDone = (todo) =>
		this.setState({
			todoItems: this.state.todoItems.map((item) =>
				item.action === todo.action ? { ...item, done: !item.done } : item
			),
		});

  updateValue = (e) => {
    this.setState({response: e.target.value});
  }

  addtoList = (event) => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        {action: this.state.response, done: false},
      ],
      response: ''
    })
  }
  

  // todoRows = () => {
  //   <tr>
  //     <td>hello</td>
  //   </tr>
  // }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="bg-danger text-white text-center p-2">{this.state.userName}'s Todo List</h2>
          </div>
          <div className="col-12 d-flex">
            <input
              className="form-control"
              value={this.state.response}
              onChange={this.updateValue}
            />
            <button 
              className="btn btn-danger"
              onClick={this.addtoList}
              >
              Add
            </button>
          </div>
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Complete</th>
                </tr>
              </thead>
              <tbody>
                {this.todoRows()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
