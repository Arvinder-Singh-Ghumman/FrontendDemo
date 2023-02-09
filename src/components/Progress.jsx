 const Progress = ({percent, title}) => {
  return(
    <>
      <span className="skillLabel">
          <h2>{title}</h2>
          <h2 className='percent'>{percent}</h2>
      </span>
      <div className="progressBar"><div style={{backgroundColor:"#6852ED",width:percent,height:"100%"}}></div></div>
    </>
  )
}

export default Progress;