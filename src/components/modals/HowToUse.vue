<template>
  <div class="how-to-use-popup">
    <h2 class="how-to-use-popup__title">
      Как пользоваться картой
    </h2>
    <p class="how-to-use-popup__text">
      Взаимодействие с картой проиходит несколькими способами:
    </p>
    <ul class="how-to-use-popup__list">
      <li>
        <p>
          вы можете ввести запрос в поле поиска (например; жил Н. В. Гоголь).
          Поиск может осуществляться:
          а) по личности (например, А. С. Пушкин, Ф. М. Достоевский и др.);
          б) по локации (например, театры, дворцы, музеи и др.);
          в) по взаимодействию личности и локации (например, где учился А. С. Пушкин);
        </p>
        <img
          src="../../assets/images/how-to-use/image1.jpg"
        >
      </li>
      <li>
        <p>
          вы можете воспользоваться шкалой времени, которая позволяет наблюдать за: а) изменениями карты в различные
          временные отрезки;
          б) за деятельностью великих людей в годы их жизни;
        </p>
        <img
          src="../../assets/images/how-to-use/image2.jpg"
        >
      </li>
      <li>
        <p>
          на главной странице сайта предусмотрен быстрый переход в карточки
          А. С. Пушкина, Н. В. Гоголя и М. Ю. Лермонтова. Для перехода в карточку кликните по портрету личности;
        </p>
        <img
          src="../../assets/images/how-to-use/image3.jpg"
        >
      </li>
      <li>
        <p>
          для более точной поисковый выдачи воспользуйтесь фильтрами, которые располагаются справа от логотипа карты.
          Они дают возможность уточнения запроса по виду деятельность и виду локации.
        </p>
        <img
          src="../../assets/images/how-to-use/image4.jpg"
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component
/**
 * Popup with explaining of how to use this applications
 */
export default class HowToUsePopup extends Vue {
}
</script>
