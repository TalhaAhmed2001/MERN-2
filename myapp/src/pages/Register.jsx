import React from 'react'
import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData;

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
          <FaUser />Register
        </h1>
        <p>
          Please create an account
        </p>
      </section>

      <section>
        <form onSubmit={onSubmit}>
          <div className="form-group">

            <input type="text" className="form-control" id='name'
              name='name' value={name} placeholder='Enter ur name' onChange={onChange} />

            <input type="email" className="form-control" id='email'
              name='email' value={email} placeholder='Enter ur email' onChange={onChange} />

            <input type="password" className="form-control" id='password'
              name='password' value={password} placeholder='Enter ur password' onChange={onChange} />

            <input type="password" className="form-control" id='password'
              name='password2' value={password2} placeholder='confirm password' onChange={onChange} />

          </div>
          <div>
            <button type='submit' className='btn btn-primary'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register