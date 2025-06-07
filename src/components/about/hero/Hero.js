
import React, {Component} from 'react'
import './Hero.css'
// import {Link} from 'react-router-dom'
import about from '../../../images/sections/about.svg'
import { title } from '../../constants'

class Hero extends Component
{
	render()
	{
		return (
			<div className = 'hero py-2 mb-5'>
				<div className = 'container'>
					<div className = 'title pt-1 pb-5 text-center'>
						<h4 className = 'sub-title text-capitalize'>about <span>us</span></h4>
					</div>
					<div className = 'row align-items-center'>
						<div className = 'c col-lg-6 col-12'>
							<div className = 'left-side mb-lg-0 mb-5 text-lg-start text-center'>
								<h5 className = 'title text-capitalize mb-3'>we are <span>{title}</span></h5>
								<p style={{textAlign:'justify'}}  className  = 'desc mb-lg-4 mb-5'>Welcome to {title}, where your digital dreams become reality. At {title}, we blend creativity with cutting-edge technology to create websites that not only look stunning but perform flawlessly. Our team of passionate developers and designers is committed to delivering tailored web solutions that resonate with your brand and engage your audience. Whether you&rsquo;re launching a new venture or revitalizing an existing one, we&rsquo;re here to guide you every step of the way. With {title}, you&rsquo;re not just getting a website—you&rsquo;re investing in a powerful digital presence. Let&rsquo;s collaborate to build something extraordinary, and watch your business thrive online!</p>
							</div>
						</div>
						<div className = 'c col-lg-6 col-12'>
							<div className = 'right-side text-lg-end text-center'>
								<img className = 'w-75 img-fluid mb-5' src = {about} alt = 'about' />
								<div className = 'mx-auto dc text-center'>
									{/* <Link className = 'cources text-capitalize' to = '/courses'>discover our Products <i className = 'fas fa-arrow-right ms-2'></i></Link> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Hero
