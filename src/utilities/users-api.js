

// ^ This is the base path of the Express route we'll define
const BASE_URL = '/api/users'
const LOGIN_URL = '/api/users/login'


export async function signUp(userData) {
    console.log(userData)
      // ^ Fetch uses an options object as a second arg to make requests
     //  ^ other than basic GET requests, include data, headers, etc.
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        // ^ Fetch requires data payloads to be stringified
        //  ^ and assigned to a body property on the options object
        body: JSON.stringify(userData)
    })
    console.log(res)
     // ^ Check if request was successful
    if (res.ok) {
        return res.json()
    // ^ res.json() will resolve to the JWT
    } else {
        // ^ 'throw is a keyword to create custom error messages 
        throw new Error('Invalid Sign Up')
    }
}

// ! IMPORTANT: The fetch method will not raise an error unless there's a network failure. This is why we need to check the res.ok property to see if the server returned a successful response (status code in the 200s).



export async function login(userData) {
    console.log(userData)
    const res = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })
    console.log(res)

    if (res.ok) {
        return res.json()
    } else {
        throw new Error(`We're having trouble logging you in. Please try again.`)
    }
} 