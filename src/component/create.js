import React from 'react';
import axios from 'axios';

export class Create extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    name: '',
    price: ''
  };
  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      price : this.state.price
    };
    console.log("======");
    console.log(user);
    axios.post(`http://192.168.1.11:1234/products/create`,user)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      alert("Product Created successfully");
  }

  render() {
    return (
      <div>
        <form id="frm" onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} /><br/>
            Price:
            <input type="text" name="price" onChange={this.handleChange}/><br/>
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}