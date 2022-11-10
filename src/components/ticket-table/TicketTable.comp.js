import React from 'react'
import {Table} from 'react-bootstrap'

export const TicketTable = ({tickets}) => {
    return(<Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Subjects</th>
                <th>Status</th>
                <th>Opened</th>
            </tr>
        </thead>
        <tbody>
            {tickets.length ? (
                tickets.map((row, i) => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.subject}</td>
                        <td>{row.status}</td>
                        <td>{row.addedAt}</td>
                    </tr>
                )) 
            )  : (
                <tr>
                    <td>No ticket to show</td>
                </tr>
            )}
        </tbody>
    </Table>
    )
}