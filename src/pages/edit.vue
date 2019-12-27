<template>
<div id="app">
  
  <v-app id="inspire">
    <v-card>
    <v-toolbar indigo darken-4>
        <v-toolbar-title>
           Edit Hospital
        </v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>



    <div v-if="editDialog" >
    <v-list
    
    v-for="hospital in hospitals"
    :key="hospital.provider_id"
    :name="hospital.provider_id"
    >
    
<v-list-item>
    <v-list-item-content class="pa-3">
          <v-form ref="form" >

          <v-text-field v-model="hospital.provider_id" label="Provider ID" class="pa-3" >  
          </v-text-field>

          <v-text-field v-model="hospital.hospital_name" label="Hospital Name" class="pa-3">  
          </v-text-field>

          <v-text-field v-model="hospital.address" label="Address" class="pa-3">  
          </v-text-field>

          <v-text-field v-model="hospital.city" label="City" class="pa-3">  
          </v-text-field>

          <v-text-field v-model="hospital.county_name" label="County" class="pa-3">  
          </v-text-field>

          <v-text-field v-model="hospital.state" label="State" class="pa-3">  
          </v-text-field>

          <v-text-field v-model="hospital.zip_code" label="Zip Code" class="pa-3">  
          </v-text-field>

          <v-text-field v-model="hospital.phone_number" label="Phone Numbers" class="pa-3">  
          </v-text-field>

          <v-text-field v-model="hospital.hospital_type" label="Type" class="pa-3">  
          </v-text-field>

          <v-text-field v-model="hospital.hospital_ownership" label="Ownership" class="pa-3">  
          </v-text-field>

          <v-text-field v-model="hospital.emergency_services" label="Emergency Services" class="pa-3">  
          </v-text-field>

           <v-text-field v-model="hospital.location.human_address" label="Location Human Address" class="pa-3">  
          </v-text-field>

            <v-chip
            color="#ff0000"
            outline
            @click="cancelForm()"
            >
            Cancel
            </v-chip> 

            <v-chip
            color="black"
            outline
            @click="saveForm()"
            >
            Save
            </v-chip>

      <v-progress-circular v-if="progressCircle"
        :size="25"
        color="primary"
        indeterminate
      >
      </v-progress-circular>


          </v-form>


    </v-list-item-content>
     </v-list-item>
    </v-list>
    </div>
    </v-card>
  </v-app>
</div>

    
</template>

<script>

import { http } from "../components/http"


export default {
    

    data: () => ({

    hospitals: [],
    hospital: {},          

      auth: "",
      admin: "",
      editDialog: false,
      editId: "",
      editMessage: "",
      results: false,
      progressCircle: false


    }),

    methods:
        {

            retrieveHospital() {

            this.auth=localStorage.getItem('CFAuth')
            this.admin=localStorage.getItem('CFAdmin')
            this.hospital=localStorage.getItem('CFID')

            http
            .get("/hospitals/id/"+this.hospital, {})
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


         saveForm() {
           this.progressCircle=!this.progressCircle

         },

         cancelForm() {
           this.progressCircle=!this.progressCircle


         }
                
  },

            
            
       

beforeMount()  {
  /* eslint-disable */
  console.log("BEFORE MOUNT")
  this.retrieveHospital()
  this.editDialog=!this.editDialog
}
};


</script>