import React from 'react'
import {Table} from 'react-bootstrap'

export const TicketTable = () => {
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
            <tr>
                <td>1</td>
                <td>ssl issue</td>
                <td>client response pending</td>
                <td>2022-11-10</td>
            </tr>
            <tr>
                <td>1</td>
                <td>ssl issue</td>
                <td>client response pending</td>
                <td>2022-11-10</td>
            </tr>
            <tr>
                <td>1</td>
                <td>ssl issue</td>
                <td>client response pending</td>
                <td>2022-11-10</td>
            </tr>
        </tbody>
    </Table>
    )
}