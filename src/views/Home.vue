<template>
	<main id="app">
		<product-header :brand="brand" :links="links" />
		<product-hero :heroTitle="heroTitle"></product-hero>
		<section class="products" v-for="product in products" :key="product.id">
			<product-item :ProductHref="product.href" :ProductSrc="product.src" />
		</section>
	</main>
</template>

<script>
import brand from "@/assets/brand.webp"
import HumanBox from "@/assets/HumanBox.webp"
import CatBox from '@/assets/CatBox.webp'
import ProductHeader from "@/components/ProductHeader.vue"
import ProductHero from "../components/ProductHero.vue"
import ProductItem from "@/components/ProductItem"

export default {
	name: "home",
	components: {
		ProductHeader,
		ProductHero,
		ProductItem,
	},
	data() {
		return {
			brand: brand,
			products: [
				{
					src: HumanBox,
					href: "Venta",
					id: "1"
				},
				{
					src: CatBox,
					href: "Venta",
					id: "2"
				},
			],
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
