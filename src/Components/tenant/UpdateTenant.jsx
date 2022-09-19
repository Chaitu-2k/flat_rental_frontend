import React, {useState, useEffect} from 'react';
import { useNavigate ,Link,useParams} from 'react-router-dom';
import TenantService from '../../Services/TenantService';
import MenuTenant from './MenuTenant';

const UpdateTenant = () => {
    const [tenantage, setTenantAge] = useState('')
    const [tenantaddress, setTenantAddress] = useState('')
    const {tenantid} = useParams();
    const navigate = useNavigate();
    const saveTenant = (e) => {
        e.preventDefault();
        const tenant = {tenantage, tenantaddress}
       if(tenantid){
       TenantService.updateTenant(tenantid,tenant).then((response) =>{
            console.log(response.data)
            navigate('/readt');
        }).catch(error => {
            console.log(error)
        })
    }
    else{
        alert("There is no record with this Id")
    }
    }
    useEffect(() => {
        TenantService.getTenantByTenantId(tenantid).then((response) =>{
            setTenantAge(response.data.tenantage)
            setTenantAddress(response.data.tenantaddress)
        }).catch(error => {
            console.log(error)
        })
    }, [])
    const title = () => {

        if(tenantid){
            return <h2 className = "text-center">Update Tenant</h2>
        }else{
            return <h2 className = "text-center">Add</h2>
        }
    }



    return(
        <div className="container-sm">
        <MenuTenant />
        <br /><br />
        <div className = "container">
             <div className = "row">
                 <div className = "card col-md-6 offset-md-3 offset-md-3">
                  {
                   title()
                  }
                     <div className = "card-body">
                         <form>
                         
                             <div className = "form-group mb-2">
                                 <label className = "form-label"> Tenant age:</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter The Ground Name"
                                     name = "tenantage"
                                     className = "form-control"
                                     value = {tenantage}
                                     onChange = {(e) => setTenantAge(e.target.value)}
                                 >
                                 </input>
                             </div>

                             <div className = "form-group mb-2">
                                 <label className = "form-label"> Tenant Address :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter Ground Address"
                                     name = "tenantaddress"
                                     className = "form-control"
                                     value = {tenantaddress}
                                     onChange = {(e) => setTenantAddress(e.target.value)}
                                 >
                                 </input>
                             </div>

                             
                             <button className = "btn btn-success" onClick = {(e) => saveTenant(e)} >Submit </button>
                             <Link to="/schedule" className="btn btn-danger"> Cancel </Link>
                            
                         </form>

                     </div>
                 </div>
             </div>

        </div>

     </div>
    )
}
export default UpdateTenant;