<template>
	<div class="container fadeInUp">
		<div class="content">
			<div class="img__container">
				<img :src="ProductSrc" alt="imagen del producto" />
			</div>
			<div class="text__container">
				<h1>{{ productTitle }}</h1>
				<p>
					{{ productDescription }}
				</p>
				<a :href="ProductHref">
					<button>Lo quiero</button>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "productItem",

	props: {
		ProductHref: String,
		ProductSrc: String,
	},

	data() {
		return {
			productTitle: "Producto 1",
			productDescription:
				"Miles de productos hay en el mercado, pero nada como una caja con gatitos",
		}
	},
}
</script>

<style></style>
