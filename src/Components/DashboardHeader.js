import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Form, Row, Col } from "react-bootstrap";
import "./DashboardHeaderStyle.css";

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
      <Row className="align-items-center" style={{ paddingLeft: "2px" }}>
        <Col>
          <div className="form-group has-search mx-3 mt-3">
            <FontAwesomeIcon
              icon={faSearch}
              rotation={90}
              className="form-control-feedback"
            />
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroup"
              placeholder="Search your Subscriptions"
              ref={searchRef}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={{ paddingLeft: "2rem !important" }}
            />
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default DashboardHeader;
