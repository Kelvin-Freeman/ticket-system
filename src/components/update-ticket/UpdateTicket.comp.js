import React from 'react'
import PropTypes from 'prop-types'
import {Form, Button} from 'react-bootstrap'

export const UpdateTicket = ({msg, handleOnChange, handleOnSubmit}) => {
    return(
        <Form onSubmit={handleOnSubmit}>
            <Form.Label>Reply</Form.Label>
            <br />
            <Form.Text>Reply or update your ticket here</Form.Text>
            <Form.Control 
            value={msg}
            onChange={handleOnChange}
            as='textarea' row='5' name='detail'/>
            <div className='text-end mt-3 mb-3'>
               <Button variant='info' type='submit'>Reply</Button> 
            </div>
            
        </Form>
    )
}

UpdateTicket.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired,
}