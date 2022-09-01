import React from 'react'
import Card from 'react-bootstrap/Card';
import {AiFillInstagram,AiOutlineWhatsApp,AiFillTwitterSquare,AiFillFacebook} from 'react-icons/ai'
import {useParams,Link} from 'react-router-dom'
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
        <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=5e9582fc-efba-45da-9853-682fd88122a9&api_key=CometServer1&access_token=1662046775_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_9c676991bf8aa3aca1b8ffed190c35062bedb0e3" alt="user" />
          <div className="tech-title-user">
            <h3>Anushikha</h3><br/>
            <p> {article.date}</p>
          </div>
        </div>
        <div className='tech-title-right'>
        <AiFillFacebook size="30px"/>
        <AiFillTwitterSquare size="30px"/>
        <AiFillInstagram size="30px"/>
        <AiOutlineWhatsApp size="30px"/>
        </div>
      </div><br/><br/>
        <hr style={{marginBottom:'5px'}}/>
        <img src={article.img} alt="bollywood" height="400px" width="600px" className='tech-image'/>
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
        <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=5e9582fc-efba-45da-9853-682fd88122a9&api_key=CometServer1&access_token=1662046775_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_9c676991bf8aa3aca1b8ffed190c35062bedb0e3" alt="user" />
          <div className="tech-title-user">
            <h3>Anushikha</h3><br/>
            <p> {article.date}</p>
          </div>
        </div>
        <div className='tech-title-right'>
        <AiFillFacebook size="30px"/>
        <AiFillTwitterSquare size="30px"/>
        <AiFillInstagram size="30px"/>
        <AiOutlineWhatsApp size="30px"/>
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
        <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=5e9582fc-efba-45da-9853-682fd88122a9&api_key=CometServer1&access_token=1662046775_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_9c676991bf8aa3aca1b8ffed190c35062bedb0e3" alt="user" />
          <div className="tech-title-user">
            <h3>Anushikha</h3><br/>
            <p> {article.date}</p>
          </div>
        </div>
        <div className='tech-title-right'>
        <AiFillFacebook size="30px"/>
        <AiFillTwitterSquare size="30px"/>
        <AiFillInstagram size="30px"/>
        <AiOutlineWhatsApp size="30px"/>
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
        <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=5e9582fc-efba-45da-9853-682fd88122a9&api_key=CometServer1&access_token=1662046775_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_9c676991bf8aa3aca1b8ffed190c35062bedb0e3" alt="user" />
          <div className="tech-title-user">
            <h3>Anushikha</h3><br/>
            <p>{article.date}</p>
          </div>
        </div>
        <div className='tech-title-right'>
        <AiFillFacebook size="30px"/>
        <AiFillTwitterSquare size="30px"/>
        <AiFillInstagram size="30px"/>
        <AiOutlineWhatsApp size="30px"/>
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
        <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=5e9582fc-efba-45da-9853-682fd88122a9&api_key=CometServer1&access_token=1662046775_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_9c676991bf8aa3aca1b8ffed190c35062bedb0e3" alt="user" />
          <div className="tech-title-user">
            <h3>Anushikha</h3><br/>
            <p>{article.date}</p>
          </div>
        </div>
        <div className='tech-title-right'>
        <AiFillFacebook size="30px"/>
        <AiFillTwitterSquare size="30px"/>
        <AiFillInstagram size="30px"/>
        <AiOutlineWhatsApp size="30px"/>
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
         <div className="container">
            <h2>More From The Siren</h2>
            <hr/><br/>
            <div className="more-data">
              {
                // eslint-disable-next-line
                bolly_data.map((article,i)=>{
                  if( article.CategoryName === articleCategory &&
                    i>=bolly_data.length-5 &&
                    article.title!== articleTitle)
                    {
                  return(
                        <div className="data" key={i}>
                        <img src={article.img} alt="food" height="300px" width="400px" style={{borderRadius:'25px'}}></img>
                        <h3><Link to={`/article/${article.title}/${article.CategoryName}`}>{article.title}</Link></h3>
                        <div className="tech-title-user">
                          <h3 style={{width:'200px'}}>Anushikha</h3><br/>
                           <p>{article.date}</p>
                        </div>
                      </div>
                  
                    )
                  }
                })
                    }
                 {
                // eslint-disable-next-line
                holly_data.map((article,i)=>{
                  if( article.CategoryName === articleCategory &&
                    i>=holly_data.length-5 &&
                    article.title!== articleTitle)
                    {
                  return(
                        <div className="data" key={i}>
                        <img src={article.img} alt="food" height="300px" width="400px" style={{borderRadius:'25px'}}></img>
                        <h3><Link to={`/article/${article.title}/${article.CategoryName}`}>{article.title}</Link></h3>
                        <div className="tech-title-user">
                          <h3 style={{width:'200px'}}>Anushikha</h3><br/>
                           <p>{article.date}</p>
                        </div>
                      </div>
                  
                    )
                  }
                })
                    }
                 {
                // eslint-disable-next-line
                tech_data.map((article,i)=>{
                  if( article.CategoryName === articleCategory &&
                    i>=tech_data.length-5 &&
                    article.title!== articleTitle)
                    {
                  return(
                        <div className="data" key={i}>
                        <img src={article.img} alt="food" height="300px" width="400px" style={{borderRadius:'25px'}}></img>
                        <h3><Link to={`/article/${article.title}/${article.CategoryName}`}>{article.title}</Link></h3>
                        <div className="tech-title-user">
                          <h3 style={{width:'200px'}}>Anushikha</h3><br/>
                           <p>{article.date}</p>
                        </div>
                      </div>
                  
                    )
                  }
                })
                    }
                 {
                // eslint-disable-next-line
                fitness_data.map((article,i)=>{
                  if( article.CategoryName === articleCategory &&
                    i>=fitness_data.length-5 &&
                    article.title!== articleTitle)
                    {
                  return(
                        <div className="data" key={i}>
                        <img src={article.img} alt="food" height="300px" width="400px" style={{borderRadius:'25px'}}></img>
                        <h3><Link to={`/article/${article.title}/${article.CategoryName}`}>{article.title}</Link></h3>
                        <div className="tech-title-user">
                          <h3 style={{width:'200px'}}>Anushikha</h3><br/>
                           <p>{article.date}</p>
                        </div>
                      </div>
                  
                    )
                  }
                })
                    }
                      {
                // eslint-disable-next-line
                food_data.map((article,i)=>{
                  if( article.CategoryName === articleCategory &&
                    i>=food_data.length-5 &&
                    article.title!== articleTitle)
                    {
                  return(
                        <div className="data" key={i}>
                        <img src={article.img} alt="food" height="300px" width="400px" style={{borderRadius:'25px'}}></img>
                        <h3><Link to={`/article/${article.title}/${article.CategoryName}`}>{article.title}</Link></h3>
                        <div className="tech-title-user">
                          <h3 style={{width:'200px'}}>Anushikha</h3><br/>
                           <p>{article.date}</p>
                        </div>
                      </div>
                  
                    )
                  }
                })
                    }
            </div>
        </div> 
    </div>
  )
}

export default ContentPage