import React, { useState, useEffect } from 'react'
import { Col, Image, Container, Row } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
import { get } from './listing-detail-service'
import './style.css'
import { ImageCarouselModal } from './image-carousel'

export const ListingDetail = () => {
  let { id } = useParams()
  const [experience, setExperience] = useState(undefined)
  const [modalShow, setModalShow] = useState(false)

  useEffect(async () => {
    console.log(id)
    const response = await get(id)
    console.log(response.json())
    response.ok && setExperience(response.json())
  }, [])

  if (!experience) {
    return null
  }

  return (
    <>
      <ImageCarouselModal
          images={experience.images}
          show={modalShow}
          onHide={() => setModalShow(false)}
      />
      <Container fluid>
        <Row onClick={() => setModalShow(true)}>
          <Col className='col-small-padding' sm={4}>
            <Image
              className='bounding-box'
              style={{
                backgroundImage: `url(${experience.featureImage})`
              }}
              fluid />
          </Col>
          <Col className='col-small-padding' sm={4}>
            <Image
              className='bounding-box'
              style={{
                backgroundImage: `url(${experience.images[1]})`
              }}
              fluid />
          </Col>
          <Col className='col-small-padding' sm={2}>
            <Container fluid>
              <Row>
                <Image src={experience.images[2]}
                  fluid />
              </Row>
              <Row>
                <Image src={experience.images[3]} fluid />
              </Row>
            </Container >
          </Col>
          <Col className='col-small-padding'>
            <Image className='bounding-box'
              style={{
                backgroundImage: `url(${experience.images[4]})`
              }} fluid />
          </Col>
        </Row>
      </Container >
    </>
  )
}

export default ListingDetail