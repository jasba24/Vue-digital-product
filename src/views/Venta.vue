<template>
	<main>
		<product-header :brand="brand" :links="links"></product-header>
		<div class="container__venta">
			<modulo-pago
				:CatBox="CatBox"
				:ModuloTitle="ModuloTitle"
				:ModuloDescription="ModuloDescription"
			></modulo-pago>
			<pago></pago>
		</div>
	</main>
</template>

<script>
import brand from "@/assets/brand.webp"
import CatBox from "@/assets/CatBox.webp"
import ModuloPago from "@/components/ModuloPago"
import Pago from '@/components/Pago'
import ProductHeader from "@/components/ProductHeader"
export default {
	name: "Venta",

	components: {
		ProductHeader,
		ModuloPago,
		Pago,
	},

	data() {
		return {
			brand: brand,
			CatBox: CatBox,
			links: [
				{
					href: "/",
					name: "Regresa al home",
				},
			],
			ModuloTitle: "Producto 1",
			ModuloDescription:
				"Miles de productos hay en el mercado, pero nada como una caja con gatitos",
		}
	},
}
</script>
