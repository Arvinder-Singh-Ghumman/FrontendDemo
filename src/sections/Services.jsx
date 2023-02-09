import Card from "../components/Card";
import market from "../assets/file-invoice-dollar.png";
import finance from "../assets/file-invoice-dollar.png";
import audit from "../assets/usd-circle.png";

const Services = () => {
  return (
    <div className="Services">
      <Card
        title="Market Analysis"
        content="Bring to the table win-win survival strategies to ensure proactive"
        image={market}
      />
      <Card
        title="Audit & Evaluation"
        content="Nibh vel velit auctor aliqunean sollicitudinlorem bibendum auci"
        image={audit}
      />
      <Card
        title="Corporate finance"
        content="Leverage agile frameworks to provide a robust synopsis"
        image={finance}
      />
    </div>
  );
};

export default Services;
