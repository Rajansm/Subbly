import Subscription from "./Subscription";
import DashboardHeader from "./DashboardHeader";
import { Container } from "react-bootstrap";

const dummyList = [
  {
    name: "Netflix",
    description: "For watching Netflix movies",
    startDate: "06-07-2021",
    category: "Entertainment",
    cycle: "Monthly",
    duration: "Forever",
    remindMe: "Monthly",
    currency: "INR",
  },
  {
    name: "Amazon Prime",
    description: "For watching Amazon Prime",
    startDate: "01-01-2021",
    category: "Entertainment",
    cycle: "Yearly",
    duration: "Forever",
    remindMe: "Yearly",
    currency: "INR",
  },
  {
    name: "Apple Music",
    description: "For listening to Songs",
    startDate: "13-06-2021",
    category: "Music",
    cycle: "Monthly",
    duration: "Forever",
    remindMe: "Monthly",
    currency: "INR",
  },
  {
    name: "iCloud",
    description: "For storing Data",
    startDate: "14-02-2021",
    category: "Utility",
    cycle: "Monthly",
    duration: "Forever",
    remindMe: "Monthly",
    currency: "INR",
  },
];

const subsList = dummyList.map((subs) => (
  <Subscription
    key={subs.name}
    name={subs.name}
    description={subs.description}
    category={subs.category}
    firstBill={subs.firstBill}
    cycle={subs.cycle}
    duration={subs.duration}
    remindMe={subs.remindMe}
    currency={subs.currency}
  />
));

const SubscriptionList = (props) => {
  return (
    <Container className="px-0">
      <DashboardHeader />
      <div
        className="pt-2"
        style={{
          backgroundImage: "linear-gradient(rgb(245 245 245), #ffffff)",
        }}
      >
        <h2 className="mx-5 mb-2 mt-4" style={{ fontFamily: "Secular One" }}>
          All Subscriptions
        </h2>
        {subsList}
      </div>
    </Container>
  );
};

export default SubscriptionList;
