import { useState, useRef } from "react";
import { Form, Row, Col, FormControl, Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

const DashboardHeader = (props) => {
  const [searchText, setSearchText] = useState("");
  const searchRef = useRef();

  const onSearch = (event) => {
    event.preventDefault();
    setSearchText(searchRef.current.value);
    console.log("searching on >>", searchRef.current.value);
  };

  return (
    <Form onSubmit={onSearch}>
      <Row className="align-items-center">
        <Col>
          {/* <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Search
          </Form.Label> */}
          <InputGroup className="ma-1">
            <InputGroup.Text>$</InputGroup.Text>
            <FormControl
              id="inlineFormInputGroup"
              placeholder="Search your Subscriptions"
              ref={searchRef}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default DashboardHeader;
