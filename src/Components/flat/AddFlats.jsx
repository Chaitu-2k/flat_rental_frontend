import React, { Component } from 'react'
import axios from 'axios'
import MenuFlat from './MenuFlat'

class AddFlats extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           flatid: '',
           cost: '',
           flatAddress: '',
           availability: ''
        }
      }
      handleChange=(e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit=(e) => {
        e.preventDefault()
        axios.post('http://localhost:8084/api/flats', this.state)
            .then(response => {    
                alert("Added Successfully");              
                console.log(response)
            })
    }
     
    render() {
        return (
            <div class="container-sm">
                <MenuFlat />
                <br></br>
                <br></br>
                <h3>Add Flat</h3>
                 <form  onSubmit={this.handleSubmit}>
                   <input className="form-control" type="text" placeholder="cost" name="cost" onChange= {this.handleChange}></input>
                   <input className="form-control" type="text" placeholder="flatAddress" name="flatAddress" onChange= {this.handleChange}></input>
                   <input className="form-control" type="text" placeholder="availability" name="availability" onChange= {this.handleChange}></input>
                <button type="submit" className="btn btn-success">Add</button>
                </form>
            </div>
        )
    }
}

export default AddFlats;

