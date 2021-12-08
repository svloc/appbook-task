import React,{useState} from "react";
import Swal from "sweetalert2";

export default function Login() {

  const [email,setEmail]= useState('')
  const [password, setPassword] = useState('')
  const [feedbackText, setFeedbackText] = React.useState('');
  const [signView,setSignView]=useState(false)


  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }

  const handlePassword=(e)=>{
    setPassword(e.target.value)
  }

  const handleSubmit=(e)=>{
   e.preventDefault();
   if(email===''){
    setFeedbackText('Please fill Username');
    return;
   }

   if(password===''){
    setFeedbackText('Please fill Password');
    return;
   }
   
   var body = {
    email: email,
    password: password
   }

   fetch('https://registertest.free.beeceptor.com/init', {
    method: 'post',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
})
.then(response => response.json())
.then(data => {
console.log(data)
 Swal.fire(
    'Welcome',
    'login Successful',
    'success'
    )

    
})



  }

  return (
    <>
    <div className='vh-100 d-flex justify-content-center align-items-center'>
       <form className="input-container d-flex m-auto justify-content-center align-items-center">
          <h1 className="heading">{signView ? "SIGN IN" :"LOGIN"}</h1>
         <input className='form-input w-100 ' type="text" placeholder='Enter Your Email' 
          name='email ' onChange={handleEmail} value={email}/>
        <input className='form-input w-100 ' type="text" placeholder='Enter Your Password' 
          name="password" onChange={handlePassword} value={password}/>
      <button className="btn border-radius-25"  onClick={handleSubmit}>{signView ? "Sign In": "Login"}</button>
      <p className='text-red'>{feedbackText}</p>

      <div className='d-flex justify-content-between w-100 footer-login'>
         <a className='cursor-pointer'>Forgot Password?</a>
         <a className='cursor-pointer' onClick={()=>setSignView(!signView)}>{signView ?"Login?" :"Sign In?"}</a>
       </div> 

      </form>
      </div>
    </>
  );
}
