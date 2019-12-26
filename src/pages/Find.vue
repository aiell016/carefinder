<template>
<div id="app" >
  <v-app id="inspire">
    <v-card >
      <v-toolbar class="white--text" style="background-color: #1b178f;">
        <v-toolbar-title>
           Find Care
        </v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>

<!-- Begin Search -->


<v-container  >
  <v-layout row align-center
          justify-center>
    <v-flex xs4 >  
     <v-text-field v-model="searchText" append-icon="search" >
     </v-text-field>
    </v-flex>
  </v-layout>
</v-container>


  <!-- Primary Filtering Chips - Search by selections-->
<div class="text-center" >

      <v-chip
        color="#1b178f"
        outline
        @click="chooseCity()"
      >
        City
      </v-chip>
  

      <v-chip
        color="#1b178f"
        outline
        @click="chooseCounty()"
      >
        County
      </v-chip>
  
      <v-chip
        class="ma-2"
        color="#1b178f"
        outline
        @click="chooseState()"
      >
        State
      </v-chip>


      <v-chip
        class="ma-2"
        color="#1b178f"
        outline
        @click="chooseCityState()"
      >
        City, State
      </v-chip>


      <v-chip
        class="ma-2"
        color="#1b178f"
        outline
        @click="chooseType()"
      >
        Hospital Type
      </v-chip>

      <v-chip
        class="ma-2"
        color="#1b178f"
        outline
        @click="chooseId()"
      >
        ID
      </v-chip>


      <v-chip
        class="ma-2"
        color="#1b178f"
        outline
        @click="chooseName()"
      >
        Hospital Name
      </v-chip>



    </div>

  <p>

  </p>

 <v-card v-if="results">
      <v-toolbar class="white--text" style="background-color: #1b178f;">
        <v-toolbar-title>
           Care
        </v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>
<!-- Begin List -->
  <v-list>
    <v-list-group
    v-for="hospital in hospitals"
    :key="hospital.hospital_name"
    no-action
    >

    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title v-text="hospital.hospital_name">
        </v-list-item-title>
      </v-list-item-content>
    </template>

    <v-list-item three-line
    :key="hospital.hospital_name" 
    
    >
    <v-list-item-content>
      {{ hospital.address }} <br /> 
     {{ hospital.city }},{{ hospital.state }} {{ hospital.zip_code }} <br />
     {{ tophonestring(hospital.phone_number) }}

      <!-- Link to live call the phone number button
      Is Disabled - Under construction -->

     <!-- <a href=callequal() target="_new"> -->
     <v-button> <v-icon>phone</v-icon> {{ hospital.phone_number }} </v-button>
     <!-- </a> -->
      <!-- I am leaving in the extra phone number so we can debug in case the built telephone string
      differs from the original phone number ( i.e. negative numbers - shame on me but wtf how did that happen) -->

      </v-list-item-content>
    </v-list-item>
    

    </v-list-group>
  </v-list>
    </v-card>
                                
 <!-- End List -->  


    </v-card>
  </v-app>
</div>
</template>

<script>
import { http } from "../components/http";

export default {

  data: () => ({
    hospitals: [],
    
    searchText: "",

    results: false,

    hospital: 
    {
            "_id": "",
            "provider_id": "",
            "hospital_name": "",
            "address": "",
            "city": "",
            "state": "",
            "zip_code": "",
            "county_name": "",
            "phone_number": { "phone_number": "" },
            "hospital_type": "",
            "hospital_ownership": "",
            "emergency_services": "true",
            "location": {
                "human_address": "",
                "latitude": "",
                "longitude": "",
                "needs_recoding": "false"
            }
      },

      apiCallName: "",
      


// Define more data type definitions here


  }),
// Close the exported data definitions


// Define the exported methods to this page

  methods: {
    load() {
      
    },



    setupDelete() {
      
    },

    setupEdit() {
      
    },

    deleteHospital() {
      
    },

    submit() {
      
    },

    edit() {
      this.callName = "Edit";
     
    },

    chooseCity() {

      http
        .get("/hospitals/city/"+this.searchText, {})
        .then(response => {
          /* eslint-disable */
          // alert(response.data)
          console.log(response.data)
          /* eslint-disable */
          console.log(response.status)
          this.hospitals = response.data
          /* eslint-disable */
          console.log(this.hospitals)
          this.results=true;
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
     
      http
        .get("/hospitals/county/"+this.searchText, {})
        .then(response => {
          /* eslint-disable */
          // alert(response.data)
          console.log(response.data)
          /* eslint-disable */
          console.log(response.status)
          this.hospitals = response.data
          /* eslint-disable */
          console.log(this.hospitals)
          this.results=true;
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
     
      http
        .get("/hospitals/state/"+this.searchText, {})
        .then(response => {
          /* eslint-disable */
          // alert(response.data)
          console.log(response.data)
          /* eslint-disable */
          console.log(response.status)
          this.hospitals = response.data
          /* eslint-disable */
          console.log(this.hospitals)
          this.results=true;
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
     
      http
        .get("/hospitals/city/"+this.searchText, {})
        .then(response => {
          /* eslint-disable */
          // alert(response.data)
          console.log(response.data)
          /* eslint-disable */
          console.log(response.status)
          this.hospitals = response.data
          /* eslint-disable */
          console.log(this.hospitals)
          this.results=true;
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
     
      http
        .get("/hospitals/city/"+this.searchText, {})
        .then(response => {
          /* eslint-disable */
          // alert(response.data)
          console.log(response.data)
          /* eslint-disable */
          console.log(response.status)
          this.hospitals = response.data
          /* eslint-disable */
          console.log(this.hospitals)
          this.results=true;
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
     
      http
        .get("/hospitals/city/"+this.searchText, {})
        .then(response => {
          /* eslint-disable */
          // alert(response.data)
          console.log(response.data)
          /* eslint-disable */
          console.log(response.status)
          this.hospitals = response.data
          /* eslint-disable */
          console.log(this.hospitals)
          this.results=true;
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
     
      http
        .get("/hospitals/city/"+this.searchText, {})
        .then(response => {
          /* eslint-disable */
          // alert(response.data)
          console.log(response.data)
          /* eslint-disable */
          console.log(response.status)
          this.hospitals = response.data
          /* eslint-disable */
          console.log(this.hospitals)
          this.results=true;
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
     
      http
        .get("/hospitals/city/"+this.searchText, {})
        .then(response => {
          /* eslint-disable */
          // alert(response.data)
          console.log(response.data)
          /* eslint-disable */
          console.log(response.status)
          this.hospitals = response.data
          /* eslint-disable */
          console.log(this.hospitals)
          this.results=true;
        })
        .catch(e => {
          // this.errors.push(e);
          /* eslint-disable */
          console.info("Something bad happened...")
          /* eslint-disable */
          console.info(e)
        });
    },



        
    tophonestring(phone) {
      // Breaks apart a 10-digit phone number into
      // it's components (area code) exchange - last four digits of the number
      // I have no idea why these values are parsing out as negative
      // values.  So, I added the Math.abs() function to force it to positive
      // This is a silly beginner type of cheat that needs to be fixed!
    var area=Math.abs(parseInt((phone/10000000).toString()))
    var newphone=(area*10000000)-phone
    var exchange=Math.abs(parseInt((newphone/10000).toString()))
    // We call that prefix the exchange because that's what it was called in the early telephony days
    var lastfour=Math.abs(newphone%10000)
    var phonestring="("+area+")  "+exchange+"-"+lastfour

    return phonestring
    },




  },      


  mounted() {
    this.load();
  }
};
</script>



