<template>
  <v-container v-if="displayLogin">
    <v-container class="pa-0">
      <v-layout row>
        <v-flex xs2>
        </v-flex>
        <v-flex xs4>
          <!-- Begin Login v-card -->
          <v-card>
            <v-toolbar class="white--text" style="background-color: #1b67bd;">
              <v-toolbar-title>
                Login
              </v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-container>
              <v-form ref="login">
                <p v-if="needMore"> First Name <span id="red">*</span>
                  <v-text-field v-model="newUser.firstName" ref="firstname" required>
                  </v-text-field>
                  Last Name <span id="red">*</span>
                  <v-text-field v-model="newUser.lastName" ref="lastname" required>
                  </v-text-field>
                  <span id="red"> *</span> Real names are required
                </p> <br />

                <v-icon>fas fa-user</v-icon> Email
                <v-text-field cols-2 v-model="credentials.email" ref="email" required></v-text-field>
                <v-icon>fas fa-lock</v-icon> Password<v-text-field v-model="credentials.password" ref="password"
                  type="password" required>Password
                </v-text-field>

                <v-btn @click="login()" class="blue darken-2 white--text">Login</v-btn>
                <v-btn v-if="! needMore" @click="needMore = true" class="blue darken-2 white--text">Register</v-btn>
                <v-btn v-if="needMore" @click="register()" class="green darken-2 white--text">Register</v-btn>
              </v-form>
               <p>
                    <v-progress-circular v-if="progresscircle" :size="25" color="primary" indeterminate>
                    </v-progress-circular>
                  </p>


              <v-card v-if="! displayLogin">You are logged in {{ user.token }}
              </v-card>



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
  import {
    http
  } from '../components/http.js'

  //set up base data
  export default {

    data: () => ({

      credentials: {
        email: '',
        password: ''
      },

      displayLogin: true,
      needMore: false,
      progressCircle: false,

      newUser: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        admin: false,
        auth: false
      },

      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        admin: '',
        auth: ''
      },

      loggedin: false

      // Good spacing practices makes easier reading

    }),

    methods: {


      async login() {
        
      //sends the credentials to the server to get an API token, tokens expire after 24 hrs so requiring new login means we
      //can keep an up to date token in use.

        this.progressCircle = true

        http.post('/users/login', this.credentials)
          .then(response => {
            if (response.status == 200) { //on successful login
              let tempToken = response.data.token // store as tmp

              localStorage.setItem('CFToken', tempToken) //store the token in localstorage
              localStorage.setItem('CFAuth', response.data.auth) //store the auth in localstorage
              localStorage.setItem('CFAdmin', response.data.admin) //store the admin in localstorage
              localStorage.setItem('CFLoggedin', true) // set logged in to true in the cookie - for now

              http.defaults.headers['x-access-token'] = localStorage.getItem('CFToken')
              tempToken = ''
              this.$root.$emit('tokenMade')
              this.displayLogin = false
              this.progressCircle = false
              this.loggedin = true
              this.$emit('loggedin', true)
              window.scrollTo(0, 0) //send us to the top to look good
              window.location = '#/home' //send em to the home page
            } else {
              alert("Login Failed") //something didnt work
            }
          })
          .catch(e => {
            /* eslint-disable */
            this.progressCircle = false
            console.log(e)
          })
      },

      register() {
        this.newUser.password = this.credentials.password
        this.newUser.email = this.credentials.email
        // First and Last name are already set in the newUser object
        /* eslint-disable */
        alert("Registration Complete!") // Registration is done-done
        this.needMore = false

      },

      isLoggedIn() {

        this.user.token = localStorage.getItem('CFToken')

        if (this.user.token == '')
          this.displayLogin = true
        else this.displayLogin = false

      },


      initialize() {
        this.isLoggedIn()
      },

      mounted() {
        this.initialize()
      }



    }
  }
</script>

<style scoped>
  #red {

    color: red;

  }
</style>
