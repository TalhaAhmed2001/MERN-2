import React from 'react'
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa';

function Login() {
  const [formData, setFormData] = useState({
  
    email: '',
    password: ''
  })

  const {  email, password} = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    })
    )
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt />Login
        </h1>
        <p>
          Login and do stuff
        </p>
      </section>

      <section>
        <form onSubmit={onSubmit}>
          <div className="form-group">

            
            <input type="email" className="form-control" id='email'
              name='email' value={email} placeholder='Enter ur email' onChange={onChange} />

            <input type="password" className="form-control" id='password'
              name='password' value={password} placeholder='Enter ur password' onChange={onChange} />

            
          </div>
          <div>
            <button type='submit' className='btn btn-primary'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login