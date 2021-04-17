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
		<footer class="footer">
			<a href="#">Terminos y condiciones</a
			><a
				target="_blank"
				href="mailto:contacto@mail.com"
				rel="noopener noreferrer"
				>contacto@mail.com</a
			>
		</footer>
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
					href: "Producto.vue",
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

<style>
:root {
	--primary-color: #7acc2d;
	--secondary-color: #00fff2;
	--black: #313337;
	--box: 0 0 2px #c1bcbc;
}

body {
	font-family: "Open Sans", sans-serif;
	background-color: var(--secondary-color);
	margin: 0;
}

.Hero {
	padding: 15%;
	text-align: center;
}

.products {
	display: flex;
	justify-content: center;
	background-image: url("../assets/fondo.webp");
	height: 50px;
	background-size: cover;
	background-position: center top;
	padding: 15%;
}

.faqs__container {
	padding: 5% 10%;
	display: flex;
	text-align: center;
}

.Mentions {
	display: flex;
	padding: 5%;
}

.mentions__title {
	text-align: center;
}

.container__venta {
	display: flex;
	justify-content: center;
	max-width: 900px;
	padding: 104px 0;
	margin: auto;
}

.footer {
	width: 100%;
	height: 60px;
	background-color: var(--black);
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.footer a {
	color: white;
	text-decoration: none;
	margin: 0 20px;
}

.footer a:hover {
	color: var(--primary-color);
}

.container__productos {
	max-width: 900px;
	margin: auto;
	padding: 70px 0;
}

.fadeIn {
	animation-duration: 4s;
	-webkit-animation-duration: 4s;
	animation-fill-mode: both;
	-webkit-animation-fill-mode: both;
	animation-name: fadeIn;
	-webkit-animation-name: fadeIn;
}

.fadeInDown {
	animation-duration: 1s;
	-webkit-animation-duration: 1s;
	animation-fill-mode: both;
	-webkit-animation-fill-mode: both;
	animation-name: fadeInDown;
	-webkit-animation-name: fadeInDown;
}

.fadeInUp {
	animation-duration: 1s;
	-webkit-animation-duration: 1s;
	animation-fill-mode: both;
	-webkit-animation-fill-mode: both;
	animation-name: fadeInUp;
	-webkit-animation-name: fadeInUp;
}

@keyframes fadeIn {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

@keyframes fadeInDown {
	0% {
		opacity: 0;
		transform: translate3d(0, -100%, 0);
		-webkit-transform: translate3d(0, -100%, 0);
	}
	100% {
		opacity: 1;
		transform: translate3d(0, 0, 0);
		-webkit-transform: translate3d(0, -0, 0);
	}
}

@keyframes fadeInUp {
	0% {
		opacity: 0;
		transform: translate3d(0, 100%, 0);
		-webkit-transform: translate3d(0, 100%, 0);
	}

	100% {
		opacity: 1;
		transform: translate3d(0, 0, 0);
		-webkit-transform: translate3d(0, -0, 0);
	}
}
</style>
