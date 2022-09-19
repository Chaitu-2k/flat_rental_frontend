import React from "react";
import MenuLandlord from "./MenuLandlord";

class DeleteLandlord extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        landlord: []
    }
    this.deletelandlord = this.deletelandlord.bind(this);
}

  componentDidMount(){
     fetch("http://localhost:1234/landlord/viewAll")
         .then(response => response.json())
         .then((data) => {
             this.setState({
                 landlord: data
              });
      }, (error) => {
         alert(error);
     });
  }
  deletelandlord(event){
    const id = event.target.id.value;
    const request = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'}
    };
    fetch("http://localhost:1234/landlord/delete/"+id, request)
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
            <MenuLandlord />
            <br></br>
            <br></br>
            <h3>Delete Landlord</h3> 
            <form class="form-group" onSubmit={this.deletelandlord}>
                <select class="form-control" name="id">
                    <option>---Chose---</option>
                    {
                        this.state.landlord.map(landlord => (
                            <option value={landlord.landlordId}>{landlord.landlordId}</option>
                        ))
                    }
                </select>
                <a href="/viewll" className="btn btn-danger"> Delete </a>
            </form>
        </div>
    )
}

}
 
export default DeleteLandlord;