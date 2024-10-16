import { Column } from 'react-table';
import TableHoc from './TableHoc';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface DataType {
  deptid: string;
  Department: string;
  EmpId: string;
  EmpName: string;
  checkedIN: boolean;
}

interface DeptTableProps {
  data?: DataType[]; // Optional because you already fetch data, no need to pass as a prop
  deptId: string;
}

// Define API response type to help with response validation
interface ApiResponse {
  Dept: DataType[];
}

const columns: Column<DataType>[] = [
  {
    Header: "Id",
    accessor: "deptid",
  },
  {
    Header: "Department",
    accessor: "Department",
  },
  {
    Header: "Employee Id",
    accessor: "EmpId",
  },
  {
    Header: "Employee Name",
    accessor: "EmpName",
  },
  {
    Header: "Checked In",
    accessor: "checkedIN",
    Cell: ({ value }: { value: boolean }) => (value ? 'Yes' : 'No'),
  },
];

const DeptTable = ({ deptId }: DeptTableProps) => {
  const [data1, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          `https://alpha-one-server.vercel.app/api/department/department/${deptId}/employees`
        );
        setData(response.data.Dept); // Set state with the correct data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Initial fetch
    fetchData();

    // Set an interval to fetch data every 3 seconds
    const intervalId = setInterval(fetchData, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [deptId]);

  return TableHoc<DataType>(columns, data1, "Department Info", `Department Info`)();
};

export default DeptTable;
