import React, { useState, useEffect } from 'react'
import { Card, Button, Container, Row } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'

export const ListingDetail = () => {
  let { id } = useParams()


  return (
    <Container fluid>
      <Row>
        <div>Hi {id}</div>
      </Row>
    </Container>
  )
}

export default ListingDetail