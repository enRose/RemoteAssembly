import React, { useState, useEffect } from 'react'
import { Col, Image, Container, Row, Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
import { get } from './listing-detail-service'
import css from './listing-detail-style.module.css'
import { ImageCarouselModal } from './image-carousel'
import { ReactComponent as Heart } from './heart.svg'


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
      <Container fluid='lg' className={css.container} >
        <Row className={css.row}>
          <h3 className={css.title}>{experience.title}</h3>
        </Row>
        <Row className={`${css['review-highlight']} ${css.row}`}>
          <Button variant="light" className={css['like-icon-button']}>
            <span className={css['like-icon']}>
              <Heart />
            </span>
            <span className={css['review-score-wrapper']}>
              <span className={css['review-stars']}>{experience.review.stars}</span>
              ({experience.review.numOfReviews})
            </span>
          </Button>
          <Button variant="light" className={css['location-button']}>
            <span style={{ marginRight: '.2rem' }} aria-hidden="true">·</span>
            <span className={css['location-city']}>
              {experience.location.city}
            </span>
          </Button>
        </Row>
        <Row className={`justify-content-center ${css['image-group']}`}
          onClick={() => setModalShow(true)}>
          <Col className={css['first-image-col']} sm={4}>
            <Image
              className={css['image-bounding-box']}
              style={{
                backgroundImage: `url(${experience.featureImage})`
              }}
              fluid />
          </Col>
          <Col className={css['second-image-col']} sm={4}>
            <Image
              className={css['image-bounding-box']}
              style={{
                backgroundImage: `url(${experience.images[1]})`
              }}
              fluid />
          </Col>
          <Col sm={2}>
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
          <Col className={css['last-image-col']}>
            <Image className={css['image-bounding-box']}
              style={{
                backgroundImage: `url(${experience.images[4]})`
              }} fluid />
          </Col>
        </Row>

        <Row className={css.row}>
          <h4 className={css['host-overview']}>Class hosted by {experience.host.firstName}</h4>
        </Row>

      </Container >
    </>
  )
}

export default ListingDetail