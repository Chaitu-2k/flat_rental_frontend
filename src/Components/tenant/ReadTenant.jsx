import React from "react";
import {Link} from 'react-router-dom';
import MenuTenant from "./MenuTenant";
 class ReadTenant extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tenants: [],
            tenant:{
                tenantage: '',
                tenantaddress:''
            }
        }
    }
    componentDidMount=()=>{
            fetch("http://localhost:8081/api/alltenants").then(response => response.json())
            .then((data) => {
                this.setState({
                    tenants: data
                });
        }, (error) => {
            alert(error);
        });
    }

    render(){
        
        return (
            <div className="container-sm" align='container-fluid'>
                <MenuTenant />
                <div align='center'><h3>Tenants Information</h3></div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Tenant Id</th>
                            <th>Tenant Age</th>
                            <th>Tenant Address</th>
                            <th>Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tenants.map(tenant => (
                                <tr>
                                    <td>{tenant.tenantid}</td>
                                    <td>{tenant.tenantage}</td>
                                    <td>{tenant.tenantaddress}</td>
                                    <Link className="btn btn-info" to={`/updatet/${tenant.tenantid}`} >Update</Link>
                                </tr>   
                            ))
                         }
                    </tbody>
                </table>

            </div>
         )
    }

}


export default ReadTenant;