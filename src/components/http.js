import axios from 'axios'

export const http = axios.create({
 
  baseURL: 'https://server-cli-api.herokuapp.com/api/',
  headers: { 
    'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZGM0ZjRmNTNkMzZiZjhiYjNkODA1ZiIsImlhdCI6MTU3NjI2NDEyMywiZXhwIjoxNTc2MzUwNTIzfQ.zaZTaRR3Kc3WZQB4h86YSlPuJ3vvXah9f_hdg8c9LbY'

    /*   
    *  The x-acces token above needs to be renewed if over 2 hours.
    *  There is no user login in the front end yet.
    * 
    *  Copy and paste the new token from Postman response in the x-access-token value in the line above this.
    * 
    *  To Update this access token manually, use postman with the following credentials in the Body:
    *
    *
    *  Test user
    * 
    *    {  "email": "temp@test.com",
    *       "password": "1234"
    *    }
    *
    * 
    * Server is hosted at:
    * 
    *     https://server-cli-api.herokuapp.com/api/users/login
    *
    *
    * Admin user:
    *   {  "email": "s@s.com",
    *      "password": "1234"
    *   }
    *   
    * 
    * 
    */

  }

  
})


// http.interceptors.request.use(request => {
//   console.log("REQUEST: === ", request)
//   return request;
// });

// http.interceptors.response.use(response => {
//   console.log("RESPONSEE: === ", response)
//   return response;
// });