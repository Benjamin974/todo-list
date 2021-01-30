<template>
	<v-app>
		<link
			href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css"
			rel="stylesheet"
		/>
		<v-container>
			<navbar></navbar>
		</v-container>
		<v-main class="fond">
			<v-container fluid>
				<router-view></router-view>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import Navbar from "../navigations/Navbar";

export default {
	components: {
		Navbar,
	},
};
</script>

<style scoped>
.fond {
	background: linear-gradient(white, grey);
}
</style>