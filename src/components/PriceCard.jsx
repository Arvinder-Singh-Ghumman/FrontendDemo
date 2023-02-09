import check from "../assets/check.png";
import uncheck from "../assets/times.png";

const PriceCard = ({ price, checklist, title }) => {
  return (
    <div className="priceCard">
      <h1 className="priceCardTitle">{title}</h1>
      {title==="Basic"&& <span className="bestChoice">Best Choice</span>}
      <div className="bar"></div>
      <h1 className="priceofcard">{price}</h1>
      <p>per month</p>
      <div className="perks">
        <img
          src={checklist[0] === 1 ? check : uncheck}
          alt={checklist[0] === 1 ? check : uncheck}
        />
        <span className={checklist[0] === 0 && "perkDisabled" }>Free updates</span>
      </div>
      <div className="perks">
        <img
          src={checklist[1] === 1 ? check : uncheck}
          alt={checklist[1] === 1 ? check : uncheck}
        />
        <span className={checklist[1] === 0 && "perkDisabled" }>Custom Domain</span>
      </div>
      <div className="perks">
        <img
          src={checklist[2] === 1 ? check : uncheck}
          alt={checklist[2] === 1 ? check : uncheck}
        />
        <span className={checklist[2] === 0 && "perkDisabled" }>Outstanding support</span>
      </div>
      <div className="perks">
        <img
          src={checklist[3] === 1 ? check : uncheck}
          alt={checklist[3] === 1 ? check : uncheck}
        />
        <span className={checklist[3] === 0 && "perkDisabled" }>Unlimited storage</span>
      </div>
      <div className="perks">
        <img
          src={checklist[4] === 1 ? check : uncheck}
          alt={checklist[4] === 1 ? check : uncheck}
        />
        <span className={checklist[4] === 0 && "perkDisabled" }>Build responsive website</span>
      </div>
      <button className="buttonFill">Getting Started</button>
    </div>
  );
};

export default PriceCard;
