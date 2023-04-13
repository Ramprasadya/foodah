import React from 'react'


const Home = () => {
  return (
    <>
  <div className="container my-4">
  <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="container w-100">
        <select className='m-2 h-100 w-100 bg-success '>
            {Array.from(Array(6) ,(e,i)=>{
                return(
                    <option key={i+1} value={i+1} >{i+1}</option>
                )
            })}
        </select>
    </div>
    
  </div>
</div>
  </div>

    </>

  )
}

export default Home