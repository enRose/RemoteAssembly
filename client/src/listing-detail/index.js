import React, { useState, useEffect } from 'react'
import { Col, Image, Container, Row, Button, Badge } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { get } from './listing-detail-service'
import css from './listing-detail-style.module.css'
import { ImageCarouselModal } from './component/image-carousel/image-carousel'
import classNames from 'classnames/bind'
import { AvatarInitials } from './component/avatar-initials'
import { ReviewModal } from './component/review-modal/review-modal'
import { BookingCalendar } from './component/booking-calendar'
import { DatePicker, Divider, Tag } from 'antd'
import {
  TeamOutlined,
  FundProjectionScreenOutlined,
  VerifiedOutlined,
} from '@ant-design/icons'

const { RangePicker } = DatePicker

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

  const onChange = (value, dateString) => {
    console.log('Selected Time: ', value)
    console.log('Formatted Selected Time: ', dateString)
  }

  function onNumOfStudentsInputChange(value) {
    console.log('changed', value);
  }

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
        hostId={`test`}
        stars={experience.review.stars}
        numOfReviews={experience.review.numOfReviews}
        of1stPage={experience.review.of1stPage}
        show={showReviews}
        onHide={() => setShowReviews(false)}
      />
      <Container fluid='lg' className={css.container}>
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

        <Row className={css['spacing-md']} >
          <Col>
            <h4 >Class hosted by {experience.host.firstName}</h4>
            <Row>
              <Col>
                <span>{experience.course.durationPerClass}</span>
                <span style={{ marginRight: '.2rem', marginLeft: '.2rem' }} aria-hidden="true">·</span>
                <span>Hosted in {experience.course.hostedIn}</span>
              </Col>
            </Row>
            <Row className={css['spacing-sm']}>
              <Col>
                <Tag icon={<TeamOutlined />} color="cyan">
                  Up to {experience.course.studentCapacity} people
                </Tag>
                <Tag icon={<FundProjectionScreenOutlined />} color="volcano">
                  Includes equipment
                </Tag>
                <Tag icon={<VerifiedOutlined />} color="green">
                  Safety compliance
                </Tag>
              </Col>
            </Row>
            <Divider />
            <Row className={`${css['spacing-sm']}`}>
              <Col>
                <div style={{ whiteSpace: 'pre-line' }}>{experience.course.description}</div>
              </Col>
            </Row>
            <Divider />
          </Col>

          <Col md={4}>
            <Row>
              <BookingCalendar
                title={`$10 / class`}
                headerExtra={experience.review.stars}
                onHeaderExtraClick={() => setShowReviews(true)} />
            </Row>
          </Col>
        </Row>
        <Row className={css['spacing-sm']}>
          <Col>
            <AvatarInitials
              firstName={experience.host.firstName}
              lastName={experience.host.lastName}>
              <span>
                Meet your host, {experience.host.firstName}
              </span>
            </AvatarInitials>
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
            <span style={{ marginLeft: '1rem' }}><i class="bi bi-person-plus"></i> Member since {experience.host.memberSince}</span>
          </Col>
        </Row>
        <Row className={`${css['spacing-sm']}`}>
          <Col>
            <p>{experience.host.bio}</p>
            <Button variant="outline-secondary"
              onClick={() => setShowReviews(true)}>Show reviews</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ListingDetail