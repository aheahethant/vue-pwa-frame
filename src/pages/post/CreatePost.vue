<template>
    <v-card class="mx-auto" max-width="800">
        <v-card-title>
            <span class="title font-weight-light">Create Post</span>
        </v-card-title>
        <v-form ref="form" v-model="valid" @submit.prevent="createPost">
            <v-card-text>
                <div>{{error}}</div>
                <div>
                    <v-text-field v-model="post.title" type="text" label="Title" :rules="titleRules" hide-details="auto"></v-text-field>
                </div>
                <div>
                    <v-text-field v-model="post.description" type="text" label="Descriptioin" :rules="descriptionRules" hide-details="auto"></v-text-field>
                </div>
            </v-card-text>
            <v-card-actions>
                <div>
                    <v-spacer></v-spacer>
                    <v-btn large color="primary" v-on:click = "createPost">Create</v-btn>
                    <v-btn type="reset" class="ml-2" large color="secondary">Clear</v-btn>
                </div>
            </v-card-actions>
        </v-form>
    </v-card>
</template>

<script src="../../services/pages/post/create-post.js"></script>
