import React, { useEffect, useState } from "react";
import Card from "././Dashboard/Card/Card";
import pic from "../components/img/pic.png";
import Calender from "./Dashboard/Calender/Calender";
import DasNav from "./Dashboard/Navbar/DasNav";
import "./dashboard.css";
import { NavItem } from "react-bootstrap";
//import axios from "axios";


function Dashboard() {
  const [data, setData] = useState([]);
  const [filteredData,setFilteredData] = useState([]);
  const[extractData,setExtractData]=useState([]);
  //let ln = 0;
  //const options = { method: "GET" };
  useEffect(() => {
    fetch("https://apihrms.atwpl.com/work/fetchData").then(response => response.json())
      .then(data=>{
        const filteredData=data.filter(item=>item.employmentType ==="permanent");
        
      setFilteredData(filteredData);})
      .catch(error =>console.log(error));},[]);

      useEffect(() => {
        fetch("https://apihrms.atwpl.com/work/fetchData").then(response => response.json())
          .then(data=>{
            const extractData=data.filter(item=>item.employmentType ==="probation");
            
          setExtractData(extractData);})
          .catch(error =>console.log(error));},[]);
   
  
  //   fetch("https://apihrms.atwpl.com/fetchdata", options)
  //     .then((response) => response.json())
  //     .then((response) => setData(response))

  //     .catch((err) => console.error(err));
  // }, []);

  // data.forEach(myFunction);

  // function myFunction(item) {
  //   ln++;
  // }
  console.log(data);
  // const ln = setData.length;
  // console.log(ln);
  return (
    <div style={{ maxwidth: "100vw" }}>
      <DasNav />

      <div
        className="carddisplay"
        style={{
          flexDirection: "row",
          display: "flex",
          flexWrap: "wrap",
          objectFit: "contain",
        }}
      >
        <Card img={pic} title="Permanent Employee" number={filteredData.length}/>
        <Card img={pic} title="Under Probation Employee" number={extractData.length} />
        {/* <Card img={pic} title="Permanent Employee" number="2" /> */}
      </div>

      <Calender />
      {/* {data.map((item) => (
        <tr>
          <td>{item.employeeId}</td>
          
        </tr>
      ))} */}
    </div>
  );
}

export default Dashboard;