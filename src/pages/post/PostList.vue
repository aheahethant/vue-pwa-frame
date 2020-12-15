<template>
  <v-card>
    <v-card-title>
      Post list
      <v-spacer></v-spacer>
      <v-form ref="form">
        <v-row class="filter-bar">
          <v-col md="2.5">
            <v-text-field
              label="Search keyword"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-btn class="post-list-btn mr-4" color="primary">Filter</v-btn>
          <router-link
            class="route-link post-list-btn mr-4"
            :to="{ name: 'create-post' }"
            ><v-btn color="primary">Create</v-btn></router-link
          >
          <v-btn class="post-list-btn mr-4" color="primary">Upload</v-btn>
          <v-btn class="post-list-btn mr-4" color="primary">Download</v-btn>
        </v-row>
      </v-form>
    </v-card-title>
    <v-container>
      <v-data-table :headers="headers" :items="showList">
        <template v-slot:[`item.title`]="{ item }">
          <v-dialog
            v-model="selectedDialogNote[item.id]"
            :key="item.id"
            width="500"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="red--text" text v-bind="attrs" v-on="on">
                {{ item.title }}
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="headline grey lighten-2">
                Post Detail
              </v-card-title>

              <v-card-text>
                <table>
                  <tr>
                    <td>Title</td>
                    <td class="red--text">{{ item.title }}</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td class="red--text">{{ item.description }}</td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td class="red--text" v-if="item.status === 1">Admin</td>
                    <td class="red--text" v-else>User</td>
                  </tr>
                  <tr>
                    <td>Created Date</td>
                    <td class="red--text">{{ item.created_at }}</td>
                  </tr>
                  <tr>
                    <td>Created User</td>
                    <td class="red--text">{{ item.create_user_id }}</td>
                  </tr>
                  <tr>
                    <td>Updated Date</td>
                    <td class="red--text">{{ item.updated_at }}</td>
                  </tr>
                  <tr>
                    <td>Updated User</td>
                    <td class="red--text">{{ item.updated_user_id }}</td>
                  </tr>
                </table>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text v-on:click="hideDetail">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:[`item.operation`]= "{item}">
          <div class="row">
            <div class="operation-btn">
              <v-btn color="primary" class="post-list-btn" v-on:click="editPost(item)">Edit</v-btn>
            </div>
            <div class="operation-btn">
              <v-btn color="error" class="post-list-btn" v-on:click="deletePost(item)">Delete</v-btn>
            </div>
          </div>
        </template>
      </v-data-table>
    </v-container>
  </v-card>
</template>

<script src="../../services/pages/post/post-list.js">
</script>

<style scoped src="../../assets/css/pages/post/post-list.css">
</style>
