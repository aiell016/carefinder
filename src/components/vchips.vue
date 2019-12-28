<v-container>
  <v-row>
    <v-col cols="12" md="4">

      <v-layout row align-center justify-center>

        <v-form ref="form">
          <input v-model="searchText" placeholder="search">

        </v-form>
      </v-layout>
    </v-col>
  </v-row>


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
