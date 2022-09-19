import React from 'react'
import { useNavigate } from 'react-router';
const Home = () => {
    const navigate=useNavigate();

  return (
    <div>
       
        <div className="container mt-15 d-flex justify-content-center">
          <div className="row g-0">
            <div className="col-md-6 border-right">
              <div className="cards">
                <div className="first bg-white p-4 text-center">
            
            <h1 onClick={()=>{navigate('/admin')}}>Admin</h1>

                </div>
              </div>
            </div>
            <br></br>
            <div className="col-md-6 border-right">
              <div className="cards">
                <div className=" second bg-white p-4 text-center">
                <h1 onClick={()=>{navigate('/userreg')}}>User</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home
