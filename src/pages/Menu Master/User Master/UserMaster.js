import React, { useEffect } from 'react';
import { useState } from 'react';
import Validation from '../../../validation/Validation'
import { Button, Container, Form, Row,Col } from 'react-bootstrap';
import swal from 'sweetalert';

const formData = {
  userName: "",
  password: "",
  aadhaarNumber: "",
  departmentName: "",
  roleName:"",
  employeeName:"",
  panNumber:"",
}

export default function UserMaster() {

  const [data, setData] = useState(formData);
  const { userName, password, aadhaarNumber, departmentName ,roleName,employeeName,panNumber} = data;
  const [showError, setShowError] = useState(false);
  const [itemshow, setItemshow] = useState([]);

  const handleChange = (e) => {
  
    let newData = { ... data };
    newData[e.target.name]=e.target.value;
    setData(newData);
  };

  const FetchData1 = () => {
    fetch("http://localhost:8080/department/getall", {})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItemshow(data);
      });
    };

  useEffect(()=>{
    FetchData1();
  },[])

  const handleClick = (e) => {
   
    setShowError(true);
if(
  !Validation.email(userName)&&
  !Validation.password(password)&&
  !Validation.aadharValidate(aadhaarNumber)&&
  !Validation.panNumber(panNumber)
){
  alert("fill all the details")
}
    else if (
      !Validation.email(userName) 
      )
      {
        alert("fill your email")
      }
      else if(
        !Validation.password(password)
      ){
        alert("fill your password")
      }
      else if(
        !Validation.aadharValidate(aadhaarNumber)
      ){
        alert("fill aadhar number")
      }
      else if(
        !Validation.panNumber(panNumber)
      )
      {
        alert("fill your pan number")
      }
   
    else {
      
      setShowError(false)
      // alert("Your data has been saved successfully!!")
    
      setData({});
      console.log(JSON.stringify(data));
      fetch("http://localhost:8080/usermaster/saveuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(() => {
          swal("Success", "User Added Successfully", "success");
          console.log("User are Added");
        })
        .catch((err) => console.log(err));

    };
  }

  return (
    
      <div className="container">
        <div className="d-flex">
          <h3>Add User</h3>
          
        </div>
        <hr />
        <h6>Add/Edit User</h6>
       {/* <Container> */}
      <Form  className="bg-light">
      <Row className="mb-3">

      <Form.Group as={Col} sm={4} controlId="validationCustom05" className="mt-2">
            <Form.Label>Employee Name : </Form.Label>
            <Form.Control
              type='text'
              name='employeeName'
              placeholder='enter your  name'
              onChange={handleChange}
              value ={data.employeeName}
              isInvalid={showError && !Validation.maximum(data?.employeeName, 50)}
            />
            <Form.Control.Feedback type='invalid'>
              employee name is necessary
            </Form.Control.Feedback>
          </Form.Group>

      <Form.Group as={Col} sm={4} controlId="validationCustom01" className="mt-2">
            <Form.Label>User Name : </Form.Label>
            <Form.Control
              type='text'
              name='userName'
              placeholder='enter your email'
              onChange={handleChange}
              value ={data.userName}
              isInvalid={showError && !Validation.maximum(data?.userName, 50)}
            />
            <Form.Control.Feedback type='invalid'>
              user name is necessary
            </Form.Control.Feedback>
          </Form.Group>

      <Form.Group as={Col} sm={4} controlId="validationCustom07" className="mt-2">
      <Form.Label>Department Name : </Form.Label>
      <select
        
        
        valueType={data.department}
        class="form-select"
        aria-label="Default select example"
        name="departmentName"
        onChange={handleChange}
        required
        //isInvalid={showError && !Validation.maximum(data?.departmentName)}
        >
                
                
                <option>Select Department</option>
                <select selected disabled>
                  Select Department
                </select>
                {itemshow.map((aman) => (
                  <option valueType={aman.departmentName}>
                    {aman.departmentName}
                  </option>
                ))}
               
              
              </select>
              <Form.Control.Feedback type="invalid">
                {!data?.department ? "please select department name" : ""}
              </Form.Control.Feedback>
              </Form.Group>
            {/* <Form.Control
              type='text'
              name='userName'
              placeholder='enter your name'
              onChange={handleChange}
              value ={data.userName}
              isInvalid={showError && !Validation.maximum(data?.userName, 50)}
            />
            <Form.Control.Feedback type='invalid'>
              user name is necessary
            </Form.Control.Feedback> */}
    
        
          
        
         
        </Row>
        
      {/* <Container> */}
      <Row className="mb-3">
      <Form.Group as={Col} sm={4} controlId="validationCustom02" className="mt-2">
      <Form.Label>Role Name : </Form.Label>
              <select as={Row} sm={4} controlId="validationCustom07" className="mt-2"
                valueType={data.roleName}
                class="form-select"
                aria-label="Default select example"
                name="roleName"
                onChange={handleChange}
              >
      
                <option selected disabled>
                  Select Role
                </option>
                <option valueType="react JS">ADMIN</option>
                <option valueType="java">EMPLOYEE</option>
                {/* <option valueType="java">User</option> */}
              </select>
              </Form.Group>
            
          <Form.Group as={Col} sm={4} controlId="validationCustom03" className="mt-2">
            <Form.Label>Aadhar Number : </Form.Label>
            <Form.Control
              type='text'
              name='aadhaarNumber'
              placeholder='enter your aadhar'
              onChange={handleChange}
              value={data.aadhaarNumber}
             isInvalid={showError && !Validation.aadharValidate(data?.aadhaarNumber)}
             maxLength="12"
            />
            <Form.Control.Feedback type='invalid'>
              {!aadhaarNumber ? "aadhar is necessary(12 digits)" : "can't be less than or greater than 12"}
              
            </Form.Control.Feedback>
          </Form.Group>
        
          <Form.Group as={Col} sm={4} controlId="validationCustom06" className="mt-2">
            <Form.Label>Pan Number : </Form.Label>
            <Form.Control
              type='text'
              name='panNumber'
              placeholder='enter your panNumber'
              onChange={handleChange}
              value={data.panNumber}
             isInvalid={showError && !Validation.panNumber(data?.panNumber)}
            
            />
            <Form.Control.Feedback type='invalid'>
              {!panNumber ? "pan is necessary(10 digits)" : "can't be less than 10 digit"}
              
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} sm={4} controlId="validationCustom04" className="mt-2">
            <Form.Label>Password : </Form.Label>
            <Form.Control
              type='text'
              name='password'
              placeholder='enter your password'
              onChange={handleChange}
              value={data.password}
              isInvalid={showError && !Validation.password(data?.password)}
            
            />
            <Form.Control.Feedback type='invalid'>
              {!password ? "aadhar is necessary(12 digits)" : "can't be less than or greater than 12"}
              
            </Form.Control.Feedback>
          </Form.Group>
        
          
        </Row> 
        <Button onClick={handleClick}>Save</Button>
        </Form>
    </div>
  );
  }