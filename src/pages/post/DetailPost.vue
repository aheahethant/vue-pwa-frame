<template>
  <v-card class="mx-auto" max-width="800">
    <v-card-title>
      <span class="title font-weight-light">Post Detail</span>
    </v-card-title>
    <v-card-text>
      <v-container class="grey lighten-5">
        <v-row>
          <v-col> Title </v-col>
          <v-col class="red--text">{{ title }}</v-col>
        </v-row>
        <v-row>
          <v-col> Description </v-col>
          <v-col class="red--text">{{ description }}</v-col>
        </v-row>
        <v-row>
          <v-col> Status </v-col>
          <v-col class="red--text">{{ status }}</v-col>
        </v-row>
        <v-row>
          <v-col> Created Date </v-col>
          <v-col class="red--text">{{ created_date | moment }}</v-col>
        </v-row>
        <v-row>
          <v-col> Updated Date </v-col>
          <v-col class="red--text">{{ updated_date | moment }}</v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions class="float-right">
      <div>
        <v-spacer></v-spacer>
        <v-btn large color="primary" @click="close()">Close</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script src="../../services/pages/post/detail-post.js"></script>
