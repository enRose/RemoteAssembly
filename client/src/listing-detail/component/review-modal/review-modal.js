import { Row, Modal, Button } from 'react-bootstrap'
import { AvatarInitials } from '../avatar-initials'

export const ReviewModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-review-modal-title-vcenter"
      centered
    >
      {
        props.title &&
        <Modal.Header closeButton>
          <Modal.Title id="contained-review-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
      }
      <Modal.Body>
        { 
          props.reviews.map(x =>
            <Row>
              <AvatarInitials
                firstName={x.userName}>
                <div>
                  <div>{x.userName}</div>
                  <span>Member since {x.memberSince}</span>
                </div>
              </AvatarInitials>
              <p>{x.utterance}</p>
           </Row>
          )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}