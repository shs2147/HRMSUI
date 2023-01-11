import { CListGroup } from "@coreui/bootstrap-react";
import { useState, useEffect } from "react";


const ViewOtReport = () => {
  const [data, setData] = useState({
    // SelectEmoloyee:'',
    //   fromdate:'',
    //   todate:''
  });
  const [show, setShow] = useState([]);
  const inputChangeHandler = (e) => {
    let newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData)

  }
  const fetchData = () => {
    fetch("http://localhost:8080/basic/fetchdata", {
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
      })
  }
  // useEffect(() => {
  //   fetchData();
  // }, [])
  //  const submitHandler=(e)=>{
  //   e.preventDefault();
  //     console.log(JSON.stringify(data))
  //       fetch("http://localhost:8080/OverTimeReport/save",{
  //       method:"POST",
  //       headers:{"content-Type": "application/json", "Accept": "application/json"},
  //       body:JSON.stringify(data)
  //     }).then(()=>{
  //       console.log("OverTimeReport are added")})
  //  }
  const submitHandler = () => {
    fetch("http://localhost:8080/OverTime/fetch", {
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShow(data)
      })
  }
  useEffect(() => {
    fetchData();
    submitHandler();
  }, [])


  // console.log(data)


  // const columns =[
  //   {
  //     name: 'Employee Name',
  //     selector: (row) => row.selectEmployee
  //   },
  //   {
  //     name: ' SL',
  //     selector: (row) => row.employeeId
  //   },
  // ]

  return <>
    <div className="container">
      <h4>OverTime Report</h4>
      <hr className="100%" />
      <form onSubmit={submitHandler} className="bg-light">
        <div className="row ">


          <div className="col-sm-4 mt-1">
            <label for="cars" id='label'>Select Emoloyee:</label>
            <br />
            <select value={data.employee} class="form-select" aria-label="Default select example" name="employee" onChange={inputChangeHandler}>
              <option selected disabled>select employee</option>
              {show.map(aman=>( <option valueType={aman.employeeName}>{aman.employeeName}</option>))}
              {/* <option value="aman">Aman</option>
    <option value="amit">Amit</option>
    <option value="ranjan">Ranjan</option>
    <option value="saurav">Saurav</option> */}
            </select>
          </div>

          <div className="col-sm-4">

            <label class="form-label"> From Date :</label><br />
            <input value={data.fromtime} type="date" class="form-control" id="formGroupExampleInput" name="fromtime" onChange={inputChangeHandler} />
          </div>
          <div className="col-sm-4">
            <label class="form-label">To Date:</label><br />
            <input value={data.totime} type="date" class="form-control" id="formGroupExampleInput" name="totime" onChange={inputChangeHandler} />
          </div>
        </div>
        <button type="submit" onClick={submitHandler} className="btn btn-primary mt-4">View</button>
        <div className="container">

          <table class="table table2 bg-light">

            <thead>
              <tr>
                <th scope="col">SL</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Description</th>
                <th scope="col">Date</th>
                <th scope="col">Start Time</th>
                <th scope="col">End Time</th>
              </tr>
            </thead>
            <tbody>


{/* 
              {data.map(sauarabh => (<tr>

                <th scope="row">1</th>

                <td>{sauarabh.selectEmployee}</td>

                <td>{sauarabh.description}</td>

                <td>{sauarabh.date}</td>

                <td>{sauarabh.startTime}</td>

                <td>{sauarabh.endTime}</td>
                <td>

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">

                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />

                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />

                  </svg>



                </td>

              </tr>))}

 */}



            </tbody>



          </table>

        </div>
      </form>

      

    </div>

  </>
}

export default ViewOtReport;