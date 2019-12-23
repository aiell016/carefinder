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
                You are logged out
              </v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-container>  
            
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

export default {
  data: () => ({

  }),

  methods: {

    logout() {
        localStorage.setItem('CFToken', '') //clear the token in localstorage
        localStorage.setItem('CFAuth', '') //clear the auth in localstorage
        localStorage.setItem('CFAdmin', '') //clear the admin in localstorage
        // window.scrollTo(0, 0) //send us to the top to look good
        // window.location = '#/home' //send em to the home page
    },

    initialize () { 
        this.logout()
    },

    mounted() {
      this.initialize()
    }


  }
}
</script>
