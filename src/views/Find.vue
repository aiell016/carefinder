<template>
 <v-container class="pa-0">



 </v-container>


</template>

<script>
// import { http } from "../components/http";

export default {
  data: () => ({
    hospitals: [],
    hospital: {},

    hospitalToDelete: {},
    success: false,
    fail: false,
    callName: "",
    listDialog: false,
    addDialog: false,
    deleteDialog: false,
    editDialog: false,
    editName: "",
    stateName: "",
    cityName: "",
    endpointName: "",

  }),

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
