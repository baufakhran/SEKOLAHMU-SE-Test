<template>
  <v-hover v-slot:default="{ hover }" close-delay="200">
    <v-card class="mx-auto my-4" max-width="400" :elevation="hover ? 16 : 2">
      <v-img height="250" :src="product.avatar"></v-img>

      <v-card-title>{{product.name}}</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
          <div class="grey--text ml-4 mr-10">4.5 (413)</div>
          <div class="my-2 subtitle-1 ml-10 pl-8 my-price">$ • free</div>
        </v-row>

        <div class="my-desc">{{product.abstract}}</div>
      </v-card-text>
      <v-divider class="mx-1"></v-divider>
      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text>Mulai belajar</v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    product: Object
  },
  name: 'card'
}
</script>
<style>
.my-desc {
  height: 90px;
}
.my-price {
  color: steelblue;
}
</style>
