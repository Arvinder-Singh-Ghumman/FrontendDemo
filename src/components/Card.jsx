import Arrow from '../assets/long-arrow-right.png';

const Card = (props) => {
  return(
  <div className="card">
  <img src={props.image} alt={props.title} className='cardImage' />
    <h2>{props.title}</h2>
    <p>{props.content}</p>
    <span>Read More <img src={Arrow} alt=' ' /></span>
  </div>
  )
}

export default Card;