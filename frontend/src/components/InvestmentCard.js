import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function InvestmentCard(props) {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <div className="d-flex justify-content-center">
        {props.price}$
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
  );
}

export default InvestmentCard;