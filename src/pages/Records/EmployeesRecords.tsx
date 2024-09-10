// // // import React from "react";
// // // import { BarChart, LineChart, DoughnutChart, PieChart } from "../Charts";
// // // import "./EmployeeRecords.scss";
// // // import AdminSidebar from "../../components/AdminSidebar";

// // // // Months for line charts
// // // const months = [
// // //   "January",
// // //   "February",
// // //   "March",
// // //   "April",
// // //   "May",
// // //   "June",
// // //   "July",
// // //   "August",
// // //   "September",
// // //   "October",
// // //   "November",
// // //   "December",
// // // ];

// // // // Employees-related data
// // // const employeesLeft = [20, 15, 10, 12, 18, 22, 19, 16, 14, 20, 25, 30];
// // // const employeesJoined = [30, 28, 35, 40, 38, 42, 45, 50, 48, 55, 60, 65];

// // // // Department performance and attendance-related data
// // // const departments = ["HR", "Engineering", "Marketing", "Sales"];
// // // const departmentDistribution = [15, 35, 25, 25]; 
// // // const employeeStatus = ["Active", "On Leave", "Resigned"];
// // // const statusDistribution = [70, 15, 15]; // Example distribution

// // // // Unique employee stats
// // // const ageGroups = ["20-30", "31-40", "41-50", "51-60", "61+"];
// // // const ageDistribution = [25, 40, 20, 10, 5]; // Example distribution

// // // const EmployeeRecords = () => {
// // //   return (
// // //     <div className="AdminContainer">
// // //       <AdminSidebar />
// // //       <main>
// // //         <div className="employeeRecordsContainer">
// // //           <h1>Employee Records</h1>
// // //           <div className="chartSection">
// // //             <h2>Employees Joined (Jan - Dec)</h2>
// // //             <div className="chart">
// // //               <LineChart
// // //                 data={employeesJoined}
// // //                 label="Employees Joined"
// // //                 backgroundColor="rgba(75,192,192,0.2)"
// // //                 borderColor="rgba(75,192,192,1)"
// // //                 labels={months}
// // //               />
// // //             </div>
// // //           </div>

// // //           <div className="chartSection">
// // //             <h2>Employee Status Distribution</h2>
// // //             <div className="chart">
// // //               <DoughnutChart
// // //                 labels={employeeStatus}
// // //                 data={statusDistribution}
// // //                 backgroundColor={["#FF6384", "#36A2EB", "#FFCE56"]}
// // //                 cutout={60}
// // //                 legends={true}
// // //               />
// // //             </div>
// // //           </div>

// // //           <div className="chartSection">
// // //             <h2>Employee Age Distribution</h2>
// // //             <div className="chart">
// // //               <PieChart
// // //                 labels={ageGroups}
// // //                 data={ageDistribution}
// // //                 backgroundColor={[
// // //                   "#FF6384",
// // //                   "#36A2EB",
// // //                   "#FFCE56",
// // //                   "#4BC0C0",
// // //                   "#9966FF",
// // //                 ]}
// // //                 cutout={0}
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // export default EmployeeRecords;


// // import React from "react";
// // import { BarChart, LineChart, DoughnutChart, PieChart } from "../Charts";
// // import "./EmployeeRecords.scss";
// // import AdminSidebar from "../../components/AdminSidebar";

// // // Months for line charts
// // const months = [
// //   "January",
// //   "February",
// //   "March",
// //   "April",
// //   "May",
// //   "June",
// //   "July",
// //   "August",
// //   "September",
// //   "October",
// //   "November",
// //   "December",
// // ];

// // // Employees-related data
// // const employeesLeft = [20, 15, 10, 12, 18, 22, 19, 16, 14, 20, 25, 30];
// // const employeesJoined = [30, 28, 35, 40, 38, 42, 45, 50, 48, 55, 60, 65];

// // // Department performance and attendance-related data
// // const departments = ["HR", "Engineering", "Marketing", "Sales"];
// // const departmentDistribution = [15, 35, 25, 25]; 
// // const employeeStatus = ["Active", "On Leave", "Resigned"];
// // const statusDistribution = [70, 15, 15]; // Example distribution

// // // Unique employee stats
// // const ageGroups = ["20-30", "31-40", "41-50", "51-60", "61+"];
// // const ageDistribution = [25, 40, 20, 10, 5]; // Example distribution

// // // Additional Charts Data
// // const projectsPerDepartment = [10, 25, 15, 30]; // Example data for projects handled by each department
// // const monthlyAttendanceRate = [85, 87, 90, 88, 85, 92, 95, 93, 90, 88, 87, 89]; // Monthly attendance rates

// // // Employee performance rating by department (out of 5)
// // const performanceRatings = [4.2, 4.5, 3.8, 4.0]; // Example performance data

// // // Gender Diversity
// // const genderDiversity = ["Male", "Female", "Non-binary"];
// // const genderRatio = [60, 35, 5]; // Example gender ratio distribution

// // const EmployeeRecords = () => {
// //   return (
// //     <div className="AdminContainer">
// //       <AdminSidebar />
// //       <main>
// //         <div className="employeeRecordsContainer">
// //           <h1>Employee Records</h1>

// //           {/* Employees Joined Line Chart */}
// //           <div className="chartSection">
// //             <h2>Employees Joined (Jan - Dec)</h2>
// //             <div className="chart">
// //               <LineChart
// //                 data={employeesJoined}
// //                 label="Employees Joined"
// //                 backgroundColor="rgba(75,192,192,0.2)"
// //                 borderColor="rgba(75,192,192,1)"
// //                 labels={months}
// //               />
// //             </div>
// //           </div>

// //           {/* Employee Status Distribution Doughnut Chart */}
// //           <div className="chartSection">
// //             <h2>Employee Status Distribution</h2>
// //             <div className="chart">
// //               <DoughnutChart
// //                 labels={employeeStatus}
// //                 data={statusDistribution}
// //                 backgroundColor={["#FF6384", "#36A2EB", "#FFCE56"]}
// //                 cutout={60}
// //                 legends={true}
// //               />
// //             </div>
// //           </div>

// //           {/* Employee Age Distribution Pie Chart */}
// //           <div className="chartSection">
// //             <h2>Employee Age Distribution</h2>
// //             <div className="chart">
// //               <PieChart
// //                 labels={ageGroups}
// //                 data={ageDistribution}
// //                 backgroundColor={[
// //                   "#FF6384",
// //                   "#36A2EB",
// //                   "#FFCE56",
// //                   "#4BC0C0",
// //                   "#9966FF",
// //                 ]}
// //                 cutout={0}
// //               />
// //             </div>
// //           </div>

// //           {/* New Charts Section */}
// //           {/* Department-wise Project Allocation (Bar Chart) */}
// //           <div className="chartSection">
// //             <h2>Department-wise Project Allocation</h2>
// //             <div className="chart">
// //               <BarChart
// //                 labels={departments}
// //                 data={projectsPerDepartment}
// //                 backgroundColor="rgba(255, 159, 64, 0.6)"
// //                 borderColor="rgba(255, 159, 64, 1)"
// //                 label="Projects Handled"
// //               />
// //             </div>
// //           </div>

// //           {/* Monthly Attendance Rate (Line Chart) */}
// //           <div className="chartSection">
// //             <h2>Monthly Attendance Rate (Jan - Dec)</h2>
// //             <div className="chart">
// //               <LineChart
// //                 data={monthlyAttendanceRate}
// //                 label="Attendance Rate (%)"
// //                 backgroundColor="rgba(153, 102, 255, 0.2)"
// //                 borderColor="rgba(153, 102, 255, 1)"
// //                 labels={months}
// //               />
// //             </div>
// //           </div>

// //           {/* Employee Performance by Department (Bar Chart) */}
// //           <div className="chartSection">
// //             <h2>Employee Performance by Department</h2>
// //             <div className="chart">
// //               <BarChart
// //                 labels={departments}
// //                 data={performanceRatings}
// //                 backgroundColor="rgba(75,192,192,0.6)"
// //                 borderColor="rgba(75,192,192,1)"
// //                 label="Performance Rating (out of 5)"
// //               />
// //             </div>
// //           </div>

// //           {/* Gender Diversity (Pie Chart) */}
// //           <div className="chartSection">
// //             <h2>Gender Diversity</h2>
// //             <div className="chart">
// //               <PieChart
// //                 labels={genderDiversity}
// //                 data={genderRatio}
// //                 backgroundColor={["#FF6384", "#36A2EB", "#FFCE56"]}
// //                 cutout={0}
// //               />
// //             </div>
// //           </div>

// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default EmployeeRecords;



// // components/EmployeeRecords/EmployeeRecords.js
// import React from "react";
// import { BarChart, DoughnutChart, PieChart, LineChart } from "../Charts";
// import "./EmployeeRecords.scss";
// import AdminSidebar from "../../components/AdminSidebar";

// // Months for line charts
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// // Employees-related data
// const employeesLeft = [20, 15, 10, 12, 18, 22, 19, 16, 14, 20, 25, 30];
// const employeesJoined = [30, 28, 35, 40, 38, 42, 45, 50, 48, 55, 60, 65];

// // Department performance and attendance-related data
// const departments = ["HR", "Engineering", "Marketing", "Sales"];
// const departmentDistribution = [15, 35, 25, 25];
// const employeeStatus = ["Active", "On Leave", "Resigned"];
// const statusDistribution = [70, 15, 15]; // Example distribution

// // Unique employee stats
// const ageGroups = ["20-30", "31-40", "41-50", "51-60", "61+"];
// const ageDistribution = [25, 40, 20, 10, 5]; // Example distribution

// // Additional Charts Data
// const projectsPerDepartment = [10, 25, 15, 30]; // Example data for projects handled by each department
// const monthlyAttendanceRate = [85, 87, 90, 88, 85, 92, 95, 93, 90, 88, 87, 89]; // Monthly attendance rates

// // Employee performance rating by department (out of 5)
// const performanceRatings = [4.2, 4.5, 3.8, 4.0]; // Example performance data

// // Gender Diversity
// const genderDiversity = ["Male", "Female", "Non-binary"];
// const genderRatio = [60, 35, 5]; // Example gender ratio distribution

// const EmployeeRecords = () => {
//   return (
//     <div className="AdminContainer">
//       <AdminSidebar />
//       <main>
//         <div className="employeeRecordsContainer">
//           <h1>Employee Records</h1>

//           {/* Employees Joined Line Chart */}
//           <div className="chartSection">
//             <h2>Employees Joined (Jan - Dec)</h2>
//             <div className="chart">
//               <LineChart
//                 data={employeesJoined}
//                 label="Employees Joined"
//                 backgroundColor="rgba(75,192,192,0.2)"
//                 borderColor="rgba(75,192,192,1)"
//                 labels={months}
//               />
//             </div>
//           </div>

//           {/* Employee Status Distribution Doughnut Chart */}
//           <div className="chartSection">
//             <h2>Employee Status Distribution</h2>
//             <div className="chart">
//               <DoughnutChart
//                 labels={employeeStatus}
//                 data={statusDistribution}
//                 backgroundColor={["#FF6384", "#36A2EB", "#FFCE56"]}
//                 cutout={60}
//                 legends={true}
//               />
//             </div>
//           </div>

//           {/* Employee Age Distribution Pie Chart */}
//           <div className="chartSection">
//             <h2>Employee Age Distribution</h2>
//             <div className="chart">
//               <PieChart
//                 labels={ageGroups}
//                 data={ageDistribution}
//                 backgroundColor={[
//                   "#FF6384",
//                   "#36A2EB",
//                   "#FFCE56",
//                   "#4BC0C0",
//                   "#9966FF",
//                 ]}
//                 cutout={0}
//               />
//             </div>
//           </div>

//           {/* Department-wise Project Allocation (Bar Chart) */}
//           <div className="chartSection">
//             <h2>Department-wise Project Allocation</h2>
//             <div className="chart">
//               <BarChart
//                 labels={departments}
//                 data_1={projectsPerDepartment}
//                 bg_1="rgba(255, 159, 64, 0.6)"
//                 borderColor="rgba(255, 159, 64, 1)"
//                 label="Projects Handled"
//               />
//             </div>
//           </div>

//           {/* Monthly Attendance Rate (Line Chart) */}
//           <div className="chartSection">
//             <h2>Monthly Attendance Rate (Jan - Dec)</h2>
//             <div className="chart">
//               <LineChart
//                 data={monthlyAttendanceRate}
//                 label="Attendance Rate (%)"
//                 backgroundColor="rgba(153, 102, 255, 0.2)"
//                 borderColor="rgba(153, 102, 255, 1)"
//                 labels={months}
//               />
//             </div>
//           </div>

//           {/* Employee Performance by Department (Bar Chart) */}
//           <div className="chartSection">
//             <h2>Employee Performance by Department</h2>
//             <div className="chart">
//               <BarChart
//                 labels={departments}
//                 data_1={performanceRatings}
//                 bg_1="rgba(170,20,19,0.3)"
//                 bg_2="red"
//                 borderColor="rgba(75,192,192,1)"
//                 label="Performance Rating (out of 5)"
//               />
//             </div>
//           </div>

//           {/* Gender Diversity (Pie Chart) */}
//           <div className="chartSection">
//             <h2>Gender Diversity</h2>
//             <div className="chart">
//               <PieChart
//                 labels={genderDiversity}
//                 data={genderRatio}
//                 backgroundColor={["#FF6384", "#36A2EB", "#FFCE56"]}
//                 cutout={0}
//               />
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default EmployeeRecords;


import AdminSidebar from "../../components/AdminSidebar";
import { BarChart, DoughnutChart, LineChart, PieChart } from "../Charts";
import "./EmployeeRecords.scss";

// Months for line charts
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Employees-related data
// const employeesLeft = [20, 15, 10, 12, 18, 22, 19, 16, 14, 20, 25, 30];
const employeesJoined = [30, 28, 35, 40, 38, 42, 45, 50, 48, 55, 60, 65];

// Department performance and attendance-related data
const departments = ["HR", "Engineering", "Marketing", "Sales"];
// const departmentDistribution = [15, 35, 25, 25];
const employeeStatus = ["Active", "On Leave", "Resigned"];
const statusDistribution = [70, 15, 15]; // Example distribution

// Unique employee stats
const ageGroups = ["20-30", "31-40", "41-50", "51-60", "61+"];
const ageDistribution = [25, 40, 20, 10, 5]; // Example distribution

// Additional Charts Data
const projectsPerDepartment = [10, 25, 15, 30]; // Example data for projects handled by each department
const monthlyAttendanceRate = [85, 87, 90, 88, 85, 92, 95, 93, 90, 88, 87, 89]; // Monthly attendance rates

// Employee performance rating by department (out of 5)
// const performanceRatings = [4.2, 4.5, 3.8, 4.0]; // Example performance data

// Gender Diversity
const genderDiversity = ["Male", "Female", "Non-binary"];
const genderRatio = [60, 35, 5]; // Example gender ratio distribution

const EmployeeRecords = () => {
  return (
    <div className="AdminContainer">
      <AdminSidebar />
      <main>
        <div className="employeeRecordsContainer">
          <h1>Employee Records</h1>

          {/* Employees Joined Line Chart */}
          <div className="chartSection">
            <h2>Employees Joined (Jan - Dec)</h2>
            <div className="chart">
              <LineChart
                data={employeesJoined}
                label="Employees Joined"
                backgroundColor="rgba(75,192,192,0.2)"
                borderColor="rgba(75,192,192,1)"
                labels={months}
              />
            </div>
          </div>

          {/* Employee Status Distribution Doughnut Chart */}
          <div className="chartSection">
            <h2>Employee Status Distribution</h2>
            <div className="chart">
              <DoughnutChart
                labels={employeeStatus}
                data={statusDistribution}
                backgroundColor={["#FF6384", "#36A2EB", "#FFCE56"]}
                cutout={60}
                legends={true}
              />
            </div>
          </div>

          {/* Employee Age Distribution Pie Chart */}
          <div className="chartSection">
            <h2>Employee Age Distribution</h2>
            <div className="chart">
              <PieChart
                labels={ageGroups}
                data={ageDistribution}
                backgroundColor={[
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#4BC0C0",
                  "#9966FF",
                ]}
                cutout={0}
              />
            </div>
          </div>

          {/* Department-wise Project Allocation (Bar Chart) */}
          <div className="chartSection">
            <h2>Department-wise Project Allocation</h2>
            <div className="chart">
              <BarChart
               title_1="Project Allocation"
                title_2="Employees"
                labels={departments}
                data_1={projectsPerDepartment}
                data_2={projectsPerDepartment} // Fix the prop name
                bg_1="rgba(255, 159, 64, 0.6)"
                bg_2="blue" 
              />
            </div>
          </div>

          {/* Monthly Attendance Rate (Line Chart) */}
          <div className="chartSection">
            <h2>Monthly Attendance Rate (Jan - Dec)</h2>
            <div className="chart">
              <LineChart
                data={monthlyAttendanceRate}
                label="Attendance Rate (%)"
                backgroundColor="rgba(153, 102, 255, 0.2)"
                borderColor="rgba(153, 102, 255, 1)"
                labels={months}
              />
            </div>
          </div>

          {/* Employee Performance by Department (Bar Chart) */}
          <div className="chartSection">
            <h2>Employee Performance by Department</h2>
            <div className="chart">
              <BarChart
                 title_1="Project Allocation"
                 title_2="Employees"
                 labels={departments}
                 data_1={projectsPerDepartment}
                 data_2={projectsPerDepartment} // Fix the prop name
                 bg_1="rgba(255, 159, 64, 0.6)"
                 bg_2="blue" 
              />
            </div>
          </div>

          {/* Gender Diversity (Pie Chart) */}
          <div className="chartSection">
            <h2>Gender Diversity</h2>
            <div className="chart">
              <PieChart
                labels={genderDiversity}
                data={genderRatio}
                backgroundColor={["#FF6384", "#36A2EB", "#FFCE56"]}
                cutout={0}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmployeeRecords;
