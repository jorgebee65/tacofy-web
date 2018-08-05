import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Register from '@/components/Register'
import View from '@/components/ViewTaqueria'
import Edit from '@/components/EditTaqueria'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path:'/',
			name:'dashboard',
			component: Dashboard
		},
		{
			path:'/new',
			name:'register-taq',
			component: Register
		},
		{
			path:'/edit/:taq_id',
			name:'edit-taq',
			component: Edit
		},
		{
			path:'/view/:taq_id',
			name:'view-taq',
			component: View
		},
	]
})