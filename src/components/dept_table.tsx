import { Column } from 'react-table';
import TableHoc from './TableHoc';


interface DataType{
    deptid:string,
    Department:string,
    EmpId:string,
    EmpName:string,
    workingHours:number
} 


const columns:Column<DataType>[]=[
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
        Header: "workingHours",
        accessor: "workingHours",
    },
 
]

// so TableHoc is a function which returns a JsX , so we need to call the function 
const dept_table = ({data=[]}:{data:DataType[]}) => {
  return TableHoc<DataType>(columns,
    data,
   "Department Info",
   `Department Info`)()
  
}

export default dept_table