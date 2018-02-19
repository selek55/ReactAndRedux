import React from 'react'

export const HomeView = () => (
  <div className='container'>
    <div className='row justify-content-center'>
      <div className='col-4'>
        <form>
          <div className='form-group'>
            <label>Email address</label>
            <input type='email' className='form-control' placeholder='Enter email' />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input type='password' className='form-control' placeholder='Password' />
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </div>
  </div>
)

export default HomeView
