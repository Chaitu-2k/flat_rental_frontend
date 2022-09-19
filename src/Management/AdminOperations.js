import React from 'react'
import { useNavigate } from 'react-router';

const AdminOperations = () => {
  const navigate=useNavigate();
  return (
    <div>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <div className="container">
      <div className="mt-5">
        <div className="d-style btn btn-brc-tp border-2 bgc-white btn-outline-blue btn-h-outline-blue btn-a-outline-blue w-100 my-2 py-3 shadow-sm">
          
          <div className="row align-items-center">
            <div className="col-12 col-md-4">
              <h4 className="pt-3 text-170 text-600 text-primary-d1 letter-spacing">
                User Management
              </h4>
             
            </div>
            
            <div className="col-12 col-md-4 text-center">
              <a href="#" className="f-n-hover btn btn-info btn-raised px-4 py-25 w-75 text-600">Get Started</a>
            </div>
          </div>
        </div>
        <div className="d-style bgc-white btn btn-brc-tp btn-outline-green btn-h-outline-green btn-a-outline-green w-100 my-2 py-3 shadow-sm border-2">
         
          <div className="row align-items-center">
            <div className="col-12 col-md-4">
              <h4 className="pt-3 text-170 text-600 text-green-d1 letter-spacing">
                Falt Management
              </h4>
              <div className="text-secondary-d2 text-120">
                <div className="text-danger-m3 text-90 mr-1 ml-n4 pos-rel d-inline-block">
                 
                </div>
                
              </div>
            </div>
            
            <div className="col-12 col-md-4 text-center">
              <a href="#" className="f-n-hover btn btn-success btn-raised px-4 py-25 w-75 text-600" onClick={()=>{navigate('/homef')}}>Get Started</a>
            </div>
          </div>
        </div>
        <div className="d-style btn btn-brc-tp border-2 bgc-white btn-outline-purple btn-h-outline-purple btn-a-outline-purple w-100 my-2 py-3 shadow-sm">
          <div className="row align-items-center">
            <div className="col-12 col-md-4">
              <h4 className="pt-3 text-170 text-600 text-yellow-d1 letter-spacing">
                Flat Booking Management
              </h4>
              
            </div>
            
            <div className="col-12 col-md-4 text-center">
              <a href="#" className="f-n-hover btn btn-warning btn-raised px-4 py-25 w-75 text-600">Get Started</a>
            </div>
          </div>
        </div>
        <div className="d-style btn btn-brc-tp border-2 bgc-white btn-outline-red btn-h-outline-red btn-a-outline-red w-100 my-2 py-3 shadow-sm">
          <div className="row align-items-center">
            <div className="col-12 col-md-4">
              <h4 className="pt-3 text-170 text-600 text-red-d1 letter-spacing">
                LandLord Management
              </h4>
              
            </div>
            
            <div className="col-12 col-md-4 text-center">
              <a href="#" className="f-n-hover btn btn-danger btn-raised px-4 py-25 w-75 text-600" onClick={()=>{navigate('/homell')}}>Get Started</a>
            </div>
          </div>
        </div>
        <div className="d-style btn btn-brc-tp border-2 bgc-white btn-outline-purple btn-h-outline-purple btn-a-outline-purple w-100 my-2 py-3 shadow-sm">
          <div className="row align-items-center">
            <div className="col-12 col-md-4">
              <h4 className="pt-3 text-170 text-600 text-black-d1 letter-spacing">
                Tenant Management
              </h4>
              
            </div>
            
            <div className="col-12 col-md-4 text-center">
              <a href="#" className="f-n-hover btn btn-dark btn-raised px-4 py-25 w-75 text-600" onClick={()=>{navigate('/homet')}}>Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AdminOperations
