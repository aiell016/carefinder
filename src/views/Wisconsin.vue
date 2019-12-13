<template>
  <v-container class="pa-0">
    <v-container>
      <v-layout row>
        <v-flex>
            
          <v-card>
              <v-list>
                <v-list v-for="hospital in hospitals" :key="hospital._id">
                  
                  <v-list-item slot="item" :id="hospital._id">
             
                  </v-list-item>

                  <v-list three-line>
                    <v-list-tile>
                      <v-list-tile-content  >

                        <v-list-tile-title>{{ hospital.hospital_name }} <br /> </v-list-tile-title>
                         <button @click="showMore =! showMore">...</button>
                          <v-list-item-action-text v-if="showMore">{{ hospital.address }} 
                             <br />{{ hospital.city }}, {{ hospital.state }}
                          </v-list-item-action-text>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-list>                 
              </v-list>


              <v-dialog v-model="viewHospitalDetails" v-if="viewHospitalDetails" width="40%">
                <v-card>
                  <v-toolbar dark class="primary">
                    <div class="headline">Hospital Details {{hospitalToView.hospital_name}}</div>
                  </v-toolbar>
                </v-card>
              </v-dialog>

              <!-- Begin Delete Dialog -->
              <v-dialog v-model="deleteDialog" v-if="deleteDialog" lazy absolute max-width="40%">

                <v-card>
                  <v-toolbar dark class="primary">
                    <div class="headline">Delete Hospital Record {{hospitalToDelete.hospital_name}}</div>
                  </v-toolbar>

                  <v-card-text>
                    This action will remove {{hospitalToDelete.hospital_name}} from the application. This is
                    <strong>irreversible.</strong>
                    <br><br>
                    <h6> Are You Sure? </h6>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn @click="deletehospital()" class="red darken-2 white--text">Confirm</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn @click="deleteDialog = false, deleteId = ''" class="green lighten-1 white--text">Cancel
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <!-- End Delete Dialog -->

              <!-- Begin Edit Form -->
              <v-dialog v-model="editDialog" v-if="editDialog" lazy absolute max-width="50%">
                <v-card>
                  <v-toolbar>
                    <div class="headline"> Edit Hospital: {{editName}} </div>
                  </v-toolbar>
                  <v-container fluid>
                    <v-card-text>

                      <!-- Begin Input Row -->
                      <v-form ref="form">
                        <h3><u>Hospital Information:</u></h3>
                      
                        <v-btn @click="edit()" class="green lighten-1 white--text">Submit</v-btn>
                        <v-btn @click="editDialog = false" class="red white--text">Close</v-btn>
                       
                      </v-form>
                    </v-card-text>
                  </v-container>
                </v-card>
              </v-dialog>
              <!-- End Edit Form -->
            </v-card>
          </v-flex>
        </v-layout>
    </v-container>
  </v-container>
 
        </template>
      

<script>

import { http } from "../components/http";

export default {
  data: () => ({

    showMore: false,
    someHospital: {},
    hospitalToView: {},
    viewHospitalDetails: false,
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
          console.log(response.data);
          console.log(response.status);
          this.hospitals = response.data;
        })
        .catch(e => {
          // this.errors.push(e);
          console.info("Something bad happened...");
          console.info(e);
        });
    },

  

},

beforeMount()  {
  console.log("BEFORE MOUNT")
  this.load();
},

showDetails(someHospital) {
    this.hospitalToView = someHospital;
    this.viewHospitalDetails = true;
  },

};

</script>

<style scoped>

#blue {
  background-color:blue;
  color: white;
}


</style>




