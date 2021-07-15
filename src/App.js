import { BrowserRouter, Route, Link } from "react-router-dom";
import SubscriptionList from "./Components/SubscriptionsList";
import AddNewSubscription from "./Components/AddNewSubscription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCompass,
  faClock,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Components/Sidebar";
import { Card, Image } from "react-bootstrap";
import SubblyLogo from "./images/Subbly_logo.png";
import "./styles.css";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>Your Dashboard</div>,
    main: () => <SubscriptionList />,
  },
  {
    path: "/add-new-subscription",
    sidebar: () => <div>You can add new Subscription from here</div>,
    main: () => <AddNewSubscription />,
  },
  {
    path: "/settings",
    sidebar: () => <div>Your Profile settings</div>,
    main: () => <h2>Settings</h2>,
  },
];

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <div className="sidebar-panel">
          <Card className="logo-card">
            <Card.Body className="mx-3" style={{ padding: "0.75rem 1rem" }}>
              <Card.Text>
                <Image src={SubblyLogo} rounded width="30" />
                <h3 className="logo-text">Subbly</h3>
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="navbar-container">
            <ul className="navbar-links px-10 py-10">
              <li className="pt-3 pb-3">
                <Link to="/add-new-subscription" className="add-new">
                  Add New Subscription
                </Link>
              </li>
              <li className="pt-3 pb-3">
                <FontAwesomeIcon icon={faCompass} size="lg" />
                <FontAwesomeIcon className="mr-4" icon={["fas", "Compass"]} />
                <Link className="pl-4" to="/">
                  Dashboard
                </Link>
              </li>
              <li className="pt-3 pb-3">
                <FontAwesomeIcon icon={faClock} size="lg" />
                <Link className="pl-4" to="/">
                  Archived
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="navbar-container"
            style={{
              minHeight: "100%",
              backgroundImage: "linear-gradient(#3B3185, #3E348C)",
            }}
          >
            <ul className="navbar-links px-10 py-10">
              <li className="pt-3 pb-3">
                <FontAwesomeIcon icon={faUser} size="lg" />
                <Link to="/" className="pl-4">
                  Account
                </Link>
              </li>
              <li className="pt-3 pb-3">
                <FontAwesomeIcon icon={faCog} size="lg" />
                <Link className="pl-4" to="/settings">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ flex: 2.5 }}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
        <div style={{ flex: 1, padding: "10px", backgroundColor: "#e4e4e4" }}>
          <Sidebar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
