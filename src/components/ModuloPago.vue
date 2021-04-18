<template>
	<div class="modulo__pago">
		<div class="modulo__pago--img">
			<img :src="brand" alt="imagen del producto" />
		</div>
		<div class="modulo__pago--text">
			<h1>{{ModuloTitle}}</h1>
			<p>
				{{ModuloDescription}}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "ModuloPago",

	props: {},
}
</script>

<style></style>
