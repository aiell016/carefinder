<template>
<div id="app">
  <v-app id="inspire">
    <v-card>
      <v-toolbar indigo darken-4>
        <v-toolbar-title>
           Hospitals
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

    <v-list-item four-line
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

      <p v-if="auth">

        </p>

      </v-list-item-content>
    </v-list-item>
    

    </v-list-group>
  </v-list>
    </v-card>
                                
 <!-- End List -->     
  </v-app>
</div>

</template>

<script>
import { http } from "../components/http";

export default {
  data: () => ({
    callName: "",
    editName: "",
    deleteDialog: false,
    editDialog: false,
    addDialog: false,
    hospitals: [{}],
    hospitalToEdit: {},
    hospitalToDelete: {},
    newHospital: {},
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
}),

methods:  {
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

setupEdit(hospital){


},


tophonestring(phone) {
  // Breaks apart a 10-digit phone number into (123) 456-7890
  // substr usage:
  // substr(start,numofchars)
  return "("+phone.substr(0,3)+")  "+phone.substr(4,3)+"-"+phone.substr(6)
},



callequal() {

  return ("tel:"+hospital.phone_number)
}



},

beforeMount()  {
  /* eslint-disable */
  console.log("BEFORE MOUNT")
  this.load();
}
};

</script>


<style scoped>
body {
  float: clear;
  font-family: Helvetica, sans-serif;
  font-size: 14px;
}

#white {
  color: white;
}

#black {
  color: black;
}

p {
  font-family: Helvetica, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 20px;
}

.container {
  width: 95%;
}

h1 {
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 15.4px;
}

h3 {
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  line-height: 15.4px;
}

img {
  text-align: left;
}

.submitted {
  color: #4fc08d;
}

.control-label {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  color: black;
}

input {
  color: black;
}

.btn.btn.btn-primary {
  padding: 12px 20px;
  margin: 12px 5px;
  box-sizing: border-box;
  background-color: #afddff;
  border: 2px solid #1b67bd;
  color: black;
}

.blue darken-4 {
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 15.4px;
}
</style>
