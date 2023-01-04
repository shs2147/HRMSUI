import React from 'react'
import Card from '././Dashboard/Card/Card'
import pic from '../components/img/pic.png'
import Calender from './Dashboard/Calender/Calender'
import DasNav from "./Dashboard/Navbar/DasNav"


function Dashboard() {
  return (
    <div style={{maxwidth:'100%'}}>
      <DasNav />
      <div className='justify-content-around ' style={{ flexDirection: "row", display: 'flex',maxWidth:'fit-content' }}>
        <Card img={pic} title="Permanent Employee" number="2" />
        <Card img={pic} title="Permanent Employee" number="2" />
        <Card img={pic} title="Permanent Employee" number="2" />
      </div>
      <Calender />
    </div>
  )
}


export default Dashboard