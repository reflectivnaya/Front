<template>
  <v-app-bar elevation="7">
    <header class="header">
      <div class="container">
        <nav class="header__nav">
          <router-link to="/"> 
            <img class="header__logo" src="/iicon.png" alt="Logo">
          </router-link>
          <ul class="header__list">
            <li class="header__item">
              <router-link to="/contacts" class="header__link">
                Контакты
              </router-link>
            </li>
            <li class="header__item">
              <router-link to="/info" class="header__link">
                О нас
              </router-link>
            </li>
            <li class="header__item">
              <router-link to="/login" class="header__link">
                Kisa1337
              </router-link>
            </li>
            <li class="header__item">
              <router-link to="/registration" class="header__link">
                Выйти
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.header {
  caret-color: transparent;
  min-width: 100%;

  &__nav {
    display: flex;
    justify-content: space-between;
    min-width: 100%;
  }

  &__list {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    min-width: 500px;
  }
  
  &__logo {
    height: 50px;
  }

  &__item {
    text-align: center;
    margin-right: 4rem;
    
    &:last-of-type {
      margin-right: 0;
    }
  }

  &__link {
    text-decoration: none;
    color: black;
    font-size: 20px;
    transition: 300ms;
   
    
  }

  &__link:hover {
    color: grey;
    transition: 300ms;
  }
}
</style>
