
import React from 'react'
import {Routes, Route} from "react-router-dom";
import './App.css';
// import { PrivateRoute } from './components/private-route/PrivateRoute.comp';
import {DefaultLayout} from '../../Ticket-System/src/layout/DefaultLayout'
import {Dashboard} from './pages/dashboard/Dashboard.page'
import { Entry } from  '../../Ticket-System/src/pages/entry/Entry.page'
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import { TicketLists } from './pages/ticket-list/TicketLists.page';
import {Ticket} from '../src/pages/ticket/Ticket.page'
import PrivateRoutes from './components/private-route/PrivateRoutes.comp';
// import {AuthPage} from '../src/pages/AuthPage'

function App() {
  
  
  return (
    <div className="App">
    
      
      <DefaultLayout>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/add-ticket" element={<AddTicket />} />
              <Route path="/tickets" element={<TicketLists />} />
              <Route path="/ticket/:tId" element={<Ticket />} />
            </Route>
              <Route path="/" element={<Entry />} />
             </Routes>
        </DefaultLayout>
      
   
    </div>
  );
}


export default App;
