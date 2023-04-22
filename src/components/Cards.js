import React from 'react'
import { useState } from 'react'

export const Cards = (prop) => {
    const openReg=()=>{
        prop.setReg({status:"reg"})
    }
  return (
    <>
    <button type="button" className="btn btn-secondary btn-lg m-4" onClick={openReg}>SRIT-CS-6th Sem-A</button>
    <button type="button" className="btn btn-secondary btn-lg m-4" onClick={openReg}>SRIT-CS-6th Sem-B</button>
    </>
  )
}

 export default Cards
