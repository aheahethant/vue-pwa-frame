<template>
  <v-card class="mx-auto" max-width="800">
    <v-card-title>
      <span class="title font-weight-light">Change Password</span>
    </v-card-title>

    <v-form ref="form" v-model="valid" @submit.prevent="changePassword">
      <v-card-text>
        <v-alert
          border="bottom"
          color="red"
          v-model="current_error"
          dismissible
          type="info"
          v-if="this.current_error"
          >{{ current_error }}</v-alert
        ><v-alert
          border="bottom"
          color="red"
          v-model="new_error"
          dismissible
          type="info"
          v-if="this.new_error"
          >{{ new_error }}</v-alert
        ><v-alert
          border="bottom"
          color="red"
          v-model="confirm_error"
          dismissible
          type="info"
          v-if="this.confirm_error"
          >{{ confirm_error }}</v-alert
        >
        <div>{{ error }}</div>
        <div>
          <v-text-field
            v-model="current_password"
            type="password"
            label="Current Password"
            :rules="current_passwordRules"
            hide-details="auto"
          ></v-text-field>
          <v-text-field
            v-model="new_password"
            type="password"
            label="New Password"
            :rules="new_passwordRules"
            hide-details="auto"
          ></v-text-field>
          <v-text-field
            v-model="confirm_new_password"
            type="password"
            label="New Confirm Password"
            :rules="new_confirm_passwordRules"
            hide-details="auto"
          ></v-text-field>
        </div>
      </v-card-text>
      <v-card-actions>
        <div>
          <v-spacer></v-spacer>
          <v-btn type="submit" class="ml-2" large color="primary">Update Password</v-btn>
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script src="../../services/pages/user/change-password.js"></script>
