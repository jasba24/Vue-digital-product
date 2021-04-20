<template>
	<main id="app">
		<product-header :brand="brand" :links="links" />
		<product-hero :heroTitle="heroTitle" />
		<section class="products">
			<product-item
				v-for="product in products"
				:key="product.id"
				:ProductHref="product.href"
				:ProductSrc="product.src"
				:ProductDescription="productText"
			/>
		</section>
		<section class="faqs__container">
			<product-faqs
				v-for="faq in faqs"
				:key="faq.title"
				:FaqsDescription="productText"
				:FaqsTitle="faq.title"
				:FaqsSrc="faq.src"
			/>
		</section>
		<section class="mentions__title" id="mention"><h3>Menciones</h3></section>
		<section class="Mentions">
			<mention
				v-for="mention in mentions"
				:key="mention.title"
				:mentionTitle="mention.title"
				:mentionDescription="productText"
				:mentionSrc="mention.src"
			/>
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
import people1 from "@/assets/people1.webp"
import people2 from "@/assets/people2.webp"
import people3 from "@/assets/people3.webp"
import people4 from "@/assets/people4.webp"
import "../assets/fondo.webp"
import ProductHeader from "@/components/ProductHeader.vue"
import ProductHero from "../components/ProductHero.vue"
import ProductItem from "@/components/ProductItem"
import ProductFaqs from "@/components/ProductFaqs"
import Mention from "@/components/Mention"

export default {
	name: "home",
	components: {
		ProductHeader,
		ProductHero,
		ProductItem,
		ProductFaqs,
		Mention,
	},

	data() {
		return {
			productText:
				"Miles de productos hay en el mercado, pero nada como una caja con gatitos",
			faqs: [
				{
					src: cute,
					title: "Los más suavecitos",
				},
				{
					src: moon,
					title: "Lo más increíble",
				},
				{
					src: hot,
					title: "Lo más confiable",
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
					href: "/producto",
					name: "Producto y descripción",
				},
			],
			mentions: [
				{
					src: people1,
					title: "Mario",
				},
				{
					src: people2,
					title: "Maria",
				},
				{
					src: people3,
					title: "Joe",
				},
				{
					src: people4,
					title: "Jamaica",
				},
			],
		}
	},
}
</script>
