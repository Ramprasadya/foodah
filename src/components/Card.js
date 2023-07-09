import React from 'react'

const Card = () => {
  return (
    <div className="container my-4">
    <div className="card" style={{width: "18rem"}}>
    <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div className="container w-100">
          <select className='m-2 h-100 bg-success rounded'>
              {Array.from(Array(6) ,(e,i)=>{
                  return(
                      <option key={i+1} value={i+1} >{i+1}</option>
                  )
              })}
          </select>
          <select  className='h-100 bg-success rounded'  >
             <option value="half">Half</option>
             <option value="Full">Full</option>
          </select>
          <div className=" mx-2 h-100 d-inline fs-5" >
              Total Price
          </div>
      </div>
      
    </div>
  </div>
    </div>
  )
}

export default Card