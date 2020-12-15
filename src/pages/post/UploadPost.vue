<template>
  <v-card class="mx-auto" max-width="800">
    <v-card-title>
      <span class="title font-weight-light">Post Edit</span>
    </v-card-title>
    <v-form ref="form" v-model="valid" @submit.prevent="editPost">
      <v-card-text>
        <div>{{ error }}</div>
        <div>
          <v-text-field
            v-model="post.title"
            type="text"
            label="Title"
            :rules="titleRules"
            hide-details="auto"
          ></v-text-field>
        </div>
      </v-card-text>
      <v-card-actions>
        <div>
          <v-spacer></v-spacer>
          <v-btn type="submit" class="ml-2" large color="primary">Upload</v-btn>
          <v-btn type="reset" class="ml-2" large color="secondary">Clear</v-btn>
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script src="../../services/pages/post/upload-post.js"></script>
