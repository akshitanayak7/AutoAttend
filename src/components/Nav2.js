import React, { useState } from "react";
import AddStu from "./AddStu";
import Reg from "./Reg";
import TestSys from "./TestSys";

export const Nav2 = () => {
   const[active,setActive]=useState("first");

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div class="container-fluid  shadow">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <button class="nav-link active" aria-current="page" onClick={()=>{setActive("first")}}>
                  Attendance
                </button>
              </li>
              <li class="nav-item">
                <button class="nav-link" onClick={()=>{setActive("second")}}>Add Student</button>
              </li>
              <li class="nav-item">
                <button class="nav-link" onClick={()=>{setActive("third")}}>Test System</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
       <div>
        {active==="first" && <Reg/>}
        {active==="second" && <AddStu/>}
        {active==="third" && <TestSys/>}
       </div>

    </>
  );
};

export default Nav2;
