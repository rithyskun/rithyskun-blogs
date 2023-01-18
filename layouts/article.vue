<script setup lang="ts">
const { page } = useContent();
const route = useRoute();
const parentPath = computed(() => {
  const pathTabl = route.path.split("/");
  pathTabl.pop();
  return pathTabl.join("/");
});
</script>

<template>
  <LayoutNavbar />
  <!-- <MainSidebar /> -->
  <article>
    <div class="px-10 w-full container">
      <slot />
    </div>
  </article>
</template>
