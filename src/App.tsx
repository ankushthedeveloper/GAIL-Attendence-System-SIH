// import { lazy, Suspense, useEffect, useState } from "react";
// import { Link, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
// import Loader from "./components/Loader";
// import Login from "./pages/SignupLogin/Login";
// import Offices from "./pages/Offices/Offices";

// const Dashboard = lazy(() => import("./pages/Dashboard"));
// const DeptTable = lazy(() => import("./pages/DeptTable"));
// const OfficeCreation = lazy(() => import("./pages/OfficeCreation"));
// const ModifyOffice = lazy(() => import("./pages/ModifyOffice"));
// const DepartmentCreation=lazy(() => import("./pages/DepartmentCreation"));
// const OfficeRecords = lazy(() => import("./pages/Records/OfficeRecords"));
// const EmployeeRecords = lazy(() => import("./pages/Records/EmployeesRecords")); 

// const App = () => {
//   return (
//     <Router>
//       <Suspense fallback={<Loader />}>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Link to="/admin/dashboard">
//                 <button className="gotoBtn">Go to Dashboard</button>
//                 <div>
//                   <img
//                     src="https://images.livemint.com/img/2019/07/15/600x338/Gail-krYG--621x414@LiveMint_1563176718486.JPG"
//                     alt=""
//                     style={{
//                       alignContent: "center",
//                       width: "100%",
//                       height: "100%",
//                     }}
//                   />
//                 </div>
//               </Link>
//             }
//           />
//           <Route path="/login" element={<Login/> } />
//           <Route path="/admin/dashboard" element={<Dashboard />}/>
         

//           {/* {Offices} */}

//           <Route path="/office/:id" element={<Offices />} />
//           {/* {Offices-Creation} */}
          
//           <Route path="/create-office" element={<OfficeCreation />} />
//           <Route path="/dept-info/:id" element={<DeptTable />} />
//           {/* <Route
//             path="/modify-office/:id"
//             element={
//               <ModifyOffice
//                 getOfficeById
//                 getEmployeeById
//                 updateOffice
//                 updateEmployee
//               />
//             }
//           /> */}
//           <Route path="/dept-creation" element={<DepartmentCreation />} />
//           <Route path="/office-records" element={<OfficeRecords />} />
//           <Route path="/employee-records" element={<EmployeeRecords />} />




//         </Routes>
//       </Suspense>
//     </Router>
//   );
// };

// export default App;





import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext"; // Import the context
import Loader from "./components/Loader";
import Login from "./Login";

import Offices from "./pages/Offices/Offices";
import ProtectedRoute from "./ProtectedRoute";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const DeptTable = lazy(() => import("./pages/DeptTable"));
const OfficeCreation = lazy(() => import("./pages/OfficeCreation"));
const ModifyOffice = lazy(() => import("./pages/ModifyOffice"));
const DepartmentCreation = lazy(() => import("./pages/DepartmentCreation"));
const OfficeRecords = lazy(() => import("./pages/Records/OfficeRecords"));
const EmployeeRecords = lazy(() => import("./pages/Records/EmployeesRecords"));

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to login */}
            <Route path="/login" element={<Login />} />
            
            {/* Protected Routes */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/office/:id"
              element={
                <ProtectedRoute>
                  <Offices />
                </ProtectedRoute>
              }
            />
            <Route
              path="/create-office"
              element={
                <ProtectedRoute>
                  <OfficeCreation />
                </ProtectedRoute>
              }
            />

         <Route   
              path="/modify-office/:id"
              element={
                <ProtectedRoute>
                  <ModifyOffice />
                </ProtectedRoute>
              }
            />

            <Route


              path="/dept-info/:id"
              element={
                <ProtectedRoute>
                  <DeptTable />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dept-creation"
              element={
                <ProtectedRoute>
                  <DepartmentCreation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/office-records"
              element={
                <ProtectedRoute>
                  <OfficeRecords />
                </ProtectedRoute>
              }
            />
            <Route
              path="/employee-records"
              element={
                <ProtectedRoute>
                  <EmployeeRecords />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
};

export default App;
