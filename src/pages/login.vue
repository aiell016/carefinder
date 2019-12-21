<template>
  <v-container v-if="displayLogin">
    <v-container class="pa-0">
      <v-layout row>
        <v-flex xs2>
        </v-flex>
        <v-flex xs4>
          <!-- Begin Login Card WIndow Thing -->
          <v-card>
            <v-toolbar class="white--text" style="background-color: #1b67bd;">
              <v-toolbar-title>
                Login
              </v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-container>  
              <v-form ref="login">
                <v-icon>fas fa-user</v-icon>
                <v-text-field label="Username" v-model="credentials.email" ref="username" required></v-text-field>
                <v-icon>fas fa-lock</v-icon><v-text-field label="Password" v-model="credentials.password" ref="password" type="password" required></v-text-field>

                <v-btn @click="login()" class="green darken-2 white--text">Login</v-btn>
              </v-form>
            </v-container>
          </v-card>
          <!-- End Login Window -->
        </v-flex>
        <v-flex xs4>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import { http } from '../components/http.js'

//set up base data
export default {
  data: () => ({


    credentials: {
      email: '',
      password: ''
    },

    checkRole: {},
    displayLogin: true,
    drawer: false,
    role: '',
    fname: '',
    lname: '',
    isloggedin: false,

    user: {
      firstName: '',
      lastName: '',
      email: '',
      admin: '',
      token: '',
      auth: false
    },

    testUser: {
      firstName: 'tony',
      lastName: 'aiello',
      email: 'tony@aiello.io',
      role: 'admin',
      token: 'dklkjlwiuknkjn'
    }


  }),

  methods: {

    //sends the credentials to the server to get an API token, tokens expire after 24 hrs so requiring new login means we
    //can keep an up to date token in use.

   async login() {
      http.post('/users/login', this.credentials)
        .then(response => {
          if (response.status == 200) { //on successful login
          let tempToken = response.data.token // store as tmp

          localStorage.setItem('CFToken', tempToken) //store the token in localstorage
          localStorage.setItem('CFAuth', response.data.auth) //store the auth in localstorage
          localStorage.setItem('CFAdmin', response.data.admin) //store the admin in localstorage
          http.defaults.headers['x-access-token'] = localStorage.getItem('CFToken')
          tempToken=''
          this.$root.$emit('tokenMade')
          this.displayLogin=false
          window.scrollTo(0, 0) //send us to the top to look good
          window.location = '#/home' //send em to the home page
          } else {
            alert("Login Failed") //something didnt work
          }
        })
        .catch(e => {
           /* eslint-disable */
          console.log(e)
        })
    },

    
    initialize () { 
    },

    mounted() {
      this.initialize()
    }


  }
}
</script>
