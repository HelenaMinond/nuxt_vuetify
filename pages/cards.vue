<template>
  <v-container>
    <v-row v-if="personajes">
      <!-- Comienzo card -->
      <v-col cols="12" sm="4" md="3" v-for="(val, i) in personajes" :key="i">
        <v-card class="mx-auto ma-4" max-width="250">
          <v-img :src="val.image" height="200px"></v-img>

          <v-card-title>
            {{ val.name }}
          </v-card-title>
        </v-card>
      </v-col>
      <!-- Término card -->
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["personajes"])
  },
  methods: {
    ...mapMutations(["showData"]),
    ...mapActions(["getData"])
  },
  created() {
    this.getData()
  }
};
</script>

<style></style>
