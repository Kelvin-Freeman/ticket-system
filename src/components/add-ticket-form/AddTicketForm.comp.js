import React from 'react'
import {Form, Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'


export const AddTicketForm = ({handleOnSubmit, handleOnChange, frmDt}) => {
    return(
        <div className="jtron">
           <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Subject</Form.Label>
                        <Col sm={9}>
                        <Form.Control
                        name="subject"
                        value={frmDt.subject}
                        onChange={handleOnChange}
                        placeholder="Subject"
                        required
                        /></Col>
                        <br />
                        <br />
                        
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Issue Found</Form.Label>

                        <Col sm={9}>
                        <Form.Control
                        type="date" 
                        name="issue date"
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
                    <Button variant="info" size="lg">Login</Button>
                    </div>
                </Form>
                
        </div>
    )
}