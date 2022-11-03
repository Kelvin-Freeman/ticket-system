// import {  Link  } from "react-router-dom";
// // Using the import below, we can call any exported function using: userService.someMethod()
// import * as userService from '../utilities/users-service';


// const NavBar = ({user, setUser}) => {

// const handleLogOut = () => {
//   userService.logOut()
//   setUser(null)
// }

//   return (
//     <nav>
//       <NavLink to="/orders" className="some-class">Order History</NavLink>{" "} &nbsp; | &nbsp;
//       <NavLink to="/orders/new">New Order</NavLink>&nbsp; | &nbsp;
//       <span>Welcome, {user.name}</span>&nbsp; | &nbsp;

//       <NavLink to="" onClick={handleLogOut}>Log Out</NavLink>
//       </nav>
//   );
// };
// export default NavBar;


import { Link } from 'react-router-dom'
import * as userService from '../utilities/users-service'

const NavBar = ({user, setUser}) => {
    const handleLogOut = () => {
        userService.logOut()
        setUser(null)
    }
    return(
    <nav>
        <Link to='/orders'>Order History</Link> {" "}|{" "}
        <Link to='/orders/new'>New Order</Link>
        {user ? <span>  Welcome, {user.name}</span> : ''}
        {user ? <Link to='' onClick={handleLogOut}>&nbsp;&nbsp;Log Out</Link> : ''}
    </nav>
    )
}

export default NavBar