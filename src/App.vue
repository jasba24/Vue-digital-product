<template>
	<main id="app">
		<router-view />
		<product-footer />
	</main>
</template>

<script>
import ProductFooter from "@/components/ProductFooter"

export default {
	name: "App",

	components: {
		ProductFooter,
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
	margin: 0;
}

#app {
	background-color: var(--secondary-color);
}

.Hero {
	padding: 15%;
	text-align: center;
}

.products {
	display: flex;
	justify-content: center;
	background-image: url("./assets/fondo.webp");
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

#footer {
	width: 100%;
	height: 60px;
	background-color: var(--black);
	display: flex;
	justify-content: space-between;
	align-items: center;
}

#footer a {
	color: white;
	text-decoration: none;
	margin: 0 20px;
}

#footer a:hover {
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
