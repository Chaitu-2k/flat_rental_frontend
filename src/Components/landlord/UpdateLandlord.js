import PropTypes from 'prop-types'
import React, { Component } from 'react'
import axios from 'axios'
import MenuLandlord from './MenuLandlord'

class UpdateLandlord extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         landlordId: '',
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
        axios.put('http://localhost:1234/landlord/update', this.state)
            .then(response => {                  
                console.log(response)
            })
    }
    
    render() {
        const {landlordId, landlordName, landlordAge} = this.state
        return (
            <div class="container-sm">
                <MenuLandlord />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label> Landlord Id </label>
                        <input 
                        type='text'
                        name='landlordId'
                        placeholder='landlord Id'
                        value= {landlordId}
                        onChange= {this.handleChange}
                        ></input>
                    </div>
                    <div>
                        <label> Landlord Name </label>
                        <input 
                        type='text'
                        name='landlordName'
                        placeholder='landlord Name'
                        value= {landlordName}
                        onChange= {this.handleChange}
                        ></input>
                    </div>
                    <div>
                        <label> Landlord Age </label>
                        <input 
                        type='text'
                        name='landlordAge'
                        placeholder='landlord Age'
                        value= {landlordAge}
                        onChange= {this.handleChange}
                        ></input>
                    </div>
                    <div>
                        <a href="/viewll" className="btn btn-success"> Submit </a>
                    </div>
                </form>
            </div>
        )
    }
}

export default UpdateLandlord