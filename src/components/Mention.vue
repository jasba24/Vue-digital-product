<template>
	<div class="mentions">
		<div class="mentions__img-container">
			<div class="mentions__img">
				<img :src="mentionSrc" alt="imagen de la persona" />
				<div class="mentions__details">
					<h3>{{ mentionTitle }}</h3>
					<p>
						{{ mentionDescription }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Mention",

	props: {
		mentionTitle: String,
		mentionDescription: String,
		mentionSrc: String,
	},
}
</script>

<style scoped>
.mentions__img-container,
.mentions__details {
	padding: 10px;
}

.mentions__img {
	box-shadow: var(--box);
	background-color: white;
}

.mentions__img img {
	width: 100%;
}

.mentions__details h3,
.mentions__details p {
	margin: 5px 0 0 5px;
}
</style>
