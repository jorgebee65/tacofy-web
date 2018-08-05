<template>
  <div>
    <nav>
      <div class="nav-wrapper amber">
        <a href="#" class="brand-logo titles" style="padding-left: 20px;">Tacofy</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="sass.html">Nosotros</a></li>
          <li><a href="badges.html">Contacto</a></li>
          <li><a href="collapsible.html">Registrate</a></li>
          <li><a id="fbBtnLogIn" v-on:click="login()">Iniciar Sesión</a></li>
          <li><a id="fbBtnLogOut" v-on:click="logOut()">Cerrar Sesión</a></li>
          <li><a  class="dropdown-trigger" href="#!" data-target="dropdown1"><i class="material-icons">more_vert</i></a></li>
        </ul>
      </div>
    </nav>
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
                  <img :src="getImageUrl(taq.id)" />
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

import getTaquerias from './api'
import Firebase from 'firebase';

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
  },
  methods:{
    getImageUrl: function(id){
      return "http://localhost:8080/tacofy/taquerias/"+id+"/image";
    },
    login: function(){
      console.log('funciona boton');
      var provider = new Firebase.auth.FacebookAuthProvider();
      provider.addScope('public_profile');
      Firebase.auth().signInWithPopup(provider)
      .then(function(datosUsuario){
        console.log(datosUsuario);
      }).catch(function(error){
        console.log(error);
      })
    },
    logOut: function(){
      var provider = new Firebase.auth.GoogleAuthProvider();
      console.log('funciona logout');
      Firebase.auth().signOut().then(function(){
        alert('Se ha cerrado la sesión');
      })
    }
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
