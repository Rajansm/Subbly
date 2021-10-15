import { Card, Image, Row, Col } from "react-bootstrap";
import AllSubscriptionBrands from "../Lists/Brands";
import AllCurrencies from "../Lists/Currencies";

const subscription = (props) => {
  const brand = AllSubscriptionBrands.find((temp) => temp.name === props.name);

  const handleCardClick = () => {
    props.onClick(props);
  };

  return (
    <Card
      text={`light`}
      onClick={handleCardClick}
      style={{
        width: "auto",
        margin: "1.3rem 2.5rem",
        border: "none",
        fontFamily: "Poppins",
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
            {brand && (
              <Card.Title>
                {brand.displayName}
                {props.index}
              </Card.Title>
            )}
          </Col>
          <Col xs={2}>
            <Row className="pl-4">
              <Col>
                {brand && (
                  <p className="mb-0">
                    {
                      AllCurrencies.find((temp) => temp.cc === props.currency)
                        .symbol
                    }{" "}
                    {props.price}
                  </p>
                )}
              </Col>
            </Row>
            <Row className="pl-4">
              <Col>{brand && <p className="mb-0">{props.remindMe}</p>}</Col>
            </Row>
          </Col>
          <Col xs={4} className="pl-5">
            <Row>
              <Col>
                {brand && <p className="mb-0">Billing on: {props.firstBill}</p>}
              </Col>
            </Row>
            <Row>
              <Col>{brand && <p className="mb-0">{props.duration}</p>}</Col>
            </Row>
          </Col>
          <Col xs={2}>
            <p className="mb-0">Active</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default subscription;
