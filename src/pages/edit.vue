<template>
<div id="app">
  
  <v-app id="inspire">

        <div v-if="editDialog" >
            <v-list>
    <v-list-group
    v-for="hospital in hospitals"
    :key="hospital.provider_id"
    
    no-action
    >
          <v-form ref="form">

          <v-text-field v-model="hospital.provider_id" label="Provider ID" >  
          </v-text-field>

          <v-text-field v-model="hospital.hospital_name" label="Hospital Name" >  
          </v-text-field>

          <v-text-field v-model="hospital.address" label="Address" >  
          </v-text-field>

          <v-text-field v-model="hospital.city" label="City" >  
          </v-text-field>

          <v-text-field v-model="hospital.county_name" label="County" >  
          </v-text-field>

          <v-text-field v-model="hospital.state" label="State" >  
          </v-text-field>

          <v-text-field v-model="hospital.zip_code" label="Zip Code" >  
          </v-text-field>

          <v-text-field v-model="hospital.phone_number" label="Phone Numbers" >  
          </v-text-field>

          <v-text-field v-model="hospital.hospital_type" label="Type" >  
          </v-text-field>

          <v-text-field v-model="hospital.hospital_ownership" label="Ownership" >  
          </v-text-field>

          <v-text-field v-model="hospital.emergency_services" label="Emergency Services" >  
          </v-text-field>

       
          </v-form>


    </v-list-group>
            </v-list>
            
        </div>
    </v-app>
</div>
</template>

<script>

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
                this.hospital=localStorage.getItem('CFEH')
                
                
            }

            
            
        },

beforeMount()  {
  /* eslint-disable */
  console.log("BEFORE MOUNT")
  this.retrieveHospital()
}
};


</script>