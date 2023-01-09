import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';
import { Link, NavLink, useLocation } from 'react-router-dom'

const DasNav = () => {
   const location= useLocation();
   const handleSubmit=(e)=>{
    e.preventDefault();
    sessionStorage.removeItem('user');
    propTypes.history.push('/login');
    
   }
    // const logoutHandler=(e)=>{
    //     e.preventDefault();
    //     sessionStorage.setItem('token', null)
    //     location(-1)
    // }
    return (

        <div className="container4">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid homeBox">
                    <h2>Dashboard</h2>
                    <div style={{width:'15%'}} className='d-flex justify-content-between'>
                    <NavLink  style={{color:'teal'}} to='/' className=' mt-1' >
                        <button type="button" class="btn btn-outline-success" onClick={handleSubmit}>Log Out</button>
                    </NavLink>
                    {/* <button type="button" className="btn btn-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                        </svg>
                    </button> */}
                    <span class="navbar-text">
                    Dashboard
                    </span>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default DasNav