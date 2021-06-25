import React, { useState, useEffect } from 'react'
import { ListGroup, Card, Button, Container, Row } from 'react-bootstrap'
import { all } from './listing-service'
import './style.css'

export const Listings = () => {
  const [listings, setListings] = useState()
  const [selectedId, setSelectedId] = useState(undefined)

  useEffect(async () => {
    const response = await all()
    setListings(response.json())
  }, [])

  // when a list id is selected
  useEffect(() => {
    //this.fetchData()
    console.log(selectedId)
  }, [selectedId])

  const CardView = ({
    id = '',
    title = "Default Title",
    description = "Default Text",
    img = "default_holder.js/100px180",
    buttonText = '',
    link = ''
  }) => (
    <Card
      id={id}
      onClick={e => setSelectedId(id)} 
      className='marginMedium' 
      style={{ width: '18rem', cursor: 'pointer' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {buttonText && <Button variant="primary">{buttonText}</Button>}
      </Card.Body>
    </Card>
  )

  return (
    <Container fluid>
      <Row>
        {
          listings?.map((i, index) => <CardView key={index} {...i} />)
        }
      </Row>
    </Container>
  )
}

export default Listings