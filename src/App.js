
import React, { useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Landing from './components/landing/Landing'
import About from './components/about/About'
import Sb from './components/scrollbtn/Sb'
import Contact from './components/contact/Contact'
import Notfound from './components/notfound/Notfound'
import axios from 'axios';
import {server} from './index'
import { Toaster } from 'react-hot-toast'


export default function App() {
  useEffect(()=>{
    axios.get(
      `${server}/`,
      )
      
  },[])
	return (
    <BrowserRouter>
      <>
        <Sb />
        <div className = '_navbar'>
            <Navbar />
        </div>

        <div  className = '_body'>
            <Routes>
                <Route exact path = '/' element = {<Landing />} />
                {/* <Route path = '/OpenSchool' element = {<Landing />} /> */}
                <Route path = '/about' element = {<About />} />
                {/* <Route path = '/blogs/*' element = {<Blogs />} >
                </Route> */}
                
                  {/* <Route path = '/blogs/read-blog/:id' element={<ReadBlog />} /> */}
                <Route path = '/contact' element = {<Contact />} />
                <Route path = '*' element = {<Notfound />} />
            </Routes>
        </div>

        <div className = '_footer'>
          <Footer />
        </div>
      <Toaster></Toaster>
      </>
    </BrowserRouter>
  )
}





