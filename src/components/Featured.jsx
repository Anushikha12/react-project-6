import React from 'react'
import { bolly_data } from '../bollywood_data'
import { holly_data } from '../hollywood_data'
import { food_data } from '../food_data'

const Featured = () => {
  return (
    <div className='container'>
    <div className="main-content">
        {
            bolly_data.map((val,i)=>{
                if(i>=bolly_data.length-1){
                    return(
                        <div className='item1' style={{
                            backgroundImage: `url(${val.img})`,
                            backgroundPosition: 'center',
                            /* background-repeat: no-repeat; */
                            backgroundSize: 'cover',
                            height:'35rem',
                            width:'68%',
                            borderRadius:'25px'
                        }}>
                        <div className='content'>
                        <p>{val.date}</p>
                        </div>
                    </div>
                    )
                  
                }
            })
        }
        {
            food_data.map((val,i)=>{
                if(i>=food_data.length-1){
                    return(
                        <div className='item2' style={{
                            backgroundImage: `url(${val.img})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            height:'15rem',
                            width:'30%',
                            borderRadius: '25px',
                            position:'absolute',
                            left:'70%'
                        }}>
                        <div className="content">
                        <p>{val.date}</p>
                        </div>
                    </div>
                    )
                   
                }
            })
        }
        {
            holly_data.map((val,i)=>{
                if(i>=holly_data.length-1){
                    return(
                        <div className='item3' style={{
                            backgroundImage: `url(${val.img})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            height:'15rem',
                            width:'30%',
                            borderRadius: '25px',
                            position:'absolute',
                            left:'70%',
                            top:'55%'
                        }}>
                        <div className="content">
                            <p>{val.date}</p>
                            </div>
                        </div>
                    )
                   
                }
            })
        }
    </div>
</div>
  )
}

export default Featured