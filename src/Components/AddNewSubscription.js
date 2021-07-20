import { useState } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  Card,
  Image,
  Container,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import AllSubServices from "./AllSubServices";
import "../styles.css";

const AddNewSubscription = (props) => {
  const [validated, setValidated] = useState(false);
  const [selectedService, setSelectedService] = useState({});
  const history = useHistory();

  const [subName, setSubName] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [firstBillDate, setFirstBillDate] = useState("");
  const [cycle, setCycle] = useState("");
  const [duration, setDuraton] = useState("");
  const [remindOn, setRemindOn] = useState("");
  const [currency, setCurrency] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log("form ValidityState", form.checkValidity());
    if (form.checkValidity() === false) {
      event.stopPropagation();
      console.log("not valid");
    }

    setValidated(true);
    props.onAddSub({
      name: selectedService,
      displayName: subName,
      description,
      category,
      startDate: firstBillDate,
      cycle,
      duration,
      remindMe: remindOn,
      currency,
    });
    // history.replace("/");
    props.onClose();
  };

  const handleServiceChange = () => {
    setSelectedService({});
  };

  const handleSelectService = (service) => {
    console.log("selected service", service);
    setSelectedService(service);
  };

  return (
    <>
      {!selectedService.displayName && (
        <p className="page-title">Select Subscription</p>
      )}
      {selectedService.displayName && (
        <p className="page-title">Provide Subscription Details</p>
      )}
      {!selectedService.displayName && (
        <AllSubServices onSelectService={handleSelectService} />
      )}
      {selectedService.displayName && (
        <Container className="px-0 pb-2">
          <Card
          // onClick={handleSelection}
          // style={{
          //   border: `2px solid ${selectedService.brandColor}`,
          //   borderRadius: "0.5rem",
          //   marginBottom: "0.5rem",
          // }}
          >
            <Card.Body>
              <Row>
                <Col xs={4}>
                  {/* <Image src={selectedService.logoImagePath} height="20" /> */}
                </Col>
                <Col
                  xs={4}
                  style={{ textAlign: "center", display: "inline-block" }}
                >
                  <Image src={selectedService.logoImagePath} height="70" />
                  {/* <h5 className="card-title">{selectedService.displayName}</h5> */}
                </Col>
                <Col xs={4}>
                  <p className="change-link" onClick={handleServiceChange}>
                    Change Service
                  </p>
                </Col>
              </Row>
              <Row>
                <Col
                  style={{
                    textAlign: "center",
                    display: "inline-block",
                    paddingTop: "0.75rem",
                  }}
                >
                  <h3 className="card-title" style={{ fontWeight: "500" }}>
                    {selectedService.displayName}
                  </h3>
                </Col>
              </Row>

              <div>
                {/* <p className="page-title mt-0">Add New Subscription</p> */}
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                  className="pt-3"
                >
                  <Row>
                    <Col xs={4} />
                    <Form.Group
                      as={Col}
                      controlId="formGridPrice"
                      style={{ marginBottom: "1.5rem" }}
                    >
                      <Form.Control
                        required
                        type="number"
                        step="0.5"
                        placeholder="Amount"
                        value={amount}
                        xs={4}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </Form.Group>
                    <Col xs={4} />
                  </Row>
                  <Row>
                    <Form.Group
                      as={Col}
                      controlId="formGridName"
                      style={{ marginBottom: "1.5rem" }}
                    >
                      <Form.Control
                        required
                        type="text"
                        placeholder="Subscription Name"
                        value={subName}
                        onChange={(e) => setSubName(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      controlId="formGridCategory"
                      style={{ marginBottom: "1.5rem" }}
                    >
                      <Form.Control
                        required
                        as="select"
                        defaultValue="Choose Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option>Choose Category</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Music">Music</option>
                        <option value="Utility">Utility</option>
                      </Form.Control>
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group
                      as={Col}
                      controlId="formGridDescription"
                      style={{ marginBottom: "1.5rem" }}
                    >
                      {/* <Form.Label>Description</Form.Label> */}
                      <Form.Control
                        required
                        type="text"
                        placeholder="Add description here"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </Form.Group>
                  </Row>

                  <Row>
                    <Form.Group
                      as={Col}
                      controlId="formGridcycle"
                      style={{ marginBottom: "1.5rem" }}
                    >
                      <Form.Control
                        required
                        type="date"
                        placeholder="Choose Billing Cycle"
                        value={firstBillDate}
                        onChange={(e) => setFirstBillDate(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      controlId="formGridCycle"
                      style={{ marginBottom: "1.5rem" }}
                    >
                      <Form.Control
                        required
                        as="select"
                        defaultValue="Choose Cycle"
                        value={cycle}
                        onChange={(e) => setCycle(e.target.value)}
                      >
                        <option>Choose Cycle</option>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                      </Form.Control>
                    </Form.Group>
                  </Row>

                  <Row>
                    <Form.Group
                      as={Col}
                      controlId="formGridDuration"
                      style={{ marginBottom: "1.5rem" }}
                    >
                      <Form.Control
                        required
                        as="select"
                        defaultValue="Choose Duration"
                        value={duration}
                        onChange={(e) => setDuraton(e.target.value)}
                      >
                        <option>Choose Duration</option>
                        <option value="1-month">1 Month</option>
                        <option value="6-months">6 Months</option>
                        <option value="1-year">1 Year</option>
                        <option value="5-years">5 Years</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      controlId="formGridRemindMe"
                      style={{ marginBottom: "1.5rem" }}
                    >
                      <Form.Control
                        required
                        as="select"
                        defaultValue="Remind me before"
                        value={remindOn}
                        onChange={(e) => setRemindOn(e.target.value)}
                      >
                        <option>Remind me before</option>
                        <option value="1-day">1 Day</option>
                        <option value="2-days">2 Days</option>
                        <option value="1-week">1 Week</option>
                        <option value="1-month">1 Month</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      controlId="formGridCurrency"
                      style={{ marginBottom: "1.5rem" }}
                    >
                      <Form.Control
                        required
                        as="select"
                        defaultValue="INR"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                      >
                        <option>Choose Currency</option>
                        <option value="CAD">CAD</option>
                        <option value="USD">USD</option>
                        <option value="INR">INR</option>
                        <option value="EURO">EURO</option>
                      </Form.Control>
                    </Form.Group>
                  </Row>
                  <Row
                    className="mt-3"
                    style={{ flexDirection: "row-reverse" }}
                  >
                    <Button className="sub-button mx-3" onClick={props.onClose}>
                      Cancel
                    </Button>
                    <Button className="sub-button mx-3" type="submit">
                      Add
                    </Button>
                  </Row>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Container>
      )}
    </>
  );
};

export default AddNewSubscription;
