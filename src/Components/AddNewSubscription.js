import { useState } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import AllSubServices from "./AllSubServices";
import "../styles.css";

const AddNewSubscription = (props) => {
  const [validated, setValidated] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const history = useHistory();

  const [subName, setSubName] = useState("");
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
      name: subName.replace(/ /g, ""),
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

  const handleSelectService = (serviceName) => {
    console.log("selected service", serviceName);
    setSelectedService(serviceName);
  };

  return (
    <>
      <AllSubServices onSelectService={handleSelectService} />
      {selectedService && (
        <Container className="px-0 pb-4">
          {/* <DashboardHeader /> */}
          <div>
            <p className="page-title pb-2 mt-0">Add New Subscription</p>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              style={{ width: "auto", margin: "1rem 2rem" }}
            >
              <Row>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Subscription Name"
                    value={subName}
                    onChange={(e) => setSubName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCategory">
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
                  className="mb-3"
                  controlId="formGridDescription"
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
                <Form.Group as={Col} controlId="formGridcycle">
                  <Form.Control
                    required
                    type="date"
                    placeholder="Choose Billing Cycle"
                    value={firstBillDate}
                    onChange={(e) => setFirstBillDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCycle">
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
                <Form.Group as={Col} controlId="formGridDuration">
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
                <Form.Group as={Col} controlId="formGridRemindMe">
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
                <Form.Group as={Col} controlId="formGridCurrency">
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
              <Row className="mt-3" style={{ flexDirection: "row-reverse" }}>
                <Button className="sub-button mx-3" onClick={props.onClose}>
                  Cancel
                </Button>
                <Button className="sub-button mx-3" type="submit">
                  Add
                </Button>
              </Row>
            </Form>
          </div>
        </Container>
      )}
    </>
  );
};

export default AddNewSubscription;
