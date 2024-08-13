import React from 'react'

export default function ServiceCard() {
    const data = {
        imgURL:'https://cysco.in/assets/img/data_1197460.png',
        title:'Software Development',
        desc:'Cysco develops quality software and offers related services software consulting, cloud migration, app integration, and more.'

    }
  return (
    // <div className='container' style={{border:'2px solid'}}>
    //     <div className="img">
    //         <img style={{height:'16rem',width:'10rem'}} src={`${data.imgURL}`} alt="services image" />
    //     </div>
    //     <div className="title">{`${data.title}`}</div>
    //     <div className="desc">{`${data.desc}`}</div>
    // </div>

    <div  style={{border:'2px solid',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} class="col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              {/* <!-- <div class="icon"><i class="bx bxl-dribbble"></i></div> --> */}
              <img style={{height:'16rem',width:'10rem'}}  src={`${data.imgURL}`} alt="" />
              <h2><a href="">Software Development</a></h2>
              <p>Webmigo develops quality software and offers related services
                software consulting, cloud migration, app integration, and more.
              </p>
            </div>
          </div>
  )
}
