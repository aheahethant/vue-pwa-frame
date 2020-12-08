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
              <v-date-picker
                v-model="date"
                @input="menu = false"
              ></v-date-picker>
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
              <v-date-picker
                v-model="date"
                @input="menu1 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-btn class="user-list-btn mr-4" color="primary">Search</v-btn>
        </v-row>
      </v-form>
    </v-card-title>
    <v-container>
      <v-data-table :headers="headers" :items="showList">
        <template v-slot:[`item.name`]="{ item }">
          <v-dialog
            v-model="selectedDialogNote[item.id]"
            :key="item.id"
            width="500"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="red--text" text v-bind="attrs" v-on="on">
                {{ item.name }}
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="headline grey lighten-2">
                User Detail
              </v-card-title>

              <v-card-text>
                <table>
                  <tr>
                    <td>
                        <img :src="'http://localhost:8000/storage_image/1607313120.jpg'" width="100%" height="5%">
                    </td>
                    <td>Name</td>
                    <td class="red--text">{{ item.name }}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Type</td>
                    <td class="red--text">{{ item.type }}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Email</td>
                    <td class="red--text">{{ item.email }}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Phone</td>
                    <td class="red--text">{{ item.phone }}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Date Of Birth</td>
                    <td class="red--text">{{ item.dob }}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Address</td>
                    <td class="red--text">{{ item.address }}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Created Date</td>
                    <td class="red--text">{{ item.created_at }}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Created User</td>
                    <td class="red--text">{{ item.create_user_id }}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Updated Date</td>
                    <td class="red--text">{{ item.updated_at }}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Updated User</td>
                    <td class="red--text">{{ item.updated_user_id }}</td>
                  </tr>
                </table>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  text
                  v-on:click = "hideDetail"
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:[`item.type`]="{ item }">
          <div v-if="item.type === '0'">Admin</div>
          <div v-else>User</div>
        </template>
        <template v-slot:[`item.operation`]>
          <div class="row">
            <div class="operation-btn">
              <v-btn color="primary" class="user-list-btn">Edit</v-btn>
            </div>
            <div class="operation-btn">
              <v-btn color="error" class="user-list-btn">Delete</v-btn>
            </div>
          </div>
        </template>
      </v-data-table>
    </v-container>
  </v-card>
</template>

<script src="../../services/pages/user/user-list.js">
</script>

<style scoped src="../../assets/css/pages/user/user-list.css">
</style>
