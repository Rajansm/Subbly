import { Card, Col, Row, Image } from "react-bootstrap";
import AllSubscriptionBrands from "../Lists/Brands";

const AllSubServices = (props) => {
  const allSubCards = AllSubscriptionBrands.map((brand, index) => {
    const handleSelection = () => {
      props.onSelectService(brand);
    };
    return (
      <Card
        onClick={handleSelection}
        key={index}
        style={{
          border: `2px solid ${brand.brandColor}`,
          borderRadius: "0.3rem",
          marginBottom: "1rem",
        }}
      >
        <Card.Body style={{ padding: "0.75rem 1rem" }}>
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
