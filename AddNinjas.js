import React, { Component } from 'react';

//class based bcoz we need to save state of input from user
class AddNinjas extends Component{
    state = {
        name: null,
        age: null,
        gender: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor="name">Age: </label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    <label htmlFor="name">Gender: </label>
                    <input type="text" id="gender" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinjas