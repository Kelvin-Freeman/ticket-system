
import React from 'react'
// import {Routes, Route} from 'react-router-dom'
// import { getUser } from './utilities/users-service';
// import AuthPage from './pages/AuthPage';
// import NewOrderPage from './pages/NewOrderPage';
// import OrderHistoryPage from './pages/OrderHistoryPage';
// import NavBar from './components/NavBar';
import './App.css';
// import { Entry } from  '../../Ticket-System/src/pages/entry/Entry.page'
import {DefaultLayout} from '../../Ticket-System/src/layout/DefaultLayout'
import {Dashboard} from './pages/dashboard/Dashboard.page'

function App() {
  
  return (
   <div className="App">
    {/* <Entry /> */}
    <DefaultLayout>
      <Dashboard />
    </DefaultLayout>
    </div>
  );
}

export default App;
