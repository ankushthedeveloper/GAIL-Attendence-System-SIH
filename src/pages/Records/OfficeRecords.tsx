// import React from "react";
// import { BarChart, LineChart, DoughnutChart, PieChart } from "./Charts";
// import "./OfficeRecords.scss";
// import AdminSidebar from "../../components/AdminSidebar";

// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
// const averageWorkingHours = [8, 7.5, 8.2, 7.8, 8.0];
// const employeesCheckedIn = [50, 45, 60, 55, 70];

// const months = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// const employeesLeft = [20, 15, 10, 12, 18, 22, 19, 16, 14, 20, 25, 30];
// const employeesJoined = [30, 28, 35, 40, 38, 42, 45, 50, 48, 55, 60, 65];

// const departments = ["HR", "Engineering", "Marketing", "Sales"];
// const departmentDistribution = [15, 35, 25, 25]; // Example distribution

// const employeeStatus = ["Active", "On Leave", "Resigned"];
// const statusDistribution = [70, 15, 15]; // Example distribution

// const OfficeRecords = () => {
//   return (
//    <div className="AdminContainer">
//     <AdminSidebar/>
//     <main>
//     <div className="officeRecordsContainer">
//       <h1>Office Records</h1>

//       <div className="chartSection">
//         <h2>Average Working Hours (Last 5 Days)</h2>
//         <div className="chart">
//           <BarChart
//             data_1={averageWorkingHours}
//             data_2={[]} // Omit or provide second dataset if needed
//             title_1="Average Working Hours"
//             title_2=""
//             bg_1="rgba(75,192,192,1)"
//             bg_2=""
//             labels={days}
//           />
//         </div>
//       </div>

//       <div className="chartSection">
//         <h2>Employees Checked In (Last 5 Days)</h2>
//         <div className="chart">
//           <BarChart
//             data_1={employeesCheckedIn}
//             data_2={[]} // Omit or provide second dataset if needed
//             title_1="Employees Checked In"
//             title_2=""
//             bg_1="rgba(153,102,255,1)"
//             bg_2=""
//             labels={days}
//           />
//         </div>
//       </div>

//       <div className="chartSection">
//         <h2>Employees Left (Jan - Dec)</h2>
//         <div className="chart">
//           <LineChart
//             data={employeesLeft}
//             label="Employees Left"
//             backgroundColor="rgba(255,99,132,0.2)"
//             borderColor="rgba(255,99,132,1)"
//             labels={months}
//           />
//         </div>
//       </div>

//       <div className="chartSection">
//         <h2>Employees Joined (Jan - Dec)</h2>
//         <div className="chart">
//           <LineChart
//             data={employeesJoined}
//             label="Employees Joined"
//             backgroundColor="rgba(75,192,192,0.2)"
//             borderColor="rgba(75,192,192,1)"
//             labels={months}
//           />
//         </div>
//       </div>

//       <div className="chartSection">
//         <h2>Department Distribution</h2>
//         <div className="chart">
//           <PieChart
//             labels={departments}
//             data={departmentDistribution}
//             backgroundColor={["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]}
//             cutout={0}
//           />
//         </div>
//       </div>

//       <div className="chartSection">
//         <h2>Employee Status Distribution</h2>
//         <div className="chart">
//           <DoughnutChart
//             labels={employeeStatus}
//             data={statusDistribution}
//             backgroundColor={["#FF6384", "#36A2EB", "#FFCE56"]}
//             cutout={60}
//             legends={true}
//           />
//         </div>
//       </div>
//     </div>
//     </main>
//    </div>
//   );
// };

// export default OfficeRecords;

import React from "react";
import { BarChart, LineChart, DoughnutChart, PieChart } from "../Charts";
import "./OfficeRecords.scss";
import AdminSidebar from "../../components/AdminSidebar";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const averageWorkingHours = [8, 7.5, 8.2, 7.8, 8.0];
const employeesCheckedIn = [50, 45, 60, 55, 70];

const departments = ["HR", "Engineering", "Marketing", "Sales"];
const departmentDistribution = [15, 35, 25, 25]; // Example distribution

const employeeStatus = ["Active", "On Leave", "Resigned"];
const statusDistribution = [70, 15, 15]; // Example distribution
const topDepartments = ["Engineering", "Sales", "Marketing", "HR"];
const performanceRatings = [4.7, 4.5, 4.3, 4.1]; // Example average performance ratings
const attendanceRates = ["HR", "Engineering", "Marketing", "Sales"];
const attendanceDistribution = [95, 90, 85, 80]; // Example attendance rates

const OfficeRecords = () => {
  return (
    <div className="AdminContainer">
      <AdminSidebar />
      <main>
        <div className="officeRecordsContainer">
          <h1>Office Records</h1>

          <div className="chartSection">
            <h2>Department Distribution</h2>
            <div className="chart">
              <PieChart
                labels={departments}
                data={departmentDistribution}
                backgroundColor={["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]}
                cutout={0}
              />
            </div>
          </div>
          <div className="chartSection">
            <h2>Average Working Hours (Last 5 Days)</h2>
            <div className="chart">
              <BarChart
                data_1={averageWorkingHours}
                data_2={[]} // Omit or provide second dataset if needed
                title_1="Average Working Hours"
                title_2=""
                bg_1="rgba(75,192,192,1)"
                bg_2=""
                labels={days}
              />
            </div>
          </div>

          <div className="chartSection">
            <h2>Employees Checked In (Last 5 Days)</h2>
            <div className="chart">
              <BarChart
                data_1={employeesCheckedIn}
                data_2={[]} // Omit or provide second dataset if needed
                title_1="Employees Checked In"
                title_2=""
                bg_1="rgba(153,102,255,1)"
                bg_2=""
                labels={days}
              />
            </div>
          </div>

          <div className="chartSection">
            <h2>Top Performing Departments</h2>
            <div className="chart">
              <BarChart
                data_1={performanceRatings}
                data_2={[]} // Omit or provide second dataset if needed
                title_1="Performance Rating"
                title_2=""
                bg_1="rgba(255,159,64,1)"
                bg_2=""
                labels={topDepartments}
              />
            </div>
          </div>

          <div className="chartSection">
            <h2>Attendance Rate by Department</h2>
            <div className="chart">
              <DoughnutChart
                labels={attendanceRates}
                data={attendanceDistribution}
                backgroundColor={["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]}
                cutout={60}
                legends={true}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OfficeRecords;
