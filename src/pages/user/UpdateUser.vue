<template>
  <v-card class="mx-auto" max-width="800">
    <v-card-title>
      <span class="title font-weight-light">Update User</span>
    </v-card-title>
    <v-form ref="form" v-model="valid" @submit.prevent="updateUser">
      <v-card-text>
        <div>{{ error }}</div>
        <div>
          <v-text-field
            v-model="user.name"
            type="text"
            label="Name"
            :rules="nameRules"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div>
          <v-text-field
            v-model="user.email"
            type="email"
            label="Email"
            :rules="emailRules"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div>
          <v-select
            v-model="user.type"
            :items="['Admin', 'User']"
            label="Type"
            :rules="typeRules"
          ></v-select>
        </div>
        <div>
          <v-text-field
            v-model="user.phone"
            type="text"
            label="Phone"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div>
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="user.dob"
                label="Date of Birth"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="user.dob" @input="menu = false"></v-date-picker>
          </v-menu>
        </div>
        <div>
          <v-text-field
            v-model="user.address"
            type="text"
            label="Address"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="mt-5 mb-5">
          <img :src="img_url + user.profile" alt="image" width="35%" max-height="150px" />
        </div>
        <div>
          <input
            type="file"
            @change="preview_image"
            style="display: none"
            ref="fileInput"
          />
          <v-btn @click="$refs.fileInput.click()" color="indigo">New Profile</v-btn>
        </div>
        <div class="mt-5 mb-5">
          <img :src="new_profile" alt="image" width="35%" max-height="150px" />
        </div>
      </v-card-text>
      <v-card-actions>
        <div>
          <v-spacer></v-spacer>
          <v-btn type="submit" large color="primary">Edit</v-btn>
          <v-btn type="reset" class="ml-2" large color="secondary">Clear</v-btn>
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script src="../../services/pages/user/update-user.js"></script>
