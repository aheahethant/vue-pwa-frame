<template>
  <v-card>
    <v-card-title>
      User list
      <v-spacer></v-spacer>
      <v-form ref="form">
        <v-row class="filter-bar">
          <v-col md="2.5">
            <v-text-field label="Name" hide-details="auto"></v-text-field>
          </v-col>
          <v-col md="2.5">
            <v-text-field label="Email" hide-details="auto"></v-text-field>
          </v-col>
          <v-col md="2.5">
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="From"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
            </v-menu>
          </v-col>
          <v-col md="2.5">
            <v-menu
              v-model="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date1"
                  label="To"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" @input="menu1 = false"></v-date-picker>
            </v-menu>
          </v-col>
          <v-btn class="user-list-btn mr-4" color="primary">Search</v-btn>
        </v-row>
      </v-form>
    </v-card-title>
    <v-container>
      <v-data-table :headers="headers" :items="showList">
        <template v-slot:[`item.profile`]="{ item }">
          {{ item.profile }}
        </template>
        <template v-slot:[`item.name`]="{ item }">
          <v-btn class="red--text" text @click="showDetail(item)">
            {{ item.name }}
          </v-btn>
        </template>

        <template v-slot:[`item.type`]="{ item }">
          <div v-if="item.type === '0'">Admin</div>
          <div v-else>User</div>
        </template>
        <template v-slot:[`item.operation`]="{ item }">
          <div class="row">
            <div class="operation-btn">
              <v-btn color="primary" class="user-list-btn" v-on:click="editUser(item)"
                >Edit</v-btn
              >
            </div>
            <div class="operation-btn">
              <v-btn color="error" class="user-list-btn" v-on:click="destroy(item)"
                >Delete</v-btn
              >
            </div>
          </div>
        </template>
      </v-data-table>
    </v-container>
  </v-card>
</template>

<script src="../../services/pages/user/user-list.js"></script>

<style scoped src="../../assets/css/pages/user/user-list.css"></style>
