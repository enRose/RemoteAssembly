import { Row, Col, Modal, Button, Container } from 'react-bootstrap'
import { AvatarInitials } from '../avatar-initials'
import css from './review-modal-style.module.css'


export const ReviewModal = (props) => {
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
            <Row className={css['spacing-sm']}>
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
        <Modal.Body scrollable={true}>
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
        </Modal.Body>
      </Modal>
    </Container>
  )
}