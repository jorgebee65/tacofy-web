<template>
  <div id="index-banner" class="parallax-container">
    <div class="section no-pad-bot">
      <div class="container">
            <br><br>
            <h1 class="header center text-lighten-2 titles">Tacofy</h1>
            <div class="row center">
              <h5 class="header col s12 light">Busca, Encuentra, Taquea...</h5>
            </div>
            <br><br>
      </div>
    </div>
    <div class="parallax tinted">
      <img src="./assets/background1.jpg">
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'
import getTaquerias from './api'

let config = {
    apiKey: "AIzaSyALugq0aR2V1thE_6WnNT61AHIqjxpneCc",
    authDomain: "tacofy-2f5e1.firebaseapp.com",
    databaseURL: "https://tacofy-2f5e1.firebaseio.com",
    projectId: "tacofy-2f5e1",
    storageBucket: "tacofy-2f5e1.appspot.com",
    messagingSenderId: "1054393517966"
}

let app = Firebase.initializeApp(config);

export default {
  name: 'app',
  data () {
    return {
      taquerias:[]
    }
  },
  mounted: function(){
    getTaquerias().then(taquerias => this.taquerias = taquerias)
    $('.parallax').parallax();
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
