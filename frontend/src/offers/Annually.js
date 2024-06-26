import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Annually = () => {
  return (
    <div>
    <Row xs={1} md={2} lg={3}>
      <Col className="mb-4">
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <div className="d-flex justify-content-center">
            $
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="d-flex justify-content-center">
              <Button variant="primary">INVESTy</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col className="mb-4">
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <div className="d-flex justify-content-center">
            $
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="d-flex justify-content-center">
              <Button variant="primary">INVESTy</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col className="mb-4">
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <div className="d-flex justify-content-center">
            $
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="d-flex justify-content-center">
              <Button variant="primary">INVESTy</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </div>
  )
}

export default Annually;
