<template>
	<div class="container fadeInUp">
		<div class="content">
			<div class="img__container">
				<img :src="ProductSrc" alt="imagen del producto" />
			</div>
			<div class="text__container">
				<h1>{{ productTitle }}</h1>
				<p>
					{{ ProductDescription }}
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
		ProductDescription: String,
	},

	data() {
		return {
			productTitle: "Producto 1",
		}
	},
}
</script>

<style scoped>
.content {
	background-color: #313337;
	margin-right: 20px;
	margin-top: -230px;
}

.img__container {
	margin: 0 auto;
	padding: 1% 5%;
	text-align: center;
}

.img__container img {
	width: 200px;
}

.text__container {
	display: flex;
	flex-direction: column;
	padding: 5%;
	padding-top: 0;
	color: white;
}

.text__container h1 {
	margin-top: 0;
	margin-left: auto;
	margin-right: auto;
}

.text__container p {
	margin-top: 0;
}

.text__container button {
	background-color: var(--primary-color);
	width: 100%;
	padding: 10px;
	font-size: 14px;
	color: white;
	border: 0;
	cursor: pointer;
	border-radius: 2px;
	font-weight: bold;
	font-size: 14px;
}

.text__container button:hover {
	background-color: #5e9e22;
}
</style>
