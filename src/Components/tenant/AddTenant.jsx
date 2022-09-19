import React, { Component } from 'react'
import axios from 'axios'
import MenuTenant from './MenuTenant'

class AddTenant extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
        //    tenantid: '',
           tenantage: '',
           tenantaddress: '',
        
        }
      }
      handleChange=(e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit=(e) => {
        e.preventDefault()
        
        axios.post('http://localhost:8081/api/addtenants',this.state)
            .then(response=>{                  
                console.log(response)
            })
    }
     
    render() {
        const {tenantaddress,tenantage}=this.setState
        return (
           
            <div className="container-sm">
                <MenuTenant />
                <br></br>
                <br></br>
                <h3>Add Tenant</h3>
                 <form  onSubmit={this.handleSubmit}>
                 <div className="mb-3">
                 <label htmlFor="exampleInputuserid" className="form-label">Tenant Age</label>
                   <input 
                        className="form-control" 
                        type="text" 
                        name="tenantage"
                        value={tenantage}
                         placeholder="Tenant Age"
                          onChange= {this.handleChange}>
                    </input>
                 </div>

                     <div className="mb-3">
                    <label htmlFor="exampleInputuserid" className="form-label">Tenant Address</label>
                   <input className="form-control" 
                   type="text" 
                   placeholder="Tenant Address" 
                   name="tenantaddress"
                 value={tenantaddress} 
                 onChange= {this.handleChange}
                   >
                    </input>
                    </div>
                <button type="submit" className="btn btn-success" >Add</button>
                </form>
            </div>
        )
    }
}

export default AddTenant;

