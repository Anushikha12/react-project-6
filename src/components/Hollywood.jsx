import React from 'react'
import {holly_data} from '../hollywood_data'
import Bolly_card from './Bolly_card'
import Right from './Right'

const Hollywood = () => {
  return (
    <div className="container">
      <div className="left-container">
      <h2 style={{fontSize:'35px',letterSpacing:'5px'}}>Hollywood</h2>
      <hr style={{width:'200px',marginTop:'8px',height:'2px',color:'darkblue'}}/><br/>
      {
        holly_data.map((val,i)=>{
          return(
              <Bolly_card img={val.img} title={val.title} date={val.date}
              content={val.content} CategoryName={val.CategoryName} key={i}/>
          )
        })
      }
      </div>
      <div className="right-container">
      <Right/>
      </div>
    </div>
  )
}

export default Hollywood