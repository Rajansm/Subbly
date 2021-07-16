import Subscription from "./Subscription";
import DashboardHeader from "./DashboardHeader";
import { Container } from "react-bootstrap";

const SubscriptionList = (props) => {
  const subsList = props.subsList.map((subs, index) => {
    return (
      <Subscription
        key={index}
        name={subs.name}
        displayName={subs.displayName}
        description={subs.description}
        category={subs.category}
        firstBill={subs.firstBill}
        cycle={subs.cycle}
        duration={subs.duration}
        remindMe={subs.remindMe}
        currency={subs.currency}
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
        <p className="page-title">All Subscriptions</p>
        {subsList}
      </div>
    </Container>
  );
};

export default SubscriptionList;
