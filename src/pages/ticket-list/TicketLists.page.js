import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import {SearchForm} from '../../../src/components/search-form/SearchForm.comp'
import { TicketTable } from '../../../src/components/ticket-table/TicketTable.comp'
import tickets from '../../../src/assets/data/dummy-tickets.json'

export const TicketLists = () => {
    const [str, setStr] = useState('')

    useEffect(() => {}, [str]);

    const handleOnChange = e =>{
        setStr(e.target.value)
    }
    return(
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="Ticket Lists" />
                </Col>
            </Row>
            <Row className='mt-4'>
            <Col>
            <Button variant="info">Add New Ticket</Button>
            </Col>
            <Col className="text-right">
               <SearchForm handleOnChange={handleOnChange} str={str} />
                </Col>
           </Row>
           <hr /> 
           <Row>
                <Col>
                <TicketTable tickets={tickets} />
                </Col>
            </Row>
        </Container>
    )
}