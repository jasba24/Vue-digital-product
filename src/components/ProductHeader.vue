<template>
	<div>
		<div class="header__img">
			<img :src="brand" alt="logo" />
		</div>

		<div class="header__options" v-for="link in links" :key="link.name">
			<a :href="link.href">{{ link.name }}</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProductHeader",
	props: {
		brand: String,
		links: Array,
	},

	data() {
		return {}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
