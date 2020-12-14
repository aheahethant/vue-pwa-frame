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
          <v-dialog v-model="selectedDialogNote[item.id]" :key="item.id" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="red--text" text v-bind="attrs" v-on="on">
                {{ item.name }}
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="headline grey lighten-2"> User Detail </v-card-title>

              <v-card-text>
                <v-container class="grey lighten-5">
                  <v-row no-gutters>
                    <div class="float-left col-sm-4">
                      <v-col cols="12">
                        <v-card class="pa-1">
                          <img :src="img_url + item.profile" width="100%" height="50%" />
                        </v-card>
                      </v-col>
                    </div>
                    <div class="float-right col-sm-8">
                      <div class="row">
                        <div class="col-sm-5 float-left">Name</div>
                        <div class="col-sm-7 red--text float-right">
                          {{ item.name }}
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-5 float-left">Type</div>
                        <div class="col-sm-7 red--text float-right">
                          {{ item.type }}
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-5 float-left">Email</div>
                        <div class="col-sm-7 red--text float-right">
                          {{ item.email }}
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-5 float-left">Phone</div>
                        <div class="col-sm-7 red--text float-right">
                          {{ item.phone }}
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-5 float-left">Date of Birth</div>
                        <div class="col-sm-7 red--text float-right">
                          {{ item.dob }}
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-5 float-left">Address</div>
                        <div class="col-sm-7 red--text float-right">
                          {{ item.address }}
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-5 float-left">Created Date</div>
                        <div class="col-sm-7 red--text float-right">
                          {{ item.created_at }}
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-5 float-left">Created User</div>
                        <div class="col-sm-7 red--text float-right">
                          {{ item.create_user_id }}
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-5 float-left">Updated Date</div>
                        <div class="col-sm-7 red--text float-right">
                          {{ item.updated_at }}
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-5 float-left">Updated User</div>
                        <div class="col-sm-7 red--text float-right">
                          {{ item.updated_user_id }}
                        </div>
                      </div>
                    </div>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text v-on:click="hideDetail"> Close </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
