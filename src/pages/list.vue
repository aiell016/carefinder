<template>
  <div id="app">
    <v-app id="inspire">

      <v-card>
        <v-toolbar indigo darken-4>
          <v-toolbar-title>
            Hospitals in Wisconsin
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <!-- Progress Bar Element -->
        <p>
          <v-progress-circular v-if="progressCircle" :size="25" color="primary" indeterminate></v-progress-circular>
        </p>

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

            <v-list-item three-line :key="hospital.hospital_name" :name="hospital.hospital_name">
              <v-list-item-content :name="hospital.hospital_name">
                <span class="pa-3"> {{ hospital.address }} </span><br />
                <span class="pa-3"> {{ hospital.city }},{{ hospital.state }} {{ hospital.zip_code }} </span><br />
                <span class="pa-3">{{ tophonestring(hospital.phone_number) }} </span>
              </v-list-item-content>

              <v-button name="callNow" @click="callNow(hospital.hospital_phone_number)">
                <v-icon>phone</v-icon>
              </v-button>

              <!-- If admin level, show active v-chips -->

              <div v-if="admin" class="pa-3">

                <v-chip color="#1b178f" outline @click="setupJson(hospital)">
                  JSON
                </v-chip>

                <v-chip color="#1b178f" outline @click="setupEdit(hospital)">
                  Edit
                </v-chip>

                <v-chip color="#1b178f" outline @click="setupDelete(hospital)">
                  Delete
                </v-chip>

                <!-- If the user picked it - showJson is true, this div shows up  -->
                <div v-if="showJson">

                  <!-- Show the hospital data stored in the jsonstr in a pretty view -->

                  <pre>{{ jsonstr | pretty }}</pre>

                </div>

              </div>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-card>

      <!-- End List -->


    </v-app>
  </div>

</template>

<script>
  import {
    http
  } from "../components/http";

  export default {
    data: () => ({
      callName: "",
      editName: "",

      hospitals: [],
      hospitalToEdit: {},

      hospitalToDelete: {},
      newHospital: {},
      hospital: {
        "_id": "",
        "provider_id": "",
        "hospital_name": "",
        "address": "",
        "city": "",
        "state": "",
        "zip_code": "",
        "county_name": "",
        "phone_number": {
          "phone_number": ""
        },
        "hospital_type": "",
        "hospital_ownership": "",
        "emergency_services": "true",
        "location": {
          "latitude": "",
          "longitude": "",
        }
      },

      phone: "",
      auth: "",
      admin: "",
      functionCallType: "",

      city: "",
      state: "",
      // name: "",
      selected: "",
      progressCircle: false,
      jsonstr: "",
      showJson: false,

      filters: {
        // makes a JSON look pretty
        pretty: function (value) {
          return JSON.stringify(JSON.parse(value), null, 2);
        }
      }


    }),

    methods: {
      // add methods to access this data model here
      // call by using this.methodname()

      load() {

        http
          .get("/hospitals/state/WI", {

          })
          .then(response => {
            /* eslint-disable */
            console.log(response.data)
            /* eslint-disable */
            console.log(response.status)
            this.hospitals = response.data
            /* eslint-disable */
            console.log(this.hospitals)
          })
          .catch(e => {
            // this.errors.push(e);
            /* eslint-disable */
            console.info("Something bad happened...")
            /* eslint-disable */
            console.info(e)
          });
      },

      setupDelete(hospital) {

      },


      storeCurrentState() {

        localStorage.setItem('CFCB', 'list')


      },

      restoreCurrentState() {


      },

      setupEdit(hospital) {

        localStorage.setItem('CFHPID', hospital.provider_id)
        localStorage.setItem('CFCBP', '#/list')
        window.scrollTo(0, 0) // send us to the top to look good
        window.location = '#/edit' // Id is set, send control to the edit page

      },

      setupJson(hospital) {
        this.jsonstr = hospital
        this.showJson = !this.showJson
      },

      tophonestring(phone) {
        // Breaks apart a 10-digit phone number into (123) 456-7890
        // substr usage:
        // substr(start,numofchars)
        return "(" + phone.substr(0, 3) + ")  " + phone.substr(4, 3) + "-" + phone.substr(6)
      },


      toCallLink(phone) {
        // makes a live call link to the phone number
        return ("tel:" + phone)
      },

      callNow(phone) {
        // makes a live call to the phone number provided

        window.open("https://tony.aiello.io")

        // Live Telephone Calling link has been disabled
        // Edit the above 2 functions to make this link a live linkto the proper phone number
      },



      checkAuth() {
        this.auth = localStorage.getItem('CFAuth')
        this.admin = localStorage.getItem('CFAdmin')
      }



    },

    beforeMount() {
      /* eslint-disable */
      console.log("BEFORE MOUNT")
      this.checkAuth()
      this.load()
    }
  };
</script>
