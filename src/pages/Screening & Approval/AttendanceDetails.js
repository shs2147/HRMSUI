import React, { useState,useEffect } from "react";
import axios from "axios";
import MaterialTable from "@material-table/core";


function AttendanceDetails() {
const [formData, setFormData] = useState({ name: "",startdate: "",enddate: "",});
  const[data,setData]=useState([]); 
  const[view,setView]=useState([]);
  const[api,setApi]=useState([]);
 const handleSubmit = (e) => {
  e.preventDefault(); 
  axios.post("https://apihrms.atwpl.com/attendance/byDate", formData, 
  {headers: {"Content-Type": "application/x-www-form-urlencoded",},})
   .then((response) => {
    setView(response.data)
     console.log(response);})
    // .then((formData)=> {setView(formData); })
     .catch((error) => { console.log(error);}); };

     console.log(view);
      const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

      const submitHandler = () => {
        fetch("https://apihrms.atwpl.com/attendance/fetch", {
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setApi(data)
          })
      }
      useEffect(() => {
        // fetchData();
        submitHandler();
      }, [])

       return (
         <>
         <form onSubmit={handleSubmit}>
          <h2>Attendance Details</h2>
          <hr></hr>
          <div className="row">
         <div className="col-sm-4 mt-1">
            <label for="cars" id='label'>Select Emoloyee:</label>
              <br />
              {/* <input value={} /> */}
            <input value={formData.name} 
            class="form-select" aria-label="Default select example" 
            name="name"
            placeholder="Select Employee Name"
            onChange={handleChange} 
            list="employee"/> 
            <datalist id="employee" >
            {api.map(aman=>( <option valueType={aman.selectEmployee}>{aman.selectEmployee}</option>))}
            </datalist>
                
                
            {/* </input> */}
          </div>
           {/* <div>
           <label>Name:</label>
           <input type="text"name="name" value={formData.name} onChange={handleChange} />
           </div> */}
          <div className="col-sm-4">
              <label class="form-label"> From Date :</label><br />
              <input value={formData.startdate} type="date" class="form-control" id="formGroupExampleInput" name="startdate" onChange={handleChange} />
          </div>
           {/* <div>  
           <label>Start Date:</label>
           <input type="date" name="startdate" value={formData.startdate} onChange={handleChange} />
           </div>  */}
           <div className="col-sm-4">
              <label class="form-label"> To Date :</label><br />
              <input value={formData.enddate} type="date" class="form-control" id="formGroupExampleInput" name="enddate" onChange={handleChange} />
          </div>
           {/* <div> 
              <label>End Date:</label>
              <input type="date" name="enddate" value={formData.enddate} onChange={handleChange} />
            </div> */}
             </div>
            <button type="submit" className="btn btn-primary mt-4">View</button>
            {/* <button type="submit">Send to Postman</button>  */}
            </form> 
            <br></br>
            <MaterialTable 
            columns={
              [ 
                { title: "ID", field: "id", },
                 {title: "Employee Name",field: "selectEmployee", }, 
                 {title: "Date",field: "date", }, 
                 {title: "In Time",field: "inTime", }, 
                 {title: "Out Time",field: "outTime", }, 
                 {title: "Status",field: "status", }, 
                ]} 
               data={view}title="Attendence Record"/></> );}
            export default AttendanceDetails;

