<template>
	<div class="text-center">
		<v-menu offset-y persistent :close-on-content-click="false">
			<template v-slot:activator="{ on, attrs }">
				<v-btn outlined depressed v-bind="attrs" v-on="on"
					>Ajouter une tache<v-icon class="ml-9" color="deep-purple lighten-1"
						>mdi-plus</v-icon
					></v-btn
				>
			</template>
			<v-list>
				<v-form ref="form" v-model="valid" :lazy-validation="lazy">
					<v-list-item>
						<v-list-item-title>
							<v-text-field
								v-model="titre"
								required
								:rules="rules"
								placeholder="titre"
							></v-text-field>
						</v-list-item-title>
					</v-list-item>
					<v-list-item>
						<v-list-item-title>
							<v-text-field
								v-model="description"
								placeholder="description"
								:rules="rules"
								required
							></v-text-field>
						</v-list-item-title>
					</v-list-item>
					<v-list-item>
						<v-list-item-title>
							<v-select
								v-model="priorite"
								:items="priorites"
								item-text="priorite"
								return-object
								placeholder="priorite"
								:rules="[(v) => !!v || 'item is required']"
								required
							></v-select>
						</v-list-item-title>
					</v-list-item>
					<v-list-item>
						<v-list-item-title>
							<v-text-field
								v-model="date_execution"
								:rules="rules"
								required
								placeholder="deadline"
							></v-text-field>
						</v-list-item-title>
					</v-list-item>
				</v-form>

				<v-list-item>
					<v-btn
						icon
						color="success"
						@click="addTodoBdd(todo)"
						:disabled="!valid"
					>
						<v-icon>mdi-check</v-icon></v-btn
					> <div v-if='error != null' style='color:red'>{{ this.error }}</div>
				</v-list-item>
			</v-list>
		</v-menu>
	</div>
</template>

<script src="./addTodo.js" />