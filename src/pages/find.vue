<template>
  <div id="app">
    <v-app id="inspire">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>
            Find Care
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <!-- Begin Search -->
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-layout row align-left justify-left>

                <v-form ref="form">
                  <v-text-field v-model="searchText" placeholder="search" prepend-icon="search">
                  </v-text-field>
                </v-form>

                <v-container>
                  <p>
                    <v-progress-circular v-if="progresscircle" :size="25" color="primary" indeterminate>
                    </v-progress-circular>
                  </p>

                  <!-- Primary Filtering Chips - Search by selections-->
                  <div class="text-center">
                    <p> Select a Search Criteria</p>

                    <v-chip color="#1b178f" outline @click="chooseCity()">
                      City
                    </v-chip>

                    <v-chip color="#1b178f" outline @click="chooseCounty()">
                      County
                    </v-chip>

                    <v-chip class="ma-2" color="#1b178f" outline @click="chooseState()">
                      State
                    </v-chip>

                    <v-chip class="ma-2" color="#1b178f" outline @click="chooseCityState()">
                      City, State
                    </v-chip>

                    <v-chip class="ma-2" color="#1b178f" outline @click="chooseType()">
                      Hospital Type
                    </v-chip>

                    <v-chip class="ma-2" color="#1b178f" outline @click="chooseId()">
                      ID
                    </v-chip>

                    <v-chip class="ma-2" color="#1b178f" outline @click="chooseName()">
                      Hospital Name
                    </v-chip>

                    <v-chip class="ma-2" color="#1b178f" outline @click="chooseEmergency()">
                      Emergency Services
                    </v-chip>

                  </div>
                </v-container>
              </v-layout>
            </v-col>
          </v-row>
        </v-container>

        <v-card v-if="results">
          <v-toolbar>
            <v-toolbar-title>
              Search Results {{functionCallType}}
            </v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <!-- Begin List -->
          <v-list>
            <v-list-group v-for="hospital in hospitals" :key="hospital.provider_id" :name="hospital.hospital_name"
              no-action>

              <template v-slot:activator>
                <v-list-item-content class="pa-3">
                  <v-list-item-title v-text="hospital.hospital_name">
                  </v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item :name="hospital.hospital_name">
                <v-list-item-content :name="hospital.hospital_name">

                  <span class="pa-3"> {{ hospital.address }}</span> <br />
                  <span class="pa-3"> {{ hospital.city }},{{ hospital.state }} {{ hospital.zip_code }} </span><br />
                  <!-- We can even embed a function with our variables too as in the next line -->
                  <!-- I think this is freakishly amazeballs! I love it! -->
                  <span class="pa-3">{{ tophonestring(hospital.phone_number) }}</span>

                  <!-- Link to live call the phone number button
                  Is Disabled - Under construction -->

                  <!-- <a href=callequal() target="_new"> -->
                  <v-icon>phone</v-icon> {{ hospital.phone_number }}
                  <!-- </a> -->

                </v-list-item-content>

                <div v-if="admin" class="pa-3">
                  <!-- If admin level, show active v-chips -->

                  <v-chip color="#1b178f" outline @click="setupJson(hospital)">
                    JSON
                  </v-chip>

                  <v-chip color="#1b178f" outline @click="setupEdit(hospital)">
                    Edit
                  </v-chip>

                  <div v-if="showJson">
                    <pre>{{ jsonstr | pretty }}</pre>
                  </div>
                </div>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-card>
      </v-card>
    </v-app>
  </div>
</template>

<script>
  import {
    http
  } from "../components/http"
  // import vchips from "../components/vchips.vue"

  export default {

    data: () => ({
      hospitals: [],

      searchText: "",

      results: false,

      hospital: {},

      functionCallType: "",

      city: "",
      state: "",
      name: "",
      selected: "",
      progresscircle: false,
      phone: "",
      callBack: "",
      jsonstr: "",
      showJson: false,

      // Define filters
      filters: {
        // makes a JSON look pretty
        pretty: function (value) {
          return JSON.stringify(JSON.parse(value), null, 2);
        }
      }

      // Define more data type definitions here


    }),
    // Close the exported data definitions



    // Define the exported methods to this page

    methods: {
      load() {

      },


      setupJson(hospital) {
        this.jsonstr = hospital
        this.showJson = !this.showJson
      },


      setupEdit(hospital) {

        localStorage.setItem('CFHPID', hospital.provider_id)
        localStorage.setItem('CFCB', '#/find') // set the call back page to the find page
        window.scrollTo(0, 0) // send us to the top to look good
        window.location = '#/edit' // Id is set, send control to the edit page

      },

      parseCityState() {
        this.searchText = this.searchText.trim()
        var comma = this.searchText.indexOf(',')
        this.city = this.searchText.slice(0, comma)
        this.state = this.searchText.slice(comma + 2)
      },


      chooseCity() {

        this.progresscircle = true

        http
          .get("/hospitals/city/" + this.searchText, {})
          .then(response => {
            /* eslint-disable */
            // alert(response.data)
            console.log(response.data)
            /* eslint-disable */
            console.log(response.status)
            this.hospitals = response.data
            /* eslint-disable */
            console.log(this.hospitals)
            this.progresscircle = false
            this.functionCallType = "by city: " + this.searchText
            this.results = true;
          })
          .catch(e => {
            // this.errors.push(e);
            /* eslint-disable */
            console.info("Something bad happened...")
            /* eslint-disable */
            console.info(e)
          });
      },


      chooseCounty() {

        this.progresscircle = true

        http
          .get("/hospitals/county/" + this.searchText, {})
          .then(response => {
            /* eslint-disable */
            // alert(response.data)
            console.log(response.data)
            /* eslint-disable */
            console.log(response.status)
            this.hospitals = response.data
            /* eslint-disable */
            console.log(this.hospitals)
            this.functionCallType = "by county: " + this.searchText
            this.results = true;
            this.progresscircle = false
          })
          .catch(e => {
            // this.errors.push(e);
            /* eslint-disable */
            console.info("Something bad happened...")
            /* eslint-disable */
            console.info(e)
          });
      },



      chooseState() {

        this.progresscircle = true

        http
          .get("/hospitals/state/" + this.searchText, {})
          .then(response => {
            /* eslint-disable */
            // alert(response.data)
            console.log(response.data)
            /* eslint-disable */
            console.log(response.status)
            this.hospitals = response.data
            /* eslint-disable */
            console.log(this.hospitals)
            this.functionCallType = "by state: " + this.searchText
            this.results = true;
            this.progresscircle = false
          })
          .catch(e => {
            // this.errors.push(e);
            /* eslint-disable */
            console.info("Something bad happened...")
            /* eslint-disable */
            console.info(e)
          });
      },



      chooseCityState() {

        this.progresscircle = true

        this.parseCityState()

        http
          .get("/hospitals/city_state/" + this.city + "/" + this.state, {})
          .then(response => {
            /* eslint-disable */
            // alert(response.data)
            console.log(response.data)
            /* eslint-disable */
            console.log(response.status)
            this.hospitals = response.data
            /* eslint-disable */
            console.log(this.hospitals)
            this.functionCallType = "by city: " + this.city + ", state: " + this.state
            this.results = true;
            this.progresscircle = false
          })
          .catch(e => {
            // this.errors.push(e);
            /* eslint-disable */
            console.info("Something bad happened...")
            /* eslint-disable */
            console.info(e)
          });
      },


      chooseType() {

        this.progresscircle = true

        http
          .get("/hospitals/type/" + this.searchText, {})
          .then(response => {
            /* eslint-disable */
            // alert(response.data)
            console.log(response.data)
            /* eslint-disable */
            console.log(response.status)
            this.hospitals = response.data
            /* eslint-disable */
            console.log(this.hospitals)
            this.functionCallType = "by type: " + this.searchText
            this.progresscircle = false
            this.results = true;
          })
          .catch(e => {
            // this.errors.push(e);
            /* eslint-disable */
            console.info("Something bad happened...")
            /* eslint-disable */
            console.info(e)
          });
      },



      chooseId() {

        this.progresscircle = true

        http
          .get("/hospitals/id/" + this.searchText, {})
          .then(response => {
            /* eslint-disable */
            // alert(response.data)
            console.log(response.data)
            /* eslint-disable */
            console.log(response.status)
            this.hospitals = response.data
            /* eslint-disable */
            console.log(this.hospitals)
            this.functionCallType = "by ID: " + this.searchText
            this.progresscircle = false
            this.results = true;
          })
          .catch(e => {
            // this.errors.push(e);
            /* eslint-disable */
            console.info("Something bad happened...")
            /* eslint-disable */
            console.info(e)
          });
      },



      chooseName() {

        this.progresscircle = true

        http
          .get("/hospitals/name/" + this.searchText, {})
          .then(response => {
            /* eslint-disable */
            // alert(response.data)
            // console.log(response.data)
            /* eslint-disable */
            console.log(response.status)
            this.hospitals = response.data
            /* eslint-disable */
            // console.log(this.hospitals)
            this.functionCallType = "by name: " + this.searchText
            this.progresscircle = false
            this.results = true;
          })
          .catch(e => {
            // this.errors.push(e);
            /* eslint-disable */
            console.info("Something bad happened...")
            /* eslint-disable */
            console.info(e)
          });
      },



      chooseEmergency() {

        this.progresscircle = true

        http
          .get("/hospitals/emergency/" + true, {})
          .then(response => {
            /* eslint-disable */
            // alert(response.data)
            // console.log(response.data)
            /* eslint-disable */
            console.log(response.status)
            this.hospitals = response.data
            this.progresscircle = false
            /* eslint-disable */
            // console.log(this.hospitals)
            this.functionCallType = "by emergency: " + this.searchText

            this.results = true;
          })
          .catch(e => {
            // this.errors.push(e);
            /* eslint-disable */
            console.info("Something bad happened...")
            /* eslint-disable */
            console.info(e)
          });
      },


      checkAuth() {
        this.auth = localStorage.getItem('CFAuth')
        this.admin = localStorage.getItem('CFAdmin')
      },

      tophonestring(phone) {
        // Breaks apart a 10-digit phone number into (123) 456-7890
        // substr usage:
        // substr(start,numofchars)
        return "(" + phone.substr(0, 3) + ")  " + phone.substr(4, 3) + "-" + phone.substr(6)
      },


      theyHitEnter() {

        this.progresscircle = true
        // Text may have been entered in the searchText field and enter was pressed or the icon hit
        // check to see if there is a comma. It could mean city,state so lets help them out
        // Find the comma.
        var comma = this.searchText.indexOf(',');

        if (comma != 0) {

          this.city = this.searchText.slice(0, comma)
          this.state = this.searchText.slice(comma + 2)
          // check if there are results for this as a city
          this.chooseCityState
        }


      }



      // more methods can go here


      // end of methods declarations

    },

    mounted() {
      this.checkAuth()
      this.load();
    }
  };
</script>
