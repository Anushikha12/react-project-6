import React from 'react'
import { fitness_data } from '../fitness_data'
import { tech_data } from '../technology_data'
import { food_data } from '../food_data'
import {Link} from 'react-router-dom'

const Latest = () => {
  return (
    <>
      <div className="container">
        <h2>The Latest</h2>
        <hr style={{width:'200px',marginTop:'8px'}}/>
        <div className="latest-elements">
          <div className="element1">
            {
              fitness_data.map((val,i)=>{
                if(i>=fitness_data.length-1)
                {
                return(
                  <>
                  <img src={val.img} alt="" width="350px" height="200px" style={{marginTop:'15px',borderRadius:'25px'}} className='element-image' />
                  <div className="element-content">
                    <h4><Link to={`/article/${val.title}`}>{val.title}</Link></h4><br/>
                    <p>{val.content}</p><br/>
                    <h5>{val.date}</h5>
                  </div>
                  </>
                )
                }
              })
             
            }
            </div>
            <div className="element1">
              {
              tech_data.map((val,i)=>{
                if(i>=tech_data.length-1)
                {
                return(
                  <>
                  <img src={val.img} alt="" width="350px" height="200px" style={{marginTop:'15px',borderRadius:'25px'}} className='element-image' />
                  <div className="element-content">
                    <h4><Link to={`/article/${val.title}`}>{val.title}</Link></h4><br/>
                    <p>{val.content}</p><br/>
                    <h5>{val.date}</h5>
                  </div>
                  </>
                )
                }
              })
             
            }
            </div>
            <div className="element1">
              {
              food_data.map((val,i)=>{
                if(i>=food_data.length-1)
                {
                return(
                  <>
                  <img src={val.img} alt="" width="350px" height="200px" style={{marginTop:'15px',borderRadius:'25px'}} className='element-image' />
                  <div className="element-content">
                    <h4><Link to={`/article/${val.title}`}>{val.title}</Link></h4><br/>
                    <p>{val.content}</p><br/>
                    <h5>{val.date}</h5>
                  </div>
                  </>
                )
                }
              })
             
            }
            </div>
        </div>
      </div>
    </>
  )
}


export default Latest