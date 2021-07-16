import { Card, Image } from "react-bootstrap";
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
        style={{ backgroundColor: brand ? brand.brandColor : "#e4e4e4" }}
      >
        {brand && <Card.Title>{brand.displayName}</Card.Title>}
        {brand && <Image src={brand.logoImagePathWhite} height="40" />}
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default subscription;
