
import React from 'react'
import './App.css';
import {DefaultLayout} from '../../Ticket-System/src/layout/DefaultLayout'
// import {Dashboard} from './pages/dashboard/Dashboard.page'
// import { Entry } from  '../../Ticket-System/src/pages/entry/Entry.page'
// import { AddTicket } from './pages/new-ticket/AddTicket.page';
// import { TicketLists } from './pages/ticket-list/TicketLists.page';
import {Ticket} from '../src/pages/ticket/Ticket.page'

function App() {
  
  return (
   <div className="App">
    {/* <Entry /> */}
    <DefaultLayout>
      
      {/* <Dashboard /> */}
      {/* <AddTicket /> */}
      {/* <TicketLists /> */}
      <Ticket />
    </DefaultLayout>
    </div>
  );
}

export default App;
