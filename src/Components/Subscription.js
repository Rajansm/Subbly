import { Card } from "react-bootstrap";

const subscription = (props) => {
  return (
    <Card
      bg={`warning`}
      text={`light`}
      style={{ width: "auto" }}
      className="mb-2"
    >
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default subscription;
