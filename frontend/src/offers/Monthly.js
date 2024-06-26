import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Monthly = () => {
  return (
    <div>
    <Row xs={1} md={2} lg={3}>
      <Col className="mb-4">
        <Card>
          <Card.Img variant="top" src="../images/1500.png" />
          <Card.Body>
          <div className="d-flex justify-content-center">
          <Card.Title>1500$ Monthly Investment</Card.Title>
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
          <Card.Img variant="top" src="../images/2000.png" />
          <Card.Body>
          <div className="d-flex justify-content-center">
          <Card.Title>2000$ Monthly Investment</Card.Title>
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
          <Card.Img variant="top" src="../images/3000.png" />
          <Card.Body>
          <div className="d-flex justify-content-center">
          <Card.Title>3000$ Monthly Investment</Card.Title>
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

export default Monthly;
