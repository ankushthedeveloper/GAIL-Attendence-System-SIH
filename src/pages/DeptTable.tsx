import { useLocation } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import DeptTable from "../components/dept_table";
// import data from "../assets/data.json"; // This is not needed if you're using dynamic data

const DeptPage = () => {
  // Use the useLocation hook to access the passed state
  const location = useLocation();
  const department = location.state?.department; // Access the department object passed from the previous page

  if (!department) {
    return <div>Loading department details...</div>;
  }

  return (
    <div className="AdminContainer">
      <AdminSidebar />
  <main>
    <h1>Department: {department.name}</h1>
    <p>Department ID: {department._id}</p>
    <p>Office: {department.office}</p>
    <p>Total Employees: {department.employees.length}</p>
    <DeptTable data={department.employees} deptId={department._id} />
  </main>
    </div>
  );
};

export default DeptPage;