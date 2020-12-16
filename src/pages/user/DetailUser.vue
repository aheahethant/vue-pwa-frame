<template>
  <v-card class="mx-auto" max-width="800">
    <v-card-title>
      <span class="title font-weight-light">User Detail</span>
    </v-card-title>
    <v-card-text>
      <v-container class="grey lighten-5">
        <v-row>
          <div class="float-left col-sm-4">
            <v-col>
              <img :src="img_url + profile" alt="image" width="100%" max-height="150px" />
            </v-col>
          </div>
          <div class="float-right col-sm-8">
            <v-row>
              <v-col> Name </v-col>
              <v-col class="red--text">{{ name }}</v-col>
            </v-row>
            <v-row>
              <v-col> Type </v-col>
              <v-col class="red--text">{{ type }}</v-col>
            </v-row>
            <v-row>
              <v-col> Email </v-col>
              <v-col class="red--text">{{ email }}</v-col>
            </v-row>
            <v-row>
              <v-col> Phone </v-col>
              <v-col class="red--text">{{ phone }}</v-col>
            </v-row>
            <v-row>
              <v-col> Date of Birth </v-col>
              <v-col class="red--text">{{ dob }}</v-col>
            </v-row>
            <v-row>
              <v-col> Address </v-col>
              <v-col class="red--text">{{ address }}</v-col>
            </v-row>
            <v-row>
              <v-col> Created Date </v-col>
              <v-col class="red--text">{{ created_date | moment }}</v-col>
            </v-row>
            <v-row>
              <v-col> Created User </v-col>
              <v-col class="red--text">{{ created_user }}</v-col>
            </v-row>
            <v-row>
              <v-col> Updated Date </v-col>
              <v-col class="red--text">{{ updated_date | moment }}</v-col>
            </v-row>
            <v-row>
              <v-col> Updated User </v-col>
              <v-col class="red--text">{{ updated_user }}</v-col>
            </v-row>
          </div>
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

<script src="../../services/pages/user/detail-user.js"></script>
