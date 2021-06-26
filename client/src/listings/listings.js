import React, { useState, useEffect } from 'react'
import { Card, Button, Container, Row } from 'react-bootstrap'
import { all, get } from './listing-service'
import { useHistory } from 'react-router-dom'
import './style.css'

export const Listings = () => {
  const [listings, setListings] = useState()
  const [selectedId, setSelectedId] = useState(undefined)
  const history = useHistory()

  useEffect(async () => {
    const response = await all()
    setListings(response.json())
  }, [])

  // when a list id is selected
  useEffect(async () => {
    console.log(selectedId)
    const response = await get()
    response.ok && selectedId && history.push(`/listings/${selectedId}`)
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