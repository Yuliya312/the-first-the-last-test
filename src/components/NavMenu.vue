<template>
  <div class="navigation">
    <slot name="nav-toggle"></slot>
    <button class="close" @click="closeNav">X</button>
    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item" v-for="link in links" :key="link.id">
          <router-link class="navigation__link">
            {{ link.title }}
          </router-link>
        </li>
      </ul>
    </nav>
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
    display: flex;
    align-items: center;
    justify-content: center;
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
      transition: background-position 0.4s, color 0.4s, transform 0.4s;
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
