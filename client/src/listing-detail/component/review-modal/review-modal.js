import React, { useCallback, useRef, useState } from "react"
import { Row, Col, Modal, Button, Container } from 'react-bootstrap'
import { AvatarInitials } from '../avatar-initials'
import css from './review-modal-style.module.css'
import { useReviewFetch } from './use-review-fetch'

export const ReviewModal = (props) => {
  const [pageNumber, setPageNumber] = useState(2)

  const {
    reviews,
    hasMore,
    loading,
    error
  } = useReviewFetch(props.hostId, pageNumber)

  const observer = useRef()

  const lastReviewElementRef = useCallback(node => {
    if (loading) return

    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })

    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  return (
    <Container>
      <Modal
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
        <Modal.Body>
          <div>
            {reviews.map((review, index) => {
              if (reviews.length === index + 1) {
                return <div ref={lastReviewElementRef} key={review.userName}>
                  <Row className={css['spacing-sm']}>
                    <AvatarInitials
                      firstName={review.userName}>
                      <Col xs={2}>
                      </Col>
                    </AvatarInitials>
                    <Col>
                      <div>{review.userName}</div>
                      <span>Member since {review.memberSince}</span>
                    </Col>
                  </Row>
                  <Row className={css['spacing-sm']}>
                    <Col>
                      <p>{review.utterance}</p>
                    </Col>
                  </Row>
                </div>
              }
              else {
                return <div key={review.userName}>
                  <Row className={css['spacing-sm']}>
                    <AvatarInitials
                      firstName={review.userName}>
                      <Col xs={2}>
                      </Col>
                    </AvatarInitials>
                    <Col>
                      <div>{review.userName}</div>
                      <span>Member since {review.memberSince}</span>
                    </Col>
                  </Row>
                  <Row className={css['spacing-sm']}>
                    <Col>
                      <p>{review.utterance}</p>
                    </Col>
                  </Row>
                </div>
              }
            })
            }
            <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  )
}