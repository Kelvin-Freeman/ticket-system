

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