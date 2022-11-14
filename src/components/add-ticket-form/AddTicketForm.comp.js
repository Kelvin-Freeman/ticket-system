import React from 'react'
import {Form, Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'

import './add-ticket-form.style.css'


export const AddTicketForm = ({handleOnSubmit, handleOnChange, frmDataError, frmDt}) => {

    console.log(frmDt)
    return(
        <div className="">
           <Form className="mt-3 jtron add-new-ticket bg-light" autoComplete="off" onSubmit={handleOnSubmit}>
            <h1 className="text-center">New Ticket</h1>
            <hr />
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Subject</Form.Label>
                        <Col sm={9}>
                        <Form.Control
                        name="subject"
                        value={frmDt.subject}
                        // minLength="3"
                        maxLength="50"
                        onChange={handleOnChange}
                        placeholder="Subject"
                        required
                        />
                        <Form.Text className="text-danger">
                            {frmDataError.subject && "Subject is required"}
                        </Form.Text>
                        </Col>
                        <br />
                        <br />
                        
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Issue Found</Form.Label>

                        <Col sm={9}>
                        <Form.Control
                        type="date" 
                        name="issueDate"
                        value={frmDt.issueDate}
                        onChange={handleOnChange}
                        required
                        /></Col>
                     </Form.Group>   

                        <br />
                       

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        as="textarea" 
                        name="detail"
                        rows="5"
                        value={frmDt.detail}
                        onChange={handleOnChange}
                        required
                        />
                    </Form.Group>
                    <br />
                    
                    <div className="d-grid gap-4">
                    <Button type="submit" variant="info" size="lg">Submit</Button>
                    </div>
                </Form>
                
        </div>
    )
}

AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired,
    frmDataError: PropTypes.object.isRequired,
}