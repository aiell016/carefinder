<template>
  <v-container fluid class="pa-0">
    <v-card>
      <v-card-text>
        <v-container>
          <v-layout>

            <v-flex>
              <div>
                <br />
                <h4>About</h4>
                <br />
                <p> The Care Finder app finds care. </p>
                <p> It is better to save a vue project and framework that you are used to working with.
                  It makes for quick deployment from a template.
                </p>
                <p>Some tools and packages become deprecated or re-named, so keep up!
                </p>



              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>

    </v-card>
  </v-container>
</template>



<script>
  export default {

    components: {

    },

    data() {
      return {
        tabs: ['Home', 'INTS', 'MKT', 'Competencies'],
        active: null,
        dataCollection: null
      }
    },
    methods: {

      initialize() {},

      mounted() {
        this.initialize()
      }

    }
  }
</script>
