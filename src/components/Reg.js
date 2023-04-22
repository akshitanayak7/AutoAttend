import React from 'react';
import {Table} from './Table';

export const Reg = () => {
  return (
    <>
    <h4 className='m-3'>SRIT-CS-6th Sem-A</h4>

    <div className='d-flex justify-content-center'><button type="button" className="btn  btn-lg shadow rounded" href='/'  style={{backgroundColor:"#57B894"}}>Take Attendance</button></div>

     <Table />
    </>
  )
}

export default Reg

