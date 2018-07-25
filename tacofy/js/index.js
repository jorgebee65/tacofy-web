var btnLogin = $('#btnLogIn');
var btnLogOut = $('#btnLogOut');

firebase.auth().onAuthStateChanged(function(user){
	console.log(user);
	if(user){
		console.log('Tenemos usuario');
		btnLogin.hide();
		btnLogOut.show();
	}else{
		console.log('No hay usuario');
		btnLogin.show();
		btnLogOut.hide();
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



