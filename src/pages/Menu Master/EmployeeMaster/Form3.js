import React from 'react'

const Form3 = () => {
  return (
    <div className="container2">
      <table class="table table2 bg-light">
  <thead>
    <tr>
      <th scope="col">SL</th>
      <th scope="col">Employee Name</th>
      <th scope="col">Employee Code</th>
      <th scope="col">Department Name</th>
      <th scope="col">Email ID</th>
      <th scope="col">Designation</th>
      <th scope="col">Work Type</th>
      <th scope="col">Reported To</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>SAURABH SINGH</td>
      <td>215</td>
      <td>React js</td>
      <td>saurabhsingh3198</td>
      <td>abcd</td>
      <td>Parmanent</td>
      <td>Administrator</td>
      <td><a href="/edit">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
</a>
</td>
    </tr>
   
   
  </tbody>
</table>
      </div>
  )
}

export default Form3