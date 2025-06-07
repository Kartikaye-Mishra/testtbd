import React from 'react'
import Card from 'react-bootstrap/Card';
import './servicecard.css'
import PropTypes from 'prop-types';
ServiceCard.propTypes = {
  data: PropTypes.shape({
    imgURL: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
  }).isRequired,
};

export default function ServiceCard({data}) {
 
  return (
   
    <Card style={{ width: '100%',height:'fit-content'}} className='p-2 pb-4 main_card_container'>
    <Card.Img style={{width:'60%',margin:'0 auto'}} variant="top" src={`${data.imgURL}`} className='mt-2 ' />
    <Card.Body style={{height:'auto'}}>
      
      <Card.Title style={{color:'#6D2B50'}} className='text-center font-bold'>{`${data.title}`}</Card.Title>
      <Card.Text style={{textAlign:'justify',width:'auto'}} className=' '>
      {`${data.desc}`}
      </Card.Text>

    </Card.Body>
  </Card>
  )
}
