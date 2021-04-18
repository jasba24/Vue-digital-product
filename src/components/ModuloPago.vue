<template>
	<div class="modulo__pago">
		<div class="modulo__pago--img">
			<img :src="CatBox" alt="imagen del producto" />
		</div>
		<div class="modulo__pago--text">
			<h1>{{ ModuloTitle }}</h1>
			<p>
				{{ ModuloDescription }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "ModuloPago",

	props: {
		CatBox: String,
		ModuloTitle: String,
		ModuloDescription: String,
	},
}
</script>

<style scoped>
.modulo__pago {
	background-color: var(--black);
	box-shadow: var(--box);
	padding: 10px;
	color: white;
	width: 33.33333333333333%;
}

.modulo__pago--img {
	max-width: 150px;
	text-align: center;
	margin: auto;
}

.modulo__pago--img img {
	width: 150px;
}

.modulo__pago--text h1 {
	margin: 0;
}
</style>
