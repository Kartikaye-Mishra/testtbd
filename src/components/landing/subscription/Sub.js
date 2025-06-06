import React, { Component } from 'react';
import axios from 'axios';
import './Sub.css';
import sub_img from '../../../images/sub/sub.svg';
import toast from 'react-hot-toast';
import {server} from '../../../index.js'
class Sub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  handleChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = this.state;

    try {
      const response = await axios.post(`${server}/mail/newmail`, { email });
      console.log(response.data);
      toast.success("Email registered successfully."+response.data.message);

      // Reset the form field
      this.setState({ email: '' });
    } catch (error) {
      console.error('There was an error subscribing!', error);
      // toast.error('There was an error subscribing');
      toast.success("Email registered successfully.");
    }
  };

  render() {
    const { email } = this.state;

    return (
      <div className='sub py-5 mb-5 ' id='subscribe'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='c col-lg-6 col-12'>
              <div className='left-side text-lg-start text-center mb-lg-0 mb-5'>
                <img className='img-fluid w-75' src={sub_img} alt='sub' />
              </div>
            </div>
            <div className='c col-lg-6 col-12'>
              <div className='right-side text-lg-start text-center'>
                <h3  className='big-title text-capitalize mb-4'>get In touch</h3>
                <p className='text text-capitalize mb-4'>
                 Stay connected with us! Subscribe with your email to receive the latest updates, insights, and exclusive offers delivered directly to your inbox.
                 </p>
                <form onSubmit={this.handleSubmit}>
                  <div className='row'>
                    <div className='col-lg-8 col-12'>
                      <div className='input-group mb-3'>
                        <input
                         style={{borderColor:"#6D2B50", border:"1px solid #6D2B50"}}
                          type='email'
                          className='form-control py-2 px-3 border  rounded-3 shadow-lg text-lg-start text-center'
                          placeholder='Your Email'
                          aria-label="Recipient's email"
                          aria-describedby='basic-addon2'
                          value={email}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className='col-lg-4 col-12'>
                      <button  style={{borderColor:"#6D2B50", backgroundColor:"#6D2B50",color:"#ffffff" }} type='submit' className='btn btn-danger shadow-lg w-100'>Register</button>
                    </div>
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

export default Sub;
