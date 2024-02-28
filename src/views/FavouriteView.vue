<template>
  <main class="main">
    <h1>Favourite ({{  }})</h1>
    <select class="selector" name="" id="">
      <option value="">Easy</option>
      <option value="">Medium</option>
      <option value="">Hard</option>
    </select>

    <div class="card">

    </div>
  </main>
</template>

<script setup></script>

<style scoped>

.selector {
  border-radius: 30px;
  width: 162px;
  
  height: 46px;
  background-color: transparent;
  border: 1px solid black;
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
</style>
