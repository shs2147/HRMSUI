import React, {useEffect, useState } from 'react';
import jsPDF from 'jspdf';

const SalarySetup = () => {
const [data, setData] = useState([]);
const [show,setShow]=useState([]);
const [empName,setEmpName]=useState([]);
const [selectedId,setSelectedId]=useState([]);
const [accountNumber,setAccountNumber]=useState([]);
const [bankName,setBankName]=useState([]);
const [fnclYear,setFnclYear]=useState([]);
const [fnclMonth,setFnclMonth]=useState([]);
const [bankBranch,setBankBranch]=useState([]);
const [joinDate,setJoinDate]=useState([]);
const [workType,setWorkType]=useState([]);
const [dob,setDob]=useState([]);
const [department,setDepartment]=useState([]);
const [mail,setMail]=useState([]);
const [code,setCode]=useState([]);
const [company,setCompany]=useState([]);
const [mobile,setMobile]=useState([]);
const [designation,setDesignation]=useState([]);
const [basicSalary,setBasicSalary]=useState([]);
const [pfnumber,setPfnumber]=useState([]);
const [reporting,setReporting]=useState([]);
const [incentive,setIncentive]=useState([]);
const [incometax,setIncometax]=useState([]);
const [shiftallowance,setShiftallowance]=useState([]);
const [conveyance,setConveyance]=useState([]);
const [specialallowance,setSpecialallowance]=useState([]);
const [houserent,setHouserent]=useState([]);
const [bonus,setBonus]=useState([]);
const [disabled,setDisabled]=useState(false);
const [pdf, setPdf]=useState(false)
//const [current,setCurrent]=useState([]);


console.log(empName,selectedId,"selectedId")

const pdfGenerator=()=>{
 
  var doc=new jsPDF('portrait','px','a4','false')
  doc.save('a.pdf');
}

const inputChangeHandler = (e) => {
    let newData = { ...data };
    newData[e.target.name ] = e.target.value;
    if(e.target.name === "employeeName"){
      setEmpName(e.target.value)
    }
    if(e.target.name === "id"){
      setSelectedId(e.target.value);
      setDisabled(true)
    }
    if(e.target.name === "accountNumber"){
      setAccountNumber(e.target.value);
    }
    if(e.target.name === "bankName"){
      setBankName(e.target.value);
    }
    if(e.target.name === "fnclYear"){
      setFnclYear(e.target.value);
    }
    if(e.target.name==="pfnumber"){
      setPfnumber(e.target.value);
    }
    if(e.target.name==="houserent"){
      setHouserent(e.target.value)
    }
    if(e.target.name === "fnclMonth"){
      setFnclMonth(e.target.value);
    }
    if (e.target.name==="incentive"){
      setIncentive(e.target.value);
    }
    if (e.target.name==="bonus"){
      setBonus(e.target.value);
    }
    if (e.target.name==="incometax"){
      setIncometax(e.target.value);
    }
    if (e.target.name==="shiftallowance"){
      setShiftallowance(e.target.value);
    }
    if (e.target.name==="conveyance"){
      setConveyance(e.target.value);
    }
    if (e.target.name==="specialallowance"){
      setSpecialallowance(e.target.value);
    }
    if(e.target.name === "bankBranch"){
      setBankBranch(e.target.value);
    }
    if(e.target.name === "joinDate"){
      setJoinDate(e.target.value);
    }
    if(e.target.name === "workType"){
      setWorkType(e.target.value);
    }
    if(e.target.name === "dob"){
      setDob(e.target.value);
    }
    if(e.target.name === "department"){
      setDepartment(e.target.value);
    }
    if(e.target.name === "mail"){
      setMail(e.target.value);
    }
    if(e.target.name === "code"){
      setCode(e.target.value);
    }
    if(e.target.name === "comapany"){
      setCompany(e.target.value);
    }
    if(e.target.name === "mobile"){
      setMobile(e.target.value);
    }
    if(e.target.name === "designation"){
      setDesignation(e.target.value);
    }
    if(e.target.name === "reporting"){
      setReporting(e.target.value);
    }
    if (e.target.name==="basicSalary"){
      setBasicSalary(e.target.value);
    }
    

    // if(e.target.name === "financialYear"){
    //   setSelectedId(e.target.value);
     
    // }
    newData[e.target.name] = e.target.value;
    setData(newData)
    // console.log(JSON.stringify(newData))
}
const submitHandler=(e)=>{
  e.preventDefault();
  // console.log(JSON.stringify(data))
  fetch("http://localhost:8080/salary/salary",{
      method:"POST",
      headers:{"content-Type":"application/json","Accept":"application/json"},
      body:JSON.stringify(data)
    }).then(()=>{
      console.log("payroll are added")
    })
}


// const getCurrentFinancialYear = ()=> {
//    const fiscalyear = "";
//   var today = new Date();
//   if ((today.getMonth() + 1) <= 3) {
//     fiscalyear = (today.getFullYear() - 1) + "-" + today.getFullYear()
//   } else {
//     fiscalyear = today.getFullYear() + "-" + (today.getFullYear() + 1)
//   }
//   return fiscalyear
// }
// console.log(fiscalyear);

// document.getElementById("spFY").innerHTML=getCurrentFinancialYear();
const financialYear=()=>{
  function getCurrentFinancialYear() {
     const thisYear = (new Date()).getFullYear();
     const yearArray = [0, 1, 2, 3, 4].map((count) => `${thisYear - count}-${(thisYear - count - 1).toString().slice(-2)}`);
     console.log(yearArray);
     return yearArray.join();
    }
    console.log(getCurrentFinancialYear());
}


// const fetchData = () =>{
//   fetch("http://localhost:8080/basic/fetchemployee/{?employeeid}",{

//   })
//   .then((response) =>{
//     return response.json();
//   })
//   .then((data) =>{
//     setShow(data)
//   })
//   console.log(data)
// }

const fetchData1 = () =>{
  fetch("http://localhost:8080/bank/getBankInfo",{
  })
  .then((response) =>{
    return response.json();
  })
  .then((data) =>{
    setShow(data)
  })
}

useEffect(()=>
{
  // fetchData();
  fetchData1();

},[])

// useEffect(()=>
// {
//   // fetchData();
//   fetchData();

// },[])
       
useEffect(()=>{
     const myData = show?.filter((item)=>item.id == selectedId )
   console.log("my emp",myData[0]?.name)
   setEmpName(myData[0]?.name)
   setAccountNumber(myData[0]?.bankAccountNo)
   setBankName(myData[0]?.bankName)
   setBankBranch(myData[0]?.bankBranch)
   setJoinDate(myData[0]?.basicEmployee1.joiningDate)
   setWorkType(myData[0]?.basicEmployee1.workType)
   setDob(myData[0]?.basicEmployee1.dob)
   setDepartment(myData[0]?.basicEmployee1.selectDepartment)
   setMail(myData[0]?.basicEmployee1.email)
   setCode(myData[0]?.ifscCode)
   setCompany(myData[0]?.basicEmployee1.whichCompany)
   setMobile(myData[0]?.basicEmployee1.mobile)
   setDesignation(myData[0]?.basicEmployee1.designation)
   setReporting(myData[0]?.basicEmployee1.reportingTo)
   setBasicSalary(myData[0]?.basicEmployee1.basicSalary)
   setPfnumber(myData[0]?.basicEmployee1.pfnumber)
   
},[selectedId])

function download(){
  setPdf(true)
}

function closePdf(){
  setPdf(false)
}

function print(){
  // window.open(pdf)
  window.print()
}


// console.log(data,"data")

  return (
    <>
{
  pdf?

  <div className="pdfMainContainer" >
  <div className="innerPdf">
  <table border="2">
<tr height="100px" style={{backgroundColor:'#747370',color:'orange', textAlign:'center',fontSize:'34px', fontWeight:'600'}}>
<td colspan='4'>Ahom Technologies Pvt. Ltd.
</td>
</tr>
<tr>
<th>Employee Id:</th>
<td>{data.id}</td>
<th>Name</th>
<td>{empName}</td>
</tr>
{/* <!-----2 row---> */}
<tr>
<th>Bank Name</th>
<td>{bankName}</td>
<th>Bank A/c No.</th>
<td>{accountNumber}</td>
</tr>
{/* <!------3 row----> */}
<tr>
<th>DOB</th>
<td>{dob}</td>
<th>Email Id:</th>
<td>{mail}</td>
</tr>
{/* <!------4 row----> */}
<tr>
<th>PF No.</th>
<td>{pfnumber}</td>
<th>Mobile No.</th>
<td>{mobile}</td>
</tr>
{/* <!------5 row----> */}
<tr>
<th>Bank Branch</th>
<td>{bankBranch}</td>
<th>Bank IFSC Code</th>
<td>{code}</td>
</tr>
{/* <!------6 row----> */}
<tr>
<th>Financial Year</th>
<td>{fnclYear}</td>
<th>Financial Month</th>
<td>{fnclMonth}</td>
</tr>
{/* <!------7 row----> */}
<tr>
<th>Department</th>
<td>{department}</td>
<th>Designation</th>
<td>{designation}</td>
</tr>
{/* <!------8 row----> */}
<tr>
<th>Date of Joining</th>
<td>{joinDate}</td>
<th>Work Type</th>
<td>{workType}</td>
</tr>
{/* <!------9 row----> */}
<tr>
<th>Company</th>
<td>{company}</td>
<th>Reporting To</th>
<td>{reporting}</td>
</tr>
{/* <tr>
  <th>basicSalary</th>
  <td>{basicSalary}</td>
  </tr> */}
</table>

  <tr></tr>
<br/>

<table border="1">
<tr>
<th >Earnings</th>
<th>Amount</th>
<th >Deductions</th>
<th>Amount</th>
</tr>
{/* will use for calculation */}
<tr>
<td>Basic</td>
<td>{basicSalary.toFixed(2)}</td>

<td>provident fund</td>
<td>{(basicSalary-(basicSalary-(0.24*basicSalary))).toFixed(2)}</td>
</tr>
<tr>
<td>House Rent Allowance</td>
<td>{houserent}</td>

<td>LOF</td>
{/* <td>{(basicSalary-(((basicSalary-((0.01*basicSalary).toFixed(2)))))).toFixed(2)}</td> */}
<td>{(basicSalary-(basicSalary-(0.01*basicSalary))).toFixed(2)}</td>
</tr>
<tr>
<td>Incentive</td>
<td>{incentive}</td>

<td>Income tax</td>
<td>{incometax}</td>
</tr>
<tr>
<td>conveyance</td>
<td>{conveyance}</td>
</tr>
<tr>
<td>Special allowance</td>
<td>{specialallowance}</td>
</tr>
<tr>
<td>shift Allowance</td>
<td>{shiftallowance}</td>
</tr>
<tr>
<td>bonus</td>
<td>{bonus}</td>
</tr>
{/* <tr>
<td>medical Allowance</td>
<td>00</td>
</tr> */}
<tr>
<th>Gross Earnings</th>
<td>{(basicSalary-(-incentive-houserent-conveyance-specialallowance-shiftallowance-bonus)).toFixed(2)}</td>
<th >Gross Deductions</th>
<td>{(basicSalary-(-incometax)-(basicSalary-(0.24*basicSalary))+basicSalary-(basicSalary-(0.01*basicSalary))).toFixed(2)}</td>
<td>{}</td>
</tr>
<tr>
<td></td>
<td><strong>NET PAY </strong></td>
<td>{((basicSalary-(-incentive-houserent-conveyance-specialallowance-shiftallowance-bonus))-(basicSalary-(basicSalary-(0.24*basicSalary))+basicSalary-(basicSalary-(0.01*basicSalary)))).toFixed(2)}</td>

<td></td>
</tr>
</table>
  </div>
  <div className="mt-5">
	<button className='btn btn-primary me-2' onClick={print}>Print</button>
	{/* <button className='btn btn-success me-2' onClick={pdfGenerator}>Download PDF</button> */}
  <button className='btn btn-danger ms-2' onClick={closePdf}>Close</button>
	</div>
</div>

  :
<div>
<center className='mt-2'><h1><b>Employee Salary</b></h1></center>
<fieldset>
  <legend>Employee Salary Slip</legend> <br />

<div className="labelContainer">
  <div className="all">
    <label>Employee Id:</label>
  </div>

  <div className="all">
    <label>Financial Year:</label>
  </div>

  <div className="all">
    <label>Bank Name:</label>
  </div>

  <div className="all">
    <label>Bank Branch:</label>
  </div>

  <div className="all">
    <label>Joining Date:</label>
  </div>

  <div className="all">
    <label>Email:</label>
  </div>

  <div className="all">
    <label>Department:</label>
  </div>

  <div className="all">
    <label>Date of Birth:</label>
  </div>

  <div className="all">
    <label>Work Type:</label>
  </div>

  <div className="all">
    <label>Incentive:</label>
  </div>

  <div className="all">
    <label>Conveyance:</label>
  </div>

  <div className="all">
    <label>Special Allowance:</label>
  </div>

  <div className='all'>
    <label>House Rent</label>
  </div>

  <div className="all"></div>
  <div className="all"></div>

</div>
<div className="labelContainer"> 

 <div className="all">
 <select value={data.id } name="id" onChange={inputChangeHandler}>
    <option selected disabled>Select Id</option>
    {show.map(e=>(<option valueType={e.id }>{e.id }</option>))}
  </select>
  </div>

  <div className="all">
  <select value={fnclYear} name='fnclYear' onChange={inputChangeHandler}>
    <option selected>Select Year</option>
    <option>2017</option>
    <option>2018</option>
    <option>2019</option>
    <option>2020</option>
    <option>2021</option>
    <option>2022</option>
    <option>2023</option>
    <option>2024</option>
    <option>2025</option>
    <option>2026</option>
  </select>
  </div>

  <div className="all">
  <select disabled={disabled} value={bankName} name='bankName' onChange={inputChangeHandler}>
    <option selected disabled>Select Bank</option>
    {show.map(e=>(<option valueType={e.bankName }>{e.bankName }</option>))}
  </select>
  </div>

  <div className="all">
  <select disabled={disabled} value={bankBranch} name='bankBranch' onChange={inputChangeHandler}>
    <option selected disabled>Select Branch</option>
    {show.map(e=>(<option valueType={e.bankBranch }>{e.bankBranch }</option>))}
  </select>
  </div>

  <div className="all">
  <select disabled={disabled} value={joinDate} name='joinDate' onChange={inputChangeHandler} >
      <option selected disabled>Select Date</option>
      {show.map(e=>(<option valueType={e.basicEmployee1.joiningDate}>{e.basicEmployee1.joiningDate}</option>))}
      </select>
  </div>

  <div className="all">
  <select disabled={disabled} value={mail} name='mail' onChange={inputChangeHandler} >
      <option selected disabled>Choose Email</option>
      {show.map(e=>(<option valueType={e.basicEmployee1.email}>{e.basicEmployee1.email}</option>))}
      </select>
  </div>

  <div className="all">
    <select disabled={disabled} value={department} name='department' onChange={inputChangeHandler} >
      <option selected disabled>Select Department.</option>
      {show.map(e=>(<option valueType={e.basicEmployee1.selectDepartment }>{e.basicEmployee1.selectDepartment }</option>))}
      </select>
  </div>

  <div className="all">
  <select disabled={disabled} value={dob} name='dob' onChange={inputChangeHandler} >
      <option selected disabled>Select dob</option>
      {show.map(e=>(<option valueType={e.basicEmployee1.dob }>{e.basicEmployee1.dob }</option>))}
      </select>
  </div>

  <div className="all">
  <select disabled={disabled} value={workType} name='workType' onChange={inputChangeHandler} >
      <option selected disabled>Select Work Type</option>
      {show.map(e=>(<option valueType={e.basicEmployee1.workType }>{e.basicEmployee1.workType }</option>))}
      </select>
  </div>  

  <div className="all">
  <input type="text" value={incentive} name='incentive' onChange={inputChangeHandler} placeholder='Enter field ...' />
  </div>

  <div className="all">
    <input type="text" value={conveyance} name='conveyance' onChange={inputChangeHandler} placeholder='Enter field conve...' />
  </div>

  <div className="all">
    <input type="text" value={specialallowance} name='specialallowance'onChange={inputChangeHandler} placeholder='Enter field special...' />
  </div>
  <div className="all">
    <input type="text" value={houserent} name='houserent'onChange={inputChangeHandler} placeholder='Enter field special...' />
  </div>

  <div className="all"></div>
  <div className="all"></div>

  </div>

<div className="labelContainer">

<div className="all">
    <label>Employee Name:</label>
  </div>

  <div className="all">
    <label>Financial Month:</label>
  </div>

  <div className="all">
    <label>Bank Account Number:</label>
  </div>

  <div className="all">
    <label>IFSC Code:</label>
  </div>

  <div className="all">
    <label>Company:</label>
  </div>

  <div className="all">
    <label>Mobile No:</label>
  </div>

  <div className="all">
    <label>Designation:</label>
  </div>
  <div className="all">
    <label>Reporting to:</label>
  </div>

  <div className="all">
    <label>Pf Number:</label>
  </div>

  <div className="all">
    <label>Income Tax:</label>
  </div>

  <div className="all">
    <label>Shift Allowance:</label>
  </div>

  <div className="all">
    <label>Bonus:</label>
  </div>

  <div className="all"></div>
  <div className="all"></div>


</div>
<div className="labelContainer">

<div className="all">
<select disabled={disabled} value={empName} name="employeeName" onChange={inputChangeHandler}>
<option selected disabled>Select Name</option>
    {show.map(e=>(<option valueType={e.name}>{e.name}</option>))}
    </select>
  </div>

<div className="all">
<select  value={fnclMonth} name='fnclMonth' onChange={inputChangeHandler}>
    <option selected>Select Month</option>
      <option value="Jan">January</option>
     <option value="Fab">February</option>
    <option value="Mar">March</option>
      <option value="Apr">April</option>
        <option value="May">May</option>
         <option value="Jun">June</option>
          <option value="Jul">July</option>
           <option value="Aug">August</option>
             <option value="Sep">September</option>
             <option value="Oct">October</option>
            <option value="Nov">November</option>
               <option value="Dec">December</option>
                  </select>
  </div>

  <div className="all">
    <select disabled={disabled} value={accountNumber} name="accountNumber"  onChange={inputChangeHandler} >
      <option selected disabled>Select Account No.</option>
      {show.map(e=>(<option valueType={e.bankAccountNo }>{e.bankAccountNo }</option>))}
      </select>
  </div>

  <div className="all">
  <select disabled={disabled} value={code} name="code" onChange={inputChangeHandler} >
      <option selected disabled>Select IFSC Code.</option>
      {show.map(e=>(<option valueType={e.ifscCode }>{e.ifscCode }</option>))}
      </select>
  </div>

  <div className="all">
  <select disabled={disabled} value={company} name="company" onChange={inputChangeHandler} >
      <option selected disabled>Select Company.</option>
      {show.map(e=>(<option valueType={e.basicEmployee1.whichCompany }>{e.basicEmployee1.whichCompany }</option>))}
      </select>
  </div>

  <div className="all">
  <select disabled={disabled} value={mobile} name="mobile" onChange={inputChangeHandler} >
      <option selected disabled>Choose Mobile No.</option>
      {show.map(e=>(<option valueType={e.basicEmployee1.mobile }>{e.basicEmployee1.mobile }</option>))}
      </select>
  </div>

  <div className="all">
    <select disabled={disabled} value={designation} name='designation' onChange={inputChangeHandler} >
      <option selected disabled>Select Designation</option>
      {show.map(e=>(<option valueType={e.basicEmployee1.designation}>{e.basicEmployee1.designation}</option>))}
      </select>
  </div>
  

  <div className="all">
  <select disabled={disabled} value={reporting} name='reporting' onChange={inputChangeHandler} >
      <option selected disabled>Select Reporting to</option>
      {show.map(e=>(<option valueType={e.basicEmployee1.reportingTo}>{e.basicEmployee1.reportingTo}</option>))}
      </select>
  </div>
  <div className="all">
  <select disabled={disabled} value={pfnumber} name='pfnumber' onChange={inputChangeHandler} >
      <option selected disabled>Select pfnumber</option>
      {show.map(e=>(<option valueType={e.basicEmployee1.pfnumber }>{e.basicEmployee1.pfnumber }</option>))}
      </select>
  </div>
  

  <div className="all">
  <input type="text" value={incometax} name='incometax' onChange={inputChangeHandler} placeholder="Enter field income" />
  </div>

  <div className="all">
  <input type="text" value={shiftallowance}  name='shiftallowance' onChange={inputChangeHandler} placeholder="Enter shift" />
  </div>

  <div className="all">
  <input type="text"  value={bonus} name='bonus' onChange={inputChangeHandler} placeholder='Enter field total'/>
  </div>

  {/* <div className="all">
    <input type="text" placeholder='Enter field' />
  </div> */}

  <div className="all">
  </div>

  <div className="all">

  <button className='btn btn-success text-light' onClick={download}>Print / Download</button>
  </div>

</div>


</fieldset>
</div>
}
        
        </>
  )
  
}


export default SalarySetup