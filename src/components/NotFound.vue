<template>
	<div class="content_paypal">
		<img :src="NotFoundSrc" alt="" />
		<h3>!Ouch! Tu página no fue encontrada.</h3>
		<p>Haz <a href="index.html">click aquí</a> para regresar al home</p>
	</div>
</template>

<script>
import CatBox from "@/assets/CatBox.webp"

export default {
	name: "NotFound",

	data() {
		return {
			NotFoundSrc: CatBox,
		}
	},
}
</script>

<style scoped>
.content_paypal {
	background-color: var(--black-color);
	text-align: center;
	color: var(--white-color);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
}

.content_paypal img {
	width: 200px;
	height: 200px;
}

.content_paypal a {
	color: var(--primary-color);
}
</style>
