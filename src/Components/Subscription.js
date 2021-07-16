import { Card, Image, Row, Col } from "react-bootstrap";
import AllSubscriptionBrands from "../Lists/Brands";

const subscription = (props) => {
  const brand = AllSubscriptionBrands.find((temp) => temp.name === props.name);

  return (
    <Card
      text={`light`}
      style={{
        width: "auto",
        margin: "1rem 2rem",
        border: "none",
      }}
    >
      <Card.Body
        className="sub-card"
        style={{ backgroundColor: brand ? brand.brandColor : "#e4e4e4" }}
      >
        {brand && <Card.Title>{brand.displayName}</Card.Title>}
        <Row>
          <Col xs={4}>
            {brand && <Image src={brand.logoImagePathWhite} height="40" />}
          </Col>
          <Col xs={4}>
            <Card.Text>{props.description}</Card.Text>
          </Col>
          <Col>
            <Card.Text>{props.description}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default subscription;
