<template>
   <main>
    <div class="important">
     <h1> Вы найдете здесь дом своей мечты </h1>
    </div>
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
<li id="ggg" class="main__object"> <a class="a" href="#loopa">Недвижимость по самым низким ценам </a> </li>
<li class="main__object">  <a class="a" href="#ggg"> Тысячи положительных отзывов </a> </li>
  </ul>

  <!-- <ul class="main__reviews">
<li class="main__review">Простая регистрация и размещение объявлений, удобный личный кабинет, бесплатно</li>
<li class="main__review">Продажа и покупка недвижимости самостоятельно - легко! </li>
<li class="main__review">Удобный интерфейс, много фильтров, бесплатный просмотр всех объявлений</li>
<li class="main__review">Не вижу никаких минусов, всё быстро и удобно</li>
<li class="main__review">Самое большое количество объектов, возможность на месте рассчитать ипотеку</li>
<li class="main__review">Доступно всем, кто хочет купить, продать, сдать или снять жильё. Фото.</li>
  </ul> -->
  
<ul class="main__reviews">
<li class="main__review" v-for="comment in comments" :key="comment.index">
        <div class="commentspair">
          <p class="commentsname">{{comment.name}}</p>
        </div>
        <p class="comments__text">{{comment.message}}</p>
      </li>
</ul>

  <form class="form">
      <label for="name" class="formlabel">Имя</label>
      <input class="forminput" v-model="name" id="name" type="text">
      <label for="comment" class="formlabel">Комментарий</label>
      <textarea class="forminput" v-model="message" id="comment" type="text"></textarea>
      <button type="button" v-on:click="storeComment" class="form__button">Отправить комментарий</button>
      <!-- <button type="button" v-on:click="storeComment" class="form__button">Очистить</button> -->
    </form>

  <div class="photos">
   <div class="imgs"><img class="photo" src="/Home1.jpg" alt=""> <p>Пентхаус, 150м²</p> </div> 
    <div class="imgs"><img id="loopa" class="photo" src="/Home2.jpg" alt=""> <p>Частный дом, 80м²</p> </div>
  <div class="imgs"><img class="photo" src="/Home3.jpg" alt=""> <p>Квартира, 65м²</p>  </div>
  </div>
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
      name: '',
      message: '',
      comments: [{name: "Наталья", message: "Новый комментарий"},],
  }),
  methods: {
    ...mapActions({
      fetchImages: 'fetchImages',
      }),
    storeComment: function() {
      this.comments.push({name: this.name, message: this.message});
      this.name = ''
      this.message = ''
    }
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
  &__reviews{
    list-style-type: none;
  display: flex;
  margin: 300px 0;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  
  }

  &__review{
  width: 189px;
  height: 300px;
  background-color: rgb(216, 229, 255);
  border-radius: 20px;
  color: rgb(0, 0, 0);
  padding: 45px;
  text-align: center;
  font-size: 17px;
  margin: 0 auto;
  transition: 300ms;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  }
}

.a{
  text-decoration: none;
  color: white;
}

main{
  min-height: 100%;
  max-width: 1280px;
  margin: auto;
  caret-color: transparent;
}
.important{
    margin-top: 80px;
    text-align: center;
    font-size: 21px;
  }
.photos{
  display: flex;
  justify-content: center;

}
  .photo{
    width: 400px;
    height: 300px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
    margin-top: 130px;
    flex-wrap: wrap;
  }

  .imgs{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-bottom: 100px;
  }

  .form{
    display: flex;
  }

  .formlable{
  
  }

  .forminput{
    border: 1px  solid black;
  }
</style>
