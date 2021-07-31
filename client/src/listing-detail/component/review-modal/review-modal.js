import React, { useEffect, useRef, useState } from "react"
import { Row, Col, Modal, Button, Container } from 'react-bootstrap'
import { AvatarInitials } from '../avatar-initials'
import css from './review-modal-style.module.css'

export const ReviewModal = (props) => {
  const modalBody = useRef(null)
  const [onScrollRegistered, setOnScrollRegistered] = useState(false)

  const onScroll = () => {
    const modal = document.querySelectorAll('div.modal.show')[0]

    modal && modal.addEventListener('scroll', () => console.log('scrolling'))
  }

  return (
    <Container>
      <Modal
        onEntered={onScroll}
        {...props}
        size="lg"
        aria-labelledby="contained-review-modal-title-vcenter"
        centered
      >
        {
          <Modal.Header closeButton>
            <Row>
              <Col>
                <span className={css['star-icon']}>
                  <i className={`bi bi-star-fill ${css['star-icon-colour']}`}>
                  </i>
                  {`${props.stars} (${props.numOfReviews} reviews)`}
                </span>
              </Col>
            </Row>
          </Modal.Header>
        }
        <Modal.Body >
          <div>
            {
              props.reviews.map(x =>
                <>
                  <Row className={css['spacing-sm']}>
                    <AvatarInitials
                      firstName={x.userName}>
                      <Col sm={1}>
                      </Col>

                    </AvatarInitials>
                    <Col>
                      <div>{x.userName}</div>
                      <span>Member since {x.memberSince}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>{x.utterance}</p>
                    </Col>
                  </Row>
                </>
              )

            }
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  )
}