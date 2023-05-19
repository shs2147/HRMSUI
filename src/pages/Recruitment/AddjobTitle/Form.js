import { useState } from "react";
import swal from 'sweetalert';
import MaterialTable from "@material-table/core";
// import { json } from "react-router-dom";

const AddJobTitle = () => {
  const [data, setData] = useState({
    id:'',
    jobTitles: '',
    
  });
  const[jobDetails,setJobDetails]=useState([]);

  const inputChangeHandler = (e) => {
    let newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData)

  }
  const submitHandler = () => {
    console.log(JSON.stringify(data))
    fetch("https://apihrms.atwpl.com/addJobTitle/save", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "appliction/json" },
      body: JSON.stringify(data)
    }).then(() => {
      console.log("AddJobTitle is added")
      swal("Success", "Job Title Added Successfully", "success");
    })
  }
  const options = { method: "GET" };

  fetch("https://apihrms.atwpl.com/addJobTitle/getJob", options)
    .then((response) => response.json())
    .then((response) => setJobDetails(response))
    .catch((err) => console.error(err));


    return (
      <>
      <div className='container ' >
        <h3>Add Job Titles</h3>
        <div className='form-control '>
          <div className="row mx-2">
            <div className="col-sm-6">
              <label class="form-label">Job Titles</label><br />
              <input placeholder="Enter job title..." value={data.jobTitles} type="text" className="form-control" id="formGroupExampleInput" name="jobTitles" onChange={inputChangeHandler} />
            </div>
          </div>
          <button onClick={submitHandler} className="btn btn-primary btn-sm my-3 mx-5 ">Save</button>
        </div>

      </div>
      <MaterialTable
      columns={[
        {
          title: "Job Title",
          field: "jobTitles",
        }
      ]}
      data={jobDetails}
      title="Job Titles"
    />
    </>
    )
  }

  export default AddJobTitle