<template>
  <v-card>
    <v-card-title>
      Post list
      <v-spacer></v-spacer>
        <v-row class="filter-bar">
            <v-col md="2.5">
              <v-text-field
                label="Search keyword"
                v-model="search"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-btn class="post-list-btn mr-4" type="submit" color="primary" @click="filterPosts">Filter</v-btn>
          <router-link class="route-link post-list-btn mr-4" :to="{ name: 'create-post' }"
            ><v-btn color="primary">Create</v-btn></router-link
          >
          <v-btn class="post-list-btn mr-4" color="primary" @click="uploadPost()"
            >Upload</v-btn
          >
          <v-btn class="post-list-btn mr-4" color="primary">Download</v-btn>
        </v-row>
    </v-card-title>
    <v-container>
      <v-data-table :headers="headers" :items="showList">
        <template v-slot:[`item.title`]="{ item }">
          <v-btn class="red--text" text @click="showDetail(item)">
            {{ item.title }}
          </v-btn>
        </template>
        <template v-slot:[`item.created_at`]="{ item }">
          <p>{{ item.created_at | moment }}</p>
        </template>
        <template v-slot:[`item.operation`]="{ item }">
          <div class="row">
            <div class="operation-btn">
              <v-btn color="primary" class="post-list-btn" v-on:click="editPost(item)"
                >Edit</v-btn
              >
            </div>
            <div class="operation-btn">
              <v-btn color="error" class="post-list-btn" v-on:click="deletePost(item)"
                >Delete</v-btn
              >
            </div>
          </div>
        </template>
      </v-data-table>
    </v-container>
  </v-card>
</template>

<script src="../../services/pages/post/post-list.js"></script>

<style scoped src="../../assets/css/pages/post/post-list.css"></style>
