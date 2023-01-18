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
  <div>
    <LayoutNavbar />
    <article>
      <div class="px-7 py-10 mx-auto max-w-[85vh]">
        <slot />
      </div>
    </article>
  </div>
</template>
