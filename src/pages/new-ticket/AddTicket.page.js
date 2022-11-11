import React, {useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp'


const initialFrmDt = {
    subject: '',
    issueDate: '',
    detail: ''
}
export const AddTicket = () => {

    const [frmData, setFrmData] = useState(initialFrmDt)

    const handleOnChange = e =>{
        const {name, value} = e.target;

            // This creates our state. The three dots represent a spread operator
        setFrmData({
         ...initialFrmDt, 
         [name]: value, 
        })
       
    }

    return(
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="New Ticket" />
                </Col>
            </Row>

            <Row>
                <Col>
                <AddTicketForm  handleOnChange={handleOnChange} frmDt={frmData} />
                </Col>
            </Row>
        </Container>
    )
}

