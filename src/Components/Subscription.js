import { Card, Image, Row, Col } from "react-bootstrap";
import AllSubscriptionBrands from "../Lists/Brands";
import AllCurrencies from "../Lists/Currencies";

const subscription = (props) => {
  const brand = AllSubscriptionBrands.find((temp) => temp.name === props.name);

  return (
    <Card
      text={`light`}
      style={{
        width: "auto",
        margin: "1.3rem 2.5rem",
        border: "none",
      }}
    >
      <Card.Body
        className="sub-card pa-3"
        style={{
          backgroundColor: brand ? brand.brandColor : "#e4e4e4",
        }}
      >
        <Row style={{ alignItems: "center" }}>
          <Col xs={2}>
            {brand && (
              <Image
                className="pl-5"
                src={brand.logoImagePathWhite}
                height="40"
              />
            )}
          </Col>
          <Col xs={2}>
            {brand && <Card.Title>{brand.displayName}</Card.Title>}
          </Col>
          <Col xs={2}>
            <Row className="pl-4">
              <Col>
                {brand && (
                  <Card.Title>
                    {
                      AllCurrencies.find((temp) => temp.cc === props.currency)
                        .symbol
                    }{" "}
                    {props.price}
                  </Card.Title>
                )}
              </Col>
            </Row>
            <Row className="pl-4">
              <Col>{brand && <Card.Text>{props.remindMe}</Card.Text>}</Col>
            </Row>
          </Col>
          <Col xs={3}>
            <Row>
              <Col>
                {brand && <Card.Text>Billing on: {props.firstBill}</Card.Text>}
              </Col>
            </Row>
            <Row>
              <Col>{brand && <Card.Text>{props.duration}</Card.Text>}</Col>
            </Row>
          </Col>
          <Col xs={2}>
            <Card.Text className="pr-5">Active</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default subscription;
