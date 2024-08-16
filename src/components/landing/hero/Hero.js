
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Hero.css'
import hero from '../../../images/sections/hero.svg'

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
								<h3 className = 'title text-capitalize'>welcome to <span>webmigo</span> !</h3>
								<p className = 'sub-title text-muted text-capitalize'>what's your design</p>
								<p style={{textAlign:'justify'}} className = 'desc pb-3 '>
								Welcome to webmigo, where innovation meets creativity in web development. We specialize in crafting stunning, user-friendly websites that bring your vision to life. Our expert team is dedicated to delivering tailored solutions that drive results. Let's build something extraordinary together. Explore the future of digital experiences with us!
								</p>
								<div className = 'buttons'>
									<Link className = 'btn btn-danger text-capitalize me-3 shadow' to = '/about'>read more<i className="ms-2 fas fa-chevron-right"></i></Link>
									<Link className = 'btn btn-outline-danger text-capitalize shadow' to = '/contact'>get in touch<i className="ms-2 fas fa-envelope"></i></Link>
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