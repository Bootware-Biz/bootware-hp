<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">

  <v-container bg fill-height grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-flex>
        <v-row>
          <v-img max-width="20%" src="../assets/subtitle_about.svg"></v-img>
          <v-container>
            <v-card elevation="0">
              <v-card-text class="mt-2">
                Bootware は、WEB サービスを始めとする、あらゆる IT システムの開発事業を行なっております。
                <br/>
                <b>高い技術力</b>で<b>洗練</b>されたシステムを開発します。
              </v-card-text>

              <div class="text-h4"></div>

              <v-card tile elevation="0" outlined class="mt-5 pa-7">
                test
              </v-card>
              <v-card tile elevation="0" outlined class="mt-5 pa-7">
                test
              </v-card>
              <v-card tile elevation="0" outlined class="mt-5 pa-7">
                test
              </v-card>
<!--                          <v-card-text>-->
<!--                            <b class="teal&#45;&#45;text text&#45;&#45;lighten-2">contact</b>-->
<!--                            <br/>-->
<!--                            <div class="ml-2">info@bootware.org</div>-->
<!--                          </v-card-text>-->
            </v-card>
          </v-container>


        </v-row>

        <v-row>
          <v-img src="../assets/btn_portfolio.svg"></v-img>
        </v-row>

        <v-row>
          <v-img src="../assets/btn_portfolio.svg"></v-img>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script lang="ts">
  import HistoryCard from '@/components/HistoryCard.vue'
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class HelloWorld extends Vue {
    components = {
      HistoryCard
    };
  }
</script>


