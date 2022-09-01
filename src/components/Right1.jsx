import React from 'react'
import { food_data } from '../food_data'
import { Link } from 'react-router-dom'

const Right1 = () => {
  return (
    <div className="latest_articles_right_1">
    <div className="advertisement-1"></div>
    <div className='top-post-1'>
        <h2 style={{fontSize:'30px'}}>Top Posts</h2>
        <hr style={{width:'300px'}}/>
        {
            food_data.map((val,i)=>{
                return(
                    <div className="top-post-content key={i}">
                    <img src={val.img} alt="" height='230px'  width='300px' style={{borderRadius:'25px',marginTop:'40px'}} /><br/>
                    <div className="top-post-right-content">
                        <h3><Link to={`/article/${val.title}/${val.CategoryName}`}>{val.title}</Link></h3>
                        <h3>{val.date}</h3>
                    </div>
                    <br/>
                    <hr style={{width:'300px'}}/>
                </div>
                )
            })
        }   
    </div>
</div>
  )
}

export default Right1