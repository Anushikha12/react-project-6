import React from 'react'
import { food_data } from '../food_data'
import Bolly_card from './Bolly_card'
import { bolly_data } from '../bollywood_data'


const Latest_articles = () => {
  return (
    <div className="container">
        <h2>Latest Articles</h2>
        <hr/>
        <div className="latest_articles">
            <div className="latest_articles_left">
                {/* <Bollywood/> */}
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
                <img src={food_data[2].img} alt="" width='68%' height='15%' style={{borderRadius:'25px'}} className='element-image' />
            </div>

        </div>
    </div>
  )
}

export default Latest_articles