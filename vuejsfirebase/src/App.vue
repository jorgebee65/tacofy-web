<template>
  <div>
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
  <div class="container">
      <div class="row">
          <form class="col s12">
            <div class="row">
                <div class="input-field col s12 m4">
                  <input placeholder="Placeholder" id="first_name" type="text" class="validate">
                  <label for="first_name">Taqueria</label>
                </div>
                <div class="input-field col s12 m6">
                  <input id="last_name" type="text" class="validate">
                  <label for="last_name">Tipo de Taco</label>
                </div>
                <a class="waves-effect waves-light btn amber">Buscar</a>
            </div>
          </form>
      </div>
          <div class="row" >
            <div class="col s12 m3" v-for="taq in taquerias">
              <div class="card">
                <div class="card-image">
                  <img v-bind:src="taq.imagen" />
                  <span class="card-title">{{taq.nombre}}</span>
                  <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                </div>
                <div class="card-content">
                  <p>{{taq.ubicacion}}</p>
                </div>
              </div>
            </div>
          </div>
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
    $('.parallax').parallax()
    //$('.sidenav').sidenav()
    $(".dropdown-trigger").dropdown()
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
