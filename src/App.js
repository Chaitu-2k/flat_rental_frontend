
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Read from './Components/Read';
// import Create from './Components/Create';
import Footer from './Components/tenant/Footer';
import Admin from './Login/Admin';
import Registration from './Login/Registration';
import User from './Login/User';
import Home from './Login/Home';
import UserReg from './Login/UserReg';
import AdminOperations from './Management/AdminOperations';
import UserOperations from './Management/UserOperations';
import Booking from './Components/Booking';
import Navbar from './Components/Layout/Navbar';
import AddTenant from './Components/tenant/AddTenant';
import DeleteTenant from './Components/tenant/DeleteTenant';
import HomeTenant from './Components/tenant/HomeTenant';
import MenuTenant from './Components/tenant/MenuTenant';
import ReadTenant from './Components/tenant/ReadTenant';
import UpdateTenant from './Components/tenant/UpdateTenant';
import HomeLandlord from './Components/landlord/HomeLandlord';
import AddLandlord from './Components/landlord/AddLandlord'
import DeleteLandlord from './Components/landlord/DeleteLandlord'
import UpdateLandlord from './Components/landlord/UpdateLandlord'
import ViewLandlord from './Components/landlord/ViewLandlord';
import MenuLandlord from './Components/landlord/MenuLandlord';
import AddFlats from './Components/flat/AddFlats';
import DeleteFlats from './Components/flat/DeleteFlats';
import HomeFlat from './Components/flat/HomeFlat';
import MenuFlat from './Components/flat/MenuFlat';
import ShowFlats from './Components/flat/ShowFlats';
import UpdateFlat from './Components/flat/UpdateFlat'

function App() {
  return (
    <div>     
   <Booking/>
    <BrowserRouter>
   <Navbar/>
      <Routes>

    <Route exact path="/" element={ <Home/>}> </Route> 
    <Route exact path="/admin" element={<Admin/>}> </Route> 
    <Route exact path="/adminreg" element={ <Registration/>}> </Route> 
    <Route exact path="/userreg" element={ <User/>}> </Route> 
    <Route exact path="/user" element={ <UserReg/>}> </Route> 
    <Route exact path="/adminoperations" element={<AdminOperations/>}> </Route> 
    <Route exact path="/useroperations" element={ <UserOperations/>}> </Route> 

    <Route exact path="/homet" element={<HomeTenant/>}> </Route> 
    <Route exact path="/addt" element={<AddTenant/>}> </Route> 
    <Route exact path="/deletet" element={<DeleteTenant/>}> </Route> 
    <Route exact path="/updatet/:tenantid" element={<UpdateTenant/>}> </Route> 
    <Route exact path="/readt" element={<ReadTenant/>}> </Route> 
    <Route exact path="/menut" element={<MenuTenant/>}> </Route>

    <Route exact path="/homell" element={<HomeLandlord/>}> </Route> 
    <Route exact path="/addll" element={<AddLandlord/>}> </Route> 
    <Route exact path="/deletell" element={<DeleteLandlord/>}> </Route> 
    <Route exact path="/updatell" element={<UpdateLandlord/>}> </Route> 
    <Route exact path="/viewll" element={<ViewLandlord/>}> </Route> 
    <Route exact path="/menull" element={<MenuLandlord/>}> </Route>    

    <Route exact path="/homef" element={<HomeFlat/>}> </Route> 
    <Route exact path="/addf" element={<AddFlats/>}> </Route> 
    <Route exact path="/deletef" element={<DeleteFlats/>}> </Route> 
    <Route exact path="/updatef" element={<UpdateFlat/>}> </Route> 
    <Route exact path="/showf" element={<ShowFlats/>}> </Route> 
    <Route exact path="/menuf" element={<MenuFlat/>}> </Route> 

    </Routes>
    </BrowserRouter>
    
    
    </div>
  );
}

export default App;
