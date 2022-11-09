import React from 'react'
import {Login} from '../../../../Ticket-System/src/components/login/Login.comp'
import './entry.style.css'

export const Entry = () => {
    return (
        <div className='entry-page bg-info'>
          <Login />
        </div>
    )
}