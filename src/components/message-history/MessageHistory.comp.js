import React from 'react'
import PropTypes from 'prop-types'

export const MessageHistory = ({msg}) => {
    if (!msg) return null;

    return msg.map((row, i)=> (
        <div key={i} className='message-history'>
            <div className='send'>
                <div className='sender'>{row.messageBy}</div>
                <div className='date'>{row.date}</div>
            </div>
            <div className='message'>{row.message}</div>
        </div>
    ))
}

MessageHistory.propTypes = {
    msg: PropTypes.array.isRequired
}