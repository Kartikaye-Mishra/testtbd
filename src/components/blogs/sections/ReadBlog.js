import React,{useEffect, useState} from 'react'
import './ReadBlog.css'
import '../../landing/hero/Hero.css'
import { Link } from 'react-router-dom'
import data from './blogscontent'


export default function ReadBlog() {

  const currentUrl = window.location.href; 

const urlParts = currentUrl.split('/');
const blogNumber = urlParts[urlParts.length - 1];

const [isRefreshed, setIsRefreshed] = useState(false);
useEffect(() => {
  const entries = performance.getEntriesByType('navigation');
    if (entries.length > 0 && entries[0].type === 'reload') {
      setIsRefreshed(true);
    }
}, []);

  return (
      <>
    
     <div className="main_content w-full" style={{ margin: isRefreshed ? '6rem 0' : '1rem 0' }}>

        <div className="top">
          <h2>{data[blogNumber]?.title} <span style={{color:'#e91e63'}}>{data[blogNumber]?.titleSec}</span></h2>

          <p>{data[blogNumber]?.introduction}</p>
        </div>

   
        <div className="mid">
          
          <h3>{data[blogNumber]?.subTitle}</h3>
          <div className="mid_content">
          {
  data[blogNumber]?.points.map((item, index) => (
    <div className="point_content" key={index}>
       <p>
        <span style={{fontWeight:'bold',marginRight:'0.2rem'}} className="point_title">{item.title}: </span>
        {item.description}
      <span style={{ color: '#e91e63' }}>
        <br />{item.callToAction}</span>
      </p>
      
    </div>
  ))
}


          <p style={{fontWeight:'bold'}}>{data[blogNumber]?.conclusion}</p>
          </div>
        </div>
        <div className="end">
          <span className='end_span'>Ready to embark on your digital journey with us?</span>
          <div className = 'buttons'>
									<Link className = 'btn btn-outline-danger text-capitalize shadow font-bold' to = '/contact'>Get Started<i className="ms-2 fas fa-envelope"></i></Link>
								</div>
        </div>
       </div>
    </>
  )
}
