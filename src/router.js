import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home"
import Producto from "@/views/Producto"
import Venta from "@/views/Venta"
import NotFound from "@/components/NotFound"

Vue.use(Router)

export default new Router({
	mode: "history",

	scrollBehavior(to) {
		if (to.hash) {
			return {
				selector: to.hash,
			}
		}
	},

	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/producto",
			name: "producto",
			component: Producto,
		},
		{
			path: "/venta",
			name: "venta",
			component: Venta,
		},
		{
			path: "*",
			name: "NotFound",
			component: NotFound,
		},
	],
})
