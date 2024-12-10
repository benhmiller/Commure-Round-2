import { useState, useEffect } from 'react'
import { Box, Grid2, Typography } from '@mui/material'
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/data');
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // Fecthing with axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data');
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  return (
    <>
    </>
  )
}

export default App
