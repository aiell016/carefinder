<template>
  <v-container class="pa-0">
    <v-container>
      <v-layout row>
        <v-flex>
            
          <v-card>
            <v-list shaped>
              <v-subheader>Hospitals</v-subheader>
              <v-list-item-group v-model="hospital" color="primary">
                <v-list-item v-for="hospital in hospitals" :key="hospital._id">
                  <v-list-item-content>
                    <v-list-item-title  v-text="hospital.hospital_name">
                    </v-list-item-title>
                    <v-list-item-action><v-icon>fas fa-edit</v-icon></v-list-item-action>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>



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
