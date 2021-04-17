<template>
	<section class="Hero">
		<h1>{{ heroTitle }}</h1>
	</section>
</template>

<script>
export default {
	name: "ProductHero",

	props: {
		heroTitle: String,
	},
}
</script>

<style></style>
