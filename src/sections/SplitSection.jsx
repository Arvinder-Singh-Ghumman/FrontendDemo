import Hero from '../assets/Img.png';
import HeroArrow from '../assets/long-arrow-right.png';

const SplitSection = () => {
  return (
    <div className="Hero">
    <div className="heroLeft"  style={{width:"50%"}}>
        <img src={Hero} alt="Illustration" />
      </div>
      <div className="heroRight" style={{width:"30%",textAlign:"left"}}>
        <h1>
          Realize your <br /> full potential
        </h1>
        <p>
          We help our clients make realize <br />
          their most important business goals.
        </p>
        <div className="heroButtons">
          <button className="buttonFill">Contact us</button>
          <button className="buttonnonFill">
            order similar <img src={HeroArrow} alt=" " />{" "}
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default SplitSection;
