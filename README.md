# Tony@Aiello.io

## Before running:

    *  There is no user login in the front end yet.
    *  
    * 
    *
    *  In the file located at:  components > http.js the access token will need to be updated.   
    *  Copy and paste the new token from Postman response in the x-access-token value.
    *  Instructions are also in the comments section in that file.
    *
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


## Project setup
```
npm install
```
## Dev
npm run dev

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

