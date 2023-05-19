// import React, { useEffect } from 'react';
// import { useState } from 'react';
// // import Validation from '../../../validation/Validation'
// import { Button, Container, Form, Row,Col } from 'react-bootstrap';
// import swal from 'sweetalert';

// const formData = {
//   userName: "",
//   password: "",
//   aadhaarNumber: "",
//   departmentName: "",
//   roleName:"",
//   employeeName:"",
//   panNumber:"",
// }

// export default function UserMaster() {

//   const [data, setData] = useState(formData);
//   const { userName, password, aadhaarNumber, departmentName ,roleName,panNumber} = data;
//   const [showError, setShowError] = useState(false);
//   const [itemshow, setItemshow] = useState([]);
//   const[inputValue,setInputValue]=useState([]);
//   const[errors,setErrors]=useState('');
//   const[employeeName,setEmployeeName]=useState('')

//   const handleChange = (e) => {

  
//     let newData = { ... data };
//     newData[e.target.name]=e.target.value;
//     setData(newData);
//   };

 

//   // const validateForm = () => {
//   //   const newErrors = [];

//   //   // Validate name
//   //   if (!employeeName) {
//   //     newErrors.push('Name is required.')
//   //   }

//   //   // // Validate email
//   //   // if (!email) {
//   //   //   newErrors.push('Email is required.');
//   //   // } else if (!/\S+@\S+\.\S+/.test(email)) {
//   //   //   newErrors.push('Invalid email format.');
//   //   // }

//   //   setErrors(newErrors);
//   //   return newErrors.length === 0;
//   // };

//   const handleClick = (event) => {
//     event.preventDefault();

//       console.log(data);
//       fetch("http://localhost:8080/usermaster/saveuser", {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json",
//               Accept: "application/json",
//           },
//           body: JSON.stringify(data),
//       })
//       .then(() => {
//           console.log("department Added");
//           swal("Success", "User Added Successfully", "success").then(() => {
//               window.location.reload(true);
//           });
//       })
//       .catch((err) => console.log(err));

//   };


//   const FetchData1 = () => {
//     fetch("http://localhost:8080/department/getall", {})
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         setItemshow(data);
//       });
//     };

//   useEffect(()=>{
//     FetchData1();
//   },[])

//   // const handleClick=(e)=>{
//   //   e.preventDefault();

//   //   if(inputValue===" ")
//   //   {
//   //       alert("Enter a value");
//   //   }
//   //   else{
//   //     console.log(data);
//   //     fetch("http://localhost:8080/usermaster/saveuser", {
//   //         method: "POST",
//   //         headers: {
//   //             "Content-Type": "application/json",
//   //             Accept: "application/json",
//   //         },
//   //         body: JSON.stringify(data),
//   //     })
//   //     .then(() => {
//   //         console.log("department Added");
//   //         swal("Success", "User Added Successfully", "success").then(() => {
//   //             window.location.reload(true);
//   //         });
//   //     })
//   //     .catch((err) => console.log(err));
//   //   }
//   // }



//   return (
    
//       <div className="container">
//         <div className="d-flex">
//           <h3>Add User</h3>
          
//         </div>
//         <hr />
//         <h6>Add/Edit User</h6>
//        {/* <Container> */}
//       <Form  className="bg-light">
//       <Row className="mb-3">

//       <Form.Group as={Col} sm={4} controlId="validationCustom05" className="mt-2">
//             <Form.Label >Employee Name : </Form.Label>
//             <Form.Control
//             input
//               type='text'
//               name='employeeName'
//               placeholder='Enter Your Name'
//               onChange={handleChange}
//               value ={data.employeeName}
//               required
//               // isInvalid={showError && !Validation.maximum(data?.employeeName, 50)}
//             />
//             <Form.Control.Feedback type='invalid'>
//               employee name is necessary
//             </Form.Control.Feedback>
//           </Form.Group>

//       <Form.Group as={Col} sm={4} controlId="validationCustom01" className="mt-2">
//             <Form.Label>User Name : </Form.Label>
//             <Form.Control
//             input
//               type='text'
//               name='userName'
//               placeholder='Enter Your Name'
//               onChange={handleChange}
//               value ={data.userName}
//               required
//             />
//             <Form.Control.Feedback type='invalid'>
//               user name is necessary
//             </Form.Control.Feedback>
//           </Form.Group>

//       <Form.Group as={Col} sm={4} controlId="validationCustom07" className="mt-2">
//       <Form.Label>Department Name : </Form.Label>
//       <select required="true"
//         valueType={data.department}
//         class="form-select"
//         aria-label="Default select example"
//         name="departmentName"
//         onChange={handleChange}
//         // isInvalid={showError && !Validation.maximum(data?.departmentName)}
//         >
//                 <option selected disabled>Select Department</option>
//                 <option> Developer</option>
//                 {itemshow.map((aman) => (
//                   <option valueType={aman.departmentName}>
//                     {aman.departmentName}
//                   </option>
//                 ))}
               
              
//               </select>
//               <Form.Control.Feedback type="invalid">
//                 {!data?.department ? "please select department name" : ""}
//               </Form.Control.Feedback>
//               </Form.Group>
//             {/* <Form.Control
//               type='text'
//               name='userName'
//               placeholder='enter your name'
//               onChange={handleChange}
//               value ={data.userName}
//               isInvalid={showError && !Validation.maximum(data?.userName, 50)}
//             />
//             <Form.Control.Feedback type='invalid'>
//               user name is necessary
//             </Form.Control.Feedback> */}
    
        
          
        
         
//         </Row>
        
//       {/* <Container> */}
//       <Row className="mb-3">
//       <Form.Group as={Col} sm={4} controlId="validationCustom02" className="mt-2">
//       <Form.Label>Role Name : </Form.Label>
//               <select as={Row} sm={4} controlId="validationCustom07" className="mt-2"
//                 valueType={data.roleName}
//                 class="form-select"
//                 aria-label="Default select example"
//                 name="roleName"
//                 onChange={handleChange}
//                 required
//               >
      
//                 <option selected disabled>
//                   Select Role
//                 </option>
//                 <option valueType="react JS">ADMIN</option>
//                 <option valueType="java">EMPLOYEE</option>
//                 {/* <option valueType="java">User</option> */}
//               </select>
//               </Form.Group>

//           <Form.Group as={Col} sm={4} controlId="validationCustom04" className="mt-2">
//             <Form.Label>Password : </Form.Label>
//             <Form.Control
//               type='text'
//               name='password'
//               placeholder='Enter Your Password'
//               onChange={handleChange}
//               value={data.password}
//               // isInvalid={showError && !Validation.password(data?.password)}
//               required
//             />

//             <Form.Control.Feedback type='invalid'>
//               {!password ? "Password is necessary(12 digits)" : "can't be less than or greater than 12"}
              
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group as={Col} sm={4} controlId="validationCustom04" className="mt-2">
//             <Form.Label>Confirm Password : </Form.Label>
//             <Form.Control
//               type='text'
//               name='confirmPassword'
//               placeholder='Re-enter Your Password'
//               onChange={handleChange}
//               value={data.confirmPassword}
//               // isInvalid={showError && !Validation.password(data?.confirmPassword)}
//             required
//             />

//             <Form.Control.Feedback type='invalid'>
//               {!password ? "Password is necessary(12 digits)" : "can't be less than or greater than 12"}
              
//             </Form.Control.Feedback>
//           </Form.Group>
          
//         </Row> 
//         <Button type="submit" onClick={handleClick}>Save</Button>
//         </Form>
//     </div>
//   );
//   };




import { signUp } from '../../services';
import { useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const UserMaster = () => {
  const [data, setData] = useState({
   userName: "",
  password: "",
  confirmPassword: "",
  departmentName: "",
   roleName:"",
   employeeName:"",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  // handle change
  const handleChange = (event, property) => {
    //dynamic setting the values
    setData({ ...data, [property]: event.target.value });
  };

  //reseting the form
  const resetData = () => {
    setData({
      userName: "",
      password: "",
      aadhaarNumber: "",
      departmentName: "",
       roleName:"",
       employeeName:"",
      panNumber:"",
    });
  };

  //submit the form
  const submitForm = (event) => {
    event.preventDefault();

    // if(error.isError){
    //   toast.error("Form data is invalid , correct all details then submit. ");
    //   setError({...error,isError:false})
    //   return;
    // }

    console.log(data);
    //data validate

    //call server api for sending data
    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success("User is registered successfully !! user id " + resp.id);
        setData({
          userName: "",
          password: "",
          confirmPassword: "",
          departmentName: "",
           roleName:"",
           employeeName:"",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
        //handle errors in proper way
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  return (
    <>
      <Container>
        <Row className="mt-4">
          {/* { JSON.stringify(data) } */}

          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h3> Fill Information to Register !!</h3>
              </CardHeader>

              <CardBody>
                {/* creating form */}

                <Form onSubmit={submitForm}>
                  {/*Employee Name field */}
                  <FormGroup>
                    <Label for="name">Enter Employee Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="employeeName"
                      onChange={(e) => handleChange(e, "employeeName")}
                      value={data.name}
                      invalid={
                        error.errors?.response?.data?.employeeName ? true : false
                      }
                    
                    />

                    <FormFeedback>
                      {error.errors?.response?.data?.employeeName}
                    </FormFeedback>
                  </FormGroup>


                  
                  {/* User Name field */}
                  <FormGroup>
                    <Label for="userName">User name</Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="userName"
                      onChange={(e) => handleChange(e, "userName")}
                      value={data.userName}
                      invalid={
                        error.errors?.response?.data?.userName ? true : false
                      }
                    />

                    <FormFeedback>
                      {error.errors?.response?.data?.userName}
                    </FormFeedback>
                  </FormGroup>

                  {/* Department field */}
                  <FormGroup>
                    <Label for="departmentName">Department name</Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="departmentName"
                      onChange={(e) => handleChange(e, "departmentName")}
                      value={data.departmentName}
                      invalid={
                        error.errors?.response?.data?.departmentName ? true : false
                      }
                    />

                    <FormFeedback>
                      {error.errors?.response?.data?.departmentName}
                    </FormFeedback>
                  </FormGroup>

                  {/* password field */}
                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      placeholder="Enter here"
                      id="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                      invalid={
                        error.errors?.response?.data?.password ? true : false
                      }
                    />

                    <FormFeedback>
                      {error.errors?.response?.data?.password}
                    </FormFeedback>
                  </FormGroup>

                  {/* confirm password */}

                  <FormGroup>
                    <Label for="confirmPassword">Re-Enter password</Label>
                    <Input
                      type="confirmPassword"
                      placeholder="Enter here"
                      id="confirmPassword"
                      onChange={(e) => handleChange(e, "confirmPassword")}
                      value={data.confirmPassword}
                      invalid={
                        error.errors?.response?.data?.confirmPassword ? true : false
                      }
                    />

                    <FormFeedback>
                      {error.errors?.response?.data?.confirmPassword}
                    </FormFeedback>
                  </FormGroup>

                                    
                  {/* Role Name field */}
                  <FormGroup>
                    <Label for="roleName">Role name</Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="roleName"
                      onChange={(e) => handleChange(e, "roleName")}
                      value={data.roleName}
                      invalid={
                        error.errors?.response?.data?.roleName ? true : false
                      }
                    />

                    <FormFeedback>
                      {error.errors?.response?.data?.roleName}
                    </FormFeedback>
                  </FormGroup>
                 



                  <Container className="text-center">
                    <Button outline color="light">
                      Register
                    </Button>
                    <Button
                      onClick={resetData}
                      color="secondary"
                      type="reset"
                      className="ms-2"
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserMaster;
