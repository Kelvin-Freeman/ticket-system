
import React from 'react'
import {Routes, Route} from "react-router-dom";
import './App.css';
import {DefaultLayout} from '../../Ticket-System/src/layout/DefaultLayout'
import {Dashboard} from './pages/dashboard/Dashboard.page'
import { Entry } from  '../../Ticket-System/src/pages/entry/Entry.page'
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import { TicketLists } from './pages/ticket-list/TicketLists.page';
import {Ticket} from '../src/pages/ticket/Ticket.page'

function App() {
  
  return (
    <div className="App">
    
      <>
      <DefaultLayout>
          <Routes>
            <Route path="/" element={<Entry />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-ticket" element={<AddTicket />} />
            <Route path="/tickets" element={<TicketLists />} />
            <Route path="/ticket/:tid" element={<Ticket />} />
            </Routes>
        </DefaultLayout>
      </>
   
    </div>
  );
}


export default App;
