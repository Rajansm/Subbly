import { useState } from "react";
import Subscription from "./Subscription";
import DashboardHeader from "./DashboardHeader";
import AddNewSubscription from "./AddNewSubscription";
import { Button, Container, Row, Col, Modal } from "react-bootstrap";

const SubscriptionList = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditSub = (id) => {
    console.log("Clicked!!");
  };

  const subsList = props.subsList.map((subs, index) => {
    return (
      <Subscription
        key={index}
        name={subs.name}
        price={subs.price}
        displayName={subs.displayName}
        description={subs.description}
        category={subs.category}
        firstBill={subs.startDate}
        cycle={subs.cycle}
        duration={subs.duration}
        remindMe={subs.remindMe}
        currency={subs.currency}
        onClick={handleEditSub}
      />
    );
  });

  return (
    <Container className="px-0">
      <DashboardHeader />
      <div
        className="pt-2"
        style={{
          backgroundImage: "linear-gradient(rgb(245 245 245), #ffffff)",
        }}
      >
        <Row className="mx-0">
          <Col>
            <p
              className="page-title"
              style={{ marginTop: "1rem", marginLeft: "1.75rem" }}
            >
              Manage Subscriptions
            </p>
          </Col>
          <Col
            offset={5}
            className="align-center"
            style={{ flexDirection: "row-reverse", paddingRight: "2.5rem" }}
          >
            <Button className="sub-button" onClick={handleShow}>
              Add New Subscription
            </Button>
          </Col>
        </Row>
        {subsList}
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={true}>
        <Modal.Header style={{ paddingBottom: "0" }} closeButton>
          {/* <Modal.Title>Modal title</Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="mx-4 mb-4">
          <AddNewSubscription onAddSub={props.onAddSub} onClose={handleClose} />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </Container>
  );
};

export default SubscriptionList;
