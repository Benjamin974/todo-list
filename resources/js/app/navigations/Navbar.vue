<template>
	<v-row class="mt-5 d-flex justify-end" v-if='isChecked'>
		<v-menu offset-y persistent :close-on-content-click="false">
			<template v-slot:activator="{ on, attrs }">
				<v-btn v-bind="attrs" v-on="on" color="purple lighten-1" to="/" icon>
					<v-icon color="brown darken-4">mdi-logout</v-icon>
				</v-btn>
			</template>
			<v-list>
				<v-list-item>
					<v-list-item-title>Voulez vous vous deconnecter ? </v-list-item-title>
				</v-list-item>
				<v-list-item>
					<v-row>
						<v-col>
						</v-col>
							<v-col class="d-flex justify-end">
							<v-btn icon @click='logout()'> <v-icon>mdi-check</v-icon></v-btn>
						</v-col>
					</v-row>
				</v-list-item>
			</v-list>
		</v-menu>
	</v-row>
</template>

<script src="./navbar.js" />