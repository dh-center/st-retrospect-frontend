<template>
  <div class="home">
    <div class="home__top">
      <SiteLogo/>
      <a href="#" class="about-link">О проекте</a>
    </div>
    <main class="home__main">
      <h1 class="title">
        Познай Санкт-Петербург глазами великих людей
      </h1>
      <div class="home-search">
        <input type="text" class="home-search__input" placeholder="Где гулял Пушкин...">
        <a class="home-search__button">
          Хочу знать
          <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0001 0.999996L28.666 7.5L22.0001 14" stroke="black"></path> <line y1="7.5" x2="28.7147" y2="7.5" stroke="black"></line></svg>
        </a>
      </div>
      <a href="#" class="how-to-link">Как пользоваться картой?</a>
      <LanguageSelect/>
    </main>
  </div>
</template>

<script>
import SiteLogo from '@/components/SiteLogo';
import LanguageSelect from '@/components/LanguageSelect';

export default {
  name: 'home',
  components: {
    SiteLogo,
    LanguageSelect
  }
};
</script>

<style>
  .home {
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url("../assets/images/background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    padding: 50px 60px;

    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__main {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0 30px;
      text-align: center;
    }
  }

  .about-link {
    font-size: 16px;
    text-decoration: none;
    color: #ffffff;
  }

  .title {
    font-family: 'Oranienbaum', serif;
    font-size: 64px;
    line-height: 72px;
    width: 100%;
    text-align: center;
    color: #ffffff;
    font-weight: 400;
    margin: 0 0 80px;
  }

  .home-search {
    display: flex;
    margin-bottom: 50px;

    &__input {
      font-size: 18px;
      width: 720px;
      height: 70px;
      padding: 0 30px;
      color: #000000;
      background-color: #ffffff;
      border: none;
    }

    &__button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 210px;
      height: 70px;
      padding: 0;
      font-family: 'Oranienbaum', serif;
      font-size: 20px;
      cursor: pointer;
      text-transform: uppercase;
      background-color: #f6c23d;

      svg {
        margin-left: 20px;
      }
    }
  }

  .how-to-link {
    display: inline-block;
    font-size: 16px;
    text-decoration: none;
    color: #ffffff;
    border-bottom: 1px solid #f6c23d;
    text-shadow: 0 0 4px rgba(0, 0, 0, .5);
    margin-bottom: 40px;
  }
</style>
