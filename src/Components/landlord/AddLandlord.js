import PropTypes from 'prop-types'
import React, { Component } from 'react'
import axios from 'axios'
import MenuLandlord from './MenuLandlord'

class AddLandlord extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         landlordName: '',
         landlordAge: ''
      }
    }

    handleChange=(e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
 
    handleSubmit=(e) => {
        e.preventDefault()
        axios.post('http://localhost:1234/landlord/add', this.state)
            .then(response => {                  
                console.log(response)
            })
    }
    
    render() {
        const {landlordName, landlordAge} = this.state
        return (
            <div class="container-sm">
                <MenuLandlord />
                <form onSubmit={this.handleSubmit}>
                    
                    <div>
                        <label> Landlord Name </label>
                        <input 
                        type='text'
                        name='landlordName'
                        placeholder='Landlod Name'
                        value= {landlordName}
                        onChange= {this.handleChange}
                        ></input>
                    </div>
                    
                    <div>
                        <label> Landlord Age </label>
                        <input 
                        type='text'
                        name='landlordAge'
                        placeholder='Landlod Age'
                        value= {landlordAge}
                        onChange= {this.handleChange}
                        ></input>
                    </div>
                    <div>
                    <a href="/viewll" className="btn btn-success"> Add </a>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddLandlord