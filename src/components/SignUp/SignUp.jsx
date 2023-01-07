import axios from 'axios'
import { useForm } from 'react-hook-form'
import './styles/signUp.css'
const SignUp = ({handleSignUp}) => {
const {register, handleSubmit, reset}= useForm()
const submitSign = data => {
   
    const URL=`https://e-commerce-api.academlo.tech/api/v1/users`
    axios.post(URL,data)
.then(res=> console.log(res))
.catch(err=>console.log(err))
reset({
      firstName: "",
  lastName: "",
  email: "",
  password: "",
  phone: "",
})
} 

  return (
    
<div className='container_form-signUp'>
    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit(submitSign)}>
    <div className="container-inputs-form">
    <div className='form-input'>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id='firstName' {...register("firstName")}/>
      </div>
      <div className='form-input'>
        <label htmlFor="LastName">Last Name:</label>
        <input type="text" id='LastName' {...register("lastName")}/>
      </div>
      <div className='form-input'>
        <label htmlFor="email">Email:</label>
        <input type="text" id='email' {...register("email")}/>
      </div>
      <div className='form-input'>
        <label htmlFor="password">Password:</label>
        <input type="password" id='password' {...register("password")}/>
      </div>
      <div className='form-input'>
        <label htmlFor="phone">Phone Number:</label>
        <input type="text" id='phone' {...register("phone")}/>
      </div>
      </div>
      <div className="button-container-login">
      <button className='button-login'>Sign Up</button>
      </div> 
      <div className="container-signup">
      <h5>Already have an account? <span onClick={handleSignUp}>Log in</span></h5>
      </div>
    </form>
</div>
    
  )
}

export default SignUp