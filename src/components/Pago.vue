<template>
	<form class="form__pago">
		<label for="name">Nombre</label>
		<input type="text" name="name" />
		<label for="mail">Email</label>
		<input type="email" name="mail" />
		<label for="phone">Teléfono</label>
		<input type="text" name="phone" />
		<button>Confirmar Pago</button>
	</form>
</template>

<script>
export default {
	name: "Pago",
}
</script>

<style scoped>
.form__pago {
	display: flex;
	flex-direction: column;
	background-color: var(--black);
	box-shadow: var(--box);
	padding: 10px;
	color: white;
	width: 66.66666666666666%;
	margin-left: 10px;
}

.form__pago input {
	margin: 10px 0 5px;
	width: 100%;
	height: 35px;
	border-radius: 2px;
	border: 1px solid white;
	box-sizing: border-box;
	background-color: var(--black);
	color: white;
}

.form__pago button {
	background-color: var(--primary-color);
	width: 100%;
	padding: 10px;
	font-size: 14px;
	color: white;
	border: 0;
	cursor: pointer;
	border-radius: 2px;
	font-weight: bold;
	margin-bottom: 7px;
	margin-top: 10px;
}

.form__pago button:hover {
	background-color: #5e9e22;
}
</style>
