<template>
  <v-card class="mx-auto" max-width="800">
    <v-card-title>
      <span class="title font-weight-light">Profile</span>
    </v-card-title>
    <v-card-text>
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <div class="float-left col-sm-4">
            <v-col cols="12">
              <img :src="img_url + userProfile" width="100%" height="50%" />
            </v-col>
          </div>
          <div class="float-right col-sm-8">
            <div class="row">
              <div class="col-sm-5 float-left">Name</div>
              <div class="col-sm-7 red--text float-right">{{ userName }}</div>
            </div>
            <div class="row">
              <div class="col-sm-5 float-left">Type</div>
              <div class="col-sm-7 red--text float-right">{{ userType }}</div>
            </div>
            <div class="row">
              <div class="col-sm-5 float-left">Email</div>
              <div class="col-sm-7 red--text float-right">{{ userEmail }}</div>
            </div>
            <div class="row">
              <div class="col-sm-5 float-left">Phone</div>
              <div class="col-sm-7 red--text float-right">{{ userPhone }}</div>
            </div>
            <div class="row">
              <div class="col-sm-5 float-left">Date of Birth</div>
              <div class="col-sm-7 red--text float-right">{{ userDOB }}</div>
            </div>
            <div class="row">
              <div class="col-sm-5 float-left">Address</div>
              <div class="col-sm-7 red--text float-right">{{ userAddress }}</div>
            </div>
            <div class="row">
              <div class="col-sm-5 float-left">Created Date</div>
              <div class="col-sm-7 red--text float-right">{{ userCreateDate }}</div>
            </div>
            <div class="row">
              <div class="col-sm-5 float-left">Created User</div>
              <div class="col-sm-7 red--text float-right">{{ userCreateUser }}</div>
            </div>
            <div class="row">
              <div class="col-sm-5 float-left">Updated Date</div>
              <div class="col-sm-7 red--text float-right">{{ userUpdatedDate }}</div>
            </div>
            <div class="row">
              <div class="col-sm-5 float-left">Updated User</div>
              <div class="col-sm-7 red--text float-right">{{ userUpdatedUser }}</div>
            </div>
          </div>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions class="float-right">
      <div>
        <v-spacer></v-spacer>
        <v-btn large color="primary" @click="editProfile(user)">Edit Profile</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script src="../../services/pages/user/profile.js"></script>
