<template>
  <v-container fluid>
    <v-row justify="center" class="mt-16">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title v-if="!finished">{{ question }}</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="answer"
              label="Your answer"
              v-if="!finished"
            ></v-text-field>
            <v-text-field
              v-else
              label="Name"
              v-model="name"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              @click="!finished ? nextQuestion() : submitAnswers()"
            >
              {{ !finished ? 'Next' : 'Submit' }}
            </v-btn>
            <v-btn v-if="finished" color="primary" @click="restartTest()">
              Restart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-card-text v-if="personality">
      <v-card-title class="mb-3">Your Personal Title:</v-card-title>
        <v-card-text>{{ this.personalTitle }}</v-card-text>
      <v-card-title class="mb-3">Your Personality Description:</v-card-title>
      <v-card-text>{{ personality }}</v-card-text>
      <v-card-text class="mt-5">
        
      </v-card-text>
    </v-card-text>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      questions:
      [  "What are your top 3 favorite hobbies?",  "What kind of music do you enjoy listening to?",  "What do you enjoy doing in your free time?"],
      currentQuestionIndex: 0,
      answer: "",
      answers: [],
      finished: false,
      name: "",
      personality: "",
      personalTitle: "",
    };
  },
  computed: {
    question() {
      return this.questions[this.currentQuestionIndex];
    },
  },
  methods: {
    nextQuestion() {
      this.answers.push(this.answer);
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.answer = "";
      } else {
        this.finished = true;
      }
    },
    restartTest() {
      this.answers = [];
      this.currentQuestionIndex = 0;
      this.answer = "";
      this.finished = false;
      this.name = "";
      this.personality = "";
      this.personalTitle = "";
    },
async submitAnswers() {
  const intro = "You are a chatbot that will generate a personalized text describing the user's personality, mindset, values, and interests based on their answers to a set of predetermined questions. The questions will be given to you in the following form:Question: Q1 Do you like pancakes? Answer: A1 Yes, I do. But it's best with a lot of syrup on it.To use the user's answers, you should read each question and answer pair and use the information provided to structure the personal text. For example, if the user answers (yes) to a question about their interest in a particular hobby, you can incorporate that information into the text by describing how that hobby shapes their behavior and personality.The analysis will cover various aspects of the user's personality, including their levels of neuroticism, extraversion, openness to experience, and agreeableness. Additionally, the analysis will cover the user's levels of conscientiousness, morality, and liberal values.The results will be presented in the form of a detailed report, divided into paragraphs that highlight the user's personality traits and tendencies. The report will include insights into the user's strengths, weaknesses, and tendencies in different situations, as well as their interests, hobbies, and values, and how they shape their behavior.To provide an accurate analysis, the chatbot will use natural language processing techniques to ensure that the report is coherent and personalized to the user. The length of the report may vary based on the user's answers, but aim for a length of around 500-700 words.At the end of the analysis, the user will receive a summary of their personality traits and an overall impression of their personality. The summary will be designed to capture the essence of the user's personality and provide them with a unique and meaningful personal title based on their personality traits.Overall, the goal of this chatbot is to provide users with valuable insights into their personalities, and help them better understand their strengths, weaknesses, and tendencies, as well as how they can use this knowledge to improve their lives.Regenerate response";
  const prompt = `${intro}\n\nName: ${this.name}\n\n here arte the qustions and ansers${this.answers.map(
    (answer, i) => `Question ${i + 1}: ${this.questions[i]}\n${answer}\n`
  )}\n\nDescribe the personality of the user`;

  const apiEndpoint = "https://api.openai.com/v1/engines/davinci/completions";
  const apiKey = "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";

  const response = await axios.post(apiEndpoint, {
    prompt,
    temperature: 0.5,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  }, {
    headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
    }
  });
  console.log(response.data.choices[0].text);
  this.personality = response.data.choices[0].text;

  const titlePrompt = `Based on the personality, u have to make an tittle describing the person, try to make it nice. the personality ${this.personality}`;

  const titleResponse = await axios.post(apiEndpoint, {
  prompt: titlePrompt,
  temperature: 0.5,
  max_tokens: 50,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0
}, {
  headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
  }
});

this.personalTitle = titleResponse.data.choices[0].text.trim();
  console.log(this.personalTitle)
},}}

</script>