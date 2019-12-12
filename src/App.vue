<template>
  
    <div id="app">
      
      <div id="nav">
    
        <router-link to="/">Home</router-link> |
          
        <router-link to="/wisconsin">Wisconsin</router-link> | 
          
        <router-link to="/illinois">Illinois</router-link> | 


      </div>

      <router-view/>

    </div>


</template>

<style>


#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 20;
  color: black;

}

#nav {
  padding: 30px;
  background-image: radial-gradient(darkred, darkblue);
  background-repeat: no-repeat;
  opacity: 1.0;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: yellow;
}

</style>
