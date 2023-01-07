import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'
import SignUp from '../components/SignUp/SignUp'
import './styles/login.css'
const Login = () => {

    const navigate= useNavigate()
    const [isLogged, setIsLogged] = useState()
    const [signup, setSignup] = useState(false)
    const {handleSubmit,register,reset} = useForm()

    const submit=(data)=>{
       const URL= 'https://e-commerce-api.academlo.tech/api/v1/users/login'
        axios.post(URL,data)
        .then(res=>{
            console.log(res)
            localStorage.setItem('token', res.data.data.token)
            setIsLogged(true)
            navigate('/login')
           
        })
        .catch(err=>console.log(err))

        reset({
            email:"",
            password:""
        })
    }
    useEffect(() => {
      const condition = localStorage.getItem('token') ? true : false
      setIsLogged(condition)
      
    }, [])
 

    const handleLogout =()=>{
      localStorage.removeItem('token')
      setIsLogged(false)
    }


    if(isLogged===true){
      return (
        <div className='container-user-logged'>
          <img src="./user.png" className='img-user-logged' alt="" />
        <h4 className='prueba'>Ray Cardenas</h4>
        <button className='btn-logout-user' onClick={handleLogout}>Logout</button>
        </div>
      )
    }
  const handleSignUp=()=>{
    setSignup(!signup)
  }
  if(signup===true){
    return(
      <SignUp handleSignUp={handleSignUp}/>
    )
  }
  return (
    <div className='body'>
      
    <div className="main">
      <div className="title_login">
        <h2>Welcome! Enter your email and password to continue
</h2>
      </div>
     <div className="container_testdata">
      <div className="test_data">
        <h5>Test Data</h5>
        </div>
        <div className="example_email">
        <i className="fa-regular fa-envelope"></i>
          <h5>raykevin_14@hotmail.com</h5>
          <i className="fa-solid fa-lock"></i>
          <h5>vivaeldota123</h5>
        </div>
        </div>
    <div className='container_form'>
    <form onSubmit={handleSubmit(submit)}>
      <div className='form-input'>
        <label htmlFor="email">Email</label>
        <input type="text" id='email' {...register("email")}/>
      </div>
      <div className='form-input'>
        <label htmlFor="password">Password</label>
        <input type="password" id='password' {...register("password")}/>
      </div>
      <div className="button-container-login">
      <button className='button-login'>Login</button>
      </div> 
    </form>
</div>
<div className="container-signup">
      <h5>Don't have an account? <span onClick={handleSignUp}>Sign up</span></h5>
      </div>
</div>

</div>
  )
}

export default Login