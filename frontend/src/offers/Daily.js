import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Daily = () => {
  return (
    <div>
    <Row xs={1} md={2} lg={3}>
      <Col className="mb-4">
        <Card>
          <Card.Img variant="top" src="../images/200.png" />
          <Card.Body>
          <div className="d-flex justify-content-center">
          <Card.Title>200$ Daily Investment</Card.Title>
          </div>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="d-flex justify-content-center">
              <Button variant="primary">INVEST</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col className="mb-4">
        <Card>
          <Card.Img variant="top" src="../images/300.png" />
          <Card.Body>
          <div className="d-flex justify-content-center">
          <Card.Title>300$ Daily Investment</Card.Title>
          </div>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="d-flex justify-content-center">
              <Button variant="primary">INVEST</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col className="mb-4">
        <Card>
          <Card.Img variant="top" src="../images/400.png" />
          <Card.Body>
          <div className="d-flex justify-content-center">
          <Card.Title>400$ Daily Investment</Card.Title>
          </div>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="d-flex justify-content-center">
              <Button variant="primary">INVEST</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </div>
  )
}

export default Daily;
