<template>
    <div>
      <v-container>
        <h1>Contact Us</h1>
        <form>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field label="Name" required></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Email" required></v-text-field>
            </v-col>
          </v-row>
          <v-textarea label="Message" required></v-textarea>
          <v-btn color="primary" type="submit">Send</v-btn>
        </form>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactUs",
  };
  </script>
  