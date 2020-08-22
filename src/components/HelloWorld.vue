<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">

  <v-container>
    <v-row class="text-center">

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Bootware's Portfolio
        </h1>

        <p class="subheading font-weight-regular">
          This page is a portfolio of bootware.
        </p>
      </v-col>

      <v-col
              class="mb-5"
              cols="12"
      >
        <h2 id="profile" class="headline font-weight-bold mb-3">
          Profile
        </h2>

        <v-row justify="center">
          <ul class="text-left">
            <li>Name: Kakeru</li>
            <li>Age: Late 20s</li>
            <li>Job: Architect Developer</li>
            <li>Location: Tokyo Minato-Ku</li>
            <li>Primary Skill: Java, Spring</li>
          </ul>
        </v-row>
      </v-col>

      <v-col
              class="mb-5"
              cols="12"
      >
        <h2 id="works" class="headline font-weight-bold mb-3">
          Works
        </h2>

        <v-row justify="center">
          <v-card tile class="pa-6 ma-2">
            <v-toolbar-title class="mb-3">DEVELOPING</v-toolbar-title>
            <ul class="text-left">
              <li>Web Application</li>
              <li>Desktop Application</li>
            </ul>
          </v-card>
          <v-card tile class="pa-6 ma-2">
            <v-toolbar-title class="mb-3">IT SUPPORT</v-toolbar-title>
            <ul class="text-left">
              <li>Programming Lesson</li>
              <li>Technical Support</li>
            </ul>
          </v-card>
        </v-row>
      </v-col>

      <v-col
              class="mb-5"
              cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Results
        </h2>

        <v-row justify="center">
          <v-list width="50%">

            <v-list-group>
              <template v-slot:activator>
                <v-list-item-title class="text-left">2020</v-list-item-title>
              </template>

              <v-list-item>
                <v-card elevation="0" class="py-3 text-left">
                  <v-toolbar-title>Horse Race Predictor - AI 競馬予測アプリケーション</v-toolbar-title>
                  <div class="text-right">for Desktop Application</div>
                  <v-card elevation="0" class="py-3 text-sm-caption">
                    <ul>
                      <li>Language: Java, Python</li>
                      <li>Framework: Spring Boot, Django</li>
                    </ul>
                  </v-card>
                </v-card>
              </v-list-item>
            </v-list-group>

            <v-list-group>
              <template v-slot:activator>
                <v-list-item-title class="text-left">2019</v-list-item-title>
              </template>

              <v-list-item>
                <v-card elevation="0" class="px-5 text-left">
                  <v-list-item-title class="font-weight-regular">Horse Race Predictor - AI 競馬予測アプリ</v-list-item-title>
                  技術スタック
                </v-card>
              </v-list-item>
            </v-list-group>

          </v-list>
        </v-row>
      </v-col>

      <v-col
              class="mb-5"
              cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Contact
        </h2>

        <v-row justify="center">
          info@bootware.org
        </v-row>
      </v-col>
    </v-row>
  </v-container>

</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'HelloWorld',

    data: () => ({
      admins: [

      ],
      cruds: [

      ],
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  })
</script>
