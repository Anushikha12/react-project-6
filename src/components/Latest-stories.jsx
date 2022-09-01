import React from 'react'
import {tech_data} from '../technology_data'
import {fitness_data} from '../fitness_data'
import { food_data } from '../food_data'
import { Link } from 'react-router-dom'

const Latest_stories = () => {
  return (
    <div className="container last-element">
        <h1>Latest Stories</h1>
        <hr style={{margin:'1%'}}/>
        <div className="latest_story">
            {
                tech_data.map((val,i)=>{
                    if(i>=tech_data.length-1){
                        return(
                            <div className="story1" key={i}>
                            <h3 style={{color:'brown'}}><Link to={`/article/${val.title}/${val.CategoryName}`}>{val.title}</Link></h3><br/>
                            <p>{val.content}</p>
                            <br/>
                            <h4  style={{color:'brown'}}>{val.date}</h4>
                        </div>
                        )
                    }
                })
            }
             {
                fitness_data.map((val,i)=>{
                    if(i>=fitness_data.length-1){
                        return(
                            <div className="story1" key={i}>
                            <h3 style={{color:'brown'}}><Link to={`/article/${val.title}/${val.CategoryName}`}>{val.title}</Link></h3><br/>
                            <p>{val.content}</p>
                            <br/>
                            <h4 style={{color:'brown'}}>{val.date}</h4>
                        </div>
                        )
                    }
                })
            }
              {
                food_data.map((val,i)=>{
                    if(i>=food_data.length-1){
                        return(
                            <div className="story1" key={i}>
                            <h3 style={{color:'brown'}}><Link to={`/article/${val.title}/${val.CategoryName}`}>{val.title}</Link></h3><br/>
                            <p>{val.content}</p>
                            <br/>
                            <h4 style={{color:'brown'}}>{val.date}</h4>
                        </div>
                        )
                    }
                })
            }
        </div>
    </div>
  )
}

export default Latest_stories