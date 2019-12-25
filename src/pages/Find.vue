<template>
<div id="app" >
  <v-app id="inspire">
    <v-card max-width="50%">
      <v-toolbar class="white--text" style="background-color: #1b178f;">
        <v-toolbar-title>
           Find Care
        </v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>

<!-- Begin Search -->
<v-container>
   
    <v-text-field 
     label=""
     single-line
                  
    >
    
     </v-text-field>


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
</v-container>


    </v-card>
  </v-app>
</div>
</template>

<script>
// import { http } from "../components/http";

export default {
  data: () => ({
    hospitals: [],
    hospital: {},
    chooseState: false,
    chooseCity: false,
    chooseCounty: false,
    chooseId: false,
    chooseName: false,
    chooseType: false,
    chooseEmergency: false,
    byName: "",
    byState: "",
    byCity: "",
    byCounty: "",
    byId: "",
    byType: ""
// Define more data types here


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
     
    }
  },      


  mounted() {
    this.load();
  }
};
</script>



