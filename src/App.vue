<template>
  
    <div id="app">
      
      <div id="nav">
    
        <router-link to="/">Home</router-link> |
          
        <router-link to="/about">About</router-link> | 
          
        <router-link to="/skills">Skills</router-link> | 

        <router-link to="/projects">Projects</router-link> |

        <router-link to="/contact">Contact</router-link> |


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
