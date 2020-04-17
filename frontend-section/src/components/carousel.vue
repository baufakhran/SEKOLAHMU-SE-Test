<template>
  <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://www.sekolah.mu/wp-content/uploads/2020/03/cover-wwf_Artboard-7-1024x683.png ',
        },
        {
          src: 'https://www.sekolah.mu/wp-content/uploads/2020/03/kelas-9-smp.jpeg',
        },
        {
          src: 'https://www.sekolah.mu/wp-content/uploads/2020/03/Web-Cover-Corona-38-540x360.jpg',
        },
        {
          src: 'https://d33sow78tsfzyk.cloudfront.net/upload/02bb009d803742a6b2a01dc2fde28848.jpg',
        },
      ],
    }
  },
}
</script>

<style>
</style>
