import PriceCard from "../components/PriceCard";


const Price = () => {
  return(
    <div className="Price">
      <PriceCard title="Basic" price="15$" checklist={[1,1,1,0,0]} />
      <PriceCard title="Standard" price="37$" checklist={[1,1,1,1,0]} />
      <PriceCard title="Advance" price="42$" checklist={[1,1,1,1,1]} />
    </div>
  )
}

export default Price;