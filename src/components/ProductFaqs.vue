<template>
	<div>
		<div
			:class="isProducto ? 'faqs transparent' : 'faqs'"
			v-if="hasIntermedio === 'true'"
		>
			<div :class="isProducto ? 'faqs__details--product' : 'faqs__details'">
				<h2>{{ FaqsTitle }}</h2>
				<p>{{ FaqsDescription }} {{ FaqsDescription2 }}</p>
			</div>
			<div :class="isProducto ? 'faqs__img--product' : 'faqs__img'">
				<img :src="FaqsSrc" alt="imagen del producto" />
			</div>
		</div>
		<div :class="isProducto ? 'faqs transparent' : 'faqs'" v-else="">
			<div :class="isProducto ? 'faqs__img--product' : 'faqs__img'">
				<img :src="FaqsSrc" alt="imagen del producto" />
			</div>
			<div :class="isProducto ? 'faqs__details--product' : 'faqs__details'">
				<h2>{{ FaqsTitle }}</h2>
				<p>{{ FaqsDescription }} {{ FaqsDescription2 }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "productFaqs",

	props: {
		FaqsDescription: String,
		FaqsDescription2: String,
		FaqsTitle: String,
		FaqsSrc: String,
		hasIntermedio: String,
		isProducto: Boolean,
	},
}
</script>

<style scoped>
.faqs {
	padding: 20px;
	background-color: var(--black);
	border: 1px solid white;
	color: white;
}

.faqs__img img {
	width: 138px;
	height: 113px;
}

.Product {
	display: flex;
	align-items: center;
	background-color: transparent;
	border: none;
	color: black;
}

.faqs__img--product {
	width: 33.33333333333333%;
}

.faqs__img--product img {
	width: 100%;
	height: auto;
}

.faqs__details--product {
	width: 66.66666666666666%;
	font-size: 14px;
}
</style>
