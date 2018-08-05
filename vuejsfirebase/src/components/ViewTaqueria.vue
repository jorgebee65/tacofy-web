<template>
	<div id="view-taq">
		<h3>{{taqueria.nombre}}</h3>
	</div>
</template>
<script>
	import axios from 'axios'
	const URL = "http://localhost:8080/tacofy/taquerias/"
	export default{
		name: 'view-taq',
		data(){
			return{
				taqueria : null
			}
		},
		beforeRouteEnter(to, from, next){
			console.log(to.params.taq_id)
			axios.get(URL+to.params.taq_id).then(response => {
				next(vm => {
                        vm.taqueria = response.data;
                    });
	    	})
		}
	}
</script>