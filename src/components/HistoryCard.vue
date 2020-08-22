<template>
<!--  <v-card elevation="0" class="py-3 text-left">-->
<!--    <v-toolbar-title>Horse Race Predictor - AI 競馬予測アプリケーション</v-toolbar-title>-->
<!--    <div class="text-right">for Desktop Application</div>-->
<!--    <v-card elevation="0" class="py-3 text-sm-caption">-->
<!--      <ul>-->
<!--        <li>Language: Java, Python</li>-->
<!--        <li>Framework: Spring Boot, Django</li>-->
<!--      </ul>-->
<!--    </v-card>-->
<!--  </v-card>-->

  <v-card elevation="0" class="py-3 text-left">
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <div class="text-right">{{subTitle}}</div>
    <v-card elevation="0" class="py-3 text-sm-caption">
      <ul>
        <li v-for="line in lines" :key="line">
          {{line}}
        </li>
      </ul>
    </v-card>
  </v-card>
</template>

<script lang="ts">

  import {Component, Prop, Vue} from "vue-property-decorator";

  @Component
  export default class HistoryCard extends Vue{

    @Prop() private title!: string;

    @Prop() private subTitle!: string;

    @Prop() private lines!: string[];
  }
</script>