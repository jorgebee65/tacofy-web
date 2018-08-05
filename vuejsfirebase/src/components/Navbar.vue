<template>
	<div id="navbar">
		<nav>
	      <div class="nav-wrapper amber">
	        <router-link to="/" class="brand-logo titles" style="padding-left: 20px;">Tacofy</router-link>
	        <ul class="right hide-on-med-and-down">
	          <li><a href="sass.html">Nosotros</a></li>
	          <li><a href="badges.html">Contacto</a></li>
	          <li><router-link to="/new">Registrate</router-link></li>
	          <li><a id="fbBtnLogIn" v-on:click="login()">Iniciar Sesión</a></li>
	          <li><a id="fbBtnLogOut" v-on:click="logOut()">Cerrar Sesión</a></li>
	          <li><a  class="dropdown-trigger" href="#!" data-target="dropdown1"><i class="material-icons">more_vert</i></a></li>
	        </ul>
	      </div>
	    </nav>
	</div>
</template>
<script>
	import Firebase from 'firebase';
	
	export default{
		name: 'navbar',
		data(){
			return{
			}
		},
	  methods:{
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