<template>
  <div class="language-select">
    <a href="#" class="language-select__link language-select__link--active">RU</a>
    <a href="#" class="language-select__link">EN</a>
  </div>
</template>

<script>
export default {
  name: 'LanguageSelect'
};
</script>

<style>
  .language-select {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    color: #ffffff;
    text-shadow: 0 0 4px rgba(0, 0, 0, .5);

    &__link {
      text-decoration: none;
      margin-right: 10px;

      &--active {
        color: #f6c23d;
      }
    }
  }
</style>
