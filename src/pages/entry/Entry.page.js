
import React, { useState } from 'react'
import {LoginForm} from '../../components/login/Login.comp'
import { ResetPassword } from '../../../../Ticket-System/src/components/password-reset/PasswordReset.comp'
import './entry.style.css'


export const Entry = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [frmLoad, setFrmLoad] = useState('login')

  const handleOnChange = e => {
    const {name, value} = e.target

    switch(name) {
      case 'email':
        setEmail(value)
        break

        case 'password':
        setPassword(value)
        break

        default:
          break;

        
    }
    
  }

  const handleOnSubmit = e => {
    e.preventDefault()

    if(!email ) {
      return alert("Please enter the email!")
    }

    // To call the API to submit the form
    console.log(email);
  }

  const handleOnResetSubmit = e => {
    e.preventDefault()

    if(!email || !password) {
      return alert("Fill in the complete form!")
    }

    // To call the API to submit the form
    console.log(email, password);
  }

  const formSwitcher = (frmType) => {
    setFrmLoad(frmType)
  }

    return (
        <div className='entry-page bg-white'>
          {frmLoad === 'login' && ( <LoginForm
           handleOnChange={handleOnChange} 
          handleOnSubmit={handleOnSubmit}
          formSwitcher={formSwitcher}
          email={email}
          pass={password}
          />)}


            {frmLoad === 'reset' && <ResetPassword
           handleOnChange={handleOnChange} 
           handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}             
          />}        
        </div>
    )
}