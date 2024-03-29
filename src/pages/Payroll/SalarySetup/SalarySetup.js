import React, {useEffect, useState } from 'react';


const SalarySetup = () => {

const [data, setData] = useState([]);
const [show,setShow]=useState([]);
const [empName,setEmpName]=useState([]);
const [selectedId,setSelectedId]=useState([]);
const [accountNumber,setAccountNumber]=useState([]);
const [bankName,setBankName]=useState([]);
const [lOP,setLop]=useState([]);
const [pan,setPan]=useState([]);
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
const [ctc,setCtc]=useState([]);
const [pfnumber,setPfnumber]=useState([]);
const [reporting,setReporting]=useState([]);
const [workingdays,setWorkingdays]=useState([]);
// const [incometax,setIncometax]=useState([]);
// const [shiftallowance,setShiftallowance]=useState([]);
// const [conveyance,setConveyance]=useState([]);
// const [specialallowance,setSpecialallowance]=useState([]);
const [paidday,setPaidday]=useState([]);
const [month,setMonth]=useState([]);
const [basicsalary,setBasicsalary]=useState([]);
// const [bonus,setBonus]=useState([]);
const [disabled,setDisabled]=useState(false);
const [btnDisabled,setBtnDisabled]=useState(true);
const [pdf, setPdf]=useState(false)
//const [current,setCurrent]=useState([]);
const[grossSalary,setGrossSalary]=useState([]);




console.log(empName,selectedId,"selectedId")


const inputChangeHandler = (e) => {
    let newData = { ...data };
    newData[e.target.name ] = e.target.value;

    if(e.target.name === "employeeName"){
      setEmpName(e.target.value)
    }
    if(e.target.name === "month"){
      setMonth(e.target.value)
    }
    if(e.target.name === "id"){
      setSelectedId(e.target.value);
      setDisabled(true)
      setBtnDisabled(false)
    }
    if(e.target.name === "accountNumber"){
      setAccountNumber(e.target.value);
    }
    if(e.target.name === "bankName"){
      setBankName(e.target.value);
    }


    if(e.target.name === "lop"){
      setLop(e.target.value);
    }


    if(e.target.name==="pfnumber"){
      setPfnumber(e.target.value);
    }
    // if(e.target.name==="houserent"){
    //   setHouserent(e.target.value)
    // }
    // if(e.target.name==="basicSalary"){
    //   setBasicsalary(e.target.value)
    // }
    if(e.target.name === "panNumber"){
      setPan(e.target.value);
    }
    if (e.target.name==="workingdays"){
      setWorkingdays(e.target.value);
    }
    // if (e.target.name==="bonus"){
    //   setBonus(e.target.value);
    // }
    if (e.target.name==="paidday"){
      setPaidday(e.target.value);
    }
    // if (e.target.name==="shiftallowance"){
    //   setShiftallowance(e.target.value);
    // }
    // if (e.target.name==="conveyance"){
    //   setConveyance(e.target.value);
    // }
    if (e.target.name==="basicSalary"){
      setBasicsalary(e.target.value);
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
    if (e.target.name==="ctc"){
      setCtc(e.target.value);
    }
    
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


const financialYear=()=>{
  function getCurrentFinancialYear() {
     const thisYear = (new Date()).getFullYear();
     const yearArray = [0, 1, 2, 3, 4].map((count) => `${thisYear - count}-${(thisYear - count - 1).toString().slice(-2)}`);
     console.log(yearArray);
     return yearArray.join();
    }
    console.log(getCurrentFinancialYear());
}


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


       
useEffect(()=>{
     const myData = show?.filter((item)=>item.id == selectedId )
   console.log("my emp",myData[0]?.name)
   setEmpName(myData[0]?.name)
   setPan(myData[0]?.basicEmployee1.panNumber)
   setAccountNumber(myData[0]?.bankAccountNo)
   setBankName(myData[0]?.bankName)
   setBankBranch(myData[0]?.bankBranch)
   setJoinDate(myData[0]?.basicEmployee1.joiningDate)
  //  setWorkType(myData[0]?.basicEmployee1.workType)
   setDob(myData[0]?.basicEmployee1.dob)
   setDepartment(myData[0]?.basicEmployee1.selectDepartment)
   setMail(myData[0]?.basicEmployee1.email)
   setCode(myData[0]?.ifscCode)
   setCompany(myData[0]?.basicEmployee1.whichCompany)
   setMobile(myData[0]?.basicEmployee1.mobile)
   setDesignation(myData[0]?.basicEmployee1.designation)
  //  setReporting(myData[0]?.basicEmployee1.reportingTo)
   setCtc(myData[0]?.basicEmployee1.ctc)
   setBasicsalary(myData[0]?.basicSalary)
   setPfnumber(myData[0]?.basicEmployee1.pfnumber)
   setGrossSalary(myData[0]?.grossSalary)
   
   
},[selectedId])

function download(){
  setPdf(true)
}

function closePdf(){
  setPdf(false)
}

function print(){
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
<tr height="100px" className='head'>
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
<th>Paid Days</th>
<td>{paidday}</td>

<th>Pan</th>
<td>{pan}</td>
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

<th>LOP</th>
<td>{lOP}</td>
</tr>
{/* <!------9 row----> */}
<tr>
<th>Company</th>
<td>{company}</td>

<th>Working days</th>
<td>{workingdays}</td>
</tr>
{/* <tr>
  <th>ctc</th>
  <td>{ctc}</td>
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
{/* <td>{((ctc/12)*0.6).toFixed(2)}</td> */}
<td>{(basicsalary.toFixed(2))} </td>

<td>provident fund</td>
<td>{(grossSalary*0.18).toFixed(2)}</td>
</tr>
<tr>
<td>House Rent Allowance</td>
{/* <td>{(ctc-(ctc-(ctc*0.4))).toFixed(0)}</td> */}
<td>{ (basicsalary*0.4).toFixed(2)}</td>



<td>LUF</td>
{/* <td>{(ctc-(((ctc-((0.01*ctc).toFixed(2)))))).toFixed(2)}</td> */}
<td>{(grossSalary*0.01).toFixed(2)}</td>

</tr>
<tr>
<td>Conveyance Allowance</td>
<td>{((grossSalary-(basicsalary-(-(basicsalary*0.4))))/2).toFixed(2)}</td>

<td>LOP</td>
<td>{(basicsalary/workingdays)*lOP}</td>
{/* <tr>
<td>LOP </td>

<td>{basicsalary}</td>
</tr> */}
</tr>
<tr>
<td>Other allowance</td>
<td>{((grossSalary-(basicsalary-(-(basicsalary*0.4))))/2).toFixed(2)}</td>


</tr>

<tr>
<th>Gross Earnings</th>
<td>{(grossSalary.toFixed(2))}</td>


<th >Gross Deductions</th>
<td>{(grossSalary*0.18+(grossSalary*0.01)+((basicsalary/workingdays)*lOP)).toFixed(2)}</td>
<td>{}</td>
</tr>
<tr>
<td></td>
<td><strong>NET PAY </strong></td>
<td>{(grossSalary-(grossSalary*0.18+(grossSalary*0.01))-((basicsalary/workingdays)*lOP)).toFixed(2)}</td>

<td></td>
</tr>
</table>
  </div>
  <div className="mt-5">
	<button className='btn btn-primary me-2 neeraj' onClick={print}>Print</button>
	{/* <button className='btn btn-success me-2' onClick={pdfGenerator}>Download PDF</button> */}
  <button className='btn btn-danger ms-2 neeraj' onClick={closePdf}>Close</button>
	</div>
</div>

  : 
  <form>
<div>
<center className='mt-2'><h1><b>Employee Salary</b></h1></center>

<fieldset>


  {/* <legend>Employee Salary Slip</legend> <br /> */}
  

<div className="labelContainer">
  <div className="all">
    <label>Employee Id:</label>
  </div>

  <div className="all">
    <label>Month:</label>
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
    <label>LOP:</label>
  </div>

  <div className="all">
    <label>Working days:</label>
  </div>

  {/* <div className="all">
    <label>Conveyance:</label>
  </div>

  <div className="all">
    <label>Special Allowance:</label>
  </div>

  <div className='all'>
    <label>House Rent</label>
  </div> */}
  

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
  <input type="month" value={month} name='month' onChange={inputChangeHandler} placeholder='Enter field ...' required />
  </div>



  {/* <div className="all">
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
  </div> */}

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
  {/* <select disabled={disabled} value={lOP} name='lop' onChange={inputChangeHandler} > */}
      {/* <option selected disabled>Select Work Type</option> */}
      <input type='number' maxLength="2" value={lOP} name='lop' onChange={inputChangeHandler} placeholder='lop days'/> 
      {/* {show.map(e=>(<option valueType={e.basicEmployee1.workType }>{e.basicEmployee1.workType }</option>))} */}
      {/* </select> */}
  </div>  

   <div className="all">
  <input type="number" maxLength="2" value={workingdays} name='workingdays' onChange={inputChangeHandler} placeholder='Enter field ...' />
  </div>

  {/* <div className="all">
    <input type="text" value={conveyance} name='conveyance' onChange={inputChangeHandler} placeholder='Enter field conve...' />
  </div> */}

  {/* <div className="all">
    <input type="text" value={specialallowance} name='specialallowance'onChange={inputChangeHandler} placeholder='Enter field special...' />
  </div>
  <div className="all">
    <input type="text" value={houserent} name='houserent'onChange={inputChangeHandler} placeholder='Enter field special...' />
  </div>  */}
  
  <div className="all"></div>
  <div className="all"></div>

  </div>

<div className="labelContainer">

<div className="all">
    <label>Employee Name:</label>
  </div>

  <div className="all">
    <label>Pan Number:</label>
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
    <label>Reporting To:</label>
  </div>

  <div className="all">
    <label>Pf Number:</label>
  </div>

  <div className="all">
    <label>Paid days:</label>
  </div>

  {/* <div className="all">
    <label>Shift Allowance:</label>
  </div>

  <div className="all">
    <label>Bonus:</label>
  </div>
  <div className='all'>
    <label>
      Phone Bills
    </label>
  </div> */}

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
<select disabled={disabled} value={pan} name="pan" onChange={inputChangeHandler}>
<option selected disabled>Enter your PAN Number</option>
    {show.map(e=>(<option valueType={e.basicEmployee1.panNumber}>{e.basicEmployee1.panNumber}</option>))}
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
      <option selected >Select Reporting to</option>
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
  <input type="number" maxLength="2" value={paidday} name='paidday' onChange={inputChangeHandler} placeholder="Enter field income" />
  </div>

  {/* <div className="all">
  <input type="text" value={shiftallowance}  name='shiftallowance' onChange={inputChangeHandler} placeholder="Enter shift" />
  </div> */}

  {/* <div className="all">
  <input type="text"  value={bonus} name='bonus' onChange={inputChangeHandler} placeholder='Enter field total'/>
  </div> */}
  {/* <div className="all">
    <input type="text" value={phonebill} name='phonebill'onChange={inputChangeHandler} placeholder='Enter bill detail...' />
  </div> */}

  {/* <div className="all">
    <input type="text" placeholder='Enter field' />
  </div> */}

  <div className="all">
  </div>

  <div className="all">

  <button type="submit" disabled={btnDisabled} className='btn btn-success text-light' onClick={download}>Print / Download</button>
  </div>

</div>


</fieldset>

</div>
</form>
}
        
        </>
  )
  
}


export default SalarySetup