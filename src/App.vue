<template>
  <v-app>
  <nav>
    <TheHeader />
    <router-view />
    <TheFooter/>
  </nav>
</v-app>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
export default {
  components:{
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
@use '@/assets/scss/styles.scss'
</style>
