<script setup>
import Navbar from "./components/NavBar.vue";
import MainContent from "./components/MainContent.vue";
</script>

<template>
  <div
    class="flex flex-col bg-slate-100 min-h-screen w-full pt-10 px-10 2xl:px-40"
  >
    <Navbar />
    <MainContent />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
