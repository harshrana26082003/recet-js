import React, { useState } from 'react'
// import Countries from './Components/Countries';
import DataTable from 'react-data-table-component';

function App() {

  const columns =[
    
    {
      name :"Name",
      selector : row => row.name,
      sortable : true
    },
    {
      name :"Email",
      selector : row => row.email,
      sortable : true
    },
    {
      name :"Age",
      selector : row => row.age,
      sortable : true
    }
  ]

  const data =[
    {
      id:1, 
      name :'yousaf',
      email :'yousaf@gmail.com',
      age : '23'
    },
    {
      id:2, 
      name :'Ram',
      email :'Ram@gmail.com',
      age : '26'
    },
    {
      id:3, 
      name :'Krishna',
      email :'Krishna@gmail.com',
      age : '29'
    },
    {
      id:4, 
      name :'Haresh',
      email :'Haresh@gmail.com',
      age : '45'
    },
    {
      id:5, 
      name :'Mayur',
      email :'Mayur@gmail.com',
      age : '32'
    },
    {
      id:6, 
      name :'jamin',
      email :'jamin@gmail.com',
      age : '35'
    },
    {
      id:7, 
      name :'priya',
      email :'priya@gmail.com',
      age : '28'
    },
    {
      id:8, 
      name :'Radhika',
      email :'Radhika@gmail.com',
      age : '30'
    },
    {
      id:9, 
      name :'mahir',
      email :'mahir@gmail.com',
      age : '45'
    },
    {
      id:10, 
      name :'Harsh',
      email :'Harsh@gmail.com',
      age : '20'
    },
  ]
   
   const[records , setRecords] = useState (data);

   function handelFliter(event) {
    const newData= data.filter(row =>{
      return row.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData)
   }

  return (
    <>
      {/* <div className='d-flex flex-column align-items-center'>
        <h1>React Datatable</h1>
      </div>
      <Countries /> */}
      <div className='container mt-5'>

        <div className='text-end'><input type='text' onChange={handelFliter} /></div>




        <DataTable
        
        columns={columns}
        data={records}
        selectableRows
        fixedHeader
        // pagination

        ></DataTable>
      </div>
    </>
  )
}

export default App;