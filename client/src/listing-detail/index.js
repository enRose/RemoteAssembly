import React, { useState, useEffect } from 'react'
import { Card, Col, Image, Button, Container, Row } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
import { get } from './listing-detail-service'

export const ListingDetail = () => {
  let { id } = useParams()

  useEffect(async () => {
    console.log(id)
    const response = await get(id)
  }, [])

  return (
    <Container fluid>
      <Row>
      <Col xs={6} md={4}>
      <Image src="holder.js/171x180" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" roundedCircle />
    </Col>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" thumbnail />
    </Col>
      </Row>
    </Container>
  )
}

export default ListingDetail