import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home"
import Producto from "@/views/Producto"
import Venta from "@/views/Venta"
import NotFound from "@/components/NotFound"

Vue.use(Router)

export default new Router({
	mode: "history",

	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
		},
		{
			path: "/producto",
			name: "Producto",
			component: Producto,
		},
		{
			path: "/venta",
			name: "Venta",
			component: Venta,
		},
		{
			path: "*",
			name: "NotFound",
			component: NotFound,
		},
	],
})
