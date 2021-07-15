import { BrowserRouter, Route, Link } from "react-router-dom";
import SubscriptionList from "./Components/SubscriptionsList";
import AddNewSubscription from "./Components/AddNewSubscription";
import Sidebar from "./Components/Sidebar";
import { Card, Image } from "react-bootstrap";
import SubblyLogo from "./images/Subbly_logo.png";
import "./styles.css";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>All Subscriptions</div>,
    main: () => <SubscriptionList />,
  },
  {
    path: "/add-new-subscription",
    sidebar: () => <div>You can add new Subscription here</div>,
    main: () => <AddNewSubscription />,
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>Bubblegum sidebar content</div>,
    main: () => <h2>Bubblegum</h2>,
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>Shoelaces sidebar content</div>,
    main: () => <h2>Shoelaces</h2>,
  },
];

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <div className="sidebar-panel">
          <Card className="align-center logo-card mt-4">
            <Image src={SubblyLogo} rounded width="80" />
            <Card.Body>
              <Card.Text>
                <h1 style={{ color: "#ffffff" }}>Subbly</h1>
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
                <Link to="/">All Subscriptions</Link>
              </li>
              <li className="pt-3 pb-3">
                <Link to="/bubblegum">Bubblegum</Link>
              </li>
              <li className="pt-3 pb-3">
                <Link to="/shoelaces">Shoelaces</Link>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ flex: 2.5, padding: "10px" }}>
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
