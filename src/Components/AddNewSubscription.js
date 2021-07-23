import { useState } from "react";
import AllCurrencies from "../Lists/Currencies";
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
  const [cycleNum, setCycleNum] = useState("");
  const [cycleDesc, setCycleDesc] = useState("");
  const [duration, setDuraton] = useState("");
  const [durationNum, setDuratonNum] = useState("");
  const [durationDesc, setDuratonDesc] = useState("");
  const [remindOn, setRemindOn] = useState("");
  const [remindOnNum, setRemindOnNum] = useState("");
  const [remindOnDesc, setRemindOnDesc] = useState("");
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
      name: selectedService.name,
      displayName: subName,
      price: amount,
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
    setSubName(service.name);
    setSelectedService(service);

    //Initialize default values
    setDuratonNum("1");
    setDuratonDesc("Years");

    setCycleNum("1");
    setCycleDesc("Months");

    setRemindOnNum("1");
    setRemindOnDesc("Days");
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
                  <Row className="mx-0">
                    <Col xs={4} className="pl-0">
                      <Form.Label className="pl-0">Category</Form.Label>
                    </Col>
                    <Col xs={8}>
                      <Form.Group as={Row} controlId="formGridName">
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
                    </Col>
                  </Row>
                  <Row className="mx-0">
                    <Col xs={4} className="pl-0">
                      <Form.Label className="pl-0">Description</Form.Label>
                    </Col>
                    <Col xs={8}>
                      <Form.Group as={Row} controlId="formGridDescription">
                        <Form.Control
                          required
                          type="text"
                          placeholder="Add description here"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mx-0">
                    <Col xs={4} className="pl-0">
                      <Form.Label className="pl-0">First Bill On</Form.Label>
                    </Col>
                    <Col xs={8}>
                      <Form.Group as={Row} controlId="formGridFirstBill">
                        <Form.Control
                          required
                          type="date"
                          placeholder="Choose Billing Cycle"
                          value={firstBillDate}
                          onChange={(e) => setFirstBillDate(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mx-0">
                    <Col xs={4} className="pl-0">
                      <Form.Label className="pl-0">Billing Cycle</Form.Label>
                    </Col>
                    <Col xs={2}>
                      <Form.Group as={Row} controlId="formGridCycle">
                        <Form.Control
                          required
                          as="select"
                          defaultValue="1"
                          value={cycleNum}
                          onChange={(e) => setCycleNum(e.target.value)}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="5">5</option>
                          <option value="30">30</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group as={Row} controlId="formGridCycle">
                        <Form.Control
                          required
                          as="select"
                          defaultValue="Month"
                          value={cycleDesc}
                          onChange={(e) => setCycleDesc(e.target.value)}
                        >
                          <option>Choose Cycle</option>
                          <option value="Days">Day(s)</option>
                          <option value="Weeks">Week(s)</option>
                          <option value="Months">Month(s)</option>
                          <option value="Years">Year(s)</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mx-0">
                    <Col xs={4} className="pl-0">
                      <Form.Label className="pl-0">Subscribed For</Form.Label>
                    </Col>
                    <Col sm={2}>
                      <Form.Group as={Row} controlId="formGridDuration">
                        <Form.Control
                          required
                          as="select"
                          defaultValue="Choose Duration"
                          value={durationNum}
                          onChange={(e) => setDuratonNum(e.target.value)}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="5">5</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group as={Row} controlId="formGridDuration">
                        <Form.Control
                          required
                          as="select"
                          defaultValue="Choose Duration"
                          value={durationDesc}
                          onChange={(e) => setDuratonDesc(e.target.value)}
                        >
                          <option>Choose Duration</option>
                          <option value="Days">Day(s)</option>
                          <option value="Weeks">Week(s)</option>
                          <option value="Months">Month(s)</option>
                          <option value="Years">Year(s)</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mx-0">
                    <Col xs={4} className="pl-0">
                      <Form.Label className="pl-0">Remind Me</Form.Label>
                    </Col>
                    <Col xs={2}>
                      <Form.Group as={Row} controlId="formGridRemindMe">
                        <Form.Control
                          required
                          as="select"
                          defaultValue="Remind me before"
                          value={remindOnNum}
                          onChange={(e) => setRemindOnNum(e.target.value)}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="5">5</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group as={Row} controlId="formGridRemindMe">
                        <Form.Control
                          required
                          as="select"
                          defaultValue="Remind me before"
                          value={remindOnDesc}
                          onChange={(e) => setRemindOnDesc(e.target.value)}
                        >
                          <option>Remind me before</option>
                          <option value="Days">Day(s)</option>
                          <option value="Weeks">Week(s)</option>
                          <option value="Months">Month(s)</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mx-0">
                    <Col xs={4} className="pl-0">
                      <Form.Label className="pl-0">Currency</Form.Label>
                    </Col>
                    <Col xs={8}>
                      <Form.Group as={Row} controlId="formGridRemindMe">
                        <Form.Control
                          required
                          as="select"
                          defaultValue="INR"
                          value={currency}
                          onChange={(e) => setCurrency(e.target.value)}
                        >
                          <option>Choose Currency</option>
                          {AllCurrencies.map((curr, index) => {
                            return (
                              <option value={curr.cc} key={index}>
                                {curr.symbol} - {curr.name}
                              </option>
                            );
                          })}
                        </Form.Control>
                      </Form.Group>
                    </Col>
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
