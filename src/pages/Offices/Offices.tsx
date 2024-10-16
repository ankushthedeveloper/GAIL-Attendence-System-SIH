import React, { useEffect, useState } from 'react';
import Office_page from '../../components/Office_page';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader, { Skeleton } from '../../components/Loader';


// Define the type for Office data
interface OfficeData {
  _id:string;
  officeid: string;
  name: string;
  Address: string;
  employees: { _id: string; name: string }[];
  CheckedINemployees: { _id: string; name: string }[];
  departments: [string];
}

const Offices: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extract the id from the URL and specify type
  const [data, setData] = useState<OfficeData | null>(null); // OfficeData or null
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOfficeById = async () => {
      try {
        setLoading(true);
        setData(null); // Clear previous data
        setError(null);
        const response = await axios.get(`https://alpha-one-server.vercel.app/api/office/${id}`);
        setData(response.data.office);
      } catch (error) {
        console.error('Error fetching office data:', error);
        setError('Failed to load office data');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchOfficeById(); // Fetch data whenever id changes
    }
  }, [id]);

  if (loading) {
    return <div><Loader /></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {data ? (
        <Office_page
          officeid={data._id}
          name={data.name}
          location={data.Address || 'No Address'} // Provide a fallback if Address is null
          total_employees={data.employees?.length || 0} // Default to 0 if employees is null
          checkedInEmployees={data.CheckedINemployees?.length || 0} // Default to 0 if CheckedINemployees is null
          departments={data.departments || []} // Default to an empty array if departments is null
        />
      ) : <Skeleton width='20'/>}
    </div>
  );
};

export default Offices;
