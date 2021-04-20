<template>
	<main>
		<product-header :brand="brand" :links="links" footer="#footer"></product-header>
		<div class="container__productos">
			<h1>Productos</h1>
			<product-faqs
				v-for="faq in faqs"
				isProducto
				:key="faq.title"
				:FaqsDescription="productText"
				:FaqsDescription2="productText"
				:FaqsTitle="faq.title"
				:FaqsSrc="faq.src"
				:hasIntermedio="faq.hasIntermedio"
			></product-faqs>
		</div>
	</main>
</template>

<script>
import brand from "@/assets/brand.webp"
import cat1 from "@/assets/cat1.webp"
import CatBox from "@/assets/CatBox.webp"
import ProductFaqs from "@/components/ProductFaqs"
import ProductHeader from "@/components/ProductHeader"

export default {
	name: "Producto",
	components: {
		ProductHeader,
		ProductFaqs,
	},

	data() {
		return {
			brand: brand,
			productText:
				"Miles de productos hay en el mercado, pero nada como una caja con gatitos",
			links: [
				{
					href: "/",
					name: "Home",
				},
				{
					href: "/venta",
					name: "Comprar",
				},
			],
			faqs: [
				{
					src: cat1,
					title: "Producto 1",
				},
				{
					src: CatBox,
					title: "Producto 2",
					hasIntermedio: "true",
				},
				{
					src: cat1,
					title: "Producto 3",
				},
			],
		}
	},
}
</script>

<style>
.faqs.transparent {
	display: flex;
	align-items: center;
	background-color: transparent;
	border: none;
	color: black;
}
</style>
