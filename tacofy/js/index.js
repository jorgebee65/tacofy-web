var btnLogin = $('#btnLogIn');
var btnLogOut = $('#btnLogOut');
var fbbtnLogin = $('#fbBtnLogIn');
var fbbtnLogOut = $('#fbBtnLogOut');


firebase.auth().onAuthStateChanged(function(user){
	console.log(user);
	if(user){
		console.log('Tenemos usuario');
		fbbtnLogin.hide();
		fbbtnLogOut.show();
	}else{
		console.log('No hay usuario');
		fbbtnLogin.show();
		fbbtnLogOut.hide();
	}
});

btnLogin.on('click',function(){
	console.log('funciona boton');
	var provider = new firebase.auth.GoogleAuthProvider();
	provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
	firebase.auth().signInWithPopup(provider)
	.then(function(datosUsuario){
		console.log(datosUsuario);
	}).catch(function(error){
		console.log(error);
	})
});

btnLogOut.on('click',function(){
	var provider = new firebase.auth.GoogleAuthProvider();
	console.log('funciona logout');
	firebase.auth().signOut().then(function(){
		alert('Se ha cerrado la sesión');
	})
});

fbbtnLogin.on('click',function(){
	console.log('funciona boton');
	var provider = new firebase.auth.FacebookAuthProvider();
	provider.addScope('public_profile');
	firebase.auth().signInWithPopup(provider)
	.then(function(datosUsuario){
		console.log(datosUsuario);
	}).catch(function(error){
		console.log(error);
	})
});

fbbtnLogOut.on('click',function(){
	var provider = new firebase.auth.GoogleAuthProvider();
	console.log('funciona logout');
	firebase.auth().signOut().then(function(){
		alert('Se ha cerrado la sesión');
	})
});



