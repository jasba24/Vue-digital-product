<template>
	<div class="faqs">
		<div class="faqs__img">
			<img :src="FaqsSrc" alt="imagen del producto" />
		</div>
		<div class="faqs__details">
			<h2>{{ FaqsTitle }}</h2>
			<p>
				{{ FaqsDescription }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "productFaqs",

	props: {
		FaqsDescription: String,
		FaqsTitle: String,
		FaqsSrc: String,
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

.Product > .faqs__img {
	width: 33.33333333333333%;
}

.Product > .faqs__img img {
	width: 100%;
	height: auto;
}

.Product > .faqs__details {
	width: 66.66666666666666%;
	font-size: 14px;
}
</style>
