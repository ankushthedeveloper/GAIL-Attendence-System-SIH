import { lazy, Suspense } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";


import Loader from "./components/Loader";


const Dashboard = lazy(() => import("./pages/Dashboard"));
const DeptTable = lazy(() => import("./pages/DeptTable"));
const OfficeCreation = lazy(() => import("./pages/OfficeCreation"));
const ModifyOffice = lazy(() => import("./pages/ModifyOffice"));
const DepartmentCreation = lazy(() => import("./pages/DepartmentCreation"));
const OfficeRecords = lazy(() => import("./pages/Records/OfficeRecords"));
const EmployeeRecords = lazy(() => import("./pages/Records/EmployeesRecords"));
const Offices = lazy(() => import("./pages/Offices/Offices"));

const App = () => {
  return (
    // <AuthProvider>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Navigate to="admin/dashboard" />} /> {/* Redirect to login */}
            {/* <Route path="/login" element={<Login />} /> */}

            {/* Protected Routes */}
            {/* <Route element={<ProtectedRoute />}> */}
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/office/:id" element={<Offices />} />
              <Route path="/create-office" element={<OfficeCreation />} />
              <Route path="/modify-office/:id" element={<ModifyOffice />} />
              <Route path="/dept-info/:id" element={<DeptTable />} />
              <Route path="/dept-creation" element={<DepartmentCreation officeName="" />} />
              <Route path="/office-records" element={<OfficeRecords />} />
              <Route path="/employee-records" element={<EmployeeRecords />} />
              <Route path="/dept-info/:departmentName" element={<DeptTable />} />

            {/* </Route> */}
          </Routes>
        </Suspense>
       </Router>
    // </AuthProvider>
   
  
  
  );
};

export default App;
