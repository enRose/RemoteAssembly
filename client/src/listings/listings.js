import React, { useState, useEffect } from 'react'
import { Card, Button, Container, Row } from 'react-bootstrap'
import { all } from './listings-service'
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

  useEffect(() => {
    selectedId && history.push(`/listings/${selectedId}`)
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
      <Row className="justify-content-center">
        {
          listings?.map((i, index) => <CardView key={index} {...i} />)
        }
      </Row>
    </Container>
  )
}

export default Listings