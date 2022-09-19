import React from "react";
import MenuTenant from "./MenuTenant";

class DeleteTenant extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        tenants: []
    }
    this.deletetenant = this.deletetenant.bind(this);
}
  componentDidMount(){
     fetch("http://localhost:8081/api/alltenants")
         .then(response => response.json())
         .then((data) => {
             this.setState({
                 tenants: data
              });
      }, (error) => {
         alert(error);
     });
  }
  deletetenant(event){
    const id = event.target.id.value;
    const request = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'}
    };
    // fetch("http://localhost:8084/api/Flat/"+id, request)
    fetch("http://localhost:8081/api/delete-tenants/"+id,request)
        .then(response => response.json())
        .then((data) => {
            alert("Deleted Successfully");
    }, (error) => {
        alert(error);
    });
  }
  render(){
    return(
        <div class="container-sm" >
            <MenuTenant />
            <br></br>
            <br></br>
            <h3>Delete Tenant</h3> 
            <form class="form-group" onSubmit={this.deletetenant}>
                <select class="form-control" name="id">
                    <option>---Chose---</option>
                    {
                        this.state.tenants.map(tenant => (
                            <option value={tenant.id}>{tenant.tenantid}</option>
                        ))
                    }
                </select>
                <button class="btn btn-danger">Delete</button>
            </form>
        </div>
    )
}

}
 
export default DeleteTenant;