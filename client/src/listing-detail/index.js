import React, { useState, useEffect } from 'react'
import { Col, Image, Container, Row, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { get } from './listing-detail-service'
import css from './listing-detail-style.module.css'
import { ImageCarouselModal } from './component/image-carousel/image-carousel'
import classNames from 'classnames/bind'
import { ReadMore } from './component/read-more/read-more'
import { AvatarInitials } from './component/avatar-initials'

let cx = classNames.bind(css)

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
        <h3 className={css.title}>{experience.title}</h3>
        <div className={`${css['review-highlight']}`}>
          <Button variant="light" className={`${css['star-icon-button']}`}>
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

        <Row className={css['class-overview']}>
          <Col>
            <h4 >Class hosted by {experience.host.firstName}</h4>
            <Row>
              <Col>
                <span>{experience.course.durationPerClass}</span>
                <span style={{ marginRight: '.2rem', marginLeft: '.2rem' }} aria-hidden="true">·</span>
                <span>Hosted in {experience.course.hostedIn}</span>
              </Col>
            </Row>
            <Row className={css['class-highlights']}>
              <Col>
                <i className={`bi bi-people ${css['class-highlight-icon']}`}></i>
                <span>Up to {experience.course.studentCapacity} people</span>
              </Col>
            </Row>
            {
              experience.course.includesEquipment &&
              <Row className={css['class-highlights']}>
                <Col>
                  <i className={`bi bi-brush ${css['class-highlight-icon']}`}></i>
                  <span>Includes equipment</span>
                </Col>
              </Row>
            }
            {
              experience.course.safetyCompliance &&
              <Row className={css['class-highlights']}>
                <Col>
                  <i className={`bi bi-cone-striped ${css['class-highlight-icon']}`}></i>
                  <span>Safety compliance</span>
                </Col>
              </Row>
            }
            <Row className={css['host-info']}>
              <Col>
                <AvatarInitials firstName={experience.host.firstName} lastName={experience.host.lastName}>
                  <h4>Meet your host, {experience.host.firstName}</h4>
                </AvatarInitials>
              </Col>
            </Row>
          </Col>
          <Col>
            <h4>What you'll do</h4>
            <ReadMore
              text={experience.course.description}
            />
          </Col>
        </Row>





      </Container >
    </>
  )
}

export default ListingDetail