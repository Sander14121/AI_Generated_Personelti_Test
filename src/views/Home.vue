<template>
  <v-app>

    <v-main>
      <v-container fluid class="container">
        <v-row class="mt-16 mb-16 container-hero">
          <v-col>
            <h1 class="hero-tittle">Get Personalized </h1>
            <p class="hero-text">Discover your unique personality by answering thought-provoking questions. We'll generate a 600-word description of your personality based on your answers.</p>
            <v-btn color="primary" to="/AboutUs" large>Learn more about us</v-btn>
          </v-col>
          <v-col class="hero-image">
            <v-img  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></v-img>
          </v-col>
        </v-row>

        <v-row align="center" justify="center" class="call-to-action" no-gutters>
          <v-col cols="12" md="8" lg="6" class="text-center">
            <h2 class="headline display-1">Ready to explore?</h2>
            <p class="subtitle-1 mb-6">Take our free personality test and gain insights into your strengths and weaknesses.</p>
            <v-btn color="primary" to="/Personeleti-test" large>Take the Test</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
export default {
  methods: {
    startTest() {
      // TODO: Add logic to start the test
      console.log('Starting test')
    }
  }
}
</script>

<style scoped>
.hero {
  height: calc(100vh - 64px);
  background-image: url("https://images.unsplash.com/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1920&q=80");
  background-size: cover;
  background-position: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.call-to-action {
  height: 300px;
  background-color: #f2f2f2;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.headline {
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 2.4rem;
  /* text-align: center; */
}

.hero-text {
  font-size: 1.2rem;
  /* text-align: center; */
}

.hero-image {
  width: 50% !important;
}

.container-hero{
  width: 90%;
  margin: 0 auto;
  
}

@media screen and (max-width: 600px) {
  .hero {
    height: calc(100vh - 56px);
  }
  .hero-text {
    font-size: 1rem;
  }
  .container-hero {
    width: 100%;
    margin-top: 1rem;
  }
  .hero-image {
    display: none;
  }


.container-hero{
  width: 90%;
  margin: 0 auto;
  grid-column: 1fr !important;
  
}

  
}
</style>


