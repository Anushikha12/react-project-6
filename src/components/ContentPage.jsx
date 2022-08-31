import React from 'react'
import Card from 'react-bootstrap/Card';
import {useParams} from 'react-router-dom'
import { bolly_data } from '../bollywood_data'
import { holly_data } from '../hollywood_data'
import { food_data } from '../food_data'
import {fitness_data} from '../fitness_data'
import { tech_data } from '../technology_data'

const ContentPage = () => {
  const { articleTitle, articleCategory } = useParams();
  return (
    <div>
      {
        bolly_data.map(
          (article,i)=>
          article.title===articleTitle && (
            <div className='tech-container'>
      <h2 className='tech-h2'>{article.title}</h2><br/>
      <div className='tech-title'>
        <div className='tech-title-left'>
          <div className="tech-title-user">
            <h3>Anushikha</h3><br/>
            <p> {article.date}</p>
          </div>
        </div>
        <div className='tech-title-right'>
        </div>
      </div><br/><br/>
        <hr style={{marginBottom:'5px'}}/>
        <img src={article.img} alt="bollywood" height="400px" width="600px"/>
      <p className='text'>{article.content}</p>
      <br/><br/>
      <p className='text'>Let's talk about them</p>
      <br/>

    <br/>
      <Card className='tech-footer'>
      <Card.Header>WRITTEN BY</Card.Header>
      <Card.Body>
        <Card.Title>Anushikha</Card.Title>
        <Card.Text>
        {article.date}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
          )
        )
      }
       {
        holly_data.map(
          (article,i)=>
          article.title===articleTitle && (
            <div className='tech-container'>
      <h2 className='tech-h2'>{article.title}</h2><br/>
      <div className='tech-title'>
        <div className='tech-title-left'>
          <div className="tech-title-user">
            <h3>Anushikha</h3><br/>
            <p> {article.date}</p>
          </div>
        </div>
        <div className='tech-title-right'>
        </div>
      </div><br/><br/>
        <hr style={{marginBottom:'5px'}}/>
        <img src={article.img} alt="hollywood" height="400px" width="600px"/>
      <p className='text'>{article.content}</p>
      <br/><br/>
      <p className='text'>Let's talk about them</p>
      <br/>

    <br/>
      <Card className='tech-footer'>
      <Card.Header>WRITTEN BY</Card.Header>
      <Card.Body>
        <Card.Title>Anushikha</Card.Title>
        <Card.Text>
        {article.date}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
          )
        )
      }
       {
        tech_data.map(
          (article,i)=>
          article.title===articleTitle && (
            <div className='tech-container'>
      <h2 className='tech-h2'>{article.title}</h2><br/>
      <div className='tech-title'>
        <div className='tech-title-left'>
          <div className="tech-title-user">
            <h3>Anushikha</h3><br/>
            <p> {article.date}</p>
          </div>
        </div>
        <div className='tech-title-right'>
        </div>
      </div><br/><br/>
        <hr style={{marginBottom:'5px'}}/>
        <img src={article.img} alt="technology" height="400px" width="600px"/>
      <p className='text'>{article.content}</p>
      <br/><br/>
      <p className='text'>Let's talk about them</p>
      <br/>

    <br/>
      <Card className='tech-footer'>
      <Card.Header>WRITTEN BY</Card.Header>
      <Card.Body>
        <Card.Title>Anushikha</Card.Title>
        <Card.Text>
        {article.date}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
          )
        )
      }
       {
        fitness_data.map(
          (article,i)=>
          article.title===articleTitle && (
            <div className='tech-container'>
      <h2 className='tech-h2'>{article.title}</h2><br/>
      <div className='tech-title'>
        <div className='tech-title-left'>
          <div className="tech-title-user">
            <h3>Anushikha</h3><br/>
            <p>{article.date}</p>
          </div>
        </div>
        <div className='tech-title-right'>
        </div>
      </div><br/><br/>
        <hr style={{marginBottom:'5px'}}/>
        <img src={article.img} alt="fitness" height="400px" width="600px"/>
      <p className='text'>{article.content}</p>
      <br/><br/>
      <p className='text'>Let's talk about them</p>
      <br/>

    <br/>
      <Card className='tech-footer'>
      <Card.Header>WRITTEN BY</Card.Header>
      <Card.Body>
        <Card.Title>Anushikha</Card.Title>
        <Card.Text>
        {article.date}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
          )
        )
      }
       {
        food_data.map(
          (article,i)=>
          article.title===articleTitle && (
            <div className='tech-container'>
      <h2 className='tech-h2'>{article.title}</h2><br/>
      <div className='tech-title'>
        <div className='tech-title-left'>
          <div className="tech-title-user">
            <h3>Anushikha</h3><br/>
            <p>{article.date}</p>
          </div>
        </div>
        <div className='tech-title-right'>
        </div>
      </div><br/><br/>
        <hr style={{marginBottom:'5px'}}/>
        <img src={article.img} alt="food" height="400px" width="600px"/>
      <p className='text'>{article.content}</p>
      <br/><br/>
      <p className='text'>Let's talk about them</p>
      <br/>

    <br/>
      <Card className='tech-footer'>
      <Card.Header>WRITTEN BY</Card.Header>
      <Card.Body>
        <Card.Title><b>Anushikha</b></Card.Title>
        <Card.Text>
         {article.date}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
          )
        )
      }
        {/* <div className="container">
            <h2>More From The Siren</h2>
            <hr/><br/>
            <div className="more-data">
              {
                bolly_data.map((article,i)=>
                    article.CategoryName === articleCategory &&
                    i>=bolly_data.length-4 &&
                    article.title !== articleTitle
                    (
                      <div className="data" key={i}>
                      <img src={article.img} alt="food" height="300px" width="400px" style={{borderRadius:'25px'}}></img>
                      <h3>{article.title}</h3>
                      <div className="tech-title-user">
                        <h3>Anushikha</h3><br/>
                         <p>{article.date}</p>
                      </div>
                    </div>
                    )
                )
              }
            </div>
        </div> */}
    </div>
  )
}

export default ContentPage