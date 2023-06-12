// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import DataTable from 'react-data-table-component'

// const Countries = () => {


//     const [country, setCountry] = useState([]);

//     const getCountry = async () => {
//         try {
//             const response = await axios.get('https://restcountries.com/v3.1/all');
//             setCountry(response.data);
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     const columns = [
//         {
//             name: "Country Name",
//             Selector : (row) => row.name,

//         },
//         {
//             name: "Country Native Name",
//             Selector: (row) => row.nativeName,
//         },
//         {
//             name: "Country Capital",
//             Selector: (row) => row.capital``,
//         },
//         {
//             name: "Country Flag",
//             Selector: (row) => <img width={50} height={50} src={row.flag} />,
//         },
//     ]

//     useEffect(() => {
//         getCountry();
//     }, []);





//     return (
//         <DataTable columns={columns} data={country} />
//     )
// }

// export default Countries