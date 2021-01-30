<template>
	<div class="text-center">
		<v-menu offset-y persistent :close-on-content-click="false">
			<template v-slot:activator="{ on, attrs }">
				<v-btn icon v-bind="attrs" v-on="on" @click="update()"
					><v-icon>mdi-pencil</v-icon></v-btn
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
					<v-btn icon :disabled="!valid" color="success" @click="updateTodoBdd(todo)">
						<v-icon>mdi-check</v-icon></v-btn
					> <div v-if='error != null' style='color:red'>{{ this.error }}</div>
				</v-list-item>
			</v-list>
		</v-menu>
	</div>
</template>

<script src="./updateTodo.js" />