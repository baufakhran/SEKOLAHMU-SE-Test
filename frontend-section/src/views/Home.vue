<template>
  <div class="home">
    <carousel />
    <v-container>
      <div>
        <h1>Program Unggulan</h1>
      </div>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="4" v-for="product in products" :key="product.id">
          <card :product="product"></card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import carousel from '../components/carousel'
import card from '../components/card'
export default {
  name: 'Home',
  components: {
    carousel,
    card
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  }
}
</script>

<style>
div h1 {
  color: #162d5c;
  margin: 0;
  padding: 0;
  text-align: center;
}
div {
  margin: 0;
  padding: 0;
}
</style>
