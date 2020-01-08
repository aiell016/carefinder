<template>
  <v-container>
    <v-container class="pa-0">
      <v-layout row>
        <v-flex xs2>
        </v-flex>
        <v-flex xs4>
          <!-- Begin Logout Card WIndow Thing -->
          <v-card>
            <v-toolbar style="background-color: #1b67bd;">
              <v-toolbar-title>
                You are logged out
              </v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-container>

            </v-container>
          </v-card>
          <!-- End Logout Window -->
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

      loggedin: false
      
    }),
        mount() {
    this.logout()
    },


    methods: {

      logout() {
        // localStorage.setItem('CFToken', '') //clear the token in localstorage
        // localStorage.setItem('CFAuth', '') //clear the auth in localstorage
        // localStorage.setItem('CFAdmin', '') //clear the admin in localstorage
        // localStorage.setItem('CFCBP', '') //clear the admin in localstorage
        localStorage.removeItem('CFToken') // remove them too
        localStorage.removeItem('CFAuth')
        localStorage.removeItem('CFAdmin')
        localStorage.removeItem('CFCBP')
        localStorage.setItem('CFLoggedin', false)
      }

    },

  }



</script>
