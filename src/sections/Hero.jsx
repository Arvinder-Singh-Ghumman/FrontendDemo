import HeroPic from '../assets/Image.png';
import HeroArrow from '../assets/long-arrow-right.png';

const Hero = () => {
  return(
    <div className="Hero">
      <div className='heroLeft'>
        <h1>Realize your <br /> full potential</h1>
        <p>We help our clients make realize <br />their most important business goals.</p>
        <div className='heroButtons'>
          <button className='buttonFill'>Contact us</button>
          <button className='buttonnonFill'>order similar <img src={HeroArrow} alt=' ' /> </button>
        </div>
      </div>
      <div className='heroRight'>
        <img src={HeroPic} alt="Illustration" />
      </div>
    </div>
  )
}

export default Hero;