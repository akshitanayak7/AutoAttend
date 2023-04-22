import './App.css';
import Nav from './components/Nav';
import {Cards} from './components/Cards';
import { useState } from 'react';
import {Login} from './components/Login.jsx';
import {Nav2} from './components/Nav2';

function App() {
  // const [reg,setReg]=useState({status:'card'})
  const [login,setLogin]=useState({status:true,data:{}})
  const [reg,setReg]=useState({status:'card'})
 
  if(login.status){
    return (<>
    <Nav setLogin={setLogin} setReg={setReg}></Nav>
    {reg.status=='card'?<Cards setReg={setReg}></Cards>:<Nav2/>}
    </>)
  }
  else{
    return <>
       <Login setLogin={setLogin}> </Login>
    </>
  }

}

export default App;
