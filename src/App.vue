<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="logo">
      Recipes
    </div>
    <div class="wrapper">
      <nav>
        <RouterLink class="wrapper__link" to="/allrecipes"><a class="wrapper__link">All recipes</a></RouterLink
        >
        <RouterLink class="wrapper__link" to="/favourite">Favourite</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 158px;
  background-color: rgba(255, 160, 50, 1);
}

.logo {
  background-color: rgba(255, 79, 4, 1);
  border-radius: 25px;
  padding: 15px 60px;
  font-size: 48px;
  font-weight: 400;
  line-height: 58px;
  margin-left: 30px;
}
.wrapper {
  margin-right: 55px;
  display: flex;

}

.wrapper__link {
  background-color: rgba(255, 79, 4, 1);
  text-decoration: none;
  padding: 15px 32px;
  border-radius: 25px;
}
</style>
