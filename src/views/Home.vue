<template>
	<main id="app">
		<product-header :brand="brand" :links="links" />
		<product-hero :heroTitle="heroTitle" />
		<section class="products" v-for="product in products" :key="product.id">
			<product-item :ProductHref="product.href" :ProductSrc="product.src" />
		</section>
		<section class="faqs__container" v-for="faq in faqs" :key="faq.id">
			<product-faqs :FaqsDescription="faq.description" :FaqsTitle="faq.title" :FaqsSrc="faq.src" />
		</section>
	</main>
</template>

<script>
import brand from "@/assets/brand.webp"
import HumanBox from "@/assets/HumanBox.webp"
import CatBox from "@/assets/CatBox.webp"
import cute from "@/assets/cute.webp"
import moon from "@/assets/moon.webp"
import hot from "@/assets/hot.webp"
// import people1 from "@/assets/people1.webp"
// import people2 from "@/assets/people2.webp"
// import people3 from "@/assets/people3.webp"
// import people4 from "@/assets/people4.webp"
import ProductHeader from "@/components/ProductHeader.vue"
import ProductHero from "../components/ProductHero.vue"
import ProductItem from "@/components/ProductItem"
import ProductFaqs from "@/components/ProductFaqs"

export default {
	name: "home",
	components: {
		ProductHeader,
		ProductHero,
		ProductItem,
		ProductFaqs,
	},
	data() {
		return {
			faqs: [
				{
					src: cute,
					title: "Los más suavecitos",
					description: "Miles de productos hay en el mercado, pero nada como una caja con gatitos",
				},
				{
					src: moon,
					title: "Lo más increíble",
					description: "Miles de productos hay en el mercado, pero nada como una caja con gatitos",
				},
				{
					src: hot,
					title: "Lo más confiable",
					description: "Miles de productos hay en el mercado, pero nada como una caja con gatitos",
				},
			],
			brand: brand,
			products: [
				{
					src: HumanBox,
					href: "Venta",
					id: "1",
				},
				{
					src: CatBox,
					href: "Venta",
					id: "2",
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
