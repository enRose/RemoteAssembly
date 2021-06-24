import React, { useState, useEffect } from 'react'
import { ListGroup, Card, Button, Container, Row, Col } from 'react-bootstrap'
import spr from '../res/sun-pour-room.jpg'
import { all } from './listing-service'

export const Listings = () => {
  const [listings, setListings] = useState()
  const [id, setId] = useState(undefined)

  useEffect(async () => {
    const response = await all()
    setListings(response.json())
  }, [])

  // when a list id is selected
  useEffect(() => {
    //this.fetchData()
  }, [id])

  return (
    <Container fluid>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item><Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={spr} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Listings