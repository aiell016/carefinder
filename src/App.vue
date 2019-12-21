<template>

  <v-app light>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      app
    >

      <v-list > 
        <v-list-tile ripple 
          v-for="(item, i) in items" :key="i" value="true" :href="item.href" >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title id="black" v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar class="blue darken-2" fixed app :clipped-left="clipped">
      <v-toolbar-side-icon id="white" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title id="white" v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>   

    <main>
      <v-content>
        <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <v-layout column align-left>
              <router-view></router-view>
            </v-layout>
              </v-slide-y-transition>
        </v-container>
      </v-content>
    </main>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2019 <a href = "https://aiello.io" target="new">Aiello.io</a></span>
    </v-footer>
  </v-app>
</template>

<script>

// import router from "./router/index.js";
export default {
  data() {
    
    return {
      
      clipped: true,
      drawer: true,
      fixed: false,

      items: [

        {
          href: "/#/login",
          router: true,
          icon: "fa-user",  // font awesome icon packages start with fa
          title: "Login"
        },

        {
          href: "/#/home",
          router: true,
          icon: "home",
          title: "Home"
        },

   
        {
          href: "/#/about",
          router: true,
          icon: "info",
          title: "About"
        }

        
      ],

      miniVariant: false,
      title: "Care Finder",
      subTitle: "Find Care!"
    };
  }
};
</script>


<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

@import './stylus/main';


#white {

  color: white;
}


#black {
  color: black;
}



</style>
