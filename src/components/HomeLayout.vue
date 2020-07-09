<template>
  <div class="content" @mousemove="mousemove">
    <div class="header">
      <div class="header__top">
        <div class="header__logo-box">
          <img
            src="../assets/images/First.svg"
            alt="Logo"
            class="header__logo"
          />
        </div>
        <div class="header__nav-icon">
          <router-link to="/nav"></router-link>
        </div>
        <nav class="navigation">
          <ul class="navigation__list">
            <li class="navigation__item" v-for="link in links" :key="link.id">
              <a href="#" class="navigation__link">{{ link.title }}</a>
            </li>
          </ul>
        </nav>
      </div>
      <!-- <swiper
        ref="mySwiper"
        :options="swiperOption"
        class="header__title-slider"
      >
        <swiper-slide>
          <p class="header__bg-title">{{ title }}</p>
        </swiper-slide>
        <swiper-slide>
          <p class="header__heading">{{ title }}</p>
        </swiper-slide>
        <swiper-slide>
          <p class="header__bg-title">{{ title }}</p>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper> -->
      <div v-swiper="swiperOption" class="header__title-slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <p class="header__bg-title">{{ title }}</p>
          </div>
          <div class="swiper-slide">
            <p class="header__heading">{{ title }}</p>
          </div>
          <div class="swiper-slide">
            <p class="header__bg-title">{{ title }}</p>
          </div>
        </div>
      </div>
      <div
        class="header__drag"
        id="drag"
        v-if="tooltipActive"
        :style="{
          left: tooltipStyle.left + 18 + 'px',
          top: tooltipStyle.top - 10 + 'px'
        }"
      >
        Drag me
      </div>
      <div
        class="header__galery"
        @mousemove="mouseIsMoving"
        v-on:mouseover="tooltipActive = !tooltipActive"
      >
        <img
          src="../assets/images/image1.png"
          alt="a girl in sport close"
          class="header__img"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import { directive } from "vue-awesome-swiper";

export default {
  name: "HomeLayout",
  // components: {
  //   Swiper,
  //   SwiperSlide
  // },
  data: () => ({
    links: [
      {
        id: 1,
        title: "Commercial"
      },
      {
        id: 2,
        title: "Editorial"
      },
      {
        id: 3,
        title: "Reportage"
      },
      {
        id: 4,
        title: "Meet me"
      }
    ],
    title: "Ink Lingerie",
    tooltipActive: false,
    tooltipStyle: {
      top: 0,
      left: 0
    },
    swiperOption: {
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true
    }
  }),
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  directives: {
    swiper: directive
  },
  methods: {
    move($event) {
      console.log($event);
    },
    mousemove(e) {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let galery = document.querySelector(".header__galery");
      let img = galery.querySelector(".header__img");
      let img_x = mouseX - this.coords(galery).x;
      let img_y = mouseY - this.coords(galery).y;
      console.log(img_x, img_y);
      img.style.transform = `translateY(-${img_y / 100}px) translateX(-${img_x /
        40}px) translateZ(100px)`;
    },
    coords(el) {
      let coords = el.getBoundingClientRect();
      console.log(coords);
      return {
        x: coords.left / 2,
        y: coords.top / 2
      };
    },
    mouseIsMoving(e) {
      this.tooltipStyle.left = e.pageX;
      this.tooltipStyle.top = e.pageY;
      return;
    }
  },
  mounted() {
    window.addEventListener("mousemove", this.mouseIsMoving);
    this.swiper.slideTo(1, 1000, false);
  },
  destroyed() {
    window.removeEventListener("mousemove", this.mouseIsMoving);
  }
};
</script>

<style lang="scss">
.content {
  max-width: 1440px;
  min-height: calc(100vh - 40px);
  margin: 0 auto;
  background-color: $color-white;
  background-image: url("../assets/images/bg.svg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  cursor: url("../assets/images/cursor.png"), pointer;
}

.header {
  min-height: calc(100vh - 40px);

  &__top {
    max-width: 1345px;
    margin: 40px auto 0;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
  }

  &__nav-icon {
    position: relative;
    display: none;
    width: 20px;
    height: 1px;
    background: rgba(40, 40, 40, 0.57);

    &::before {
      content: "";
      display: block;
      width: 20px;
      height: 1px;
      background: rgba(40, 40, 40, 0.57);

      position: absolute;
      top: 5px;
      left: 0;
    }

    @include respond(phone) {
      display: block;
    }
  }

  &__galery {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 702px;
    width: 476px;

    @include respond(tab-land) {
      width: 359px;
      height: 530px;
    }

    @include respond(phone) {
      transform: translate(-50%, -50%) scale(0.76);
    }

    @include respond(small-phone) {
      width: 250px;
      height: 359px;
      transform: translate(-50%, -50%);
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      height: 331px;
      width: 238px;
      top: 128px;
      left: -248px;
      transform: rotate(1.1deg);
      background-image: url("../assets/images/image2.png");
      background-size: 220%;
      background-position: 50% 15%;

      @include respond(tab-land) {
        width: 163px;
        height: 226px;
        top: 108px;
        left: -170px;
      }

      @include respond(phone) {
        display: none;
      }
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 238px;
      width: 345px;
      bottom: 43px;
      right: -267px;
      transform: rotate(2.03deg);
      background-image: url("../assets/images/image3.png");
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;

      @include respond(tab-land) {
        width: 234px;
        height: 162px;
        bottom: 42px;
        right: -200px;
      }

      @include respond(phone) {
        display: none;
      }
    }
  }

  &__drag {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    font-family: TT Travels;
    font-size: 8px;
    line-height: 10px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  &__img {
    height: 100%;
    width: 100%;
    transform: rotate(1.5deg);
    object-fit: cover;
  }

  &__title-slider {
    position: absolute !important;
    top: 50%;
    left: 50%;
    transform: translate(-28%, -50%);
    z-index: 2;
    /* transform: translateY(235%); */
  }

  &__heading {
    width: 950px;
    height: 100%;
    text-align: center;
    text-transform: uppercase;
    mix-blend-mode: darken;
    white-space: nowrap;

    font-family: "Schnyder Cond XL Demi";
    font-size: 125.581px;
    line-height: 86%;
    color: $color-primary;
    z-index: 3;

    @include respond(tab-land) {
      font-size: 96px;
    }
  }

  &__bg-title {
    font-family: "Schnyder Cond XL Demi";
    font-weight: 600;
    font-size: 125.581px;
    line-height: 86%;
    text-transform: uppercase;
    white-space: nowrap;
    color: $color-white;
    mix-blend-mode: darken;
    text-shadow: -0 -1px 0 $color-primary, 0 -1px 0 $color-primary,
      -0 1px 0 $color-primary, 0 1px 0 $color-primary, -1px -0 0 $color-primary,
      1px -0 0 $color-primary, -1px 0 0 $color-primary, 1px 0 0 $color-primary,
      -1px -1px 0 $color-primary, 1px -1px 0 $color-primary,
      -1px 1px 0 $color-primary, 1px 1px 0 $color-primary,
      -1px -1px 0 $color-primary, 1px -1px 0 $color-primary,
      -1px 1px 0 $color-primary, 1px 1px 0 $color-primary;

    box-sizing: border-box;
    transform: rotate(-1.5deg);

    @include respond(tab-land) {
      font-size: 96px;
    }
  }
}

.navigation {
  @include respond(phone) {
    display: none;
  }

  &__link {
    font-family: "TT Travels";
    font-weight: 300;
    font-size: 11px;
    line-height: 13px;
    text-align: right;
    letter-spacing: 0.02em;
    text-transform: capitalize;

    color: $color-black;
  }
}
</style>
