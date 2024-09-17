import React from 'react'
import './signup.css'

const Signup = () => {
  return (
    <div className='addUser'>
    <h3>Sign Up</h3>
    <form className='addUserForm'>
        <div className='inputGroup'>
                    <label htmlFor='Name'>Name:</label>
                    <input
                    type='text'
                    id='Name'
                    autoComplete='off'
                    placeholder='Enter Your Name'
                    />
                    <label htmlFor='Email'>Email:</label>
                    <input
                    type='Email'
                    id='Email'
                    autoComplete='off'
                    placeholder='Enter Your Email'
                    />
                    <label htmlFor='Name'>Password:</label>
                    <input
                    type='Password'
                    id='Password'
                    autoComplete='off'
                    placeholder='Enter Password'
                    />
                    <button type="submit" class="btn btn-success">
                        Sign Up
                    </button>
        </div>
    </form>
    <div className='login'>
        <p>Already have an account ?</p>
        <button type="submit" class="btn btn-primary">
            Login
        </button>
    </div>
</div>

  )
}

export default Signup