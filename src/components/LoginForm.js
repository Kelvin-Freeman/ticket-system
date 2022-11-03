// import { Component } from 'react';
// import { logIn } from '../utilities/users-service';

// //? SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)

// export default class LogInForm extends Component {
//     state = {
//         email: '',
//         password: ''
//       };

//       handleChange = (evt) => {
//         this.setState({[evt.target.name]: evt.target.value, error: ''})
//       }

//       handleSubmit = async (evt) => {
//         evt.preventDefault()
//         // alert(JSON.stringify(this.state));
//         try {
//           // create the form data to send to the backend
//             const formData = {
//               email: this.state.email,
//               password: this.state.password
//             }
//             // pass the form data to the sugnup function
//             const user = await logIn(formData)
//             this.props.setUser(user);
//             console.log(user)
//         }catch {
//           // If we have an error
//           this.setState({error: 'Sign Up Failed - Try Again'})
//         }
//       }

//       render() {
//         const disable = this.state.password !== this.state.confirm;
//         return (
//           <div>
//             <div className="form-container">
//               <form autoComplete="off" onSubmit={this.handleSubmit}>
//                 <label>Email</label>
//                 <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
//                 <label>Password</label>
//                 <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
//                 <button type="submit" disabled={disable}>LOG IN</button>
//               </form>
//             </div>
//             <p className="error-message">&nbsp;{this.state.error}</p>
//           </div>
//         );
//       }
//   }
// //   export default LogInForm;

import { useState } from 'react';
import * as usersService from '../utilities/users-service';

export default function LoginForm({ setUser }) {
const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});
const [error, setError] = useState('');

function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

async function handleSubmit(evt) {
  // Prevent form from being submitted to the server
  evt.preventDefault();
  try {
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    console.log(credentials)
    const user = await usersService.login(credentials);

    setUser(user);
  } catch {
    setError('Log In Failed - Try Again');
  }
}

return (
  <div>
    <h1>Login!</h1>
    <div className="form-container" onSubmit={handleSubmit}>
      <form autoComplete="off" >
        <label>Email</label>
        <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
        <label>Password</label>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        <button type="submit">LOG IN</button>
      </form>
    </div>
    <p className="error-message">&nbsp;{error}</p>
  </div>
);
}