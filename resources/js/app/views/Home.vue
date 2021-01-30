<template>
	<div class="home" style="padding: 50px; border-radius: 10px; height: 100%">
		<v-row>
			<v-col>
				<h1
					class="display-3 hidden-sm-and-down"
					style="text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue"
				>
					TODO-LIST
				</h1>
				<h1
					class="display-1 hidden-md-and-up"
					style="text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue"
				>
					TODO-LIST
				</h1>
			</v-col>
		</v-row>
		<v-row>
			<v-col md="3">
				<v-select
					color="grey"
					class="mt-10"
					rounded
					filled
					v-model="priorite"
					:items="priorites"
					item-text="priorite"
					label="priorité"
					return-object
					placeholder="filtrer par priorité"
					@change="getPriorite()"
				></v-select>
			</v-col>
		</v-row>
		<v-row class="ma-0 my-5">
				<addTodo @createTodo="add($event)" />
		</v-row>
			<v-card class="pa-3 mt-10" width="600" elevation="0" shaped outlined>
				<v-row>
					<v-col cols="6" sm="6" md="6">
						<div class="caption grey--text">TACHES</div>
					</v-col>
					<v-col cols="6" sm="6" md="6">
						<v-row class="ma-0" align="center" justify="end">
							<div class="caption grey--text">ACTIONS</div>
						</v-row>
					</v-col>
				</v-row>
				<v-divider class="my-5"></v-divider>
				<v-row
					v-for="(todo, key) in todos"
					:key="key"
					align="center"
					justify="start"
				>
					<v-col cols="6" sm="6" md="6" class="mb-2">
						<div
							v-if="todo.is_check == true"
							style="text-decoration: line-through"
						>
							{{ todo.titre }}
						</div>
						<div v-else>{{ todo.titre }}</div>
					</v-col>
					<v-col cols="6" sm="6" md="6">
						<v-row align="center" justify="end">
							<detailsTodo :todo="todo" @update="update($event)" />

							<v-checkbox
								class="ml-3"
								color="deep-purple lighten-1"
								v-model="todo.is_check"
								@change="isCheck(todo.is_check, todo)"
							></v-checkbox>
						</v-row>
					</v-col>
					<div class="caption grey--text" style="display: none">_</div>
					<v-divider class="ma-4"> </v-divider>
				</v-row>
			</v-card>
	</div>
</template>

<script src="./home.js" />