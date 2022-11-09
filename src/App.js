
// import {useState} from 'react'
// import {Routes, Route} from 'react-router-dom'
// import { getUser } from './utilities/users-service';
// import AuthPage from './pages/AuthPage';
// import NewOrderPage from './pages/NewOrderPage';
// import OrderHistoryPage from './pages/OrderHistoryPage';
// import NavBar from './components/NavBar';
import './App.css';
import { Entry } from  '../../Ticket-System/src/pages/entry/Entry.page'

function App() {
  // const [user, setUser] = useState(getUser())
  return (
   <div className="App">
    <Entry />
   </div>
  );
}

export default App;
