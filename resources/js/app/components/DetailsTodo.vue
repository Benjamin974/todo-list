<template>
	<v-dialog v-model="dialog">
		<template v-slot:activator="{ on, attrs }">
			<v-btn icon v-bind="attrs" v-on="on">
				<v-icon>mdi-clipboard-text</v-icon>
			</v-btn>
		</template>
		<v-card>
			<v-toolbar color="deep-purple lighten-1" dark>
				<v-row>
					<v-col class="mt-3">
						{{ todo.titre }}
					</v-col>
					<v-col class="d-flex justify-end"> 
            <updateTodo :todo='todo' @updateTodo='update($event)'/>
          </v-col>
				</v-row>
			</v-toolbar>
			<v-card-text>
				<div class="text-h2 pa-12">{{ todo.description }}</div>
				<div class="text-h4 pa-12">Priorité : {{ todo.priorite.priorite }}</div>
				<div class="text-h4 pa-12">Deadline : {{ todo.date_execution }}</div>
				<div v-if='todo.is_check == false' class="text-h4 pa-12" style='color: red'>Pas encore effectué</div>
				<div color='red' v-if='todo.is_check == true' class="text-h4 pa-12" style='color: green'>Effectué</div>
				
			</v-card-text>
			<v-card-actions class="justify-end">
				<v-btn text color='error' @click="dialog = false">Fermer</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script src="./detailsTodo.js" />