import React from 'react'

export const Table = () => {
  return (
    <>
    <table class="table table-stripped text-center mt-5">
  <thead>
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">Enroll</th>
      <th scope="col">Name</th>
      <th scope="col">Attendance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>0205CS201015</td>
      <td>Akshita Nayak</td>
      <td>90%</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>0205CS201033</td>
      <td>Gaurav Gupta</td>
      <td>100%</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>0205CS201015</td>
      <td>Deeksha Sen</td>
      <td>95%</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>0205CS201014</td>
      <td>Atul Pandey</td>
      <td>94%</td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default Table
