import { useState } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";

const AddNewSubscription = () => {
  const [validated, setValidated] = useState(false);

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
    console.log(
      "valid!",
      subName,
      category,
      description,
      firstBillDate,
      cycle,
      duration,
      remindOn,
      currency
    );
    setValidated(true);
  };

  return (
    <Container>
      <h4 className="pb-3">Add New Subscription</h4>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
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
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formGridDescription">
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

        <Row className="mb-3">
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

        <Row className="mb-3">
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

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </Container>
  );
};

export default AddNewSubscription;
