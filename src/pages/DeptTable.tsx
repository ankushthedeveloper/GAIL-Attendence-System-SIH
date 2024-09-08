import { useLocation } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import DeptTable from "../components/dept_table";
import Loader from "../components/Loader";
// import data from "../assets/data.json"; // This is not needed if you're using dynamic data

const DeptPage = () => {
  // Use the useLocation hook to access the passed state
  const location = useLocation();
  const department = location.state?.department; // Access the department object passed from the previous page

  if (!department) {
    return <div><Loader/></div>;
  }

  return (
    <div className="AdminContainer">
      <AdminSidebar />
      <main>
        <h1>Department: {department.name}</h1>
        <p>Department ID: {department._id}</p>
        <p>Office: {department.office}</p>
        <p>Total Employees: {department.employees.length}</p>
        {/* Pass the department's employees to the DeptTable if required */}
        {/* <DeptTable data={department.employees} /> */}
        <DeptTable data={department.employees} deptId={department._id} />
      </main>
    </div>
  );
};

export default DeptPage;