import React,{useState} from 'react'

const Login = () => {
  const [credentials, setCredentials] = useState({email : "" ,password : "" })
    
        const handleSubmit=async(e)=>{
           e.preventDefault()
           const response = await fetch("http://localhost:5000/api/loginuser",{
            method : "post",
            headers :{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ email:credentials.email , password :credentials.password})
           })
    
           let json = await response.json()
           console.log(json)
    
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
     
      <div>
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" name="email"  value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" name="password"  value={credentials.password} onChange={onChange} class="form-control" />
      </div>
      
    
      <button type="submit" class="btn btn-primary">Submit</button>
     
    </form>
            </div>
        </>
      
    
    
   
  )
}

export default Login