<template>
   <main>
  <div id="app">
    <v-carousel v-model="model" hide-delimiter-background cycle="true" interval="4000" height="610">
      <v-carousel-item
          v-for="img in allImages"
          :key="img.src"
      >
      <img class="main__scroll" :src="img.src" alt="">
<!--        <v-sheet
            :color="color"
            height="100%"
            tile
        >
          <v-row
              class="fill-height"
              align="center"
              justify="center"
          >
            <div class="text-h2">
              Slide {{ i + 1 }}
            </div>
          </v-row>
        </v-sheet>-->
        <img src="" alt="">
      </v-carousel-item>
    </v-carousel>
    <ul class="main__elements">
<li class="main__object">Самый надежный агрегатор</li>
<li class="main__object">Недвижимость по самым низким ценам</li>
<li class="main__object">Тысячи положительных отзывов</li>
  </ul>
</div>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
import images from '@/../public/api/main.json';

export default {
    data: () => ({
      model: undefined,
      allImages: images,
  }),
  methods: {
    ...mapActions({
      fetchImages: 'fetchImages',
    }),
  },
}
</script>

<style lang="scss" scoped>

.main{
&__scroll{
  height:500px;
  display: flex;
  justify-content: center;
  margin: 64px auto;
}

#inspire{
height: 500px;
}

&__elements{
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  gap: 20px;
  
}
&__object{
  display: block;
  width: 33.3333%;
  background-color: rgb(44, 75, 139);
  border-radius: 20px;
  color: white;
  padding: 45px;
  text-align: center;
  font-size: 25px;
  margin: 0 auto;
  transition: 300ms;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  }

  &__object:hover{
    background-color: rgb(141, 141, 182);
    transition: 300ms;
    box-shadow: 0 0 10px;
    box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.5)
  }
}

main{
  min-height: 100%;
  max-width: 1280px;
  margin: auto;
  caret-color: transparent;
}
</style>