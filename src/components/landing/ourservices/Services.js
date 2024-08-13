import React from 'react'
import ServiceCard from './ServiceCard'

export default function Services() {
    const a = [11,1,1,1,1,]
  return (
    // <div>services</div>
    <div className = 'sections blogs _rs py-5 mb-5' id='services'>
				<div className = 'container'>
					<div className = 'container'>
						<div className = 'title py-5 text-md-start text-center'>
							<h4 className = 'sub-title text-capitalize'>our <span>'services'</span></h4>
						</div>
						<div className = '_s row justify-content-start'>
						{
                          
                        }          <ServiceCard />
							{/* <Section1 /> */}
							<div className = 'rs text-center'>
								{/* <Link className = 'blogs text-capitalize' to = '/blogs'>see all blogs of ours <i className = 'fas fa-arrow-right ms-2'></i></Link> */}
							</div>
						</div>
					</div>
				</div>
			</div>
  )
}
