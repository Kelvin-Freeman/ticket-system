import React from 'react'
import {Form, Button} from 'react-bootstrap'

export const UpdateTicket = () => {
    return(
        <Form>
            <Form.Label>Reply</Form.Label>
            <br />
            <Form.Text>Reply or update your ticket here</Form.Text>
            <Form.Control 
            as='textarea'
            row='5'
            name='detail'/>
            <div className='text-end mt-3 mb-3'>
               <Button variant='info' type='submit'>Reply</Button> 
            </div>
            
        </Form>
    )
}