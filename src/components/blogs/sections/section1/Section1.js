import React from 'react'
import {section1} from '../Data'
import '../Sections.css'
import { useNavigate } from 'react-router-dom'


export default function Section1() {


	const navigate = useNavigate();
		let items = section1.map((item, index) =>
		{
			
			return (
				<div className = 'main_card_container c col-lg-4 col-md-6 col-12' key = {index}>
					<div className = 'card  mx-auto shadow-lg mb-5' key = {index} >
						<img style={{height:'16rem'}} className = "img-fluid mb-3" src = {item.imgURL} alt = {`blog number ${index}`} />
						
						<div className = 'card-body p-4 flex'>
			
							<div  className="card_content ">

							<h5 className = 'card-img-top card-title mb-'>{item.title}</h5>
							<p className = 'card-text mb-4'>{item.desc}</p>
							</div>
							
							<div className = 'mt-auto _footer d-flex flex-wrap justify-content-between align-items-center'>
								<button onClick={() =>navigate(`/blogs/read-blog/${index}`)} className = 'btn btn-danger text-capitalize mb-3'>read more <i className = 'fas fa-chevron-right ms-2'></i></button>
							</div>
						</div>
					</div>
				</div>
			)
		})



  return (
	<div className = 'sections section1 '>
			<div className = 'container'>
				
				<div className = '_s row justify-content-start'>
					{items}
				</div>
			</div>
 		</div>
  )
}
