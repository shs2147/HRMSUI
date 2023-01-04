import axios from "axios";
import React, { useEffect, useState } from "react";

function Form() {

  const [data, setData] = useState({
 
  });
  useEffect(()=>{

  },[])

  function handleInput(e) {
    e.preventDefault();
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
    // console.log(JSON.stringify(newdata));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // axios
    //   .post(url, {
    //     from_date: data.from_date,
    //     to_date: data.to_date,
    //     employee: data.employee,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   });
    
    fetch("http://localhost:8080/attendance/save",{
      method:"POST",
      headers:{"Content-Type":"application/json","Accept":"application/json"},
      body:JSON.stringify(data)
    }).then(()=>{
      console.log("Attendance Details Accepted")

    })

     
  };
  const options = [
    { value: "", text: "--Choose an option--", disabled: true },
    { value: "apple", text: "Apple 🍏" },
    { value: "banana", text: "Banana 🍌" },
    { value: "kiwi", text: "Kiwi 🥝" },
  ];
  // const [selected, setSelected] = useState("");

  // const handleChange = (event) => {
  //   setSelected(event.target.value);
  // };
  return (
    <form className="py-2" onSubmit={handleSubmit}>
      <div className="row mb-3 mt-4 justify-content-evenly d-flex ">
        <div className="col-lg-3 mx-1  ">
          <label for="exampleFormControlInput1" className="form-label ">
            From Date:
          </label>
          <br/>
          <input
            onChange={handleInput}
            value={data.fromDate}
            name="fromDate"
            type="Date"
            className="form-control"
            id="Choose Type"
          />
        </div>
        <div className="col-sm-3 mx-3">
          <label for="exampleFormControlInput1" className="form-label">
            To Date:
          </label>
          <input
            onChange={handleInput}
            value={data.toDate}
            name="toDate"
            type="Date"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="col-sm-3 mx-3">
          <label for="formFile" className="form-label">
            Select Employee:
          </label>
          <br />

          <select className="form-control" onChange={handleInput} value={data.selectEmployee} name="selectEmployee">
            {options.map((option) => (
              <option
                disabled={option.disabled}
                key={option.value}
                value={option.value}
              >
                {option.text}
              </option>
            ))}
          </select>
        </div>
        <div className="row">
        <button type="submit" className="btn btn-outline-primary my-4 col-sm-2  mx-5">View Details</button>
        </div>
      </div>
      <table className=" mt-5 pb-5 row main">
      {/* <tr>
        <td className="col">
          <label for="exampleFormControlInput1" className="form-label ">
            Sl:
          </label>
          <br />
          <input
            style={{ width: 25, padding: 1 }}
            type="text"
            value={1}
            className=""
            id="Choose Type"
          />
        </td>
        <td className="col">
          <label for="exampleFormControlInput1" className="form-label ">
            Date:
          </label>
          <input type="Date" className="form-control" id="Choose Type" />
        </td>
        <td className="col">
          <label for="exampleFormControlInput1" className="form-label ">
            Employee:
          </label>
          <input
            value="Administrator"
            type="text"
            className="form-control"
            id="Choose Type"
          />
        </td>
        <td className="col ">
          <div className="">
            <label for="exampleFormControlInput1" className="form-label ">
              In Time:
            </label>
            <input type="time" className="form-control" id="Choose Type" />
          </div>
          <div className="">
            <label for="exampleFormControlInput1" className="form-label ">
              Out Time:
            </label>
            <input type="time" className="form-control" id="Choose Type" />
          </div>
        </td>
        <div className=" col justify-content-around d-flex ">
              <div className="mx-3">
          <label for="exampleFormControlInput1" className="form-label ">
            Edit:
          </label>
          <br />
          <button className="btn btn-outline-success">Edit</button>
        </div>
        <td className="">
          <label for="exampleFormControlInput1" className="form-label ">
            Delete:
          </label>
          <br />
          <button className="btn btn-outline-success">Delete</button>
        </td>
        </div>
        </tr> */}
      </table>
    </form>
  );
}

export default Form;
