import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import tickets from '../../assets/data/dummy-tickets.json'
import { MessageHistory } from '../../components/message-history/MessageHistory.comp'

const ticket = tickets[0]

export const Ticket = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page='Ticket' />
                </Col>
            </Row>
            <Row>
                <Col className='text-weight-bolder text-secondary'>
                    <div className='subject'>Subject: {ticket.subject}</div>
                    <div className='date'>Date: {ticket.addedAt}</div>
                    <div className='status'>Status: {ticket.status}</div>
                </Col>
                <Col className='text-end'>
                    <Button variant='outline-danger'>Close Ticket</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <MessageHistory msg={ticket.history}/>
                </Col>
            </Row>
        </Container>
    )
}