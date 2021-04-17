<template>
	<div class="faqs">
		<div class="faqs__img">
			<img :src="FaqsSrc" alt="imagen del producto" />
		</div>
		<div class="faqs__details">
			<h2>{{ FaqsTitle }}</h2>
			<p>
				{{ FaqsDescription }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "productFaqs",

	props: {
		FaqsDescription: String,
		FaqsTitle: String,
		FaqsSrc: String,
	},
}
</script>

<style></style>
