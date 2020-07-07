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
        <nav class="navigation">
          <ul class="navigation__list">
            <li class="navigation__item" v-for="link in links" :key="link.id">
              <a href="#" class="navigation__link">{{ link.title }}</a>
            </li>
          </ul>
        </nav>
      </div>
      <p class="header__bg-title header__bg-title--left">{{ title }}</p>
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
        <p class="header__heading">{{ title }}</p>
        <p class="header__bg-title header__bg-title--right">{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeLayout",
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
    }
  }),
  computed: {

  },
  methods: {
    move($event) {
      console.log($event);
    },
    mousemove(e) {
      // let mouseX = e.clientX;
      // let mouseY = e.clientY;
      let galery = [document.querySelector(".header__galery") ];
      // let content = window.getComputedStyle(document.querySelector('.header__galery'),':after');
      console.dir(galery, e);
      // console.log(content);
      for (let i = 0; i < galery.length; i++) {
        // let product = products[i];
        // let product_image = product.querySelector('.product-image-wrap');
        // let img_x = mouseX - this.coords(product_image).x;
        // let img_y = mouseY - this.coords(product_image).y;
        // product_image.style.transform = `translateY(-${img_y/40}px) translateX(-${img_x/40}px) translateZ(100px)`;
        // let bgtext = product.querySelector('.bg-text');
        // let bg_x = mouseX - this.coords(bgtext).x;
        // bgtext.style.transform = `translateX(${bg_x/25}px)`;
      }
    },
    coords (el) {
      let coords = el.getBoundingClientRect();
      return {
        x: coords.left / 2,
        y: coords.top / 2
      }
    },
    mouseIsMoving(e) {
      this.tooltipStyle.left = e.pageX;
      this.tooltipStyle.top = e.pageY;
      return;
    }
  },
  mounted() {
    window.addEventListener("mousemove", this.mouseIsMoving);
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
    display: flex;
    justify-content: space-between;
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

  &__heading {
    position: absolute;
    top: 50%;
    left: -50%;
    transform: translate(-5%, -50%);
    width: 1000px;
    text-align: center;
    text-transform: uppercase;
    mix-blend-mode: darken;

    font-family: "Schnyder Cond XL Demi";
    font-size: 125.581px;
    line-height: 86%;
    color: $color-primary;
    z-index: 3;

    @include respond(tab-land) {
      font-size: 96px;
      /* font-weight: 600; */
    }
  }

  &__bg-title {
    position: absolute;
    font-family: Schnyder Cond XL Demi;
    font-weight: 600;
    font-size: 125.581px;
    line-height: 86%;
    text-transform: uppercase;
    color: $color-white;
    mix-blend-mode: darken;
    /* -webkit-text-stroke: 0.84px #580300; */
    text-shadow: -0 -1px 0 $color-primary, 0 -1px 0 $color-primary,
      -0 1px 0 $color-primary, 0 1px 0 $color-primary, -1px -0 0 $color-primary,
      1px -0 0 $color-primary, -1px 0 0 $color-primary, 1px 0 0 $color-primary,
      -1px -1px 0 $color-primary, 1px -1px 0 $color-primary,
      -1px 1px 0 $color-primary, 1px 1px 0 $color-primary,
      -1px -1px 0 $color-primary, 1px -1px 0 $color-primary,
      -1px 1px 0 $color-primary, 1px 1px 0 $color-primary;

    box-sizing: border-box;
    transform: rotate(-1.5deg) translate(-5%, -50%);

    @include respond(tab-land) {
      font-size: 96px;
      /* font-weight: 600; */
    }

    &--left {
      top: 50%;
      left: -720px;

      @include respond(tab-land) {
        left: -50%;
      }

      @include respond(tab-port) {
        left: -80%;
      }
    }

    &--right {
      top: 50%;
      right: -1137px;

      @include respond(tab-land) {
        right: -898px;
      }

      @include respond(tab-port) {
        right: -700px;
      }
    }
  }
}

.navigation {
  &__list {
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