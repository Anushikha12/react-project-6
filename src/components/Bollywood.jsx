import React from 'react'
import Bolly_card from './Bolly_card'
import { bolly_data } from '../bollywood_data'
import Right from './Right'
import Right1 from './Right1'

const Bollywood = () => {
  return (
    <div className="container">
      <div className="left-container">
      <h2 style={{fontSize:'35px',letterSpacing:'5px'}}>Bollywood</h2>
      <hr style={{width:'200px',marginTop:'8px',height:'2px',color:'darkblue'}}/><br/>
      {
        bolly_data.map((val,i)=>{
          return(
              <Bolly_card img={val.img} title={val.title} date={val.date}
              content={val.content} key={i}/>
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

export default Bollywood