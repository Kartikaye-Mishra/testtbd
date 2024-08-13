import React, { Component } from 'react';
import axios from 'axios';
import contact from '../../images/sections/contact.svg';
import './Contact.css';
import toast from 'react-hot-toast';
import {server} from '../../index' 
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, lname, email, message } = this.state;

    try {
		const response = await axios.post(`${server}/query/newquery`, {
        fname,
        lname,
        email,
        desc: message
      });
      console.log(response.data);
      toast.success(response.data.message);

      // Reset the form fields
      this.setState({
        fname: '',
        lname: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('There was an error sending the query!', error);
      toast.error("There was an error sending the query");
    }
  };

  render() {
    const { fname, lname, email, message } = this.state;

    return (
      <div className='getintouch mb-5'>
        <div className='container'>
          <div className='title pt-1 pb-4 text-center'>
            <h4 className='sub-title text-capitalize'>contact <span>us</span></h4>
          </div>
          <div className='row align-items-center'>
            <div className='c col-lg-6 col-12 mb-lg-0 mb-5'>
              <div className='left-side text-lg-start text-center'>
                <img className='img-fluid w-75' src={contact} alt='contact' />
              </div>
            </div>
            <div className='c col-lg-6 col-12'>
              <div className='right-side'>
                <form onSubmit={this.handleSubmit}>
                  <div className='row'>
                    <div className='form-group c col-md-6 col-12 mb-3'>
                      <label htmlFor='fname' className='mb-2 text-capitalize'>first name</label>
                      <input type='text' className='form-control py-2 px-3' id='fname' placeholder='First Name' required value={fname} onChange={this.handleChange} />
                    </div>
                    <div className='form-group c col-md-6 col-12 mb-3'>
                      <label htmlFor='lname' className='mb-2 text-capitalize'>last name</label>
                      <input type='text' className='form-control py-2 px-3' id='lname' placeholder='Last Name' required value={lname} onChange={this.handleChange} />
                    </div>
                    <div className='form-group c col-12 mb-3'>
                      <label htmlFor='email' className='mb-2 text-capitalize'>Email</label>
                      <input type='email' className='form-control py-2 px-3' id='email' placeholder='Email Address' required value={email} onChange={this.handleChange} />
                    </div>
                    <div className='form-group c col-12 mb-4'>
                      <label htmlFor='message' className='mb-2 text-capitalize'>write your message down here</label>
                      <textarea className='form-control py-2 px-3' id='message' rows='4' value={message} onChange={this.handleChange}></textarea>
                    </div>
                    <button type='submit' className='btn btn-outline-danger text-capitalize w-25 mx-auto'>send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
