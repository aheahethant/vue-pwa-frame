<template>
  <v-card class="mx-auto" max-width="800">
    <v-card-title>
      <span class="title font-weight-light">Upload Post</span>
    </v-card-title>
    <v-form ref="form" @submit.prevent="uploadPost">
      <v-card-text>
        <div class="mt-5 mb-5">
          <input type="file" @change="csv_file" style="display: none" ref="fileInput" />
          <v-btn @click="$refs.fileInput.click()" color="indigo">upload post</v-btn>
          <v-text-field v-model="file" style="display: none"></v-text-field>
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
