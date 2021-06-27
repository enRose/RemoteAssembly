import React, { useState, useEffect } from 'react'
import { FormControl, InputGroup, Form, Card, Col, Image, Button, Container, Row } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
import { get } from './listing-detail-service'
import './style.css'

export const ListingDetail = () => {
  let { id } = useParams()

  useEffect(async () => {
    console.log(id)
    const response = await get(id)
    console.log(response.json())
  }, [])

  return (
    <Container fluid>
      <Row>
        <Col className='col-small-padding' sm={4}>1 of 4</Col>
        <Col className='col-small-padding' sm={4}>2 of 4</Col>
        <Col className='col-small-padding' sm={2}>
          <Container fluid>
            <Row>
              3/1
            </Row>
            <Row>
              3/2
            </Row>
          </Container >
        </Col>
        <Col className='col-small-padding'>4 of 4</Col>
      </Row>
    </Container >
  )
}

export default ListingDetail