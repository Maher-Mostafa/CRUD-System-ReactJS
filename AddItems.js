import React, { Component } from 'react'

class AddItems extends Component {
    state = {
        name: '', 
        age: '', 
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.AddItem(this.state);
        this.setState({ name: '', age: '' })
    }
    render() {
        return (
            <div> 
                <form onSubmit={this.handleSubmit}>
                    <label htmlfor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder='Enter Name ...' onChange={this.handleChange} value={this.state.name} />

                    <label htmlfor="age">Age</label>
                    <input type="text" id="age" name="age" placeholder='Enter Age ...' onChange={this.handleChange} value={this.state.age} />

                    <input type="submit" value="Add" />

                </form>


            </div>
        )

    }
}

export default AddItems