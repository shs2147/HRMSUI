import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import {
  BrowserRouter,
  Route,
  Routes,
  redirect,
  useNavigate,
  useLocation,
  Switch,
} from "react-router-dom";
import RegisterEmployee from "./pages/TrainingModule/RegisterEmployee/RegisterEmployee";
import EmployeeMaster from "./pages/Menu Master/EmployeeMaster/EmployeeMaster";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Saved from "./pages/Saved";
import Protected from "./Protected"
import AddEmployee from "./pages/Menu Master/AddEmployee/AddEmployee";
// import EmployeeSalarySetup from "./pages/Payroll/EmployeeSalarySetup/EmployeeSalarySetup";
import SalarySetup from "./pages/Payroll/SalarySetup/SalarySetup";
import PayRoll from "./pages/Payroll/PayRoll/PayRoll";
import PayrollItem from "./pages/Payroll/PayrollItem/PayrollItem";
import Allowances from "./pages/Payroll/Allowance/Allowances";
import Deduction from "./pages/Payroll/Deduction/Deduction";
import EmployeeAllowance from "./pages/Payroll/EmployeeAllowance/EmployeeAllowances";
import EmployeeDeduction from "./pages/Payroll/EmployeeDeduction/EmployeeDeduction";
import AddJobTitle from "./pages/Recruitment/AddjobTitle/AddJobTitle";
// import ViewJobTitle from "./pages/Recruitment/ViewJobTitle/ViewJobTitle";
import AddJobVacancy from "./pages/Recruitment/AddJobVacancy/AddJobVacancy";
import FixingInterviewOnline from "./pages/Recruitment/FixingInterviewOnline/FixingInterviewOnline";
// import OnlineApplication from "./pages/Recruitment/OnlineApplication/OnlineApplication";
// import RegisterEmployee from "./pages/TrainingModule/RegisterEmployee/RegisterEmployee";
import TrainingToFeedback from "./pages/TrainingModule/TrainingToFeedback/TrainingToFeedback";
import TrainingMaster from "./pages/TrainingModule/TrainingMaster/TrainingMaster";
import AddShift from "./pages/Shift Management/Add Shift/AddShift";
// import ViewEmployeeShift from "./pages/Shift Management/View Employee Shift/ViewEmployeeShift";
import AttendanceDetails from "./pages/Screening & Approval/AttendanceDetails.js";
import CreateLeave from "./pages/SelfPortal/CreateLeave/CreateLeave";
import MonthlyPerformance from "./pages/SelfPortal/MonthlyPerformance/MonthlyPerformance";
import RaiseGrievance from "./pages/SelfPortal/RaiseGrievance/RaiseGrievance";
import SelfPortal from "./pages/SelfPortal/SelfPortal/SelfPortal";
import LeaveReport from "./pages/Attendance/LeaveReport";
import MonthwiseAttdReport from "./pages/Attendance/MonthwiseAttdReport";
import MonthwiseReport from "./pages/Attendance/MonthwiseReport";
import ViewOtReport from "./pages/Attendance/ViewOtReport";
import AddOverTime from "./pages/Attendance/AddOverTime";
import UploadBulkAttendance from "./pages/Attendance/UploadBulkAttendance";
import AddIndividualAttendance from "./pages/Attendance/AddIndividualAttendance";
import LeaveAproval from "./pages/Screening & Approval/LeaveAproval";
import Edit from "./SubPages/Edit";
import AddHoliday from "./pages/Organisation Structure/AddHoliday";
import LeaveType from "./pages/Organisation Structure/LeaveType";
// import PayheadList from "./pages/Organisation Structure/PayheadList";
import LoanMaster from "./pages/Advance Or Loan/LoanMaster";
import LoanApplication from "./pages/Advance Or Loan/LoanApplication";
// import EmployeeMaster from "./pages/Menu Master/EmployeeMaster/EmployeeMaster";
import AddEmployees from "./SubPages/AddEmployees";
import UserMaster from "./pages/Menu Master/User Master/UserMaster";
import DepartmentMaster from "./pages/Menu Master/Department Master/DepartmentMaster";
import DesignationMaster from "./pages/Menu Master/Designation Master/DesignationMaster";
import EmploymentTypeMaster from "./pages/Menu Master/Employment Type Master/EmploymentTypeMaster";
// import UserApproval from "./pages/Menu Master/User Approval/UserApproval";
import Training from "./pages/Training/Training";
import Branch from "./pages/Branch/Branch";
// import Position from "./pages/Position/Position";
import SignIn from "./pages/Signin/SignIn";
import SignInForm from "./pages/Signin/SignInForm";
import SignUpForm from "./pages/Signin/SignUpForm";
//import ProtectedRoute from "./privateRoute";
//import withAuth from "./auth";
import Event from "./pages/Training/Event";
import ViewEmployeeShift from "./pages/Shift Management/ViewEmployeeShift";
import { useEffect, useState } from "react";
import UserMasterData from "./pages/Menu Master/User Master Data/UserMasterData";


function App() {
  const [data, setData] = useState({});
  const [logged, setLogged] = useState(false);
  const [token, setToken] = useState({});
  let token2 =  sessionStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();
 
  useEffect(() => {
    if (token2) {
      // navigate("/Dashboard");
    } else {
      navigate("/")
    }
  }, [token, logged]);

  // const data1 = sessionStorage.getItem('token');

  // Parse the retrieved data into a JavaScript object
  const parsedData = JSON.parse(token2);
  localStorage.setItem('setLogged',true)

  // Set the parsed data to Local Storage

  localStorage.setItem('token2', JSON.stringify(parsedData));


  // const setLogged=true;

  return (
    

    <>
     
      {location.pathname === "/" ? (
        <Routes>
          <Route path="/" element={<SignIn  />} exact />
        </Routes>
      ) : (
        <SideBar>
          <Routes>
           
            {/* <Route
              path="/Dashboard"
              element={<Dashboard setLogged={setLogged} />}
            /> */}
            <Route 
              path={"/Dashboard"}
              element={<Protected Component={Dashboard} setLogged={setLogged}/> }
            />
            <Route path="/SubPages/AddEmployees" element={<AddEmployees />} />
            <Route path="/menuMaster" element={<Users />} />
            <Route
              path="/menuMaster/EmployeeMaster"
              element={<EmployeeMaster />}
            />
            <Route
              path="/menuMaster/UserMasterData"
              element={<UserMasterData />}
            />
            
            <Route path="/menuMaster/AddEmployee" element={<AddEmployee />} />
            <Route
              path="/menuMaster/DepartmentMaster"
              element={<DepartmentMaster />}
            />
            <Route
              path="/menuMaster/DesignationMaster"
              element={<DesignationMaster />}
            />
            <Route
              path="/menuMaster/EmploymentTypeMaster"
              element={<EmploymentTypeMaster />}
            />
            {/* <Route path="/menuMaster/UserApproval" element={<UserApproval />} /> */}
            <Route
              path="/selfPortal/AttendanceDetails"
              element={<AttendanceDetails />}
            />
            <Route path="/selfPortal/CreateLeave" element={<CreateLeave />} />
            <Route
              path="/selfPortal/MonthlyPerformance"
              element={<MonthlyPerformance />}
            />
            <Route
              path="/selfPortal/RaiseGrievance"
              element={<RaiseGrievance />}
            />
            <Route path="/selfPortal/SelfPortal" element={<SelfPortal />} />
            <Route
              path="/screening&Approval/Attendance Details"
              element={<AttendanceDetails />}
            />
            <Route
              path="/screening&Approval/LeaveAproval"
              element={<LeaveAproval />}
            />
            <Route path="/menuMaster/UserMaster" element={<UserMaster />} />
            {/* <Route path="/payroll/EmployeeSalarySetup" element={<EmployeeSalarySetup />} /> */}
            <Route path="/payroll/SalarySetup" element={<SalarySetup />} />
            {/* <Route path="/payroll/PayRoll" element={<PayRoll />} /> */}
            {/* <Route path="/payroll/PayrollItem" element={<PayrollItem />} /> */}
            {/* <Route path="/allowance/Allowance" element={<Allowances />} /> */}
            {/* <Route path="/deduction/Deduction" element={<Deduction />} /> */}
            {/* <Route
              path="/employeeallowance/EmployeeAllowance"
              element={<EmployeeAllowance />}
            /> */}
            {/* <Route
              path="/employeededuction/EmployeeDeduction"
              element={<EmployeeDeduction />}
            /> */}
            <Route
              path="/organisationStructure/AddHoliday"
              element={<AddHoliday />}
            />
            <Route
              path="/organisationStructure/LeaveType"
              element={<LeaveType />}
            />
            {/* <Route
              path="/organisationStructure/PayheadList"
              element={<PayheadList />}
            /> */}
            <Route path="/requirementStructure" element={<Saved />} />
            <Route path="/Recruitment/AddjobTitle" element={<AddJobTitle />} />
            {/* <Route
              path="//Recruitment/ViewJobTitle"
              element={<ViewJobTitle />}
            /> */}
            <Route
              path="/Recruitment/AddJobVacancy"
              element={<AddJobVacancy />}
            />
            <Route
              path="/Recruitment/FixinInterviewOnline"
              element={<FixingInterviewOnline />}
            />
            {/* <Route
              path="/Recruitment/OnlineApplication"
              element={<OnlineApplication />}
            /> */}
            <Route
              path="/trainingModule/RegisterEmployee"
              element={<RegisterEmployee />}
            />
            <Route
              path="/trainingModule/TainingMaster"
              element={<TrainingMaster />}
            />
            <Route
              path="/trainingModule/TrainingToFeedback"
              element={<TrainingToFeedback />}
            />
            <Route path="/advanceOrLoan/LoanMaster" element={<LoanMaster />} />
            <Route
              path="/advanceOrLoan/LoanApplication"
              element={<LoanApplication />}
            />
            <Route
              path="/attendance/AddIndividualAttendance"
              element={<AddIndividualAttendance />}
            />
            <Route
              path="/attendance/UploadBulkAttendance"
              element={<UploadBulkAttendance />}
            />
            <Route path="/attendance/AddOverTime" element={<AddOverTime />} />
            <Route path="/attendance/ViewOtReport" element={<ViewOtReport />} />
            <Route
              path="/attendance/MonthwiseReport"
              element={<MonthwiseReport />}
            />
            <Route
              path="/attendance/MonthwiseAttdReport"
              element={<MonthwiseAttdReport />}
            />
            <Route path="/attendance/LeaveReport" element={<LeaveReport />} />
            <Route path="/training/training" element={<Training />} />
            <Route path="/training/event" element={<Event />} />
            
            <Route path="/branch/branch" element={<Branch />} />

            {/* <Route path="/Position/Position" element={<Position />} /> */}

            <Route path="/Shift Management/Add Shift" element={<AddShift />} />
            <Route
              path="/Shift Management/ViewEmployeeShift"
              element={<ViewEmployeeShift/>}
            />
            <Route path="/edit" element={<Edit />} />
            <Route exact path="/signin/sign-out" component={<SignUpForm />} />
            <Route path="/signin/signin" component={<SignInForm />} />
            <Route path="/*" element={<> not found</>} />
          </Routes>
        </SideBar>
      )}
    </>
  );
}

export default App;
