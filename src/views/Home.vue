<template>
	<div id="app">
		<product-header :brand="brand" :links="links" />
		<product-hero :heroTitle="heroTitle"></product-hero>
	</div>
</template>

<script>
import brand from "@/assets/brand.webp"
import ProductHeader from "@/components/ProductHeader.vue"
import ProductHero from "../components/ProductHero.vue"

export default {
	name: "home",
	components: {
		ProductHeader,
		ProductHero,
	},
	data() {
		return {
			brand: brand,
			heroTitle:
				"Este es un producto increíble, no que haces viendo que lo puedes tener",
			links: [
				{
					href: "#footer",
					name: "Faqs",
				},
				{
					href: "Producto.vue",
					name: "Producto y descripción",
				},
			],
		}
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
