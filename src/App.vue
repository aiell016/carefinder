<template>

  <v-app light>
      
       
    <v-navigation-drawer v-if="loggedin" persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer"
      enable-resize-watcher app>

      <v-list>
        <v-list-tile ripple v-for="(item, i) in items" :key="i" value="true" :href="item.href">
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title id="black" v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar class="indigo darken-4" fixed app :clipped-left="clipped">
      <v-toolbar-side-icon id="white" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title id="white" v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    
    
      <v-chip v-if="!loggedin" class="ma-2" color="white" outline @click="setupLogin()">
       Login
      </v-chip>
      <v-chip v-if="loggedin" class="ma-2" color="white" outline @click="logout()">
       Logout
      </v-chip>

    </v-toolbar>

    <main>
      <v-content>



<!-- Login Screen -->
  <v-container v-if="displayLogin">
    <v-container class="pa-0">
      <v-layout row>
        <v-flex xs2>
        </v-flex>
        <v-flex xs4>
          <!-- Begin Login v-card -->
          <v-card>
            <v-toolbar class="indigo darken-4 white--text" >
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

                <v-chip v-if="! needMore" @click="login()" class="green darken-4 white--text" >Login</v-chip>

                <v-chip v-if="! needMore" @click="needMore = true" class="indigo darken-4 white--text">Register</v-chip>
                <v-chip v-if="needMore" @click="register()" class="green darken-4 white--text">Register</v-chip>
                <v-chip v-if="needMore" @click="cancel()" class="red accent-4 white--text">Cancel</v-chip>


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


        <v-container fluid v-if="loggedin">
          <v-slide-y-transition mode="out-in">
            <v-layout column align-left>
              <router-view></router-view>

            </v-layout>
          </v-slide-y-transition>
        </v-container>
      </v-content>
    </main>


    <v-footer :fixed="fixed" app>
      <span>&copy; 2019 <a href="https://aiello.io" target="new">Aiello.io</a></span>
    </v-footer>
  </v-app>
</template>

<script>
  // import router from "./router/index.js";

  import { http } from '@/components/http.js'

  export default {
    data() {

      return {

        clipped: true,
        drawer: true,
        fixed: false,
        loginMessage: '',
        auth: false,
        admin: false,
        token: '',
        
        displayLogin: false,
        needMore: false,
        
      credentials: {
        email: '',
        password: ''
      },

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


          filters: {
            // makes a JSON look pretty
            pretty: function (value) {
              return JSON.stringify(JSON.parse(value), null, 2);
            }
          },

        items: [


          {
            href: "/#/find",
            router: true,
            icon: "search",
            title: "Find"
          },


          {
            href: "/#/home",
            router: true,
            icon: "home",
            title: "Home"
          },


          {
            href: "/#/about",
            router: true,
            icon: "info",
            title: "About"
          },

          {
            href: "/#/list",
            router: true,
            icon: "list",
            title: "List"
          }


        ],

        miniVariant: false,
        title: "Care Finder",
        subTitle: "Find Care!",
        loggedin: false
      };
    },



    methods:
    {

      setupUser() {

        this.auth = localStorage.getItem('CFAuth')
        this.admin = localStorage.getItem('CFAdmin')
        this.token = localStorage.getItem('CFToken')
        this.loggedin = localStorage.getItem('CFLoggedin')
        if (this.loggedin == '' ) this.loggedin = false

      },

      logout() {

        localStorage.removeItem('CFToken') // remove them too
        localStorage.removeItem('CFAuth')
        localStorage.removeItem('CFAdmin')
        localStorage.removeItem('CFCBP')
        localStorage.removeItem('CFLoggedin')
        this.loggedin=false
        this.token = ''
        
        window.scrollTo(0, 0) // send us to the top to look good
        window.location = '#/home' // Id is set, send control to the logout
        

      },

      setupLogin() {
        this.displayLogin = ! this.displayLogin
        // toggle the login screen if the login button on top nav is pressed
      },


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
              localStorage.setItem('CFLoggedin', true) // set logges in to true in the cookie - for now
              http.defaults.headers['x-access-token'] = localStorage.getItem('CFToken')
              tempToken = ''
              this.$root.$emit('tokenMade')
              this.displayLogin = false
              
              this.loggedin = true
              this.drawer = true
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
        // complete the post new user to registration endpoint
        // once my server is up

      },

      cancel() {
        this.needMore = false

      }



    },
    
    beforeMount() {
      /* eslint-disable */
      console.log("BEFORE MOUNT SetupUser")
      this.setupUser()

    },


      // mounted() {
        
      // }


    };

</script>


<style lang="stylus">
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

  @import './stylus/main';


  #white {

    color: white;
  }


  #black {
    color: black;
  }
</style>
