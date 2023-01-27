<script setup lang="ts">
    const { data: blog } = await useFetch('/api/blog/blog')
</script>

<template>
    <div v-for="item in blog">
        <h1>
            {{ item.title }}
        </h1>
    </div>
</template>

