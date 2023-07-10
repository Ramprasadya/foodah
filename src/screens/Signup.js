import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Signup = () => {
   
    let navigate = useNavigate()

    const [credentials, setCredentials] = useState({name:"" ,email : "" ,password : "" , location :""})

    const handleSubmit=async(e)=>{
       e.preventDefault()
       const response = await fetch("http://localhost:5000/api/createuser",{
        method : "post",
        headers :{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({name : credentials.name , email:credentials.email , password :credentials.password ,location : credentials.location })
       })

       let json = await response.json()
       console.log(json)
       if(json.success){
        navigate("/login")
       }

       if(!json.success){
    alert("Enter correct credentials")
       }

       

    }

    const onChange=(e)=>{
      setCredentials({...credentials , [e.target.name]:e.target.value})
    }

  return (
    <>
        <div className="container my-4">
        <form onSubmit={handleSubmit} >
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" name='name' value={credentials.name} onChange={onChange}  aria-describedby="emailHelp"/>

  </div>
  <div>
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name="email"  value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="password"  value={credentials.password} onChange={onChange} class="form-control" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Location</label>
    <input type="text" name= "location"  value={credentials.location} onChange={onChange} class="form-control" />
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
  <Link className="btn btn-danger mx-4" to="/login">Already a user</Link>
</form>
        </div>
    </>
  )
}

export default Signup