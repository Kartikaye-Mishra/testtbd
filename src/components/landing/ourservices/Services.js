import React from 'react'
import ServiceCard from './ServiceCard'
import './services.css'
import data from './serviceData'
export default function Services() {


  return (
    <div className = 'sections blogs _rs py-5 mb-5' id='services'>
				<div className = 'container'>
					<div className = 'container'>
						
						<div className = 'title py-5 text-md-start text-center'>
							<h4 className = 'sub-title text-capitalize'>our <span>'services'</span></h4>
							</div>
			
						<div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'1rem', textAlign:'center'}} >
						{
						  data.map((item, index) => (
							<div key={index} style={{flexBasis: 'calc(33.33% - 1rem)'}} className='singleCard'>
							  <ServiceCard data={item} />
							</div>
						  ))
                          
                        }       
						
					
						</div>
									{/* <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
  {
    data.map((item, index) => (
      <div key={index} style={{ flexBasis: 'calc(33.33% - 1rem)' }} className='singleCard'>
        <ServiceCard data={item} />
      </div>
    ))
  }
</div> */}
					</div>
				</div>
			</div>
  )
}
