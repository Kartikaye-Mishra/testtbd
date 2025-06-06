
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Hero.css'
import hero from '../../../images/sections/hero.svg'
import { title } from '../../constants'

class Hero extends Component
{
	render()
	{
		return (
			<div className = 'hero py-5 mb-5'>
				<div className = 'container'>
					<div className = 'row align-items-center'>
						<div className = 'c col-lg-6 col-12'>
							<div className = 'left-side mb-lg-0 mb-5 text-lg-start text-center'>
								<h3 className = 'title text-capitalize'>welcome to <span>{title}</span> ! <span className='text-capitalize'>Your Full-Stack Digital Partner</span></h3>
								{/* <p className = 'sub-title text-muted text-capitalize'>what's your design</p> */}
								<p style={{textAlign:'justify'}} className = 'desc pb-3 '>
								At {title}, we don’t just build apps — we engineer seamless digital experiences. With hands-on expertise across web, mobile, backend, and server technologies, we craft high-performance, scalable, and user-focused solutions tailored to your unique goals.
From sleek websites and powerful mobile apps to robust backend systems and cloud-ready servers, our diverse tech stack and real-world project experience enable us to bring your ideas to life — fast, secure, and beautifully.
Let’s create something impactful.
{title} — where code meets creativity.
								</p>
								<div className = 'buttons'>
									<Link style={{backgroundColor:"#6D2B50"}} className = 'btn text-white text-capitalize me-3 shadow' to = '/about'>read more<i className="ms-2 fas fa-chevron-right"></i></Link>
									<Link style={{border:"1px solid #6D2B50",color:"#6D2B50"} } className = 'btn  text-capitalize shadow' to = '/contact'>get in touch<i className="ms-2 fas fa-envelope"></i></Link>
								</div>
							</div>
						</div>

						<div className = 'c col-lg-6 col-12'>
							<div className  = 'right-side text-lg-end text-center'>
								<img className = 'w-75 img-fluid' src = {hero} alt = 'hero' />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Hero