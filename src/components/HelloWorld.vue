<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">

  <v-container bg fill-height grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-flex>
        <v-row justify="center" align-content="center">
          <v-card elevation="0" class="pa-10" width="35em">

            <h1 class="align-center display-2 font-weight-bold teal--text text--lighten-1">
              Bootware
            </h1>

            <v-card-text class="mt-2">
              Bootware は、WEB サービスを始めとする、あらゆる IT システムの開発事業を行なっております。
              <br/><br/>
              <b>高い技術力</b>で<b>洗練</b>されたシステムを開発します。
            </v-card-text>

            <v-card-text>
              <b class="teal--text text--lighten-2">contact</b>
              <br/>
              <div class="ml-2">info@bootware.org</div>
            </v-card-text>

          </v-card>
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


