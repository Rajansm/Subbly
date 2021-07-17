import { Card, Col, Row, Image } from "react-bootstrap";
import AllSubscriptionBrands from "../Lists/Brands";

const AllSubServices = (props) => {
  const allSubCards = AllSubscriptionBrands.map((brand, index) => {
    const handleSelection = (name) => {
      props.onSelectService(brand.name);
    };
    return (
      <Card style={{ border: "none !important" }}>
        <Card.Body
          onClick={handleSelection}
          style={{
            border: `3px solid ${brand.brandColor}`,
            borderRadius: "0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          <Row>
            <Col xs={3}>
              <Image src={brand.logoImagePath} height="20" />
            </Col>
            <Col xs={5}>
              <h5 className="card-title">{brand.displayName}</h5>
            </Col>
            <Col xs={4}>Not Added</Col>
          </Row>
        </Card.Body>
      </Card>
    );
  });

  return <>{allSubCards}</>;
};

export default AllSubServices;
