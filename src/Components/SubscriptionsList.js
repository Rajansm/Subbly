import Subscription from "./Subscription";

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

const SubscriptionList = (props) => {
  return dummyList.map((subs) => (
    <Subscription
      name={subs.name}
      description={subs.description}
      category={subs.category}
    />
  ));
};

export default SubscriptionList;
