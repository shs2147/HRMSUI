import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import swal from 'sweetalert';
import Validation from '../../../validation/Validation'
// import { useForm } from "react-hook-form";
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from "@coreui/bootstrap-react";
// import React,{ useState } from "react";
const formData = {
  employeeName: "",
  mobile: "",
  email: "",
  
}

const AddEmployee = () => {
  const [show, setShow] = useState([]);
  // const [itemshow, setItemshow] = useState([]);
  // const { register, handleSubmit, formState: { errors } } = useForm();
  const [report, setReport] = useState([]);
  const[user,setUser]=useState([]);
  const [emp, setEmp] = useState([]);
  const [dep,setDep]=useState([]);
  // const [names,setNames]=useState([]);

  // const [data, setData] = useState({
  //   name: "",
  // });

  const [data, setData] = useState(formData);
  const { email,mobile} = data;
  const [showError, setShowError] = useState(false);
  const [itemshow, setItemshow] = useState([]);


  const inputChangeHandler = (e) => {
    let newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    // console.log(JSON.stringify(newData))
  };


  const fetchData = () => {
    fetch("http://localhost:8080/designation/fetchalldesignation", {})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShow(data);
      });
  };
  const fetchData4 = () => {
    fetch("http://localhost:8080/usermaster/fetchAll", {})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setReport(data);
      });
  };
  const fetchData1 = () => {
    fetch("http://localhost:8080/department/getall", {})
      .then((response) => {
        return response.json();
      })
      .then((dep) => {
        setDep(dep);
      });
  };
  const fetchData2 = () => {
    fetch("http://localhost:8080/getallEmp", {})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEmp(data);
      });
  };
  const fetchData3 = () => {
    fetch("http://localhost:8080/branch/fetchdata", {})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItemshow(data);
      });
  };
  const fetchData5 = () => {
    fetch("http://localhost:8080/basic/fetchdata", {})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data);
      });
  };
  useEffect(() => {
    fetchData();
    fetchData1();
    fetchData2();
    fetchData3();
    fetchData4();
    fetchData5();
  }, []);

  const submitHandler1 = (e)=>{
    setShowError(true);
    if(
      !Validation.email(email)&&
      
      !Validation.mobile(mobile)
      
    ){
      alert("fill all the details")
    }
        else {
          setShowError(false)

          
          setData({});
        
    

    fetch("http://localhost:8080/basic/saveemployee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("Basic Information Added");
        swal("Success", "Data Added Successfully", "success").then(()=>{
          window.location.reload(true)
        })
      })
      .catch((err) => console.log(err));
    console.log(JSON.stringify(data));
  }
}

  const submitHandler = (e) => {

    setData({});

// if(
//   !Validation.email(email)&&
  
//   !Validation.mobile(mobile)
  
// ){
//   alert("fill all the details")
// }
    // else if (
    //   !Validation.email(email) 
    //   )
    //   {
    //     alert("fill your email")
    //   }
    //   // else if(
    //   //   !Validation.password(password)
    //   // ){
    //   //   alert("fill your password")
    //   // }
    //   // else if(
    //   //   !Validation.aadharValidate(aadhaarNumber)
    //   // ){
    //   //   alert("fill aadhar number")
    //   // }
    //   else if(
    //     !Validation.mobile(mobile)
    //   )
    //   {
    //     alert("fill your pan number")
    //   }
   
    //e.preventDefault();
    // alert("Success");
    // else {
    //   setShowError(false)
      // alert("Your data has been saved successfully!!")
      
    // console.log(JSON.stringify(data));
    // fetch("http://localhost:8080/basic/saveemployee", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(() => {
    //     console.log("Basic Information Added");
    //   })
    //   .catch((err) => console.log(err));
    console.log(JSON.stringify(data));
    fetch("http://localhost:8080/work/savework", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("Save info Added");
        swal("Success", "Data Added Successfully", "success");
      })
      .catch((err) => console.log(err));
    // console.log(JSON.stringify(data));
    fetch("http://localhost:8080/bank/savebankinginfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("banking Added");
      })
      .catch((err) => console.log(err));
    console.log(JSON.stringify(data));
    fetch("http://localhost:8080/saveemergencycontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("emergency Added");
      })
      .catch((err) => console.log(err));
  
};
  //  const submitHandler=(e)=>{
  //     e.preventDefault();
  //  }
  // function AddEmployee() {

  // const basicHandler = () => {
  //     setshowBasic(!showBasic);
  // }
  // const workHandler = () => {
  //     setshowWork(!showWork);
  // }
  // const bankingHandler = () => {
  //     setshowbank(!showbank);
  // }
  // const emergencyHandler = () => {
  //     setshowEmergency(!showEmergency);
  // }
  return (
    <>
      <h2 className="mb-4">Add Employee</h2>

      <CAccordion activeItemKey={1}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Basic Information</CAccordionHeader>
          <CAccordionBody>
          <form action="">
            <div className="container">
              <div className="bg-light">
                <div className="row ">
                  {/* <div className=" col-sm-2">
                                                <label className="form-label">Employee ID:</label><br />
                                                <input value={data.employeeId} type="text" className="form-control" id="formGroupExampleInput" name='employeeId' onChange={inputChangeHandler} />
                                            </div> */}
                {/* <div className=" col-sm-4">
                    <label className="form-label">Employee Id:</label>
                    <div>
                      <Form.Control
                        value={data.employeeId}
                        placeholder='Enter employee Id'
                        type="text"
                        name="employeeId"
                        onChange={inputChangeHandler}
                        required
                      ></Form.Control>
                    </div>
                  </div> */}

                  <div className=" col-sm-4">
                    <label for="cars" id="label">
                      Employee Name:
                    </label>
                    {/* <label> */}
                    <input
                      value={data.employeeName}
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      name="employeeName"
                      onChange={inputChangeHandler}
                      placeholder="Enter Your Name"
                      list="employee"
                      required
                    />
                    <datalist id="employee">
                    {report.map((saurabh) => (
                        <option value={saurabh.employeeName}>
                          {/* {saurabh.employeeName} */}
                        </option>
                      ))}
                    </datalist>
                    
                    {/* </label> */}
                  </div>
                  <div className="col-sm-4 ">
                    <label for="cars" id="label">
                      Company:
                    </label>
                    <br />
                    <select  required
                      valueType={data.whichCompany}
                      className="form-select"
                      aria-label="Default select example"
                      name="whichCompany"
                      onChange={inputChangeHandler}
                     
                    >
                      <option selected disabled value="">
                        ---Select Company---
                      </option>
                      <option valueType="ahomTechnologies">
                        Ahom Technologies
                      </option>
                    </select>
                  </div>
                  <div className="col-sm-4 ">
                    <label for="cars" id="label">
                      Select Department:
                    </label>
                    <br />
                    <select required
                      valueType={data.selectDepartment}
                      className="form-select"
                      aria-label="Default select example"
                      name="selectDepartment"
                      onChange={inputChangeHandler}
                    >
                      <option selected disabled value="">
                        ---Select Department---
                      </option>
                      <option valueType="ahomTechnologies">
                        Java
                      </option>
                      {dep.map((saurabh) => (
                        <option valueType={saurabh.departmentName}>
                          {saurabh.departmentName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-sm-4 ">
                    <label className="form-label" for="cars" id="label">
                      Designation:
                    </label>

                    <select required
                      valueType={data.designation}
                      className="form-select"
                      aria-label="Default select example"
                      name="designation"
                      onChange={inputChangeHandler}
                    >
                      <option selected disabled value="">
                        ---Select Designation---
                      </option>
                      {show.map((saurabh) => (
                        <option valueType={saurabh.designationName}>
                          {saurabh.designationName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className=" col-sm-4">
                    <label className="form-label">Email:</label>
                    <br />
                    <input
                      value={data.email}
                      type="email"
                      
                      className="form-control"
                      id="formGroupExampleInput"
                      name="email"
                      onChange={inputChangeHandler}
                      placeholder="Enter Your Email"
             isInvalid={showError && !Validation.empty(data?.email)}
                      required
                    />
                  </div>
                  <div className=" col-sm-4">
                    <label className="form-label">Mobile:</label>
                    <br />
                    <input
                      value={data.mobile}
                      type="phone"mobile
                      className="form-control"
                      id="formGroupExampleInput"
                      name="mobile"
                      onChange={inputChangeHandler}
                      placeholder="Enter your Mobile No."
                      maxlength='10'
                      required
                    />
                  </div>
                  <div className=" col-sm-4">
                    <label className="form-label">CTC:</label>
                    <br />
                    <input
                      value={data.ctc}
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      name="ctc"
                      onChange={inputChangeHandler}
                      placeholder="Enter your CTC."
                      required
                    />
                  </div>
                  <div className=" col-sm-4">
                    <label className="form-label">Pf Number:</label>
                    <br />
                    <input
                      value={data.pfnumber}
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      name="pfnumber"
                      onChange={inputChangeHandler}
                      placeholder="Enter pf number  ."
                      maxlength='12'
                      required
                    />
                  </div>
                  <div className=" col-sm-4">
                    <label className="form-label">PAN Number:</label>
                    <br />
                    <input
                      value={data.panNumber}
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      name="panNumber"
                      onChange={inputChangeHandler}
                      placeholder="Enter PAN Number  ."
                      required
                    />
                  </div>
                  <div className=" col-sm-4">
                    <label className="form-label">Aadhar Number:</label>
                    <br />
                    <input
                      value={data.aadhaarNumber}
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      name="aadhaarNumber"
                      onChange={inputChangeHandler}
                      placeholder="Enter Aadhaar Number  ."
                      required
                    />
                  </div>

                  <div className="col-sm-4 ">
                    <label className="form-label" for="cars" id="label">
                      Reporting To:
                    </label>

                    <select required
                      valueType={data.reportingTo}
                      className="form-select"
                      aria-label="Default select example"
                      name="reportingTo"
                      onChange={inputChangeHandler}
                    >
                      <option selected disabled value=''>
                        ---Reporting To---
                      </option>
                      {report.map((e) => (
                        <option valueType={e.employeeName}>
                          {e.employeeName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-sm-4 ">
                    <label className="form-label" for="cars" id="label">
                      Work Type:
                    </label>

                    <select required
                      valueType={data.workType}
                      className="form-select"
                      aria-label="Default select example"
                      name="workType"
                      onChange={inputChangeHandler}
                    >
                      <option value=''>---select Type---</option>
                      <option value="permanent">Technical</option>
                      <option value="probation">Non-Technical</option>
                      {/* {show.map(saurabh=>( <option valueType={saurabh.workType}>{saurabh.workType}</option>))} */}
                    </select>
                    
                  </div>

                  <div className=" col-sm-4">
                    <label className="form-label">Joining Date:</label>
                    <div>
                      <Form.Control
                      input
                        required
                        value={data.joiningDate}
                        type="date"
                        name="joiningDate"
                        onChange={inputChangeHandler}
                      ></Form.Control>
                    </div>
                  </div>
                
                  <div className=" col-sm-4">
                    <label className="form-label">DOB:</label>
                    <div>
                      <Form.Control
                        value={data.dob}
                        type="date"
                        name="dob"
                        onChange={inputChangeHandler}
                        required
                      ></Form.Control>
                    </div>
                  </div>
                 
                 
                  <div className="my-4">
                    <button
                    type="submit"
                    className="btn btn-primary mx-2"
                    onClick={submitHandler1}
                    >
                      save
                    </button>
                    </div>




                </div>
              </div>
            </div>
            </form>


          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={2}>

          {/* =========workInformation========== */}
          <CAccordionHeader>Work Information</CAccordionHeader>
          <CAccordionBody>
            <div className="container">
              <div className="bg-light">
                <div className="row ">

                <div className="col-sm-3 ">
                    <label className="form-label" for="cars" id="label">
                      Employee Id:
                    </label>

                    <select
                      valueType={data.employeeId}
                      className="form-select"
                      name="employeeId"
                      onChange={inputChangeHandler}
                      >
                        <option selected disabled >
                          Select ID
                        </option>
                          {user.map((e)=>(
                          <option valueType={e.employeeId}>
                            {e.employeeId}
                            </option>
                          
                        ))}
                        
                      
                    </select>
                  </div>

                <div className="col-sm-3 ">
                    <label className="form-label" for="cars" id="label">
                      Employee Name:
                    </label>

                    <select
                      valueType={data.employeeName}
                      className="form-select"
                      name="employeeName"
                      onChange={inputChangeHandler}
                      >
                        <option selected disabled >
                          Select Name
                        </option>
                          {user.map((e)=>(
                          <option valueType={e.employeeName}>
                            {e.employeeName}
                            </option>
                          
                        ))}
                        
                      
                    </select>
                  </div>
                  <div className="col-sm-3 ">
                  
                  <div >
                    <label className="form-label" for="cars" id="label">
                      Employement type:
                    </label>

                    <select
                      value={data.employmentType}
                      className="form-select form-control"
                      aria-label="Default select example"
                      name="employmentType"
                      onChange={inputChangeHandler}
                    >
                      <option selected disabled>---Select Employment Type---</option>
                      <option value="permanent">Permanent</option>
                      <option value="probation">Probation</option>
                     
                    </select>
                    </div>
                  </div>
                  <div className="col-sm-3 ">
                    <label className="form-label" for="cars" id="label">
                      Office Branch:
                    </label>

                    <select
                      value={data.officeBranch}
                      className="form-select"
                      aria-label="Default select example"
                      name="officeBranch"
                      onChange={inputChangeHandler}
                    >
                      <option selected disabled>
                        Select Branch
                      </option>
                      {itemshow.map((e) => (
                        <option valueType={e.name}>{e.name}</option>
                      ))}
                     
                    </select>
                  </div>
                  {/* <div className="col-sm-3 ">
                    <label className="form-label" for="cars" id="label">
                      Employee Grade:
                    </label>

                    <select
                      value={data.employeeGrade}
                      className="form-select"
                      aria-label="Default select example"
                      name="employeeGrade"
                      onChange={inputChangeHandler}
                    >
                      <option selected disabled>
                        Select Employee Grade{" "}
                      </option>
                      <option value="A+">A+</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                    </select>
                  </div> */}
                  {/* <div className="col-sm-3 ">
                    <label className="form-label" for="cars" id="label">
                      Employee Group:
                    </label>

                    <select
                      value={data.employeeGroup}
                      className="form-select"
                      aria-label="Default select example"
                      name="employeeGroup"
                      onChange={inputChangeHandler}
                    >
                      <option selected disabled>
                        Choose Employee Group
                      </option>
                      <option value="abcd">abcd</option>
                      <option value="defg">defg</option>
                      <option value="hijk">hijk</option>
                      <option value="slmno">lmno</option>
                    </select>
                  </div> */}
                  {/* <div className="col-sm-3 ">
                    <label className="form-label" for="cars" id="label">
                      Insurance avail:
                    </label>

                    <select
                      value={data.insuranceAvail}
                      className="form-select"
                      aria-label="Default select example"
                      name="insuranceAvail"
                      onChange={inputChangeHandler}
                    >
                      <option selected disabled>
                        Select insurance
                      </option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div> */}
                  <div className="col-sm-3 ">
                    <label className="form-label" for="cars" id="label">
                      Gender:
                    </label>

                    <select
                      value={data.gender}
                      className="form-select"
                      aria-label="Default select example"
                      name="gender"
                      onChange={inputChangeHandler}
                    >
                      <option selected disabled>
                        Gender
                      </option>
                      <option value="abcd">Male</option>
                      <option value="defg">Female</option>
                    </select>
                  </div>
                  <div className="col-sm-3 ">
                    <label className="form-label" for="cars" id="label">
                      Blood Group:
                    </label>

                    <select
                      value={data.bloodGroup}
                      className="form-select"
                      aria-label="Default select example"
                      name="bloodGroup"
                      onChange={inputChangeHandler}
                    >
                      <option selected disabled>
                        Group
                      </option>
                      <option value="abcd">A+</option>
                      <option value="defg">A-</option>
                      <option value="hijk">B+</option>
                      <option value="slmno">B-</option>
                      <option value="abcd">O+</option>
                      <option value="defg">O-</option>
                      <option value="hijk">AB+</option>
                      <option value="slmno">AB-</option>
                    </select>
                  </div>
                  {/* <div className="col-sm-3 ">
                    <label className="form-label" for="cars" id="label">
                      Incentive:
                    </label>

                    <input
                      value={data.incentive}
                      type="number"
                      className="form-control"
                      id="formGroupExampleInput"
                      name="incentive"
                      onChange={inputChangeHandler}
                      placeholder="Enter Incentive"
                      required
                    />
                  </div> */}
                  <div className="col-sm-3 ">
                                                <label className="form-label" for="cars" id='label'>Employee type:</label>

                                                <select value={data.employeeType} className="form-select" aria-label="Default select example" name='employeeType' onChange={inputChangeHandler}>
                                                    <option selected disabled>Choice</option>
                                                    <option value="abcd">Permanent</option>
                                                    <option value="defg">Under-Probation</option>
                                                </select>
                                            </div>
                  {/* <div className=" col-sm-3">
                    <label className="form-label">Value:</label>
                    <br />
                    <input
                      value={data.value}
                      type="number"
                      className="form-control"
                      id="formGroupExampleInput"
                      name="value"
                      onChange={inputChangeHandler}
                      placeholder="Enter Value"
                      required
                    />
                  </div> */}
                  {/* <div className=" col-sm-3">
                    <label className="form-label">Effective Date:</label>
                    <div>
                      <Form.Control
                        required
                        value={data.effectiveDate}
                        type="date"
                        name="effectiveDate"
                        onChange={inputChangeHandler}
                      ></Form.Control>
                    </div>
                  </div> */}
                  {/* <div className=" col-sm-3">
                    <label className="form-label">PF Account No:</label>
                    <br />
                    <input
                      value={data.pfAccountNo}
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      name="pfAccountNo"
                      onChange={inputChangeHandler}
                      placeholder="Enter PF Number"
                      required
                    />
                  </div> */}
                  {/* <div className=" col-sm-3">
                    <label className="form-label">ESI No:</label>
                    <br />
                    <input
                      value={data.esiNo}
                      type="number"
                      className="form-control"
                      id="formGroupExampleInput"
                      name="esiNo"
                      onChange={inputChangeHandler}
                      placeholder="Enter ESI Number"
                      required
                    />
                  </div> */}
                  {/* <div className=" col-sm-3">
                    <label className="form-label">CIN No:</label>
                    <br />
                    <input
                      value={data.cinNo}
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      name="cinNo"
                      onChange={inputChangeHandler}
                      placeholder="Enter CIN Number"
                      required
                    />
                  </div> */}
                  {/* <div className=" col-sm-3">
                    <label className="form-label">Leaving Date:</label>
                    <div>
                      <Form.Control
                        required
                        value={data.leavingDate}
                        type="date"
                        name="leavingDate"
                        onChange={inputChangeHandler}
                      ></Form.Control>
                    </div>
                  </div> */}
                  <div className="col-sm-4">
                    <label className="form-label">Address:</label>
                    <br />
                    <textarea
                      value={data.address}
                      className="form-control"
                      id="my box"
                      rows="3"
                      name="address"
                      placeholder="Enter Address here"
                      onChange={inputChangeHandler}
                    ></textarea>
                  </div>
                  <div className="col-sm-4 pb-4">
                    <label className="form-label"> Description:</label>
                    <br />
                    <textarea
                      value={data.description}
                      className="form-control"
                      id="my box"
                      rows="3"
                      name="description"
                      placeholder="Write Something here..."
                      onChange={inputChangeHandler}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={3}>





          <CAccordionHeader>Banking Information</CAccordionHeader>
          <CAccordionBody>
            <div className="container">
              <div className="bg-light">
                <div className="row ">
                <div className="col-sm-6 ">
                    <label className="form-label" for="cars" id="label">
                      Employee Id:
                    </label>

                    <select
                      valueType={data.employeeId}
                      className="form-select"
                      name="employeeId"
                      onChange={inputChangeHandler}
                      >
                        <option selected disabled >
                          Select ID
                        </option>
                          {user.map((e)=>(
                          <option valueType={e.employeeId}>
                            {e.employeeId}
                            </option>
                          
                        ))}
                        
                      
                    </select>
                  </div>
                <div className=" col-sm-6">
                    <label className="form-label">Name (As Per Bank Record):</label>
                    <br />
                    <input
                      value={data.name}
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      name="name"
                      onChange={inputChangeHandler}
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>
                 
                  <div className=" col-sm-6">
                    <label className="form-label">Bank Name:</label>
                    <br />
                    <input
                      value={data.bankName}
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      name="bankName"
                      onChange={inputChangeHandler}
                      placeholder="Enter Bank Name"
                      required
                    />
                  </div>
                  <div className=" col-sm-6">
                    <label className="form-label">Bank Branch:</label>
                    <br />
                    <input
                      value={data.bankBranch}
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      name="bankBranch"
                      onChange={inputChangeHandler}
                      placeholder="Enter Bank Branch"
                      required
                    />
                  </div>
                  <div className=" col-sm-6">
                    <label className="form-label">Bank Account No:</label>
                    <br />
                    <input
                      value={data.bankAccountNo}
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      name="bankAccountNo"
                      onChange={inputChangeHandler}
                      placeholder="Enter Account Number"
                      required
                    />
                  </div>
                  <div className=" col-sm-6">
                    <label className="form-label">IFSC Code:</label>
                    <br />
                    <input
                      value={data.ifscCode}
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      name="ifscCode"
                      onChange={inputChangeHandler}
                      placeholder="Enter IFSC Code"
                      required
                    />
                  </div>
                  {/* <div className=" col-sm-6">
                    <label className="form-label" for="cars" id="label">
                      Payment type:
                    </label>

                    <select
                      value={data.paymentType}
                      className="form-select"
                      aria-label="Default select example"
                      name="paymentType"
                      onChange={inputChangeHandler}
                    >
                      <option selected disabled>
                        Choice Payment type
                      </option>
                      <option value="slmno">Cash</option>
                      <option value="defg">Cheque</option>
                      <option value="abcd">RTGS</option>
                      <option value="hijk">NEFT</option>
                    </select>
                  </div> */}
                  
                </div>
              </div>
            </div>
          </CAccordionBody>
        </CAccordionItem>




        <CAccordionItem itemKey={4}>
          <CAccordionHeader>Emergency Contact Information</CAccordionHeader>
          <CAccordionBody>
            <div className="container">
              <div className="bg-light">
                <div className="row ">

                <div className="col-sm-6 ">
                    <label className="form-label" for="cars" id="label">
                      Employee Id:
                    </label>

                    <select
                      valueType={data.employeeId}
                      className="form-select"
                      name="employeeId"
                      onChange={inputChangeHandler}
                      >
                        <option selected disabled >
                          Select ID
                        </option>
                          {user.map((e)=>(
                          <option valueType={e.employeeId}>
                            {e.employeeId}
                            </option>
                          
                        ))}
                        
                      
                    </select>
                  </div>
                <div className=" col-sm-6">
                    <label className="form-label">Employee Name:</label>
                    <br />
                    <input
                      value={data.employeeName}
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      name="employeeName"
                      onChange={inputChangeHandler}
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className=" col-sm-6">
                    <label className="form-label">Contact Name:</label>
                    <br />
                    <input
                      value={data.emergencyContactName}
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      name="emergencyContactName"
                      onChange={inputChangeHandler}
                      placeholder="Enter Contact Name"
                    />
                  </div>
                  <div className=" col-sm-6">
                    <label className="form-label">Mobile Number:</label>
                    <br />
                    <input
                      value={data.emergencyContactMobile}
                      type="phone"
                      className="form-control"
                      id="formGroupExampleInput"
                      name="emergencyContactMobile"
                      onChange={inputChangeHandler}
                      placeholder="Enter Mobile Number"
                    />
                  </div>
                  <div className=" col-sm-6">
                    <label className="form-label">Email:</label>
                    <br />
                    <input
                      value={data.emergencyContactEmail}
                      type="email"
                      className="form-control"
                      id="formGroupExampleInput"
                      name="emergencyContactEmail"
                      onChange={inputChangeHandler}
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className=" col-sm-6">
                    <label className="form-label">Address:</label>
                    <br />
                    <input
                      value={data.emergencyContactAddress}
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      name="emergencyContactAddress"
                      onChange={inputChangeHandler}
                      placeholder="Enter Address"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      <div className=" my-4">
        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={submitHandler}
        >
          Save
        </button>
        {/* <button className="btn btn-info ">Back</button> */}
      </div>
    </>

    // <div >

    //     <h2 className='mb-4'>Add Employee</h2>
    //     <form onSubmit={submitHandler} className=' shadow-lg p-2 mb-5 bg-body rounded'>

    //         <p onClick={basicHandler} style={{ cursor: 'pointer' }}>Basic Information <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
    //             <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
    //         </svg></p>
    //         {showBasic && <form>
    //             <div className="container2">
    //                 <div className="bg-light">
    //                     <div onSubmit={{submitHandler}} className="row ">
    //                         <div className=" col-sm-2">
    //                             <label className="form-label">Employee ID:</label><br />
    //                             <input value={data.employeeId} type="text" className="form-control" id="formGroupExampleInput" name='employeeId' onChange={inputChangeHandler} />
    //                         </div>
    //                         <div className=" col-sm-4">
    //                             <label className="form-label">Employee Name:</label><br />
    //                             <input value={data.employeeName} type="text" className="form-control" id="formGroupExampleInput" name='employeeName'  onChange={inputChangeHandler} />
    //                         </div>
    //                         <div className="col-sm-3 ">
    //                             <label for="cars" id='label'>Which Company:</label>
    //                             <br />
    //                             <select valueType={data.whichCompany} className="form-select" aria-label="Default select example" name='whichCompany' onChange={inputChangeHandler}>
    //                                 <option selected disabled>---Select Company---</option>
    //                                 <option valueType="abcd">abcd</option>
    //                                 <option valueType="defg">defg</option>
    //                                 <option valueType="hijk">hijk</option>
    //                                 <option valueType="slmno">lmno</option>
    //                             </select>
    //                         </div>
    //                         <div className="col-sm-3 ">
    //                             <label for="cars" id='label'>Select Department:</label>
    //                             <br />
    //                             <select valueType={data.selectDepartment} className="form-select" aria-label="Default select example" name='selectDepartment' onChange={inputChangeHandler}>
    //                                 <option selected disabled>---Select Department---</option>
    //                                 <option valueType="abcd">abcd</option>
    //                                 <option valueType="defg">defg</option>
    //                                 <option valueType="hijk">hijk</option>
    //                                 <option valueType="slmno">lmno</option>
    //                             </select>
    //                         </div>
    //                         <div className="col-sm-4 ">
    //                             <label className="form-label" for="cars" id='label'>Designation:</label>

    //                             <select valueType={data.designation} className="form-select" aria-label="Default select example" name='designation' onChange={inputChangeHandler}>
    //                                 <option selected disabled>---Select Designation---</option>
    //                                 <option vavalueTypelue="abcd">abcd</option>
    //                                 <option valueType="defg">defg</option>
    //                                 <option valueType="hijk">hijk</option>
    //                                 <option valueType="slmno">lmno</option>
    //                             </select>
    //                         </div>
    //                         <div className=" col-sm-4">
    //                             <label className="form-label">Email:</label><br />
    //                             <input value={data.email} type="text" className="form-control" id="formGroupExampleInput" name='email' onChange={inputChangeHandler} />
    //                         </div>
    //                         <div className=" col-sm-4">
    //                             <label className="form-label">Mobile:</label><br />
    //                             <input value={data.mobile} type="text" className="form-control" id="formGroupExampleInput" name='mobile' onChange={inputChangeHandler} />
    //                         </div>
    //                         <div className=" col-sm-3">
    //                             <label className="form-label" >Joining Date:</label>
    //                             <div ><Form.Control value={data.joiningDate} type="date" name="joiningDate" onChange={inputChangeHandler}  ></Form.Control></div>
    //                         </div>
    //                         <div className="col-sm-3 ">
    //                             <label className="form-label" for="cars" id='label'>Reporting To:</label>

    //                             <select valueType={data.reportingTo} className="form-select" aria-label="Default select example" name='reportingTo' onChange={inputChangeHandler}>
    //                                 <option selected disabled>---Reporting To---</option>
    //                                 <option valueType="abcd">abcd</option>
    //                                 <option valueType="defg">defg</option>
    //                                 <option valueType="hijk">hijk</option>
    //                                 <option valueType="slmno">lmno</option>
    //                             </select>
    //                         </div>
    //                         <div className=" col-sm-3">
    //                             <label className="form-label" >DOB:</label>
    //                             <div ><Form.Control value={data.dob} type="date" name="dob" onChange={inputChangeHandler} ></Form.Control></div>
    //                         </div>
    //                         <div className="col-sm-3 ">
    //                             <label className="form-label" for="cars" id='label'>Work Type:</label>

    //                             <select valueType={data.workType} className="form-select" aria-label="Default select example" name='workType' onChange={inputChangeHandler}>
    //                                 <option selected disabled>---Permanent---</option>
    //                                 <option valueType="abcd">abcd</option>
    //                                 <option valueType="defg">defg</option>
    //                                 <option valueType="hijk">hijk</option>
    //                                 <option valueType="slmno">lmno</option>
    //                             </select>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>

    //         </form>}
    //         <hr style={{ width: '70vw' }} />
    //         <p onClick={workHandler} style={{ cursor: 'pointer' }}>Work Information <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
    //             <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
    //         </svg></p>
    //         {showWork && <form>
    //             <div className="container2">
    //                 <div className="bg-light">
    //                     <div className="row ">
    //                         <div className="col-sm-3 ">
    //                             <label className="form-label" for="cars" id='label'>Employement type:</label>

    //                             <select value={data.employementType} className="form-select form-control" aria-label="Default select example" name='employementType' onChange={inputChangeHandler}>
    //                                 <option selected disabled>Select Employement type</option>
    //                                 <option value="abcd">abcd</option>
    //                                 <option value="defg">defg</option>
    //                                 <option value="hijk">hijk</option>
    //                                 <option value="slmno">lmno</option>
    //                             </select>
    //                         </div>
    //                         <div className="col-sm-3 ">
    //                             <label className="form-label" for="cars" id='label'>Office Branch:</label>

    //                             <select value={data.officeBranch} className="form-select" aria-label="Default select example" name='officeBranch' onChange={inputChangeHandler}>
    //                                 <option selected disabled>Select Branch</option>
    //                                 <option value="abcd">abcd</option>
    //                                 <option value="defg">defg</option>
    //                                 <option value="hijk">hijk</option>
    //                                 <option value="slmno">lmno</option>
    //                             </select>
    //                         </div>
    //                         <div className="col-sm-3 ">
    //                             <label className="form-label" for="cars" id='label'>Employee Grade:</label>

    //                             <select value={data.employeeGrade} className="form-select" aria-label="Default select example" name='employeeGrade' onChange={inputChangeHandler}>
    //                                 <option selected disabled>Select Employee Grade </option>
    //                                 <option value="abcd">abcd</option>
    //                                 <option value="defg">defg</option>
    //                                 <option value="hijk">hijk</option>
    //                                 <option value="slmno">lmno</option>
    //                             </select>
    //                         </div>
    //                         <div className="col-sm-3 ">
    //                             <label className="form-label" for="cars" id='label'>Employee Group:</label>

    //                             <select value={data.employeeGroup} className="form-select" aria-label="Default select example" name='employeeGroup' onChange={inputChangeHandler}>
    //                                 <option selected disabled>Choose Employee Group</option>
    //                                 <option value="abcd">abcd</option>
    //                                 <option value="defg">defg</option>
    //                                 <option value="hijk">hijk</option>
    //                                 <option value="slmno">lmno</option>
    //                             </select>
    //                         </div>
    //                         <div className="col-sm-3 ">
    //                             <label className="form-label" for="cars" id='label'>Insurance avil:</label>

    //                             <select value={data.insuranceAvil} className="form-select" aria-label="Default select example" name='insuranceAvil' onChange={inputChangeHandler}>
    //                                 <option selected disabled>Select insurance</option>
    //                                 <option value="abcd">abcd</option>
    //                                 <option value="defg">defg</option>
    //                                 <option value="hijk">hijk</option>
    //                                 <option value="slmno">lmno</option>
    //                             </select>
    //                         </div>
    //                         <div className="col-sm-3 ">
    //                             <label className="form-label" for="cars" id='label'>Gender:</label>

    //                             <select value={data.gender} className="form-select" aria-label="Default select example" name='gender' onChange={inputChangeHandler} >
    //                                 <option selected disabled>Gender</option>
    //                                 <option value="abcd">Male</option>
    //                                 <option value="defg">Female</option>
    //                             </select>
    //                         </div>
    //                         <div className="col-sm-3 ">
    //                             <label className="form-label" for="cars" id='label'>Blood Group:</label>

    //                             <select value={data.bloodGroup} className="form-select" aria-label="Default select example" name='bloodGroup' onChange={inputChangeHandler}>
    //                                 <option selected disabled>Group</option>
    //                                 <option value="abcd">abcd</option>
    //                                 <option value="defg">defg</option>
    //                                 <option value="hijk">hijk</option>
    //                                 <option value="slmno">lmno</option>
    //                             </select>
    //                         </div>
    //                         <div className="col-sm-3 ">
    //                             <label className="form-label" for="cars" id='label'>Incentive:</label>

    //                              <input value={data.incentive} type="text" className="form-control" id="formGroupExampleInput" name='incentive' onChange={inputChangeHandler} />
    //                         </div>
    //                         <div className="col-sm-3 ">
    //                             <label className="form-label" for="cars" id='label'>Employee type:</label>

    //                             <select value={data.employeeType} className="form-select" aria-label="Default select example" name='employeeType' onChange={inputChangeHandler}>
    //                                 <option selected disabled>Choice</option>
    //                                 <option value="abcd">abcd</option>
    //                                 <option value="defg">defg</option>
    //                                 <option value="hijk">hijk</option>
    //                                 <option value="slmno">lmno</option>
    //                             </select>
    //                         </div>
    //                         <div className=" col-sm-3">
    //                             <label className="form-label">Value:</label><br />
    //                             <input value={data.value} type="text" className="form-control" id="formGroupExampleInput" name='value' onChange={inputChangeHandler} />
    //                         </div>
    //                         <div className=" col-sm-3">
    //                             <label className="form-label" >Effective Date:</label>
    //                             <div ><Form.Control value={data.effectiveDate} type="date" name="effectiveDate" onChange={inputChangeHandler} ></Form.Control></div>
    //                         </div>
    //                         <div className=" col-sm-3">
    //                             <label className="form-label">PF Account No:</label><br />
    //                             <input value={data.pfAccountNo} type="text" className="form-control" id="formGroupExampleInput"  name='pfAccountNo' onChange={inputChangeHandler} />
    //                         </div>
    //                         <div className=" col-sm-3">
    //                             <label className="form-label">ESI No:</label><br />
    //                             <input value={data.esiNo} type="text" className="form-control" id="formGroupExampleInput" name='esiNo' onChange={inputChangeHandler} />
    //                         </div>
    //                         <div className=" col-sm-3">
    //                             <label className="form-label">CIN No:</label><br />
    //                             <input  value={data.cinNo} type="text" className="form-control" id="formGroupExampleInput" name='cinNo'  onChange={inputChangeHandler}/>
    //                         </div>
    //                         <div className=" col-sm-3">
    //                             <label className="form-label" >Leaving Date:</label>
    //                             <div ><Form.Control value={data.leavingDate} type="date" name="leavingDate" onChange={inputChangeHandler} ></Form.Control></div>
    //                         </div>
    //                         <div className="col-sm-14">
    //                             <label className="form-label">Address:</label><br />
    //                             <textarea value={data.address} className='form-control' id='my box' rows="3" name='address' onChange={inputChangeHandler}></textarea>
    //                         </div>
    //                         <div className="col-sm-14 pb-4">
    //                             <label className="form-label"> Description:</label><br />
    //                             <textarea value={data.description} className='form-control' id='my box' rows="3" name='description' onChange={inputChangeHandler}></textarea>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </form>}
    //         <hr style={{ width: '70vw' }} />
    //         <p onClick={bankingHandler} style={{ cursor: 'pointer' }}>Banking Information <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
    //             <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
    //         </svg></p>
    //         {showbank &&
    //             <form>
    //                 <div className="container2">
    //                     <div className="bg-light">
    //                         <div className="row ">
    //                             <div className=" col-sm-6">
    //                                 <label className="form-label">Bank Account No:</label><br />
    //                                 <input value={data.bankAccountNo} type="text" className="form-control" id="formGroupExampleInput"  name='bankAccountNo' onChange={inputChangeHandler}/>
    //                             </div>
    //                             <div className=" col-sm-6">
    //                                 <label className="form-label">Bank Name:</label><br />
    //                                 <input value={data.bankName} type="text" className="form-control" id="formGroupExampleInput" name='bankName' onChange={inputChangeHandler} />
    //                             </div>
    //                             <div className=" col-sm-6">
    //                                 <label className="form-label">Bank Branch:</label><br />
    //                                 <input value={data.bankBranch} type="text" className="form-control" id="formGroupExampleInput" name='bankBranch' onChange={inputChangeHandler} />
    //                             </div>
    //                             <div className=" col-sm-6">
    //                                 <label className="form-label">IFSC Code:</label><br />
    //                                 <input value={data.ifscCode} type="text" className="form-control" id="formGroupExampleInput" name='ifscCode' onChange={inputChangeHandler}/>
    //                             </div>
    //                             <div className=" col-sm-6">
    //                                 <label className="form-label" for="cars" id='label'>Payment type:</label>

    //                                 <select value={data.paymentType} className="form-select" aria-label="Default select example" name='paymentType' onChange={inputChangeHandler}>
    //                                     <option selected disabled>Choice Payment type</option>
    //                                     <option value="abcd">abcd</option>
    //                                     <option value="defg">defg</option>
    //                                     <option value="hijk">hijk</option>
    //                                     <option value="slmno">lmno</option>
    //                                 </select>
    //                             </div>
    //                             <div className=" col-sm-6">
    //                                 <label className="form-label">Pan:</label><br />
    //                                 <input value={data.pan} type="text" className="form-control" id="formGroupExampleInput" name='pan' onChange={inputChangeHandler}/>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </form>

    //         }
    //         <hr style={{ width: '70vw' }} />
    //         <p onClick={emergencyHandler} style={{ cursor: 'pointer' }}>Emergency Contact Information <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
    //             <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
    //         </svg></p>
    //         {showEmergency &&
    //             <form>
    //                 <div className="container2">
    //                     <div className="bg-light">
    //                         <div className="row ">
    //                             <div className=" col-sm-6">
    //                                 <label className="form-label">Emergency Contact Name:</label><br />
    //                                 <input value={data.emergencyContactName} type="text" className="form-control" id="formGroupExampleInput" name='emergencyContactName' onChange={inputChangeHandler}/>
    //                             </div>
    //                             <div className=" col-sm-6">
    //                                 <label className="form-label">Emergency Contact Mobile:</label><br />
    //                                 <input value={data.emergencyContactMobile} type="text" className="form-control" id="formGroupExampleInput" name='emergencyContactMobile' onChange={inputChangeHandler}/>
    //                             </div>
    //                             <div className=" col-sm-6">
    //                                 <label className="form-label">Emergency Contact Email:</label><br />
    //                                 <input value={data.emergencyContactEmail} type="text" className="form-control" id="formGroupExampleInput" name='emergencyContactEmail' onChange={inputChangeHandler}/>
    //                             </div>
    //                             <div className=" col-sm-6">
    //                                 <label className="form-label">Emergency Contact Address:</label><br />
    //                                 <input value={data.emergencyContactAddress} type="text" className="form-control" id="formGroupExampleInput" name='emergencyContactAddress' onChange={inputChangeHandler}/>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </form>
    //         }
    //         <div className=' my-4'>
    //             <button type='submit' className='btn btn-primary mx-2'>Save</button>
    //             <button className='btn btn-info '>Back</button>
    //         </div>
    //     </form>
    // </div>
  );
};

export default AddEmployee;
