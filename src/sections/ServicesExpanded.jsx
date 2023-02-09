import Card from "../components/Card";
import market from "../assets/hand-holding-usd.png";
import finance from "../assets/file-invoice-dollar.png";
import audit from "../assets/usd-circle.png";
import sale from "../assets/question-circle.png";

const ServicesExpanded = () => {
  return(
    <div className="ServicesExpanded" id="Blog">
      <div className="col1">
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
      </div>
      <div className="col2">
      <Card
        title="Corporate finance"
        content="Bring to the table win-win survival strategies to ensure proactive"
        image={finance}
      />
      <Card
        title="Sales and trades"
        content="Nibh vel velit auctor aliqunean sollicitudinlorem bibendum auci"
        image={sale}
      />
      </div>
      <div className="col3">
      <h1>Get a solution to your businesses</h1>
      <p>Our consultants help address your most challenging issues by providing strategic, financial, operational, and IT services.</p>
      <button className="buttonFill">All Services</button>
      </div>
    </div>
  )
}

export default ServicesExpanded;