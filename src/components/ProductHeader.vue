<template>
	<header class="header">
		<div class="header__img">
			<img :src="brand" alt="logo" />
		</div>

		<div class="header__options">
			<router-link v-for="link in links" :key="link.name" :to="link.href">{{
				link.name
			}}</router-link>
		</div>
	</header>
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
<style scoped>
.header {
	width: 100%;
	height: 70px;
	background-color: var(--primary-color);
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
}

.header__img {
	padding: 1%;
}

.header__options {
	padding: 1%;
}

.header__options a {
	text-decoration: none;
	margin-left: 20px;
	color: black;
	font-weight: normal;
}

.header__options a:hover {
	color: white;
}
</style>
