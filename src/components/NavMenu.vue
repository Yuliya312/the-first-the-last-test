<template>
  <div class="navigation">
    <slot name="nav-toggle"></slot>
    <button class="close" @click="closeNav">X</button>
    <!-- <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item" v-for="link in links" :key="link.number">
          <router-link
            :to="{ name: 'home', hash: link.hash }"
            class="navigation__link"
          >
            <span>{{ link.number }}</span>
            {{ link.title }}
          </router-link>
        </li>
      </ul>
    </nav> -->
  </div>
</template>

<script>
export default {
  name: "nav-menu",
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
    ]
  }),
  methods: {
    closeNav() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.navigation {
  height: 90vh;

  &__list {
    /* @include absCenter; */
    text-align: center;
    width: 100%;
  }

  &__item {
    margin: 1rem;
  }

  &__link {
    &:link,
    &:visited {
      display: inline-block;
      font-size: 3rem;
      font-weight: 300;
      padding: 1rem 2rem;
      color: $color-white;
      text-decoration: none;
      text-transform: uppercase;
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        $color-white 50%
      );
      background-size: 220%;
      transition: background-position 0.4s, color 0.4s, transform 0.4s;

      span {
        margin-right: 1.5rem;
        display: inline-block;
      }
    }

    &:hover,
    &:active {
      background-position: 100%;
      color: $color-primary;
      transform: translateX(1rem);
    }
  }
}

.close {
  background-color: $color-white;
  border: 1px solid $color-white;
  outline: none;
  height: 7rem;
  width: 7rem;
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  z-index: 5;
  box-shadow: 0 1rem 3rem rgba($color-black, 0.1);
  text-align: center;
  font-size: 3rem;
  cursor: pointer;
}
</style>
