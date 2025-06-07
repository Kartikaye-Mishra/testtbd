
import React, {Component} from 'react'
import {navbar_items} from '../navbar/Data'
import {Link} from 'react-router-dom'
import './Footer.css'
import {accounts} from './Data'
import { title } from '../constants'


class Footer extends Component
{
	display_navbar_items = () =>
	{
		let items = navbar_items.map(item =>
		{
			return (
				<Link className="d-block mb-1 text-muted text-capitalize" to = {`/${item.name === '' ? '': item.name}`} key = {Math.random()}>{item.name === "" ? "home": item.name}</Link>
			)
		})
		return items
	}

	display_accounts = () =>
	{
		let items = accounts.map((item, index) =>
		{
			return (
				<div className = {`a account-${index} mx-2 px-2 py-1 rounded-circle shadow-lg`}  key = {Math.random()}>
					<a className = 'text-center' href = {item.link} target = '_blank' rel="noreferrer"><i className = {item.icon}></i></a>
				</div>
			)
		})
		return items
	}

	display_page_elements = () =>
	{
		const elements = ["", "materials","subscribe", 'faq']

		let items = elements.map((item, index) =>
		{
			return (
				<a className = 'd-block mb-1 text-muted text-capitalize' href = {`#${item}`} key = {index}>{item === "" ? "Hero": item}</a>
			)
		})
		return items
	}

	render()
	{
		return (
			<div className = 'footer py-3 pb-4'>
				<div className = 'container'>
					
					<div className = 'copyrights text-center'>
						<p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <Link to = "/">{title}</Link></p>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer