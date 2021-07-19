import React, { useState, useEffect } from 'react'
import { Col, Image, Container, Row, Button, Badge } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { get } from './listing-detail-service'
import css from './listing-detail-style.module.css'
import { ImageCarouselModal } from './component/image-carousel/image-carousel'
import classNames from 'classnames/bind'
import { AvatarInitials } from './component/avatar-initials'
import { ReviewModal } from './component/review-modal/review-modal'
import "bootstrap/dist/css/bootstrap.min.css"

let cx = classNames.bind(css)

export const ListingDetail = () => {
  let { id } = useParams()
  const [experience, setExperience] = useState(undefined)
  const [modalShow, setModalShow] = useState(false)
  const [showReviews, setShowReviews] = useState(false)

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
      <ReviewModal
        stars={experience.review.stars}
        numOfReviews={experience.review.numOfReviews}
        reviews={experience.review.by}
        show={showReviews}
        onHide={() => setShowReviews(false)}
      />
      <Container fluid='lg' className={css.container} >
        <h3 className={css.title}>{experience.title}</h3>
        <div className={`${css['review-highlight']}`}>
          <Button variant="light" className={`${css['star-icon-button']}`}
            onClick={() => setShowReviews(true)}>
            <span className={css['star-icon']}>
              <i className={`bi bi-star-fill ${css['star-icon-colour']}`}></i>
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
        </div>

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

        <Row className={css['spacing-md']}>
          <Col>
            <h4 >Class hosted by {experience.host.firstName}</h4>
            <Row>
              <Col sm={3}>
                <span>{experience.course.durationPerClass}</span>
                <span style={{ marginRight: '.2rem', marginLeft: '.2rem' }} aria-hidden="true">·</span>
                <span>Hosted in {experience.course.hostedIn}</span>
              </Col>
            </Row>
            <Row className={css['spacing-sm']}>
              <Col>
                <div>
                  <Badge className={`${css['badge-icon']}`} variant="info">
                    Up to {experience.course.studentCapacity} people
                  </Badge>
                  <Badge className={css['badge-icon']} variant="secondary">
                    <span>Includes equipment</span>
                  </Badge>
                  <Badge className={css['badge-icon']} variant="success">
                    <span>Safety compliance</span>
                  </Badge>
                </div>
              </Col>
            </Row>

            <Row className={`${css['spacing-sm']} ${css['divider-bottom']}`}>
              <Col>
                <div style={{ whiteSpace: 'pre-line' }}> {experience.course.description}</div>
              </Col>
            </Row>

            <Row className={css['spacing-md']}>
              <AvatarInitials
                firstName={experience.host.firstName}
                lastName={experience.host.lastName}>
                <Col sm={1}>
                </Col>
              </AvatarInitials>
              <Col className={css['col-no-horizontal-padding']}>
                <h4 className={css['host-name']}>Meet your host, {experience.host.firstName}</h4>
                <div>Member since {experience.host.memberSince}</div>
              </Col>
            </Row>
            <Row className={css['spacing-sm']}>
              <Col>
                <span className={css['star-icon']}>
                  <i className={`bi bi-star-fill ${css['star-icon-colour']}`}>
                  </i>
                  {experience.review.stars}
                </span>
                <span style={{ marginLeft: '1rem' }}><i class="bi bi-patch-check"></i> Identity verified</span>
              </Col>
            </Row>
            <Row className={`${css['spacing-sm']} ${css['divider-bottom']}`}>
              <Col>
                <p>{experience.host.bio}</p>
                <Button variant="outline-secondary"
                  onClick={() => setShowReviews(true)}>Show reviews</Button>
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ListingDetail