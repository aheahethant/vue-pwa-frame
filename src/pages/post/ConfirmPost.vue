<template>
  <v-card class="mx-auto" max-width="800">
    <v-card-title>
      <span class="title font-weight-light">Confirm Post</span>
    </v-card-title>
    <v-form ref="form" v-model="valid" @submit.prevent="confirmPost">
      <v-card-text>
        <div>{{ error }}</div>
        <div>
          <v-text-field
            v-model="post.title"
            type="text"
            label="Title"
            :rules="titleRules"
            hide-details="auto"
            >{{ post.title }}</v-text-field
          >
        </div>
        <div>
          <v-text-field
            v-model="post.description"
            type="text"
            label="Descriptioin"
            :rules="descriptionRules"
            hide-details="auto"
            >{{ post.description }}</v-text-field
          >
        </div>
      </v-card-text>
      <v-card-actions>
        <div>
          <v-btn type="submit" class="ml-2" large color="primary">Confirm</v-btn>
          <v-btn class="ml-2" @click="backToCreate" large color="secondary">Cancel</v-btn>
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script src="../../services/pages/post/confirm-post.js"></script>
